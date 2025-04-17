"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardPage() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const stats = {
    scans: 15,
    contacts: 50,
    echanges: 50,
    clics: 80,
  };

  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const userLink = "AGNO.ee/kouamefranck";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(userLink);
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDownloadQR = () => {
    const link = document.createElement("a");
    link.href = "/phone-screens/Qr.png";
    link.download = "Qr.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSignOut = () => {
    signOut(() => router.push("/"));
  };

  return (
    <div className="space-y-8">
      {/* Header avec notifications */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-medium mb-1">
            Bienvenue, {user?.firstName || "Utilisateur"}
          </h1>
          <p className="text-gray-500">
            {(user?.publicMetadata?.role as string) || "Membre"}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#FF9500] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FF9500]/90 transition-all">
            + Nouvelle carte
          </button>
          <div className="relative">
            <button
              className="relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                2
              </span>
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm">Nouveau scan de votre carte</p>
                  <span className="text-xs text-gray-500">Il y a 2 heures</span>
                </div>
                <div className="px-4 py-2">
                  <p className="text-sm">Nouvelle connexion détectée</p>
                  <span className="text-xs text-gray-500">Il y a 1 jour</span>
                </div>
              </div>
            )}
          </div>
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

                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  <User size={16} />
                  <span>Mon Profil</span>
                </button>

                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
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

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-blue-600">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-600">Scans</span>
          </div>
          <p className="text-3xl font-semibold">{stats.scans}</p>
        </div>

        <div className="bg-white p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-green-600">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-600">Ajout du contact</span>
          </div>
          <p className="text-3xl font-semibold">{stats.contacts}</p>
        </div>

        <div className="bg-white p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-purple-600">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-600">Échanges</span>
          </div>
          <p className="text-3xl font-semibold">{stats.echanges}</p>
        </div>

        <div className="bg-white p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-yellow-600">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-600">Clics</span>
          </div>
          <p className="text-3xl font-semibold">{stats.clics}</p>
        </div>
      </div>

      {/* Create Card Section */}
      <div className="bg-white p-8 rounded-2xl border-2 border-dashed">
        <h2 className="text-gray-600 text-lg mb-4">
          Personnalisé et créer votre carte de visite
        </h2>
        <button className="bg-[#FF9500] text-white px-6 py-3 rounded-full hover:bg-[#FF9500]/90 transition-all">
          + Créer votre carte
        </button>
      </div>

      {/* Special Offers */}
      <div className="bg-[#FFE8E8] p-6 rounded-xl relative overflow-hidden">
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
        <button className="text-[#FF4444] font-medium hover:underline">
          Obtenir la réduction
        </button>
      </div>

      {/* QR Code Section */}
      <div className="bg-white p-6 rounded-xl">
        <h3 className="text-xl font-medium mb-4">Partage via QR Code</h3>
        <p className="text-gray-600 mb-4">
          Voici votre code QR AGNO unique qui dirigera les gens vers vos infos
          lorsqu'il sera scanné.
        </p>
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <Image
              src="/phone-screens/Qr.png"
              alt="QR Code"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">Haute qualité de l'image</p>
            <button
              onClick={handleDownloadQR}
              className="flex items-center gap-2 text-[#FF9500] hover:text-[#FF9500]/80"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Télécharger en PNG
            </button>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">{userLink}</span>
            <button
              onClick={handleCopyLink}
              className="ml-auto text-[#FF9500] hover:text-[#FF9500]/80"
            >
              Copier
            </button>
          </div>
          {showCopiedMessage && (
            <p className="text-green-600 text-sm mt-2">Lien copié !</p>
          )}
        </div>
      </div>
    </div>
  );
}
