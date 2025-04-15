import Image from "next/image";
import Link from "next/link";

export default function FonctionnalitesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#FFFCEE] py-4 sm:py-6 md:py-10 px-3 sm:px-4 md:px-10 lg:px-20 relative">
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-row items-start justify-between gap-3 sm:gap-4 md:gap-10">
            {/* Left Content */}
            <div className="w-[45%] md:w-1/2 space-y-2 sm:space-y-3 md:space-y-6 pt-1 sm:pt-2">
              <h1 className="inline-block bg-[#F18701] text-white px-2 sm:px-3 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-lg text-base sm:text-lg md:text-2xl lg:text-3xl">
                Fonctionnalités AGNO
              </h1>

              <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-1 sm:mt-2 md:mt-4 leading-tight">
                Explorez les outils qui simplifient votre communication.
              </h2>

              <div className="flex flex-col gap-2 md:gap-4 py-2 md:py-4">
                <div className="feature-item flex items-center space-x-2">
                  <svg
                    className="check-icon w-4 md:w-5 h-4 md:h-5 text-[#F18701] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm md:text-base">
                    Création personnalisée
                  </span>
                </div>

                <div className="feature-item flex items-center space-x-2">
                  <svg
                    className="check-icon w-4 md:w-5 h-4 md:h-5 text-[#F18701] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm md:text-base">Partage facile</span>
                </div>

                <div className="feature-item flex items-center space-x-2">
                  <svg
                    className="check-icon w-4 md:w-5 h-4 md:h-5 text-[#F18701] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm md:text-base">
                    Mises à jour instantanées
                  </span>
                </div>
              </div>

              <button className="bg-[#F18701] text-white px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-3 rounded-lg hover:bg-[#F18701]/90 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap">
                Commencer maintenant
              </button>
            </div>

            {/* Right Content - Phone and Card Image */}
            <div className="w-[55%] md:w-1/2 relative h-[250px] md:h-[500px] flex items-center">
              <div className="relative h-full w-full pt-8 md:pt-16">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/phone-screens/tel&card.png"
                    alt="Phone&card"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full transform scale-110 md:scale-125 translate-y-0 md:translate-y-8"
                    priority
                  />
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-12 md:top-24 right-0 w-24 md:w-64 h-24 md:h-64 rounded-full bg-[#FFD580] opacity-40 z-0"></div>
                <div className="absolute bottom-8 md:bottom-20 right-4 md:right-10 w-12 md:w-32 h-12 md:h-32 rounded-full bg-[#FFD580] opacity-40 z-0"></div>
                <div className="absolute top-16 md:top-40 right-16 md:right-40 w-8 md:w-24 h-8 md:h-24 rounded-full bg-[#FFD580] opacity-30 z-0"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors Banner */}
        <div className="absolute -bottom-6 left-0 right-0 w-full">
          <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-agno/95 backdrop-blur-sm py-2 md:py-2.5 overflow-hidden">
            <div className="absolute left-0 h-[calc(100%+1.25rem)] -top-2.5 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10"></div>
            <div className="absolute right-0 h-[calc(100%+1.25rem)] -top-2.5 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white/80 via-white/40 to-transparent z-10"></div>
            <div className="max-w-[2400px] mx-auto relative overflow-hidden">
              <div className="relative w-[200%] flex animate-scroll">
                <div className="flex w-1/2 justify-around items-center px-8 md:px-16 lg:px-24">
                  <Image
                    src="/logos/harvard.png"
                    alt="Harvard Business Review"
                    width={60}
                    height={20}
                    className="object-contain opacity-90 w-[60px] sm:w-[75px] md:w-[90px] h-auto"
                  />
                  <Image
                    src="/logos/logocie.png"
                    alt="CIE"
                    width={60}
                    height={20}
                    className="object-contain opacity-90 w-[60px] sm:w-[75px] md:w-[90px] h-auto"
                  />
                </div>
                <div className="flex w-1/2 justify-around items-center px-8 md:px-16 lg:px-24">
                  <Image
                    src="/logos/harvard.png"
                    alt="Harvard Business Review"
                    width={60}
                    height={20}
                    className="object-contain opacity-90 w-[60px] sm:w-[75px] md:w-[90px] h-auto"
                  />
                  <Image
                    src="/logos/logocie.png"
                    alt="CIE"
                    width={60}
                    height={20}
                    className="object-contain opacity-90 w-[60px] sm:w-[75px] md:w-[90px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white w-full">
        <div className="w-full max-w-[2400px] mx-auto px-3 sm:px-4 md:px-8">
          {/* Création de Carte Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 mb-16 sm:mb-24">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px]">
                <Image
                  src="/phone-screens/mockup.png"
                  alt="Création de carte"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Création de Carte Personnalisée
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Avec Agno, créez des cartes de visite uniques qui reflètent
                votre identité professionnelle. Choisissez parmi une variété de
                modèles, couleurs et polices pour personnaliser votre carte
                selon vos préférences.
              </p>
            </div>
          </div>

          {/* Partagez en Un Clic Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Partagez en Un Clic
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Partagez vos informations de contact instantanément avec un QR
                Code ou un lien personnalisé. Vos contacts peuvent accéder à
                votre carte digitale sur leur smartphone, facilitant ainsi le
                networking.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px]">
                <Image
                  src="/phone-screens/tel01.png"
                  alt="Partage QR code"
                  fill
                  className="object-contain"
                />
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-32 xl:h-32">
                  <Image
                    src="/phone-screens/Qr.png"
                    alt="QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suivi des Performances Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#FFFCEE] w-full">
        <div className="w-full max-w-[2400px] mx-auto px-3 sm:px-4 md:px-8">
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Suivi des Performances
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Accédez à des statistiques détaillées sur l'interaction avec vos
              cartes. Découvrez combien de fois vos cartes ont été consultées et
              optimisez votre approche de networking en fonction des données
              recueillies.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {/* Cartes */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                10
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Cartes</div>
            </div>

            {/* Connaissances */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                24
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Connaissances
              </div>
            </div>

            {/* Produits */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                45
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Produits</div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                34
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Personnalisation Avancée Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#FFFCEE] w-full">
        <div className="w-full max-w-[2400px] mx-auto px-3 sm:px-4 md:px-8">
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Personnalisation Avancée
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
                  Allez au-delà des designs standard ! Agno vous permet
                  d'ajouter des éléments interactifs tels que des liens vers vos
                  réseaux sociaux, votre site web ou même des vidéos de
                  présentation.
                </p>
                <Link
                  href="/creer-carte"
                  className="bg-agno text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-agno/90 transition-colors inline-block text-sm sm:text-base"
                >
                  Créer votre carte de visite
                </Link>
              </div>
              {/* Right Content with Yellow Background */}
              <div className="w-full lg:w-1/2 bg-[#FFD246] p-8 md:p-12 relative flex items-center justify-center">
                <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
                  <Image
                    src="/Business.png"
                    alt="Card Mockup"
                    fill
                    className="object-contain transform rotate-[-15deg]"
                  />
                  {/* QR Code */}
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32">
                    <Image
                      src="/phone-screens/Qr.png"
                      alt="QR Code"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-agno py-12 sm:py-16 text-white w-full">
        <div className="w-full max-w-[2400px] mx-auto px-3 sm:px-4 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Prêt à essayer nos fonctionnalités?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Créez votre carte de visite digitale dès aujourd'hui et découvrez la
            puissance d'Agno.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              href="/creer-carte"
              className="bg-white text-agno px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-white/90 transition-colors text-sm sm:text-base"
            >
              Créer votre carte gratuitement
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-white/20 transition-colors text-sm sm:text-base"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
