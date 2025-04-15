import Link from "next/link";

export default function TarifsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8">
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
              Découvrez nos différentes options de tarification conçues pour
              répondre à tous vos besoins professionnels.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="agno-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-contrast">
              Plans Disponibles
            </h2>
            <p className="text-muted text-lg">
              Nous avons un plan adapté à votre situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basique Plan */}
            <div className="agno-card bg-white p-6 sm:p-8 hover-lift">
              <h3 className="text-xl font-bold mb-2 text-contrast">Basique</h3>
              <p className="text-muted text-sm mb-6">
                Une carte de visite connectée complète et prête à l'emploi, sans
                abonnement.
              </p>
              <div className="text-3xl font-bold mb-8 text-contrast">
                2500 Fcfa
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-orange-500"
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
                  <span className="text-muted">Carte de visite connectée</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-orange-500"
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
                  <span className="text-muted">
                    Profil digital personnalisable
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-orange-500"
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
                  <span className="text-muted">
                    Mise à jour illimitée des informations
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-orange-500"
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
                  <span className="text-muted">Collecte des leads</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-orange-500"
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
                  <span className="text-muted">
                    Gestion d'équipe centralisée
                  </span>
                </li>
              </ul>
              <button className="agno-button-primary w-full">
                Choisir ce plan
              </button>
            </div>

            {/* Standard Plan */}
            <div className="agno-card bg-[#f7931e] p-6 sm:p-8 hover-lift transform scale-105">
              <h3 className="text-xl font-bold mb-2 text-white">Standard</h3>
              <p className="text-white/90 text-sm mb-6">
                Expérimenter le pouvoir des possibilités infinies
              </p>
              <div className="text-3xl font-bold mb-4 text-white">
                4500 Fcfa
              </div>
              <div className="inline-block bg-white/20 text-white rounded-full px-4 py-1 text-sm mb-8">
                Économisez 50%
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-white">Carte de visite connectée</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-white">
                    Profil digital personnalisable
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-white">
                    Mise à jour illimitée des informations
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-white">Collecte des leads</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-white">
                    Gestion d'équipe centralisée
                  </span>
                </li>
              </ul>
              <button className="agno-button bg-white text-[#f7931e] hover:bg-white/90 w-full">
                Choisir ce plan
              </button>
            </div>

            {/* Premium Plan */}
            <div className="agno-card bg-white p-6 sm:p-8 hover-lift">
              <h3 className="text-xl font-bold mb-2 text-contrast">Premium</h3>
              <p className="text-muted text-sm mb-6">
                Découvrez de nouveaux superpouvoirs
              </p>
              <div className="text-3xl font-bold mb-8 text-contrast">
                7500 Fcfa
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-orange-500"
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
                  <span className="text-muted">Carte de visite connectée</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-orange-500"
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
                  <span className="text-muted">
                    Profil digital personnalisable
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-orange-500"
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
                  <span className="text-muted">
                    Mise à jour illimitée des informations
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-orange-500"
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
                  <span className="text-muted">Collecte des leads</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-orange-500"
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
                  <span className="text-muted">
                    Gestion d'équipe centralisée
                  </span>
                </li>
              </ul>
              <button className="agno-button-primary w-full">
                Choisir ce plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#FFE4E4] rounded-2xl p-8 relative overflow-hidden shadow-sm">
            <div className="absolute top-4 right-4">
              <svg
                className="w-12 h-12 text-[#e7302a]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.38 8A9.502 9.502 0 0112 2.5a9.502 9.502 0 019.215 7.182.75.75 0 101.456-.364C21.473 4.539 17.15 1 12 1a10.995 10.995 0 00-9.5 5.452V4.75a.75.75 0 00-1.5 0V8.5a1 1 0 001 1h3.75a.75.75 0 000-1.5H3.38zm-.595 6.318a.75.75 0 00-1.455.364C2.527 19.461 6.85 23 12 23c4.052 0 7.592-2.191 9.5-5.451v1.701a.75.75 0 001.5 0V15.5a1 1 0 00-1-1h-3.75a.75.75 0 000 1.5h2.37A9.502 9.502 0 0112 21.5c-4.446 0-8.181-3.055-9.215-7.182z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#e7302a] mb-4">
              Offres spéciales
            </h3>
            <p className="text-gray-800 text-lg max-w-3xl">
              Inscrivez-vous maintenant et{" "}
              <span className="bg-[#e7302a] text-white px-2 py-1 rounded-md">
                bénéficiez de 20% de réduction
              </span>{" "}
              sur votre premier mois avec le code promo AGNO20.
            </p>
            <Link
              href="/inscription"
              className="inline-block mt-6 text-[#e7302a] font-medium hover:text-[#cc0000]"
            >
              Obtenir la réduction
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Range Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explorez la gamme
            </h2>
            <p className="text-gray-600">
              Découvrez nos différents modèles de cartes de visite connectées
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-gray-100 rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <img
                  src="/card1.png"
                  alt="Carte de visite en PVC blanc"
                  className="w-full max-w-[300px]"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">
                  Carte de visite en PVC blanc
                </h3>
                <p className="text-gray-600 mb-6">
                  Élégante et professionnelle, notre carte en PVC blanc offre
                  une finition premium.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-1">Dimensions :</p>
                    <p className="text-gray-600">85,5x54 mm</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Poids :</p>
                    <p className="text-gray-600">5g</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Épaisseur :</p>
                    <p className="text-gray-600">0,72 mm</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Technologie :</p>
                    <p className="text-gray-600">NFC et QR code</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Compatibilité :</p>
                    <p className="text-gray-600">iOS & Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Black Card */}
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="flex flex-col gap-6">
                <img
                  src="/card1.png"
                  alt="Carte de visite en PVC noir"
                  className="w-full max-w-[200px] mx-auto"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Carte de visite en PVC noir
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Design élégant et moderne pour un impact maximal
                  </p>
                  <div className="space-y-2 mb-6">
                    <p>
                      <span className="font-semibold">Dimensions :</span>{" "}
                      85,5x54 mm
                    </p>
                    <p>
                      <span className="font-semibold">Poids :</span> 5g
                    </p>
                    <p>
                      <span className="font-semibold">Épaisseur :</span> 0,72 mm
                    </p>
                    <p>
                      <span className="font-semibold">Technologie :</span> NFC
                      et QR code
                    </p>
                    <p>
                      <span className="font-semibold">Compatibilité :</span> iOS
                      & Android
                    </p>
                  </div>
                  <div className="text-xl font-bold mb-4">5000 Fcfa</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Tarif dégressif selon quantité
                  </p>
                  <Link
                    href="/commander"
                    className="inline-block bg-[#f7931e] text-white px-6 py-2 rounded-full hover:bg-[#e07d0d] transition-colors"
                  >
                    Acheter
                  </Link>
                </div>
              </div>
            </div>

            {/* Orange Card */}
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="flex flex-col gap-6">
                <img
                  src="/card2.png"
                  alt="Carte de visite en PVC orange"
                  className="w-full max-w-[200px] mx-auto"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Carte de visite en PVC orange
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Une touche de couleur pour se démarquer
                  </p>
                  <div className="space-y-2 mb-6">
                    <p>
                      <span className="font-semibold">Dimensions :</span>{" "}
                      85,5x54 mm
                    </p>
                    <p>
                      <span className="font-semibold">Poids :</span> 5g
                    </p>
                    <p>
                      <span className="font-semibold">Épaisseur :</span> 0,72 mm
                    </p>
                    <p>
                      <span className="font-semibold">Technologie :</span> NFC
                      et QR code
                    </p>
                    <p>
                      <span className="font-semibold">Compatibilité :</span> iOS
                      & Android
                    </p>
                  </div>
                  <div className="text-xl font-bold mb-4">5000 Fcfa</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Tarif dégressif selon quantité
                  </p>
                  <Link
                    href="/commander"
                    className="inline-block bg-[#f7931e] text-white px-6 py-2 rounded-full hover:bg-[#e07d0d] transition-colors"
                  >
                    Acheter
                  </Link>
                </div>
              </div>
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
              className="bg-white text-agno agno-button hover:bg-gray-100 hover:text-agno-dark transition-colors"
            >
              Créer un compte
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white agno-button hover:bg-white/20 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
