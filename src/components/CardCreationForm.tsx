import { useCardCreation } from "@/hooks/useCardCreation";
import { useState } from "react";
import { PaymentMethodSelector } from "./PaymentMethodSelector";

export const CardCreationForm = () => {
  const { cardData, setCardData, loading, error, initiatePayment } =
    useCardCreation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCardData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowPaymentOptions(true);
  };

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
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Créer votre carte de visite</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet *
            </label>
            <input
              type="text"
              name="name"
              value={cardData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Titre / Poste
            </label>
            <input
              type="text"
              name="title"
              value={cardData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Entreprise
            </label>
            <input
              type="text"
              name="company"
              value={cardData.company}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={cardData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone *
            </label>
            <input
              type="tel"
              name="phone"
              value={cardData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Site web
            </label>
            <input
              type="url"
              name="website"
              value={cardData.website}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-lg font-medium mb-4">Personnalisation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Couleur principale
              </label>
              <input
                type="color"
                name="primaryColor"
                value={cardData.theme.primaryColor}
                onChange={handleThemeChange}
                className="w-full h-10 p-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Couleur du texte
              </label>
              <input
                type="color"
                name="textColor"
                value={cardData.theme.textColor}
                onChange={handleThemeChange}
                className="w-full h-10 p-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Couleur de fond
              </label>
              <input
                type="color"
                name="backgroundColor"
                value={cardData.theme.backgroundColor}
                onChange={handleThemeChange}
                className="w-full h-10 p-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Chargement..." : "Continuer vers le paiement"}
          </button>
        </div>
      </form>

      {showPaymentOptions && (
        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-medium mb-4">
            Choisissez votre méthode de paiement
          </h2>
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
      )}
    </div>
  );
};
