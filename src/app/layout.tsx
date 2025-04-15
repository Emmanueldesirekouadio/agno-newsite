import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
// import { store } from "@/redux/store";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Provider } from "react-redux";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agno - Vos cartes de visite digitales",
  description:
    "Des solutions innovantes pour créer et partager vos cartes de visite, facilement et efficacement.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const isDashboard = headersList.get("x-is-dashboard") === "1";

  return (
    <html lang="fr" className={inter.variable}>
      <body
        className="min-h-screen flex flex-col antialiased"
        suppressHydrationWarning
      >
        <div className="flex flex-col min-h-screen">
          {/* <Provider store={store}> */}
          {!isDashboard && <Header />}
          <main className="flex-1 w-full">{children}</main>
          {!isDashboard && <Footer />}
          {/* </Provider> */}
        </div>
      </body>
    </html>
  );
}
