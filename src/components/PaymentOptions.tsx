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
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">
        Choisissez votre mode de paiement
      </h3>
      <div className="grid gap-4">
        {availableMethods.map((method) => (
          <button
            key={method.type}
            className="flex items-center p-4 sm:p-6 border rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white"
            onClick={() =>
              onSelect({ type: method.type, amount, currency: currency as any })
            }
          >
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mr-4 sm:mr-6">
              <Image
                src={method.icon}
                alt={method.name}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-medium text-gray-900">{method.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{method.description}</p>
            </div>
            <div className="text-right flex-shrink-0 ml-4">
              <span className="font-medium text-gray-900 whitespace-nowrap">
                {amount.toLocaleString()} {currency}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
