"use client";

import { sidebarLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
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
import Image from "next/image";
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

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = () => {
    signOut(() => router.push("/"));
  };

  return (
    <div className="flex h-full w-full flex-col bg-white p-3 sm:p-5">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/logoagno.png"
          alt="Agno Logo"
          width={28}
          height={28}
          className="rounded-lg sm:w-8 sm:h-8"
        />
        <span className="text-lg sm:text-xl font-bold">Agno</span>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6 sm:mt-8 flex flex-1 flex-col gap-1.5 sm:gap-2">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-2 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors",
                isActive
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <link.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleSignOut}
        className="mt-auto flex items-center gap-2 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
      >
        <LogOut className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        Déconnexion
      </button>
    </div>
  );
}
