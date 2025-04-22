import Image from "next/image";
import React from "react";

interface TemplatePreviewProps {
  name: string;
  image: string;
  selected: boolean;
  onClick: () => void;
}

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({
  name,
  image,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-200 ${
        selected ? "ring-2 ring-blue-500 scale-105" : "hover:scale-105"
      }`}
    >
      <Image
        src={image}
        alt={`${name} template`}
        width={300}
        height={180}
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
        <p className="text-sm font-medium text-center">{name}</p>
      </div>
    </div>
  );
};
