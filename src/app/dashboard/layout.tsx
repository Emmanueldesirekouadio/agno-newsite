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
    <div className="flex min-h-screen bg-[#FAFAFA] overflow-hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="fixed sm:hidden top-4 left-4 z-50">
          <button className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-200">
            <Menu size={24} />
            <span className="sr-only">Menu</span>
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 w-[280px] border-r [&_button[data-state=open]]:text-[#FF9500]"
        >
          <Sidebar onClose={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>

      <aside className="hidden sm:block w-[280px] border-r bg-white sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </aside>

      <main className="flex-1 min-h-screen overflow-y-auto">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
