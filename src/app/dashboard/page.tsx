"use client";

import {
  getUserNotifications,
  getUserStats,
  markNotificationAsRead,
} from "@/lib/services/dashboard";
import type { DashboardStats, Notification } from "@/types/dashboard";
import { useClerk, useUser } from "@clerk/nextjs";
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
      console.error("Erreur lors de la copie du lien: ", err);
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
    <div className="space-y-4 sm:space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
          <h3 className="text-xs sm:text-sm text-gray-500 mb-1">
            Scans totaux
          </h3>
          <p className="text-lg sm:text-2xl font-semibold">{stats.scans}</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
          <h3 className="text-xs sm:text-sm text-gray-500 mb-1">Contacts</h3>
          <p className="text-lg sm:text-2xl font-semibold">{stats.contacts}</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
          <h3 className="text-xs sm:text-sm text-gray-500 mb-1">Échanges</h3>
          <p className="text-lg sm:text-2xl font-semibold">{stats.echanges}</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
          <h3 className="text-xs sm:text-sm text-gray-500 mb-1">Clics</h3>
          <p className="text-lg sm:text-2xl font-semibold">{stats.clics}</p>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        <button
          onClick={() => router.push("/dashboard/create-card")}
          className="bg-white p-3 sm:p-4 rounded-lg shadow-sm text-left hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-xs sm:text-sm font-medium mb-1">
            Créer une carte
          </h3>
          <p className="text-xs text-gray-500">Nouvelle carte de visite</p>
        </button>
        <button
          onClick={() => router.push("/dashboard/scan")}
          className="bg-white p-3 sm:p-4 rounded-lg shadow-sm text-left hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-xs sm:text-sm font-medium mb-1">Scanner</h3>
          <p className="text-xs text-gray-500">Scanner un QR code</p>
        </button>
        <button
          onClick={() => router.push("/dashboard/share")}
          className="bg-white p-3 sm:p-4 rounded-lg shadow-sm text-left hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-xs sm:text-sm font-medium mb-1">Partager</h3>
          <p className="text-xs text-gray-500">Partager mon profil</p>
        </button>
      </div>

      {/* QR Code et lien de partage */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-bold">Mon QR Code</h2>
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
            className="bg-[#FF9500] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm hover:bg-[#FF9500]/90 transition-colors"
          >
            Télécharger
          </button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <QRCodeSVG value={userLink} size={200} />
          <div className="flex items-center gap-2 w-full max-w-md">
            <input
              type="text"
              value={userLink}
              readOnly
              className="bg-gray-50 px-3 py-1.5 rounded-lg text-sm w-full"
            />
            <button
              onClick={handleCopyLink}
              className="bg-gray-100 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              {showCopiedMessage ? "Copié !" : "Copier"}
            </button>
          </div>
        </div>
      </div>

      {/* Activité récente */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-3 sm:p-4 border-b">
          <h2 className="text-sm sm:text-base font-semibold">
            Activité Récente
          </h2>
        </div>
        <div className="p-3 sm:p-4">
          <div className="space-y-3">
            {notifications.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-2">
                Aucune activité récente
              </p>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center gap-2 text-xs sm:text-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <p>{notification.message}</p>
                  <span className="ml-auto text-gray-500">
                    {new Date(notification.createdAt).toLocaleDateString(
                      "fr-FR",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Offres promotionnelles */}
      <div className="bg-[#FFE8E8] p-4 sm:p-6 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF4444">
            <path d="M3.5 19l1.4-1.4L1 13.7l3.9-3.9L1 5.9l3.9-3.9L9 6.1l3.9-3.9 3.9 3.9-3.9 3.9 3.9 3.9-3.9 3.9L9 13.7l-3.9 3.9z" />
          </svg>
        </div>
        <h3 className="text-lg sm:text-xl font-medium mb-2">Offre spéciale</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Profitez de <span className="font-semibold">20% de réduction</span>{" "}
          sur votre premier mois avec le code promo AGNO20
        </p>
        <button
          onClick={() => router.push("/dashboard/promo/AGNO20")}
          className="text-[#FF4444] font-medium text-sm sm:text-base hover:underline"
        >
          En profiter maintenant
        </button>
      </div>
    </div>
  );
}
