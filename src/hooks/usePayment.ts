import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

interface PaymentOptions {
  amount: number;
  currency: string;
  planType: "basic" | "standard" | "premium";
  cardId?: string;
}

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleStripePayment = async ({
    amount,
    currency,
    planType,
    cardId,
  }: PaymentOptions) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/payments/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
          planType,
          cardId,
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error("Stripe not initialized");
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        throw error;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  const handleCinetPayPayment = async ({
    amount,
    currency,
    planType,
    cardId,
  }: PaymentOptions) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/payments/create-cinetpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
          planType,
          cardId,
        }),
      });

      const { paymentUrl } = await response.json();
      window.location.href = paymentUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  const handleOrangeMoneyPayment = async ({
    amount,
    currency,
    planType,
    cardId,
  }: PaymentOptions) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/payments/create-orange-money", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
          planType,
          cardId,
        }),
      });

      const { paymentUrl } = await response.json();
      window.location.href = paymentUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  const handleMobileMoneyPayment = async ({
    amount,
    currency,
    planType,
    cardId,
  }: PaymentOptions) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/payments/create-mobile-money", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
          planType,
          cardId,
        }),
      });

      const { paymentUrl } = await response.json();
      window.location.href = paymentUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleStripePayment,
    handleCinetPayPayment,
    handleOrangeMoneyPayment,
    handleMobileMoneyPayment,
    loading,
    error,
  };
};
