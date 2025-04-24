import { CardTemplate as CardTemplateType } from "@/types/card";
import Image from "next/image";

interface CardTemplateProps {
  template: CardTemplateType;
  isSelected: boolean;
  isPremium: boolean;
  onSelect: (template: CardTemplateType) => void;
}

export default function CardTemplate({
  template,
  isSelected,
  isPremium,
  onSelect,
}: CardTemplateProps) {
  return (
    <div
      className={`
        relative rounded-lg overflow-hidden cursor-pointer transition-all
        ${isSelected ? "ring-2 ring-blue-500" : "hover:shadow-lg"}
      `}
      onClick={() => onSelect(template)}
    >
      <div className="aspect-[1.586] relative">
        <Image
          src={template.previewImage}
          alt={template.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-white font-medium">{template.name}</h3>
      </div>

      {isPremium && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-xs text-white px-2 py-1 rounded">
          Premium
        </div>
      )}
    </div>
  );
}
