import { PaymentSelection } from "@/types/card";
import Image from "next/image";

type Currency = "XOF" | "USD" | "EUR";

interface PaymentOptionsProps {
  onSelect: (method: PaymentSelection) => void;
  amount: number;
  currency: Currency;
}

const paymentMethods = [
  {
    type: "stripe",
    name: "Carte bancaire",
    description: "Paiement sécurisé par carte bancaire",
    icon: "/payments/stripe.svg",
    currencies: ["USD", "EUR"] as Currency[],
  },
  {
    type: "orange",
    name: "Orange Money",
    description: "Paiement via Orange Money",
    icon: "/images/pay/orange.jpg",
    currencies: ["XOF"] as Currency[],
  },
  {
    type: "mtn",
    name: "MTN Mobile Money",
    description: "Paiement via MTN Mobile Money",
    icon: "/images/pay/mtn.png",
    currencies: ["XOF"] as Currency[],
  },
  {
    type: "moov",
    name: "Moov Money",
    description: "Paiement via Moov Money",
    icon: "/images/pay/moov.png",
    currencies: ["XOF"] as Currency[],
  },
  {
    type: "wave",
    name: "Wave",
    description: "Paiement via Wave",
    icon: "/images/pay/wave.png",
    currencies: ["XOF"] as Currency[],
  },
] as const;

export default function PaymentOptions({
  onSelect,
  amount,
  currency,
}: PaymentOptionsProps) {
  const availableMethods = paymentMethods.filter((method) =>
    method.currencies.includes(currency as any)
  );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">
        Choisissez votre mode de paiement
      </h3>
      <div className="grid gap-4">
        {availableMethods.map((method) => (
          <button
            key={method.type}
            className="flex items-center p-4 border rounded-lg hover:border-blue-500 transition-colors"
            onClick={() =>
              onSelect({ type: method.type, amount, currency: currency as any })
            }
          >
            <div className="w-12 h-12 relative mr-4">
              <Image
                src={method.icon}
                alt={method.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-medium">{method.name}</h4>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
            <div className="text-right">
              <span className="font-medium">
                {amount.toLocaleString()} {currency}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
