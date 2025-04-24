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
      {/* Mobile Menu Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className="fixed top-4 left-4 z-50 p-2.5 bg-white rounded-xl shadow-lg hover:bg-gray-50 transition-colors lg:hidden focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 w-[280px] border-r border-gray-200 bg-white [&_button[data-state=open]]:text-[#FF9500]"
        >
          <Sidebar onClose={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[280px] border-r border-gray-200 bg-white sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-4 py-16 sm:p-6 lg:p-8 lg:py-6 min-h-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
