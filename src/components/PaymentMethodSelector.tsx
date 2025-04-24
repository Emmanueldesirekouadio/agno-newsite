import Image from "next/image";

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface PaymentMethodSelectorProps {
  onSelect: (methodId: string) => void;
  selectedMethod: string | null;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "card",
    name: "Carte bancaire",
    icon: "/icons/credit-card.svg",
    description: "Paiement sécurisé par carte bancaire via Stripe",
  },
  {
    id: "orange_money",
    name: "Orange Money",
    icon: "/icons/orange-money.svg",
    description: "Paiement via Orange Money",
  },
  {
    id: "mobile_money",
    name: "Mobile Money",
    icon: "/icons/mobile-money.svg",
    description: "Paiement via Mobile Money",
  },
  {
    id: "cinetpay",
    name: "CinetPay",
    icon: "/icons/cinetpay.svg",
    description: "Paiement via CinetPay",
  },
];

export const PaymentMethodSelector = ({
  onSelect,
  selectedMethod,
}: PaymentMethodSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {paymentMethods.map((method) => (
        <div
          key={method.id}
          className={`p-4 border rounded-lg cursor-pointer transition-all ${
            selectedMethod === method.id
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200 hover:border-blue-300"
          }`}
          onClick={() => onSelect(method.id)}
        >
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12">
              <Image
                src={method.icon}
                alt={method.name}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{method.name}</h3>
              <p className="text-sm text-gray-500">{method.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
