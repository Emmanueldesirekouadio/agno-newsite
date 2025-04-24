import { CardTemplate } from "@/types/card";
import HybridCard from "./HybridCard";

const templates: CardTemplate[] = [
  {
    id: "basic",
    name: "Carte Basique",
    description: "Une carte simple et élégante pour les professionnels",
    isPremium: false,
    previewImage: "/card1.png",
    defaultTheme: {
      primaryColor: "#000000",
      textColor: "#ffffff",
      backgroundColor: "#f3f4f6",
    },
    price: {
      amount: 0,
      currency: "XOF",
    },
  },
  {
    id: "premium",
    name: "Carte Premium",
    description: "Une carte sophistiquée avec des fonctionnalités avancées",
    isPremium: true,
    previewImage: "/card2.png",
    defaultTheme: {
      primaryColor: "#1a365d",
      textColor: "#ffffff",
      backgroundColor: "#edf2f7",
    },
    price: {
      amount: 5000,
      currency: "XOF",
    },
  },
  {
    id: "business",
    name: "Carte Business",
    description: "Une carte professionnelle pour les entreprises",
    isPremium: true,
    previewImage: "/card/card01.jpeg",
    defaultTheme: {
      primaryColor: "#2d3748",
      textColor: "#ffffff",
      backgroundColor: "#f7fafc",
    },
    price: {
      amount: 10000,
      currency: "XOF",
    },
  },
];

interface CardTemplateListProps {
  onSelect: (template: CardTemplate) => void;
  selectedId?: string;
}

export default function CardTemplateList({
  onSelect,
  selectedId,
}: CardTemplateListProps) {
  const previewData = {
    name: "John Doe",
    title: "Directeur Marketing",
    company: "Entreprise SARL",
    email: "contact@entreprise.com",
    phone: "+225 00 00 00 00",
    website: "www.entreprise.com",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <div
          key={template.id}
          className={`relative rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
            selectedId === template.id
              ? "border-blue-500 shadow-lg"
              : "border-gray-200 hover:border-blue-300"
          }`}
          onClick={() => onSelect(template)}
        >
          <HybridCard
            template={template}
            data={previewData}
            showOverlay={selectedId === template.id}
          />
          <div className="p-4 bg-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{template.name}</h3>
              {template.isPremium && (
                <span className="px-2 py-1 text-xs font-medium text-white bg-yellow-500 rounded">
                  Premium
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-3">{template.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {template.price.amount === 0
                  ? "Gratuit"
                  : `${template.price.amount.toLocaleString()} ${
                      template.price.currency
                    }`}
              </span>
              <button
                className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(template);
                }}
              >
                Sélectionner
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
