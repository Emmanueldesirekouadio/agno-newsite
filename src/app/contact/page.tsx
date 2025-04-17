"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Fermer le popup après 5 secondes
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      // Simuler un délai d'envoi
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simuler un succès (dans un cas réel, vous enverriez les données à un API)
      console.log("Message envoyé:", data);

      // Réinitialiser le formulaire et afficher le message de succès
      reset();
      setSubmitSuccess(true);
      setShowPopup(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      setSubmitError(
        "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Popup de confirmation */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4 transform transition-all animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <svg
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
              Message envoyé avec succès!
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Nous avons bien reçu votre message et vous répondrons dans les
              plus brefs délais.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#FF9500] text-white px-6 py-2 rounded-full font-medium hover:bg-[#FF9500]/90 transition-all duration-200 hover:shadow-md active:transform active:scale-[0.98]"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-[#fff5eb] to-[#ffe4cc] section-padding">
        <div className="agno-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-[#FF9500]">Comment pouvons nous</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-[#FF9500] text-white px-6 sm:px-8 py-2 rounded-full inline-block">
                vous aider?
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="agno-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Informations de contact
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#FF9500]"
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
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Téléphone
                    </h3>
                    <p className="text-gray-600">+225 0789637733</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#FF9500]"
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
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">contact@agno.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#FF9500]"
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
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Adresse
                    </h3>
                    <p className="text-gray-600">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", { required: "Le nom est requis" })}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-[#FF9500] focus:ring-1 focus:ring-[#FF9500] text-base transition-colors`}
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "L'email est requis",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email invalide",
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-[#FF9500] focus:ring-1 focus:ring-[#FF9500] text-base transition-colors`}
                      placeholder="Votre email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Le message est requis",
                    })}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-[#FF9500] focus:ring-1 focus:ring-[#FF9500] text-base transition-colors resize-none`}
                    placeholder="Votre message"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-[#FF9500] text-white rounded-full font-medium transition-all duration-200 
                    ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-[#FF9500]/90 hover:shadow-md active:transform active:scale-[0.98]"
                    }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Envoi en cours...</span>
                    </div>
                  ) : (
                    "Envoyer le message"
                  )}
                </button>
                {submitError && (
                  <p className="text-red-500 text-sm text-center">
                    {submitError}
                  </p>
                )}
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

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleQuestion(0)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  Comment puis-je modifier mes informations sur ma carte ?
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openQuestions.includes(0) ? "transform rotate-180" : ""
                  }`}
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
              {openQuestions.includes(0) && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">
                    Connectez-vous à votre compte Agno, accédez à la section
                    "Mes cartes" et cliquez sur "Modifier". Vous pourrez alors
                    mettre à jour toutes vos informations en temps réel.
                  </p>
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleQuestion(1)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  Combien de temps prend la livraison de ma carte ?
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openQuestions.includes(1) ? "transform rotate-180" : ""
                  }`}
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
              {openQuestions.includes(1) && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">
                    La livraison standard prend entre 3 à 5 jours ouvrés. Pour
                    les commandes urgentes, nous proposons une option de
                    livraison express sous 24-48h.
                  </p>
                </div>
              )}
            </div>

            {/* Question 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleQuestion(2)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  Puis-je commander des cartes en gros ?
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openQuestions.includes(2) ? "transform rotate-180" : ""
                  }`}
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
              {openQuestions.includes(2) && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">
                    Oui, nous proposons des tarifs dégressifs pour les commandes
                    en volume. Contactez notre service commercial pour obtenir
                    un devis personnalisé.
                  </p>
                </div>
              )}
            </div>

            {/* Question 4 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleQuestion(3)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  Y a-t-il des frais cachés avec Agno ?
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openQuestions.includes(3) ? "transform rotate-180" : ""
                  }`}
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
              {openQuestions.includes(3) && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">
                    Non, tous nos prix sont transparents et incluent la TVA. Il
                    n'y a aucun frais caché ni abonnement obligatoire.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF9500] py-16 text-white">
        <div className="agno-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl mb-8">
            Créez votre première carte de visite numérique gratuitement dès
            aujourd'hui
          </p>
          <Link
            href="/sign-up"
            className="bg-white text-[#FF9500] px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-200 hover:shadow-md active:transform active:scale-[0.98]"
          >
            Créer votre carte gratuitement
          </Link>
        </div>
      </section>
    </div>
  );
}
