import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Bell, Check } from "lucide-react";

interface NotificationItemProps {
  id: string;
  title: string;
  message: string;
  createdAt: Date;
  read: boolean;
  onMarkAsRead: (id: string) => void;
}

export default function NotificationItem({
  id,
  title,
  message,
  createdAt,
  read,
  onMarkAsRead,
}: NotificationItemProps) {
  return (
    <div
      className={cn(
        "p-4 border rounded-lg mb-4 relative",
        read ? "bg-white" : "bg-blue-50"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div
            className={cn(
              "mt-1 p-2 rounded-full",
              read ? "bg-gray-100" : "bg-blue-100"
            )}
          >
            <Bell
              size={16}
              className={read ? "text-gray-600" : "text-blue-600"}
            />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{message}</p>
            <p className="text-gray-400 text-xs mt-2">
              {formatDistanceToNow(createdAt, { addSuffix: true, locale: fr })}
            </p>
          </div>
        </div>
        {!read && (
          <button
            onClick={() => onMarkAsRead(id)}
            className="text-blue-600 hover:text-blue-800"
          >
            <Check size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
