import type {
  BusinessCard,
  DashboardStats,
  Notification,
  ShareStats,
  UserProfile,
} from "@/types/dashboard";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

// Mock data until Firebase is set up
const mockStats: DashboardStats = {
  scans: 0,
  contacts: 0,
  echanges: 0,
  clics: 0,
};

const mockNotifications: Notification[] = [];

export async function getUserProfile(
  userId: string
): Promise<UserProfile | null> {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (!userDoc.exists()) return null;
    return userDoc.data() as UserProfile;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

export async function getUserStats(userId: string): Promise<DashboardStats> {
  try {
    // TODO: Implement with Firebase
    const statsRef = doc(db, "stats", userId);
    const statsDoc = await getDoc(statsRef);
    return statsDoc.data() as DashboardStats;
  } catch (error) {
    console.error("Error fetching user stats:", error);
    return mockStats;
  }
}

export async function getUserNotifications(
  userId: string
): Promise<Notification[]> {
  try {
    // TODO: Implement with Firebase
    const q = query(
      collection(db, "notifications"),
      where("userId", "==", userId),
      where("read", "==", false)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Notification[];
    return mockNotifications;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return [];
  }
}

export async function getUserBusinessCards(
  userId: string
): Promise<BusinessCard[]> {
  try {
    const cardsQuery = query(
      collection(db, "businessCards"),
      where("userId", "==", userId)
    );
    const snapshot = await getDocs(cardsQuery);
    return snapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as BusinessCard)
    );
  } catch (error) {
    console.error("Error fetching business cards:", error);
    return [];
  }
}

export async function markNotificationAsRead(
  notificationId: string
): Promise<void> {
  try {
    // TODO: Implement with Firebase
    const notificationRef = doc(db, "notifications", notificationId);
    await updateDoc(notificationRef, {
      read: true,
    });
    console.log("Marked as read:", notificationId);
  } catch (error) {
    console.error("Error marking notification as read:", error);
  }
}

export async function updateBusinessCard(
  cardId: string,
  data: Partial<BusinessCard>
): Promise<void> {
  try {
    // TODO: Implement with Firebase
    if (cardId === "new") {
      await addDoc(collection(db, "cards"), {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } else {
      const cardRef = doc(db, "cards", cardId);
      await updateDoc(cardRef, {
        ...data,
        updatedAt: new Date(),
      });
    }
    console.log("Updated card:", cardId, data);
  } catch (error) {
    console.error("Error updating business card:", error);
  }
}

export async function getShareStats(userId: string): Promise<ShareStats> {
  try {
    const statsRef = doc(db, "shareStats", userId);
    const statsDoc = await getDoc(statsRef);
    return statsDoc.data() as ShareStats;
    // return {
    //   totalViews: 0,
    //   qrScans: 0,
    //   linkClicks: 0,
    //   shares: 0,
    //   lastUpdated: new Date(),
    // };
  } catch (error) {
    console.error("Error fetching share stats:", error);
    return {
      totalViews: 0,
      qrScans: 0,
      linkClicks: 0,
      shares: 0,
      lastUpdated: new Date(),
    };
  }
}

export async function incrementShareStat(
  userId: string,
  type: keyof ShareStats
): Promise<void> {
  try {
    // TODO: Implement with Firebase
    const statsRef = doc(db, "shareStats", userId);
    await updateDoc(statsRef, {
      [type]: increment(1),
      lastUpdated: new Date(),
    });
    console.log("Incremented stat:", type);
  } catch (error) {
    console.error("Error incrementing share stat:", error);
  }
}
