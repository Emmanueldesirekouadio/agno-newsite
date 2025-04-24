import { useCardCreation } from "@/hooks/useCardCreation";
import { useState } from "react";
import { PaymentMethodSelector } from "./PaymentMethodSelector";

interface PaymentSectionProps {
  cardData: any;
  onPaymentComplete?: () => void;
}

export const PaymentSection = ({
  cardData,
  onPaymentComplete,
}: PaymentSectionProps) => {
  const { loading, error, initiatePayment } = useCardCreation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const handlePaymentSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
  };

  const handlePaymentSubmit = async () => {
    if (!selectedPaymentMethod) return;

    const paymentMethod = {
      type: selectedPaymentMethod as
        | "cinetpay"
        | "orange_money"
        | "mobile_money"
        | "card",
      amount: 10, // Prix fixe pour l'exemple
      currency: "XOF",
    };

    await initiatePayment(paymentMethod);
    if (onPaymentComplete) {
      onPaymentComplete();
    }
  };

  return (
    <div className="mt-8 border-t pt-6">
      <h2 className="text-lg font-medium mb-4">
        Choisissez votre méthode de paiement
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <PaymentMethodSelector
        onSelect={handlePaymentSelect}
        selectedMethod={selectedPaymentMethod}
      />

      <div className="mt-6 flex justify-end">
        <button
          onClick={handlePaymentSubmit}
          disabled={!selectedPaymentMethod || loading}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Traitement..." : "Payer maintenant"}
        </button>
      </div>
    </div>
  );
};
