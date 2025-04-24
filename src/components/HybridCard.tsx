import { CardTemplate } from "@/types/card";
import Image from "next/image";

interface HybridCardProps {
  template: CardTemplate;
  data?: {
    name?: string;
    title?: string;
    company?: string;
    email?: string;
    phone?: string;
    website?: string;
  };
  showOverlay?: boolean;
}

export default function HybridCard({
  template,
  data,
  showOverlay = false,
}: HybridCardProps) {
  // Mapping des templates vers les images
  const templateImages = {
    basic: "/card1.png",
    premium: "/card2.png",
    business: "/card/card01.jpeg",
  };

  return (
    <div className="relative w-full aspect-[1.586] rounded-lg overflow-hidden">
      {/* Image de fond */}
      <Image
        src={templateImages[template.id as keyof typeof templateImages]}
        alt={template.name}
        fill
        className="object-cover"
        priority
      />

      {/* Badge Premium/Business */}
      {template.isPremium && (
        <div className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded bg-yellow-500 text-white">
          {template.id === "business" ? "Business" : "Premium"}
        </div>
      )}
    </div>
  );
}
