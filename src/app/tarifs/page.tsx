import Link from "next/link";

export default function TarifsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-agno to-agno-dark text-white py-16 md:py-24">
        <div className="agno-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nos Tarifs
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Des offres adaptées à vos besoins, de l'utilisation personnelle aux
            solutions d'entreprise
          </p>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="agno-container">
          <div className="flex flex-wrap mb-10 justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mr-4">
              Nos forfaits
            </h2>
            <div className="flex items-center mt-4 md:mt-0 bg-gray-200 p-1 rounded-full">
              <button className="px-4 py-2 rounded-full bg-white text-agno shadow-sm font-medium">
                Mensuel
              </button>
              <button className="px-4 py-2 rounded-full text-gray-700 font-medium">
                Annuel (-20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gratuit Plan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-transform hover:scale-[1.01]">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Gratuit</h3>
                <div className="text-4xl font-bold mb-6">
                  0€{" "}
                  <span className="text-sm font-normal text-gray-500">
                    /mois
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Parfait pour commencer avec les cartes digitales
                </p>
                <Link
                  href="/inscription?plan=gratuit"
                  className="block text-center py-3 px-4 bg-white border-2 border-agno text-agno font-semibold rounded-lg hover:bg-agno-dark transition-colors"
                >
                  Commencer gratuitement
                </Link>
              </div>
              <div className="border-t border-gray-200 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>2 cartes de visite digitales</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>Modèles de base</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>Partage par QR code</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>Statistiques basiques</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <svg
                      className="h-5 w-5 text-gray-300 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span>Personnalisation avancée</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <svg
                      className="h-5 w-5 text-gray-300 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span>Gestion des contacts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-agno transform scale-[1.02] relative z-10">
              <div className="absolute top-0 right-0 bg-agno text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
                Populaire
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-6">
                  9.99€{" "}
                  <span className="text-sm font-normal text-gray-500">
                    /mois
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Pour les professionnels qui veulent se démarquer
                </p>
                <Link
                  href="/inscription?plan=pro"
                  className="block text-center py-3 px-4 bg-agno text-white font-semibold rounded-lg hover:bg-agno-dark transition-colors"
                >
                  Commencer l'essai gratuit
                </Link>
              </div>
              <div className="border-t border-gray-200 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>
                      <strong>10 cartes de visite digitales</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>Tous les modèles premium</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>Personnalisation avancée</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>Partage multicanal</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>Statistiques avancées</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>Gestion des contacts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-transform hover:scale-[1.01]">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Entreprise</h3>
                <div className="text-4xl font-bold mb-6">
                  29.99€{" "}
                  <span className="text-sm font-normal text-gray-500">
                    /mois
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Pour les équipes et entreprises
                </p>
                <Link
                  href="/contact?subject=enterprise"
                  className="block text-center py-3 px-4 bg-white border-2 border-agno text-agno font-semibold rounded-lg hover:bg-agno-dark transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
              <div className="border-t border-gray-200 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>
                      <strong>Cartes illimitées</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>Gestion d'équipe</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>Intégration à votre marque</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>API dédiée</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>Support prioritaire</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                    <span>Formations personnalisées</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="agno-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Questions Fréquentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Puis-je changer de forfait à tout moment?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez passer à un niveau supérieur à tout moment. Si
                vous passez à un forfait inférieur, le changement sera effectif
                à la fin de votre cycle de facturation.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Y a-t-il un essai gratuit?
              </h3>
              <p className="text-gray-600">
                Oui, nous offrons un essai gratuit de 14 jours pour notre plan
                Pro. Aucune carte de crédit n'est requise pour l'essai.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Comment fonctionne la facturation?
              </h3>
              <p className="text-gray-600">
                La facturation se fait mensuellement ou annuellement, selon
                votre choix. Pour le plan annuel, vous bénéficiez d'une remise
                de 20%.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Puis-je annuler à tout moment?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez annuler votre abonnement à tout moment. Votre
                accès sera maintenu jusqu'à la fin de la période payée.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Comment fonctionne le plan Entreprise?
              </h3>
              <p className="text-gray-600">
                Le plan Entreprise est personnalisé selon vos besoins.
                Contactez-nous pour discuter de vos exigences et obtenir un
                devis sur mesure.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Y a-t-il des frais cachés?
              </h3>
              <p className="text-gray-600">
                Non, notre politique de tarification est transparente. Le prix
                affiché est le prix que vous payez, sans frais cachés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-agno py-16 text-white">
        <div className="agno-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre networking?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Commencez gratuitement dès aujourd'hui, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/inscription"
              className="bg-white text-agno agno-button hover:bg-agno-dark transition-colors"
            >
              Créer un compte
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white agno-button hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
