export interface DashboardStats {
  scans: number;
  contacts: number;
  echanges: number;
  clics: number;
}

export interface BusinessCard {
  id: string;
  userId: string;
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website?: string;
  imageUrl?: string;
  shareUrl: string;
  theme: {
    primaryColor: string;
    textColor: string;
    backgroundColor: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: "scan" | "contact" | "share" | "system";
  message: string;
  read: boolean;
  createdAt: Date;
  metadata?: Record<string, any>;
}

export interface ShareStats {
  totalViews: number;
  qrScans: number;
  linkClicks: number;
  shares: number;
  lastUpdated: Date;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
  role: "free" | "premium";
  notifications: Notification[];
  businessCards: BusinessCard[];
  stats: DashboardStats;
}

export interface Template {
  id: string;
  name: string;
  previewUrl: string;
  description: string;
  fields: {
    name: boolean;
    title: boolean;
    company: boolean;
    email: boolean;
    phone: boolean;
    website: boolean;
    social: boolean;
  };
  customization: {
    colors: boolean;
    fonts: boolean;
    layout: boolean;
  };
}
