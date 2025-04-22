"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="sm:hidden">
          <button className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-100">
            <Menu size={24} />
            <span className="sr-only">Menu</span>
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 w-[280px] [&_button[data-state=open]]:text-[#FF9500]"
        >
          <Sidebar onClose={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>

      <aside className="hidden sm:block w-[280px] border-r bg-white">
        <Sidebar />
      </aside>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 pt-16 sm:pt-6">{children}</main>
    </div>
  );
}
