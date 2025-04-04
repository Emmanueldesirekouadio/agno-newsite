"use client";

import Link from "next/link";
import { useState } from "react";

export default function ConnexionPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the login logic, usually by calling an API
    alert("Connexion en cours... Cette fonction n'est pas encore implémentée.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-agno to-agno-dark text-white py-16 md:py-24">
        <div className="agno-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Connexion
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Accédez à votre espace personnel
          </p>
        </div>
      </section>

      {/* Login Form */}
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

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mot de passe
                  </label>
                  <Link
                    href="/mot-de-passe-oublie"
                    className="text-sm text-agno hover:underline"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 text-agno focus:ring-agno border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Se souvenir de moi
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-agno text-white py-3 px-6 rounded-lg font-semibold hover:bg-agno-dark transition-colors"
              >
                Se connecter
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Vous n'avez pas de compte ?{" "}
                <Link href="/inscription" className="text-agno hover:underline">
                  Inscrivez-vous
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="agno-container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir Agno ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-agno/10 p-3 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sécurité renforcée</h3>
              <p className="text-gray-600">
                Protection de vos données avec les dernières technologies de
                sécurité.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-agno/10 p-3 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Gestion multi-comptes
              </h3>
              <p className="text-gray-600">
                Gérez facilement plusieurs profils depuis un seul compte.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-agno/10 p-3 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personnalisation avancée
              </h3>
              <p className="text-gray-600">
                Adaptez votre expérience selon vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
