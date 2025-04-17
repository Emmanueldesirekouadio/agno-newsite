"use client";

import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-[#FAFAFA] overflow-auto">
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
