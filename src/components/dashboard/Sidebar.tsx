"use client";

import { useClerk } from "@clerk/nextjs";
import {
  CreditCard,
  Home,
  LogOut,
  Package,
  Settings,
  Share2,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  {
    name: "Tableau de bord",
    icon: Home,
    path: "/dashboard",
  },
  {
    name: "Gestion de carte",
    icon: CreditCard,
    path: "/dashboard/create-card",
  },
  {
    name: "Commandes",
    icon: Package,
    path: "/dashboard/orders",
  },
  {
    name: "Partage",
    icon: Share2,
    path: "/dashboard/share",
  },
  {
    name: "Profil",
    icon: User,
    path: "/dashboard/profile",
  },
  {
    name: "Paramètres",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = () => {
    signOut(() => router.push("/"));
  };

  return (
    <div className="w-64 bg-white border-r h-screen flex flex-col">
      <div className="p-4">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <img src="/logoagno.png" alt="Logo" className="h-8" />
        </Link>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#FF9500] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-4">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 w-full"
        >
          <LogOut size={20} />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );
}
