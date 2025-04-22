export interface Template {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  preview: string;
}

const DEFAULT_TEMPLATES: Template[] = [
  {
    id: "modern",
    name: "Moderne",
    colors: {
      primary: "#2563eb",
      secondary: "#1e40af",
      accent: "#60a5fa",
    },
    preview: "/templates/modern.png",
  },
  {
    id: "minimal",
    name: "Minimaliste",
    colors: {
      primary: "#18181b",
      secondary: "#27272a",
      accent: "#71717a",
    },
    preview: "/templates/minimal.png",
  },
  {
    id: "bold",
    name: "Audacieux",
    colors: {
      primary: "#dc2626",
      secondary: "#991b1b",
      accent: "#f87171",
    },
    preview: "/templates/bold.png",
  },
];

interface TemplateSelectorProps {
  onSelect: (template: Template) => void;
  selectedId?: string;
}

export default function TemplateSelector({
  onSelect,
  selectedId,
}: TemplateSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {DEFAULT_TEMPLATES.map((template) => (
        <button
          key={template.id}
          onClick={() => onSelect(template)}
          className={`p-4 rounded-lg border-2 transition-all ${
            selectedId === template.id
              ? "border-blue-500 shadow-lg"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="aspect-video bg-gray-100 rounded-md mb-2">
            {/* Replace with actual template preview */}
            <div
              className="w-full h-full"
              style={{ backgroundColor: template.colors.primary }}
            />
          </div>
          <h3 className="font-medium text-gray-900">{template.name}</h3>
        </button>
      ))}
    </div>
  );
}
