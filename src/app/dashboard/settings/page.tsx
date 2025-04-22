"use client";

import { ChangeEmailDialog } from "@/components/dialogs/ChangeEmailDialog";
import { ChangePasswordDialog } from "@/components/dialogs/ChangePasswordDialog";
import { DeleteAccountDialog } from "@/components/dialogs/DeleteAccountDialog";
import { EditProfileDialog } from "@/components/dialogs/EditProfileDialog";
import { LanguageDialog } from "@/components/dialogs/LanguageDialog";
import { useClerk, useUser } from "@clerk/nextjs";
import { Globe, Key, Mail, Trash2, User } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [changeEmailOpen, setChangeEmailOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    security: true,
  });

  const handleNotificationChange = (type: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleDeleteAccount = async () => {
    try {
      await user?.delete();
      await signOut();
    } catch (error) {
      console.error("Erreur lors de la suppression du compte:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Paramètres du compte</h1>

      <div className="space-y-6">
        {/* Profil */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
              <img
                src={user?.imageUrl}
                alt={user?.fullName || "Photo de profil"}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user?.fullName}</h2>
              <p className="text-gray-600">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setEditProfileOpen(true)}
              className="flex items-center gap-2 p-3 rounded-lg border hover:bg-gray-50"
            >
              <User size={20} className="text-gray-600" />
              <span>Modifier le profil</span>
            </button>
            <button
              onClick={() => setChangeEmailOpen(true)}
              className="flex items-center gap-2 p-3 rounded-lg border hover:bg-gray-50"
            >
              <Mail size={20} className="text-gray-600" />
              <span>Changer l&apos;email</span>
            </button>
            <button
              onClick={() => setChangePasswordOpen(true)}
              className="flex items-center gap-2 p-3 rounded-lg border hover:bg-gray-50"
            >
              <Key size={20} className="text-gray-600" />
              <span>Changer le mot de passe</span>
            </button>
            <button
              onClick={() => setLanguageOpen(true)}
              className="flex items-center gap-2 p-3 rounded-lg border hover:bg-gray-50"
            >
              <Globe size={20} className="text-gray-600" />
              <span>Langue et région</span>
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">
            Paramètres de notification
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Notifications par email</h3>
                <p className="text-sm text-gray-600">
                  Recevoir des notifications par email
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifications.email}
                  onChange={() => handleNotificationChange("email")}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FF9500]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF9500]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Sécurité */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Sécurité</h2>
          <div className="space-y-4">
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="flex items-center gap-2 text-red-600 hover:text-red-700"
            >
              <Trash2 size={20} />
              <span>Supprimer le compte</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dialogues */}
      <EditProfileDialog
        open={editProfileOpen}
        onOpenChange={setEditProfileOpen}
      />
      <ChangeEmailDialog
        open={changeEmailOpen}
        onOpenChange={setChangeEmailOpen}
      />
      <ChangePasswordDialog
        open={changePasswordOpen}
        onOpenChange={setChangePasswordOpen}
      />
      <LanguageDialog open={languageOpen} onOpenChange={setLanguageOpen} />
      <DeleteAccountDialog
        open={showDeleteConfirm}
        onOpenChange={setShowDeleteConfirm}
        onConfirm={handleDeleteAccount}
      />
    </div>
  );
}
