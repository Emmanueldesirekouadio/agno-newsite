"use client";

import Link from "next/link";
import { useState } from "react";

export default function MotDePasseOubliePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send a password reset request to the server
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-agno to-agno-dark text-white py-16 md:py-24">
        <div className="agno-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Mot de passe oublié
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Réinitialisez votre mot de passe en quelques étapes
          </p>
        </div>
      </section>

      {/* Reset Password Form */}
      <section className="py-16 md:py-24">
        <div className="agno-container">
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno"
                  placeholder="john@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-agno text-white py-3 px-6 rounded-lg font-semibold hover:bg-agno-dark transition-colors"
              >
                Réinitialiser le mot de passe
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Vous vous souvenez de votre mot de passe ?{" "}
                <Link href="/connexion" className="text-agno hover:underline">
                  Connectez-vous
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="agno-container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Besoin d'aide ?
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Link
              href="/contact"
              className="text-agno hover:underline flex items-center justify-center"
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contactez notre support
            </Link>
            <Link
              href="/faq"
              className="text-agno hover:underline flex items-center justify-center"
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Consultez notre FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
