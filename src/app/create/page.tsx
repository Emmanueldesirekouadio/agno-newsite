"use client";

import { CardForm } from "@/components/CardForm";
import { useCardCreation } from "@/hooks/useCardCreation";
import { CardData } from "@/types/card";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function CreateCardPage() {
  const router = useRouter();
  const { createCard, loading, error, setCardData } = useCardCreation();

  const handleSubmit = async (data: CardData) => {
    try {
      setCardData({
        ...data,
        title: data.title || "",
        company: data.company || "",
        phone: data.phone || "",
        templateId: "default",
      });
      const card = await createCard();
      toast.success("Card created successfully!");
      router.push(`/cards/${card.id}`);
    } catch (err) {
      toast.error("Failed to create card. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Your Digital Card
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Fill in your details and customize your card's appearance
          </p>
        </div>

        <CardForm onSubmit={handleSubmit} isLoading={loading} />

        {error && <div className="mt-4 text-center text-red-600">{error}</div>}
      </div>
    </div>
  );
}
