import Image from "next/image";
import Link from "next/link";

export default function TarifsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section - Optimisé pour grand écran */}
      <section className="w-full bg-white py-12 lg:py-16">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 text-lg mb-4">Nos tarifs</p>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <h1 className="mb-2">
                <span className="bg-[#e7302a] text-white px-4 py-1 rounded-sm">
                  Choisissez le plan
                </span>
                <span className="text-[#f7931e]"> qui</span>
              </h1>
              <h2 className="text-[#f7931e] text-3xl md:text-4xl lg:text-5xl">
                vous convient le mieux.
              </h2>
            </div>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-8">
              Des solutions adaptées à tous les besoins, de l'entrepreneur
              individuel aux grandes entreprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section - Refait avec des caractéristiques uniques */}
      <section className="w-full bg-gradient-to-br from-orange-50 to-orange-100 py-16">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Plans Disponibles
            </h2>
            <p className="text-gray-600 text-lg">
              Chaque plan est conçu pour répondre à des besoins spécifiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Plan Basique - Caractéristiques uniques */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    Basique
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Pour démarrer votre présence digitale
                  </p>
                  <div className="text-3xl font-bold mb-6 text-gray-900">
                    2000 <span className="text-lg">FCFA</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
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
                      <span>1 carte de visite connectée</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
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
                      <span>Profil digital basique</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
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
                      <span>Partage via QR code</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
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
                      <span>Support par email</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
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
                      <span>Statistiques mensuelles</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/sign-in?redirect=/dashboard/create-card"
                  className="block w-full px-6 py-3 text-center bg-[#FF9500] text-white rounded-full font-medium hover:bg-[#FF9500]/90 transition-colors"
                >
                  Commencer
                </Link>
              </div>
            </div>

            {/* Plan Standard - Mise en avant */}
            <div className="bg-[#f7931e] rounded-2xl shadow-lg p-8 transform scale-105 relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-tr-2xl rounded-bl-2xl">
                POPULAIRE
              </div>
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Standard
                  </h3>
                  <p className="text-white/90 mb-6">
                    Pour les professionnels ambitieux
                  </p>
                  <div className="text-3xl font-bold mb-6 text-white">
                    5000 <span className="text-lg">FCFA</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start text-white">
                      <svg
                        className="w-6 h-6 mr-2"
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
                      <span>3 cartes de visite connectées</span>
                    </li>
                    <li className="flex items-start text-white">
                      <svg
                        className="w-6 h-6 mr-2"
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
                      <span>Profil digital personnalisable</span>
                    </li>
                    <li className="flex items-start text-white">
                      <svg
                        className="w-6 h-6 mr-2"
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
                      <span>Partage NFC + QR code</span>
                    </li>
                    <li className="flex items-start text-white">
                      <svg
                        className="w-6 h-6 mr-2"
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
                    <li className="flex items-start text-white">
                      <svg
                        className="w-6 h-6 mr-2"
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
                      <span>Statistiques en temps réel</span>
                    </li>
                    <li className="flex items-start text-white">
                      <svg
                        className="w-6 h-6 mr-2"
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
                      <span>Gestion des leads</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/sign-in?redirect=/dashboard/create-card"
                  className="block w-full px-6 py-3 text-center bg-white text-[#f7931e] rounded-full font-medium hover:bg-gray-50 transition-colors"
                >
                  Commencer
                </Link>
              </div>
            </div>

            {/* Plan Premium - Caractéristiques avancées */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    Premium
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Solution complète pour entreprises
                  </p>
                  <div className="text-3xl font-bold mb-6 text-gray-900">
                    10000 <span className="text-lg">FCFA</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
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
                      <span>Cartes connectées illimitées</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
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
                      <span>Profil digital premium</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
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
                      <span>Technologie NFC avancée</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
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
                      <span>Support dédié 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
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
                      <span>Analytics avancés</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
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
                      <span>CRM intégré</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
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
                      <span>API & intégrations</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/sign-in?redirect=/dashboard/create-card"
                  className="block w-full px-6 py-3 text-center bg-[#FF9500] text-white rounded-full font-medium hover:bg-[#FF9500]/90 transition-colors"
                >
                  Commencer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Cartes Physiques - Nouveau design */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nos Cartes Physiques
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des cartes de visite NFC premium, conçues pour faire une
              impression durable
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Carte Premium */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-full md:w-1/2 aspect-[1.586] rounded-lg overflow-hidden">
                  <Image
                    src="/card1.png"
                    alt="Carte Premium"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Carte Premium
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Design minimaliste en PVC blanc premium avec finition mate
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <span className="font-medium mr-2">•</span>
                      NFC haute performance
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="font-medium mr-2">•</span>
                      QR code discret
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="font-medium mr-2">•</span>
                      Résistant à l'eau
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-gray-900 mb-4">
                    5000 FCFA
                  </div>
                  <Link
                    href="/sign-in?redirect=/dashboard/create-card"
                    className="inline-block px-6 py-3 bg-[#FF9500] text-white rounded-full font-medium hover:bg-[#FF9500]/90 transition-colors"
                  >
                    Commander
                  </Link>
                </div>
              </div>
            </div>

            {/* Carte Business */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-full md:w-1/2 aspect-[1.586] rounded-lg overflow-hidden">
                  <Image
                    src="/card2.png"
                    alt="Carte Business"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Carte Business</h3>
                  <p className="text-gray-300 mb-6">
                    Design professionnel en PVC noir avec finition brillante
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-300">
                      <span className="font-medium mr-2">•</span>
                      Double puce NFC
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="font-medium mr-2">•</span>
                      QR code personnalisé
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="font-medium mr-2">•</span>
                      Anti-rayures
                    </li>
                  </ul>
                  <div className="text-2xl font-bold mb-4">7500 FCFA</div>
                  <Link
                    href="/sign-in?redirect=/dashboard/create-card"
                    className="inline-block px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    Commander
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Optimisé */}
      <section className="w-full bg-gradient-to-r from-[#e7302a] to-[#f7931e] py-16">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Prêt à transformer votre networking?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Commencez gratuitement dès aujourd'hui et découvrez la puissance des
            cartes connectées.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/sign-up"
              className="px-8 py-4 bg-white text-[#e7302a] rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Créer un compte
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
