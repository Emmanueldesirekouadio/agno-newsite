import {
  getUserNotifications,
  markNotificationAsRead,
} from "@/lib/services/dashboard";
import type { Notification } from "@/types/dashboard";
import { useEffect, useState } from "react";

export function useNotifications(userId: string | undefined) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    // Initial fetch
    const fetchNotifications = async () => {
      try {
        const data = await getUserNotifications(userId);
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();

    // TODO: Implement real-time updates with Firebase
    // This will be implemented when you set up Firebase
    // const unsubscribe = onSnapshot(
    //   query(collection(db, "notifications"),
    //   where("userId", "==", userId),
    //   where("read", "==", false)),
    //   (snapshot) => {
    //     const newNotifications = snapshot.docs.map(doc => ({
    //       id: doc.id,
    //       ...doc.data()
    //     }));
    //     setNotifications(newNotifications);
    //   }
    // );

    // Polling fallback (temporary until Firebase is set up)
    const interval = setInterval(fetchNotifications, 30000);

    return () => {
      clearInterval(interval);
      // unsubscribe(); // Uncomment when Firebase is set up
    };
  }, [userId]);

  const markAsRead = async (notificationId: string) => {
    try {
      await markNotificationAsRead(notificationId);
      setNotifications(notifications.filter((n) => n.id !== notificationId));
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const markAllAsRead = async () => {
    try {
      await Promise.all(notifications.map((n) => markNotificationAsRead(n.id)));
      setNotifications([]);
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
    }
  };

  return {
    notifications,
    loading,
    markAsRead,
    markAllAsRead,
  };
}
