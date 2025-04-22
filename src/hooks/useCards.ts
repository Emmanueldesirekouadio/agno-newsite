import {
  createCard,
  deleteCard,
  getUserCards,
  updateCard,
  uploadCardImage,
} from "@/lib/services/cards";
import type { BusinessCard } from "@/types/dashboard";
import { useEffect, useState } from "react";

export function useCards(userId: string | undefined) {
  const [cards, setCards] = useState<BusinessCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchCards = async () => {
      try {
        setLoading(true);
        const userCards = await getUserCards(userId);
        setCards(userCards);
        setError(null);
      } catch (err) {
        setError("Erreur lors du chargement des cartes");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [userId]);

  const addCard = async (
    cardData: Omit<BusinessCard, "id" | "userId" | "createdAt" | "updatedAt">
  ) => {
    if (!userId) return;

    try {
      setLoading(true);
      const cardId = await createCard(userId, cardData);
      const newCard: BusinessCard = {
        id: cardId,
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...cardData,
      };
      setCards((prev) => [...prev, newCard]);
      setError(null);
      return cardId;
    } catch (err) {
      setError("Erreur lors de la création de la carte");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const removeCard = async (cardId: string) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setCards((prev) => prev.filter((card) => card.id !== cardId));
      setError(null);
    } catch (err) {
      setError("Erreur lors de la suppression de la carte");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const editCard = async (cardId: string, data: Partial<BusinessCard>) => {
    try {
      setLoading(true);
      await updateCard(cardId, data);
      setCards((prev) =>
        prev.map((card) =>
          card.id === cardId
            ? { ...card, ...data, updatedAt: new Date() }
            : card
        )
      );
      setError(null);
    } catch (err) {
      setError("Erreur lors de la modification de la carte");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (cardId: string, file: File) => {
    try {
      setLoading(true);
      const imageUrl = await uploadCardImage(cardId, file);
      await editCard(cardId, { imageUrl });
      setError(null);
      return imageUrl;
    } catch (err) {
      setError("Erreur lors du téléchargement de l'image");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    cards,
    loading,
    error,
    addCard,
    removeCard,
    editCard,
    uploadImage,
  };
}
