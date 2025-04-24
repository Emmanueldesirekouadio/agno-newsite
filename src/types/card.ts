type Currency = "XOF" | "USD" | "EUR";

export interface CardTheme {
  primaryColor: string;
  textColor: string;
  backgroundColor: string;
}

export interface CardData {
  name: string;
  title?: string;
  company?: string;
  email: string;
  phone?: string;
  website?: string;
  theme: CardTheme;
  templateId?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  isAvailable: boolean;
  type: string;
  amount: number;
  currency: string;
}

export interface PaymentSelection {
  type: string;
  amount: number;
  currency: string;
}

export interface Card extends CardData {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  previewUrl?: string;
}

export interface BusinessCard extends CardData {
  id: string;
  userId: string;
  scanCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CardTemplate {
  id: string;
  name: string;
  description: string;
  isPremium: boolean;
  previewImage: string;
  defaultTheme: {
    primaryColor: string;
    textColor: string;
    backgroundColor: string;
  };
  price: {
    amount: number;
    currency: "XOF";
  };
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "orange",
    name: "Orange Money",
    icon: "/images/pay/orange.jpg",
    description: "Paiement via Orange Money",
    minAmount: 100,
    maxAmount: 1000000,
    isAvailable: true,
    type: "orange",
    amount: 5000,
    currency: "XOF",
  },
  {
    id: "mtn",
    name: "MTN Mobile Money",
    icon: "/images/pay/mtn.png",
    description: "Paiement via MTN Mobile Money",
    minAmount: 100,
    maxAmount: 1000000,
    isAvailable: true,
    type: "mtn",
    amount: 5000,
    currency: "XOF",
  },
  {
    id: "moov",
    name: "Moov Money",
    icon: "/images/pay/moov.png",
    description: "Paiement via Moov Money",
    minAmount: 100,
    maxAmount: 1000000,
    isAvailable: true,
    type: "moov",
    amount: 5000,
    currency: "XOF",
  },
  {
    id: "wave",
    name: "Wave",
    icon: "/images/pay/wave.png",
    description: "Paiement via Wave",
    minAmount: 100,
    maxAmount: 1000000,
    isAvailable: true,
    type: "wave",
    amount: 5000,
    currency: "XOF",
  },
];
