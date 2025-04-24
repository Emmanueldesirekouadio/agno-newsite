import { useUser } from "@clerk/nextjs";
import { toPng } from "html-to-image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CardTheme {
  primaryColor: string;
  textColor: string;
  backgroundColor: string;
}

interface CardData {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website?: string;
  theme: CardTheme;
  templateId: string;
}

interface PaymentMethod {
  type: "cinetpay" | "orange_money" | "mobile_money" | "card";
  amount: number;
  currency: string;
}

export const useCardCreation = () => {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cardData, setCardData] = useState<CardData>({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    theme: {
      primaryColor: "#000000",
      textColor: "#ffffff",
      backgroundColor: "#3b82f6",
    },
    templateId: "",
  });

  const validateCard = () => {
    if (!cardData.name) return "Le nom est requis";
    if (!cardData.email) return "L'email est requis";
    if (!cardData.phone) return "Le téléphone est requis";
    if (!cardData.templateId) return "Veuillez sélectionner un modèle";
    return null;
  };

  const generateCardPreview = async () => {
    const element = document.getElementById("card-preview");
    if (!element) return null;
    try {
      return await toPng(element);
    } catch (error) {
      console.error("Error generating preview:", error);
      return null;
    }
  };

  const createCard = async () => {
    try {
      setLoading(true);
      setError(null);

      const validationError = validateCard();
      if (validationError) {
        setError(validationError);
        return null;
      }

      const preview = await generateCardPreview();
      if (!preview) {
        setError("Erreur lors de la génération de l'aperçu");
        return null;
      }

      const response = await fetch("/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...cardData,
          userId: user?.id,
          preview,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création de la carte");
      }

      const card = await response.json();
      return card;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const initiatePayment = async (paymentMethod: PaymentMethod) => {
    try {
      setLoading(true);
      setError(null);

      const card = await createCard();
      if (!card) return;

      const endpoint = `/api/payments/create-${paymentMethod.type}`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cardId: card.id,
          amount: paymentMethod.amount,
          currency: paymentMethod.currency,
        }),
      });

      const data = await response.json();

      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else if (data.sessionId) {
        // Pour Stripe
        const stripe = await import("@stripe/stripe-js").then((m) =>
          m.loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!)
        );
        await stripe?.redirectToCheckout({ sessionId: data.sessionId });
      } else {
        throw new Error("Réponse de paiement invalide");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors du paiement");
    } finally {
      setLoading(false);
    }
  };

  return {
    cardData,
    setCardData,
    loading,
    error,
    createCard,
    initiatePayment,
  };
};
