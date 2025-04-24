import { CardData } from "@/types/card";
import { Globe, Mail, Phone } from "lucide-react";
import React from "react";

interface CardPreviewProps {
  cardData: CardData;
}

export const CardPreview: React.FC<CardPreviewProps> = ({ cardData }) => {
  const { name, title, company, email, phone, website, theme } = cardData;

  return (
    <div
      className="w-[340px] h-[200px] rounded-lg shadow-lg p-6 flex flex-col justify-between"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      <div>
        <h2 className="text-2xl font-bold mb-1">{name}</h2>
        {title && <p className="text-lg">{title}</p>}
        {company && <p className="text-lg">{company}</p>}
      </div>

      <div className="space-y-2">
        {email && (
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href={`tel:${phone}`} className="hover:underline">
              {phone}
            </a>
          </div>
        )}
        {website && (
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {website.replace(/^https?:\/\//, "")}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
