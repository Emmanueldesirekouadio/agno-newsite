"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import NewCardModal from "./NewCardModal";

interface UserProfile {
  id: string;
  name: string;
  title: string;
  avatarSrc: string;
}

export default function DigitalCard() {
  const [cards, setCards] = useState<UserProfile[]>([
    {
      id: "1",
      name: "Kouamé serge",
      title: "Ingénieur",
      avatarSrc: "/avatars/avatar.png",
    },
  ]);

  const [activeCard, setActiveCard] = useState<string>("1");
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(cards[0]);

  const currentCard = cards.find((card) => card.id === activeCard) || cards[0];

  const handleEdit = () => {
    setFormData(currentCard);
    setIsEditing(true);
  };

  const handleSave = () => {
    setCards(
      cards.map((card) => (card.id === activeCard ? { ...formData } : card))
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewCard = (name: string, title: string) => {
    const newCard = {
      id: Date.now().toString(),
      name,
      title,
      avatarSrc: "/avatars/avatar.png",
    };
    setCards([...cards, newCard]);
    setActiveCard(newCard.id);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
      <div className="p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Image
                src={currentCard.avatarSrc}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <svg
                className="absolute bottom-0 right-0 cursor-pointer"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-1 text-sm flex items-center gap-1"
            onClick={() => setIsModalOpen(true)}
          >
            <span>+</span> Nouvelle carte
          </Button>
        </div>

        {/* Welcome Section */}
        <div className="mb-4">
          <p className="text-gray-600">Bienvenue,</p>
          <h1 className="text-xl font-semibold">{currentCard.name}</h1>
        </div>

        {/* Card Section */}
        {isEditing ? (
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
            <h2 className="text-lg font-semibold mb-4">
              Modifier votre profil
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Titre
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex gap-2 justify-end mt-4">
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  className="border-gray-300"
                >
                  Annuler
                </Button>
                <Button
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Enregistrer
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative mb-6">
            <div className="bg-blue-500 rounded-xl p-4 relative overflow-hidden">
              {/* Blue circles pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400 rounded-full opacity-20 -mr-10 -mt-10" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-400 rounded-full opacity-20 -mr-5 -mb-5" />

              <div className="flex items-center gap-4 relative z-10">
                <Image
                  src={currentCard.avatarSrc}
                  alt="Profile"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
                <div className="text-white">
                  <h2 className="text-xl font-semibold">{currentCard.name}</h2>
                  <p>{currentCard.title}</p>
                </div>
              </div>
            </div>

            {/* Edit button */}
            <button
              onClick={handleEdit}
              className="absolute bottom-3 right-3 bg-yellow-400 hover:bg-yellow-500 rounded-full p-2 transition-colors"
            >
              <Image
                src="/avatars/pencil.png"
                alt="Edit"
                width={16}
                height={16}
              />
            </button>
          </div>
        )}

        {/* Card Selector (visible when there's more than one card) */}
        {cards.length > 1 && (
          <div className="mt-6 border-t pt-4">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              Mes cartes
            </h3>
            <div className="flex flex-wrap gap-2">
              {cards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setActiveCard(card.id)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    card.id === activeCard
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {card.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* New Card Modal */}
      <NewCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleNewCard}
      />
    </div>
  );
}
