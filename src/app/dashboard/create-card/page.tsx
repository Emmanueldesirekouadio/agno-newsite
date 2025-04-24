"use client";

import CardTemplateList from "@/components/CardTemplateList";
import ColorPicker from "@/components/ColorPicker";
import PaymentOptions from "@/components/PaymentOptions";
import { CardTemplate, PaymentSelection } from "@/types/card";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const steps = ["Template", "Information", "Design", "Preview", "Payment"];

export default function CreateCardPage() {
  const router = useRouter();
  const { user } = useUser();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState<CardTemplate | null>(
    null
  );
  const [formData, setFormData] = useState({
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
  });
  const [error, setError] = useState<string | null>(null);

  const handleTemplateSelect = (template: CardTemplate) => {
    setSelectedTemplate(template);
    setFormData((prev) => ({
      ...prev,
      theme: template.defaultTheme,
    }));
  };

  const handlePaymentSelect = async (method: PaymentSelection) => {
    if (!selectedTemplate || !user) return;

    try {
      const response = await fetch(`/api/payments/create-${method.type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: method.amount,
          currency: method.currency,
          cardData: {
            ...formData,
            templateId: selectedTemplate.id,
          },
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("URL de paiement non reçue");
      }
    } catch (error) {
      console.error("Erreur de paiement:", error);
      setError("Une erreur est survenue lors du paiement");
    }
  };

  const handleNext = () => {
    if (currentStep === steps.length - 1) return;
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm
                ${
                  index <= currentStep
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }
              `}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`
                  w-full h-1 mx-2
                  ${index < currentStep ? "bg-blue-600" : "bg-gray-200"}
                `}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-3 text-sm font-medium text-gray-600">
          {steps[currentStep]}
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
        {currentStep === 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Choisir un modèle</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CardTemplateList
                selectedId={selectedTemplate?.id}
                onSelect={handleTemplateSelect}
              />
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">Informations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nom complet"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Titre du poste"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Entreprise"
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <input
                type="url"
                placeholder="Site web"
                value={formData.website}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, website: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Design</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ColorPicker
                label="Couleur principale"
                value={formData.theme.primaryColor}
                onChange={(color) =>
                  setFormData((prev) => ({
                    ...prev,
                    theme: { ...prev.theme, primaryColor: color },
                  }))
                }
              />
              <ColorPicker
                label="Couleur du texte"
                value={formData.theme.textColor}
                onChange={(color) =>
                  setFormData((prev) => ({
                    ...prev,
                    theme: { ...prev.theme, textColor: color },
                  }))
                }
              />
              <ColorPicker
                label="Couleur de fond"
                value={formData.theme.backgroundColor}
                onChange={(color) =>
                  setFormData((prev) => ({
                    ...prev,
                    theme: { ...prev.theme, backgroundColor: color },
                  }))
                }
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Aperçu</h2>
            <div className="flex flex-col items-center space-y-6">
              <div
                id="card-preview"
                className="w-full max-w-md aspect-[1.586] relative rounded-xl overflow-hidden shadow-lg"
                style={{
                  backgroundColor: formData.theme.backgroundColor,
                  color: formData.theme.textColor,
                }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3
                        className="text-2xl font-bold"
                        style={{ color: formData.theme.primaryColor }}
                      >
                        {formData.name || "Votre Nom"}
                      </h3>
                      <p className="text-sm opacity-90">
                        {formData.title || "Titre"}
                      </p>
                      <p className="text-sm opacity-90">
                        {formData.company || "Entreprise"}
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <QRCodeSVG
                        value={`${window.location.origin}/cards/${user?.id}`}
                        size={80}
                        level="H"
                      />
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    {formData.email && (
                      <p className="flex items-center gap-2 text-sm">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        {formData.email}
                      </p>
                    )}
                    {formData.phone && (
                      <p className="flex items-center gap-2 text-sm">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        {formData.phone}
                      </p>
                    )}
                    {formData.website && (
                      <p className="flex items-center gap-2 text-sm">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {formData.website}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && selectedTemplate && (
          <PaymentOptions
            onSelect={handlePaymentSelect}
            amount={selectedTemplate.price.amount}
            currency={selectedTemplate.price.currency}
          />
        )}
      </div>

      <div className="mt-8 flex justify-between items-center">
        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="px-6 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Retour
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={currentStep === 0 && !selectedTemplate}
          className={`px-6 py-2.5 text-sm font-medium text-white rounded-lg transition-colors
            ${
              currentStep === steps.length - 1
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            } disabled:opacity-50 disabled:cursor-not-allowed ml-auto`}
        >
          {currentStep === steps.length - 1 ? "Terminer" : "Suivant"}
        </button>
      </div>
    </div>
  );
}
