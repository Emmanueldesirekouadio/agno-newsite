import { Bell, CreditCard, LayoutDashboard, Settings } from "lucide-react";

export const sidebarLinks = [
  {
    href: "/dashboard",
    label: "Tableau de bord",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/create-card",
    label: "Créer une carte",
    icon: CreditCard,
  },
  {
    href: "/dashboard/notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    href: "/dashboard/settings",
    label: "Paramètres",
    icon: Settings,
  },
];
