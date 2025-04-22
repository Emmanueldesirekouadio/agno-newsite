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

export const metadata = {
  title: "Agno - Vos cartes de visite digitales",
  description:
    "Des solutions innovantes pour créer et partager vos cartes de visite, facilement et efficacement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body
        className="min-h-screen antialiased"
        suppressHydrationWarning={true}
      >
        <ClerkProvider>
          <HeaderWrapper />
          {children}
          <FooterWrapper />
        </ClerkProvider>
      </body>
    </html>
  );
}
