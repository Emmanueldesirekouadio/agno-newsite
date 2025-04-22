"use client";

import {
  getUserNotifications,
  getUserStats,
  markNotificationAsRead,
} from "@/lib/services/dashboard";
import type { DashboardStats, Notification } from "@/types/dashboard";
import { useClerk, useUser } from "@clerk/nextjs";
import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const [stats, setStats] = useState<DashboardStats>({
    scans: 0,
    contacts: 0,
    echanges: 0,
    clics: 0,
  });

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const userLink = `AGNO.ee/${user?.username || user?.id}`;

  useEffect(() => {
    if (user?.id) {
      // Charger les statistiques
      getUserStats(user.id).then((data) => {
        if (data) setStats(data);
      });

      // Charger les notifications
      getUserNotifications(user.id).then(setNotifications);

      // Rafraîchir les données toutes les 30 secondes
      const interval = setInterval(() => {
        getUserStats(user.id).then((data) => {
          if (data) setStats(data);
        });
        getUserNotifications(user.id).then(setNotifications);
      }, 30000);

      return () => clearInterval(interval);
    }
  }, [user?.id]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(userLink);
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleNotificationClick = async (notificationId: string) => {
    await markNotificationAsRead(notificationId);
    setNotifications(notifications.filter((n) => n.id !== notificationId));
  };

  const handleSignOut = () => {
    signOut(() => router.push("/"));
  };

  return (
    <div className="p-6">
      {/* Header avec notifications et profil */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <Bell className="w-6 h-6" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </button>

            {showNotifications && notifications.length > 0 && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 border border-gray-100">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Notifications</h3>
                  <div className="space-y-2">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="p-2 hover:bg-gray-50 rounded cursor-pointer"
                        onClick={() => handleNotificationClick(notification.id)}
                      >
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(
                            notification.createdAt
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profil utilisateur */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-all"
            >
              {user?.imageUrl ? (
                <Image
                  src={user.imageUrl}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#FF9500] text-white flex items-center justify-center font-medium">
                  {user?.firstName?.[0]?.toUpperCase() ||
                    user?.lastName?.[0]?.toUpperCase() ||
                    "A"}
                </div>
              )}
              <ChevronDown
                className={`w-4 h-4 text-gray-600 transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {user?.primaryEmailAddress?.emailAddress}
                  </p>
                </div>

                <button
                  onClick={() => router.push("/profile")}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                >
                  <User size={16} />
                  <span>Mon Profil</span>
                </button>

                <button
                  onClick={() => router.push("/settings")}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                >
                  <Settings size={16} />
                  <span>Paramètres</span>
                </button>

                <div className="border-t border-gray-100 mt-1">
                  <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    <span>Déconnexion</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Scans</h3>
          <p className="text-2xl font-bold">{stats.scans}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Contacts</h3>
          <p className="text-2xl font-bold">{stats.contacts}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Échanges</h3>
          <p className="text-2xl font-bold">{stats.echanges}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Clics</h3>
          <p className="text-2xl font-bold">{stats.clics}</p>
        </div>
      </div>

      {/* QR Code et lien de partage */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Votre QR Code</h2>
          <button
            onClick={() => {
              const canvas = document.querySelector("canvas");
              if (canvas) {
                const link = document.createElement("a");
                link.download = "qr-code.png";
                link.href = canvas.toDataURL();
                link.click();
              }
            }}
            className="bg-[#FF9500] text-white px-4 py-2 rounded-lg hover:bg-[#FF9500]/90"
          >
            Télécharger en PNG
          </button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <QRCodeSVG value={userLink} size={200} />
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={userLink}
              readOnly
              className="bg-gray-50 px-4 py-2 rounded-lg"
            />
            <button
              onClick={handleCopyLink}
              className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              {showCopiedMessage ? "Copié !" : "Copier"}
            </button>
          </div>
        </div>
      </div>

      {/* Créer une carte */}
      <div className="bg-white p-8 rounded-2xl border-2 border-dashed">
        <h2 className="text-gray-600 text-lg mb-4">
          Personnalisez et créez votre carte de visite
        </h2>
        <button
          onClick={() => router.push("/dashboard/create-card")}
          className="bg-[#FF9500] text-white px-6 py-3 rounded-full hover:bg-[#FF9500]/90 transition-all"
        >
          + Créer votre carte
        </button>
      </div>

      {/* Offres spéciales */}
      <div className="bg-[#FFE8E8] p-6 rounded-xl relative overflow-hidden mt-8">
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF4444">
            <path d="M3.5 19l1.4-1.4L1 13.7l3.9-3.9L1 5.9l3.9-3.9L9 6.1l3.9-3.9 3.9 3.9-3.9 3.9 3.9 3.9-3.9 3.9L9 13.7l-3.9 3.9z" />
          </svg>
        </div>
        <h3 className="text-xl font-medium mb-2">Offres spéciales</h3>
        <p className="text-gray-700 mb-4">
          Inscrivez-vous maintenant et{" "}
          <span className="font-semibold">bénéficiez de 20% de réduction</span>{" "}
          sur votre premier mois avec le code promo AGNO20
        </p>
        <button
          onClick={() => router.push("/dashboard/promo/AGNO20")}
          className="text-[#FF4444] font-medium hover:underline"
        >
          Obtenir la réduction
        </button>
      </div>
    </div>
  );
}
