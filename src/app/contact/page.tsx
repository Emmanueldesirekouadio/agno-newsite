"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-[#fff5eb] to-[#ffe4cc] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[#f7931e]">Comment pouvons nous</span>
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            <span className="bg-[#f7931e] text-white px-8 py-2 rounded-full">
              vous aider?
            </span>
          </h2>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="agno-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Informations de contact
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-agno/10 p-3 rounded-full mr-4">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">contact@agno.fr</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-agno/10 p-3 rounded-full mr-4">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-agno/10 p-3 rounded-full mr-4">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      123 Rue de la République
                      <br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
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
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-agno text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-agno-dark transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions Fréquemment Posées
            </h2>
            <p className="text-gray-600">
              Trouvez rapidement des réponses à vos questions
            </p>
          </div>

          <div className="faq-section">
            {/* Question 1 */}
            <div className="faq-item" data-open={openQuestions.includes(0)}>
              <button className="faq-button" onClick={() => toggleQuestion(0)}>
                <h3 className="faq-question">
                  Comment puis-je modifier mes informations sur ma carte ?
                </h3>
                <svg
                  className="faq-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                Connectez-vous à votre compte Agno, accédez à la section "Mes
                cartes" et cliquez sur "Modifier". Vous pourrez alors mettre à
                jour toutes vos informations en temps réel.
              </div>
            </div>

            {/* Question 2 */}
            <div className="faq-item" data-open={openQuestions.includes(1)}>
              <button className="faq-button" onClick={() => toggleQuestion(1)}>
                <h3 className="faq-question">
                  Combien de temps prend la livraison de ma carte ?
                </h3>
                <svg
                  className="faq-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                La livraison standard prend entre 3 à 5 jours ouvrés. Pour les
                commandes urgentes, nous proposons une option de livraison
                express sous 24-48h.
              </div>
            </div>

            {/* Question 3 */}
            <div className="faq-item" data-open={openQuestions.includes(2)}>
              <button className="faq-button" onClick={() => toggleQuestion(2)}>
                <h3 className="faq-question">
                  Puis-je commander des cartes en gros ?
                </h3>
                <svg
                  className="faq-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                Oui, nous proposons des tarifs dégressifs pour les commandes en
                volume. Contactez notre service commercial pour obtenir un devis
                personnalisé.
              </div>
            </div>

            {/* Question 4 */}
            <div className="faq-item" data-open={openQuestions.includes(3)}>
              <button className="faq-button" onClick={() => toggleQuestion(3)}>
                <h3 className="faq-question">
                  Y a-t-il des frais cachés avec Agno ?
                </h3>
                <svg
                  className="faq-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                Non, tous nos prix sont transparents et incluent la TVA. Il n'y
                a aucun frais caché ni abonnement obligatoire.
              </div>
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
            className="bg-white text-agno px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
          >
            Créer votre carte gratuitement
          </Link>
        </div>
      </section>
    </div>
  );
}
