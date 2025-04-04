"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white py-4 border-b sticky top-0 z-50">
      <div className="agno-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-12 mr-2">
            <Image
              src="/logoagno.png"
              alt="Agno Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-800 hover:text-agno font-medium">
            Accueil
          </Link>
          <Link
            href="/fonctionnalites"
            className="text-gray-800 hover:text-agno font-medium"
          >
            Fonctionnalités
          </Link>
          <Link
            href="/espace-client"
            className="text-gray-800 hover:text-agno font-medium"
          >
            Espace Client
          </Link>
          <Link
            href="/tarifs"
            className="text-gray-800 hover:text-agno font-medium"
          >
            Tarifs
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-agno font-medium"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-gray-800 hover:text-agno font-medium"
          >
            Blog
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/connexion"
            className="flex items-center justify-center px-6 py-2 border border-agno text-agno rounded-full font-semibold hover:bg-agno/10 transition-colors"
          >
            <span>Connexion</span>
          </Link>
          <Link
            href="/inscription"
            className="flex items-center justify-center px-6 py-2 bg-agno text-white rounded-full font-semibold hover:bg-agno-dark transition-colors"
          >
            <span>Inscription</span>
          </Link>
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
              className="text-gray-800 hover:text-agno py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/fonctionnalites"
              className="text-gray-800 hover:text-agno py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Fonctionnalités
            </Link>
            <Link
              href="/espace-client"
              className="text-gray-800 hover:text-agno py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Espace Client
            </Link>
            <Link
              href="/tarifs"
              className="text-gray-800 hover:text-agno py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-agno py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-gray-800 hover:text-agno py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link
                href="/connexion"
                className="flex items-center justify-center px-6 py-2 border border-agno text-agno rounded-full font-semibold hover:bg-agno/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Connexion</span>
              </Link>
              <Link
                href="/inscription"
                className="flex items-center justify-center px-6 py-2 bg-agno text-white rounded-full font-semibold hover:bg-agno-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Inscription</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
