"use client";

import FooterWrapper from "@/components/FooterWrapper";
import HeaderWrapper from "@/components/HeaderWrapper";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="fr" className={inter.variable}>
        <body className="min-h-screen antialiased">
          <HeaderWrapper />
          {children}
          <FooterWrapper />
        </body>
      </html>
    </ClerkProvider>
  );
}
