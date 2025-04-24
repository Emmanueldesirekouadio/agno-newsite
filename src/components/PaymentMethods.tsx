import Image from "next/image";

interface PaymentMethodsProps {
  selectedMethod?: string;
  onSelect?: (methodId: string) => void;
  showPrices?: boolean;
  amount?: number;
}

export default function PaymentMethods({
  selectedMethod,
  onSelect,
  showPrices = false,
  amount,
}: PaymentMethodsProps) {
  const methods = [
    {
      id: "orange",
      name: "Orange Money",
      icon: "/images/pay/orange.jpg",
      description: "Paiement via Orange Money",
    },
    {
      id: "mtn",
      name: "MTN Mobile Money",
      icon: "/images/pay/mtn.png",
      description: "Paiement via MTN Mobile Money",
    },
    {
      id: "moov",
      name: "Moov Money",
      icon: "/images/pay/moov.png",
      description: "Paiement via Moov Money",
    },
    {
      id: "wave",
      name: "Wave",
      icon: "/images/pay/wave.png",
      description: "Paiement via Wave",
    },
  ];

  return (
    <div className="grid gap-4">
      {methods.map((method) => (
        <button
          key={method.id}
          onClick={() => onSelect?.(method.id)}
          className={`flex items-center p-4 border rounded-lg hover:border-blue-500 transition-colors ${
            selectedMethod === method.id
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200"
          }`}
        >
          <div className="w-12 h-12 relative mr-4">
            <Image
              src={method.icon}
              alt={method.name}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-left">
            <div className="font-medium">{method.name}</div>
            <div className="text-sm text-gray-500">{method.description}</div>
          </div>
          <div className="text-right">
            <div>{amount?.toLocaleString() ?? "0"} XOF</div>
          </div>
        </button>
      ))}
    </div>
  );
}
