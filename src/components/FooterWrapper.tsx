"use client";

import Footer from "@/components/layout/footer";
import { usePathname } from "next/navigation";

export default function FooterWrapper() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  if (isDashboard) return null;
  return <Footer />;
}
