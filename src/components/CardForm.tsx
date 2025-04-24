import { CardData, CardTheme } from "@/types/card";
import React, { useState } from "react";
import { CardPreview } from "./CardPreview";

interface CardFormProps {
  onSubmit: (data: CardData) => void;
  isLoading?: boolean;
}

const defaultTheme: CardTheme = {
  primaryColor: "#000000",
  textColor: "#ffffff",
  backgroundColor: "#1a1a1a",
};

export const CardForm: React.FC<CardFormProps> = ({ onSubmit, isLoading }) => {
  const [cardData, setCardData] = useState<CardData>({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    theme: defaultTheme,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(cardData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={cardData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={cardData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={cardData.company}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={cardData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={cardData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Website</label>
            <input
              type="url"
              name="website"
              value={cardData.website}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Theme</h3>
            <div>
              <label className="block text-sm font-medium mb-2">
                Background Color
              </label>
              <input
                type="color"
                name="backgroundColor"
                value={cardData.theme.backgroundColor}
                onChange={handleThemeChange}
                className="w-full p-1 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Text Color
              </label>
              <input
                type="color"
                name="textColor"
                value={cardData.theme.textColor}
                onChange={handleThemeChange}
                className="w-full p-1 border rounded"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Creating..." : "Create Card"}
          </button>
        </form>

        <div className="flex items-center justify-center">
          <CardPreview cardData={cardData} />
        </div>
      </div>
    </div>
  );
};
