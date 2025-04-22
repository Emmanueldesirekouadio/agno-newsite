"use client";

import ColorPicker from "@/components/ColorPicker";
import TemplateSelector from "@/components/TemplateSelector";
import { useCards } from "@/hooks/useCards";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateCardPage() {
  const router = useRouter();
  const { user } = useUser();
  const { addCard } = useCards(user?.id);
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
    templateId: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      // Get user's current cards
      const response = await fetch(`/api/user/${user.id}/cards`);
      const { cards, subscription } = await response.json();

      // Free users can create 1 card, premium users unlimited
      if (subscription === "free" && cards.length >= 1) {
        setError(
          "Vous avez atteint la limite de cartes gratuites. Passez à Premium pour en créer plus !"
        );
        router.push("/tarifs");
        return;
      }

      await addCard({
        ...formData,
        shareUrl: `${window.location.origin}/cards/${user.id}`,
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating card:", error);
      setError("Une erreur s'est produite lors de la création de la carte");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Create Business Card</h1>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Select Template</h2>
          <TemplateSelector
            selectedId={formData.templateId}
            onSelect={(template) => {
              setFormData((prev) => ({
                ...prev,
                templateId: template.id,
                theme: {
                  primaryColor: template.colors.primary,
                  textColor: template.colors.secondary,
                  backgroundColor: template.colors.accent,
                },
              }));
            }}
          />
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Card Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="rounded-md border border-gray-300 px-4 py-2"
            />
            <input
              type="text"
              placeholder="Job Title"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-md border border-gray-300 px-4 py-2"
            />
            <input
              type="text"
              placeholder="Company"
              value={formData.company}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, company: e.target.value }))
              }
              className="rounded-md border border-gray-300 px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="rounded-md border border-gray-300 px-4 py-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="rounded-md border border-gray-300 px-4 py-2"
            />
            <input
              type="url"
              placeholder="Website"
              value={formData.website}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, website: e.target.value }))
              }
              className="rounded-md border border-gray-300 px-4 py-2"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Color Scheme</h2>
          <div className="space-y-4">
            <ColorPicker
              label="Primary Color"
              value={formData.theme.primaryColor}
              onChange={(color) =>
                setFormData((prev) => ({
                  ...prev,
                  theme: { ...prev.theme, primaryColor: color },
                }))
              }
            />
            <ColorPicker
              label="Text Color"
              value={formData.theme.textColor}
              onChange={(color) =>
                setFormData((prev) => ({
                  ...prev,
                  theme: { ...prev.theme, textColor: color },
                }))
              }
            />
            <ColorPicker
              label="Background Color"
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

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Create Card
          </button>
        </div>
      </form>
    </div>
  );
}
