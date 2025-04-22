"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    bio: (user?.unsafeMetadata?.bio as string) || "",
    company: (user?.unsafeMetadata?.company as string) || "",
    position: (user?.unsafeMetadata?.position as string) || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await user?.update({
        unsafeMetadata: {
          ...user.unsafeMetadata,
          ...formData,
        },
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Mon Profil</h1>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-start gap-6">
          {user?.imageUrl ? (
            <Image
              src={user.imageUrl}
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full"
            />
          ) : (
            <div className="w-[120px] h-[120px] rounded-full bg-[#FF9500] text-white flex items-center justify-center text-4xl font-medium">
              {user?.firstName?.[0]?.toUpperCase() || "A"}
            </div>
          )}

          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">
                  {user?.firstName} {user?.lastName}
                </h2>
                <p className="text-gray-600">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                {isEditing ? "Annuler" : "Modifier"}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF9500]"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF9500]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Poste
                  </label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF9500]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FF9500] text-white rounded-lg hover:bg-[#FF9500]/90"
                >
                  Enregistrer
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Bio</h3>
                  <p className="text-gray-600">
                    {formData.bio || "Aucune bio renseignée"}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700">
                    Entreprise
                  </h3>
                  <p className="text-gray-600">
                    {formData.company || "Non renseigné"}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700">Poste</h3>
                  <p className="text-gray-600">
                    {formData.position || "Non renseigné"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FF9500]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF9500]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Notifications push</h3>
              <p className="text-sm text-gray-600">
                Recevoir des notifications push sur votre navigateur
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FF9500]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF9500]"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
