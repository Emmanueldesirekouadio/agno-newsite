import { getShareStats, incrementShareStat } from "@/lib/services/dashboard";
import type { ShareStats } from "@/types/dashboard";
import { useEffect, useState } from "react";

export function useShareStats(userId: string | undefined) {
  const [stats, setStats] = useState<ShareStats>({
    totalViews: 0,
    qrScans: 0,
    linkClicks: 0,
    shares: 0,
    lastUpdated: new Date(),
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const fetchStats = async () => {
      try {
        const data = await getShareStats(userId);
        setStats(data);
      } catch (error) {
        console.error("Error fetching share stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // TODO: Implement real-time updates with Firebase
    // const unsubscribe = onSnapshot(doc(db, "shareStats", userId), (doc) => {
    //   if (doc.exists()) {
    //     setStats(doc.data() as ShareStats);
    //   }
    // });

    // Polling fallback
    const interval = setInterval(fetchStats, 30000);

    return () => {
      clearInterval(interval);
      // unsubscribe(); // Uncomment when Firebase is set up
    };
  }, [userId]);

  const increment = async (type: keyof ShareStats) => {
    if (!userId || type === "lastUpdated") return;

    try {
      await incrementShareStat(userId, type);
      setStats((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
        lastUpdated: new Date(),
      }));
    } catch (error) {
      console.error("Error incrementing stat:", error);
    }
  };

  return {
    stats,
    loading,
    increment,
  };
}
