"use client";

import NotificationItem from "@/components/notifications/NotificationItem";
import { useState } from "react";

const MOCK_NOTIFICATIONS = [
  {
    id: "1",
    title: "Nouvelle connexion détectée",
    message:
      "Une nouvelle connexion a été détectée sur votre compte depuis Paris, France. Si ce n'était pas vous, veuillez sécuriser votre compte.",
    createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    read: false,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const handleMarkAsRead = (id: string) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <div className="max-w-2xl">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            {...notification}
            onMarkAsRead={handleMarkAsRead}
          />
        ))}
        {notifications.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            Aucune notification pour le moment
          </p>
        )}
      </div>
    </div>
  );
}
