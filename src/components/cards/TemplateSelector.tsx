"use client";

import Image from "next/image";
import { useState } from "react";
import { Template, templates } from "./templates";

interface TemplateSelectorProps {
  onSelect: (template: Template) => void;
}

export default function TemplateSelector({ onSelect }: TemplateSelectorProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (template: Template) => {
    setSelectedId(template.id);
    onSelect(template);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template) => (
        <div
          key={template.id}
          className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
            selectedId === template.id
              ? "ring-2 ring-primary scale-[1.02]"
              : "hover:scale-[1.01]"
          }`}
          onClick={() => handleSelect(template)}
        >
          <div className="aspect-[4/3] relative">
            <Image
              src={template.preview}
              alt={template.name}
              fill
              className="object-cover"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 p-3 text-white"
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          >
            <h3 className="font-medium">{template.name}</h3>
          </div>
          {selectedId === template.id && (
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                Selected
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
