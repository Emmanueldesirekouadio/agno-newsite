export interface Template {
  id: string;
  name: string;
  preview: string;
  colors: {
    primary: string;
    text: string;
    background: string;
    accent?: string;
  };
}

export const templates: Template[] = [
  {
    id: "classic",
    name: "Classic",
    preview: "/templates/classic.jpg",
    colors: {
      primary: "#FF9500",
      text: "#000000",
      background: "#FFFFFF",
    },
  },
  {
    id: "modern",
    name: "Modern",
    preview: "/templates/modern.jpg",
    colors: {
      primary: "#2563EB",
      text: "#FFFFFF",
      background: "#1E293B",
      accent: "#38BDF8",
    },
  },
  {
    id: "creative",
    name: "Creative",
    preview: "/templates/creative.jpg",
    colors: {
      primary: "#EC4899",
      text: "#000000",
      background: "#FDF2F8",
      accent: "#F472B6",
    },
  },
  {
    id: "minimal",
    name: "Minimal",
    preview: "/templates/minimal.jpg",
    colors: {
      primary: "#4B5563",
      text: "#1F2937",
      background: "#F9FAFB",
    },
  },
  {
    id: "bold",
    name: "Bold",
    preview: "/templates/bold.jpg",
    colors: {
      primary: "#7C3AED",
      text: "#FFFFFF",
      background: "#4C1D95",
      accent: "#8B5CF6",
    },
  },
];
