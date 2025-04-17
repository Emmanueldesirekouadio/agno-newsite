"use client";

import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-agno" : "text-gray-800";
  };

  return (
    <header className="w-full bg-white py-4 border-b sticky top-0 z-50">
      <div className="agno-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-24 w-24 mr-2">
            <Image
              src="/logoagno.png"
              alt="Agno Logo"
              width={120}
              height={48}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`${isActive("/")} font-medium`}>
            Accueil
          </Link>
          <Link
            href="/fonctionnalites"
            className={`${isActive("/fonctionnalites")} font-medium`}
          >
            Fonctionnalités
          </Link>
          <Link
            href="/sign-up"
            className={`${isActive("/sign-up")} font-medium`}
          >
            Espace Client
          </Link>
          <Link href="/tarifs" className={`${isActive("/tarifs")} font-medium`}>
            Tarifs
          </Link>
          <Link
            href="/contact"
            className={`${isActive("/contact")} font-medium`}
          >
            Contact & support
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="flex items-center justify-center px-6 py-2 border border-agno text-agno rounded-full font-semibold hover:bg-agno/10 transition-colors">
                <span>Connexion</span>
              </button>
            </SignInButton>
            <Link
              href="/creer-carte"
              className="flex items-center justify-center px-6 py-2 bg-agno text-white rounded-full font-semibold hover:bg-agno-dark transition-colors"
            >
              <span>Créer une carte</span>
            </Link>
          </SignedOut>
          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-agno focus:outline-none"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg z-50">
          <div className="p-4 flex flex-col space-y-4">
            <Link
              href="/"
              className={`${isActive("/")} py-2 font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/fonctionnalites"
              className={`${isActive("/fonctionnalites")} py-2 font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Fonctionnalités
            </Link>
            <Link
              href="/sign-up"
              className={`${isActive("/sign-up")} py-2 font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Espace Client
            </Link>
            <Link
              href="/tarifs"
              className={`${isActive("/tarifs")} py-2 font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link
              href="/contact"
              className={`${isActive("/contact")} py-2 font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact & support
            </Link>

            <div className="pt-4 flex flex-col space-y-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="flex items-center justify-center px-6 py-2 border border-agno text-agno rounded-full font-semibold hover:bg-agno/10 transition-colors">
                    <span>Connexion</span>
                  </button>
                </SignInButton>
                <Link
                  href="/creer-carte"
                  className="flex items-center justify-center px-6 py-2 bg-agno text-white rounded-full font-semibold hover:bg-agno-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Créer une carte</span>
                </Link>
              </SignedOut>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
