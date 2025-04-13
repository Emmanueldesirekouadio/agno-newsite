"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NewCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, title: string) => void;
}

export default function NewCardModal({
  isOpen,
  onClose,
  onSave,
}: NewCardModalProps) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && title) {
      onSave(name, title);
      setName("");
      setTitle("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Nouvelle carte</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="new-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nom
              </label>
              <input
                type="text"
                id="new-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="new-title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Titre
              </label>
              <input
                type="text"
                id="new-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gray-300"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Créer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
