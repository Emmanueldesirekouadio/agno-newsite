"use client";

import Link from "next/link";
import { useState } from "react";

export default function InscriptionPage() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    jobTitle: "",
    agreeTerms: false,
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
    // Here you would handle the form submission, like sending data to an API
    alert("Inscription réussie ! Vous recevrez un email de confirmation.");
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-agno to-agno-dark text-white py-16 md:py-24">
        <div className="agno-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Créez votre compte
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Commencez à créer vos cartes de visite numériques en quelques
            minutes
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 md:py-24">
        <div className="agno-container">
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno"
                  placeholder="John Doe"
                />
              </div>

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
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-agno focus:ring-agno border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  J'accepte les{" "}
                  <Link
                    href="/conditions"
                    className="text-agno hover:underline"
                  >
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link
                    href="/confidentialite"
                    className="text-agno hover:underline"
                  >
                    politique de confidentialité
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-agno text-white py-3 px-6 rounded-lg font-semibold hover:bg-agno-dark transition-colors"
              >
                Créer un compte
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Déjà un compte ?{" "}
                <Link href="/connexion" className="text-agno hover:underline">
                  Connectez-vous
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
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Création facile</h3>
              <p className="text-gray-600">
                Créez votre carte de visite numérique en quelques minutes avec
                notre interface intuitive.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Partage instantané</h3>
              <p className="text-gray-600">
                Partagez votre carte avec n'importe qui, n'importe où, en un
                seul clic.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Statistiques détaillées
              </h3>
              <p className="text-gray-600">
                Suivez l'utilisation de votre carte et mesurez son impact avec
                nos outils d'analyse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-agno py-16 text-white">
        <div className="agno-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl mb-8">
            Créez votre première carte de visite numérique gratuitement dès
            aujourd'hui
          </p>
          <Link
            href="/inscription"
            className="bg-white text-agno agno-button hover:bg-gray-100 hover:text-agno-dark transition-colors"
          >
            Créer votre carte gratuitement
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="agno-container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Les avantages d'Agno
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-agno-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Simple et rapide</h3>
              <p className="text-gray-600">
                Créez et partagez vos cartes de visite digitales en quelques
                minutes seulement.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-agno-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Personnalisable</h3>
              <p className="text-gray-600">
                Adaptez vos cartes à votre image professionnelle avec de
                nombreuses options de personnalisation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-agno-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Analytiques détaillées</h3>
              <p className="text-gray-600">
                Suivez qui consulte vos cartes et optimisez votre stratégie de
                networking avec des données précises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="agno-container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Questions fréquentes sur l'inscription
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                L'inscription est-elle gratuite ?
              </h3>
              <p className="text-gray-600">
                Oui, l'inscription à Agno est totalement gratuite. Vous pouvez
                créer un compte et utiliser les fonctionnalités de base sans
                frais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Combien de cartes puis-je créer ?
              </h3>
              <p className="text-gray-600">
                Le plan gratuit vous permet de créer jusqu'à 2 cartes digitales.
                Pour des besoins plus importants, découvrez nos forfaits Pro et
                Entreprise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Puis-je changer de forfait plus tard ?
              </h3>
              <p className="text-gray-600">
                Absolument ! Vous pouvez passer à un forfait supérieur à tout
                moment depuis votre espace client.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Comment fonctionne le partage de cartes ?
              </h3>
              <p className="text-gray-600">
                Vous pouvez partager vos cartes via QR code, lien direct, email,
                SMS ou sur les réseaux sociaux en quelques clics depuis votre
                tableau de bord.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
