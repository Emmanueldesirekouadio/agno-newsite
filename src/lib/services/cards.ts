import { db, storage } from "@/lib/firebase";
import type { BusinessCard } from "@/types/dashboard";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

export async function createCard(
  userId: string,
  cardData: Omit<BusinessCard, "id" | "userId" | "createdAt" | "updatedAt">
): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, "cards"), {
      ...cardData,
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating card:", error);
    throw error;
  }
}

export async function updateCard(
  cardId: string,
  data: Partial<BusinessCard>
): Promise<void> {
  try {
    const cardRef = doc(db, "cards", cardId);
    await updateDoc(cardRef, {
      ...data,
      updatedAt: new Date(),
    });
  } catch (error) {
    console.error("Error updating card:", error);
    throw error;
  }
}

export async function deleteCard(cardId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, "cards", cardId));
  } catch (error) {
    console.error("Error deleting card:", error);
    throw error;
  }
}

export async function getCard(cardId: string): Promise<BusinessCard | null> {
  try {
    const cardDoc = await getDoc(doc(db, "cards", cardId));
    if (!cardDoc.exists()) return null;
    return { id: cardDoc.id, ...cardDoc.data() } as BusinessCard;
  } catch (error) {
    console.error("Error getting card:", error);
    throw error;
  }
}

export async function getUserCards(userId: string): Promise<BusinessCard[]> {
  try {
    const q = query(collection(db, "cards"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as BusinessCard)
    );
  } catch (error) {
    console.error("Error getting user cards:", error);
    throw error;
  }
}

export async function uploadCardImage(
  cardId: string,
  file: File
): Promise<string> {
  try {
    const imageRef = ref(storage, `cards/${cardId}/${file.name}`);
    await uploadBytes(imageRef, file);
    return await getDownloadURL(imageRef);
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

export async function deleteCardImage(
  cardId: string,
  fileName: string
): Promise<void> {
  try {
    const imageRef = ref(storage, `cards/${cardId}/${fileName}`);
    await deleteObject(imageRef);
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
}
