import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-start justify-end overflow-hidden">
          <div className="relative w-[115%] h-full flex items-start justify-end -mr-[8%] -mt-[8%]">
            <Image
              src="/phone-screens/app-screen-2.png"
              alt="Background"
              width={1500}
              height={1200}
              sizes="100vw"
              className="object-cover object-right opacity-85 blur-[1px] w-[100%] md:w-[88%] h-[105%]"
              style={{
                transform:
                  "translateX(20%) scale(1.45) translateY(-15%) translateX(min(0px, calc(-25% + (var(--tw-translate-x)))))",
                objectPosition: "calc(92% - 8vw) top",
              }}
              priority
            />
          </div>
          {/* Enhanced Agno Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-agno from-30% via-agno/60 via-40% to-transparent to-75%" />
        </div>

        {/* Content */}
        <div className="agno-container relative z-10 h-full flex flex-col justify-between">
          <div className="flex flex-col md:flex-row items-center pt-8">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8 animate-slide-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Transformez votre Networking{" "}
                <span className="inline-block bg-[#e7302a] text-white px-6 py-2 mt-4 rounded-full">
                  avec
                </span>
                <span className="inline-block bg-[#e7302a] text-white px-6 py-2 ml-2 rounded-full">
                  Agno
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white">
                Des solutions innovantes pour créer et partager vos cartes de
                visite, facilement et efficacement.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/creer-carte"
                  className="bg-white text-agno-600 px-8 py-3 rounded-full font-medium flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  Commencer{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="/telecharger"
                  className="border border-white text-white px-8 py-3 rounded-full font-medium flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Télécharger l'application
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-[400px] w-full">
                {/* <Image
                  src="/phone-screens/"
                  alt="Agno mobile app screenshot"
                  width={400}
                  height={800}
                  style={{ objectFit: "contain" }}
                  priority
                /> */}
              </div>

              {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg> */}

              {/* <div className="text-lg font-bold">
                    10 <span className="text-sm font-normal">Cartes</span>
                  </div> */}

              {/* <div className="text-agno-200 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div className="text-lg font-bold">
                    2 <span className="text-sm font-normal">Connaissances</span>
                  </div> */}
            </div>
          </div>

          {/* Sponsors Banner */}
          <div className="absolute bottom-0 left-0 right-0 bg-agno/80 py-2.5 overflow-hidden">
            <div className="flex animate-scroll space-x-16 whitespace-nowrap">
              <div className="flex space-x-16 items-center pl-8">
                <Image
                  src="/logos/huffpost.png"
                  alt="HuffPost"
                  width={90}
                  height={30}
                  className="object-contain opacity-90"
                />
                <Image
                  src="/logos/bloomberg.png"
                  alt="Bloomberg"
                  width={90}
                  height={30}
                  className="object-contain opacity-90"
                />
                <Image
                  src="/logos/techcrunch.png"
                  alt="TechCrunch"
                  width={45}
                  height={30}
                  className="object-contain opacity-90"
                />
                <Image
                  src="/logos/harvard.png"
                  alt="Harvard Business Review"
                  width={90}
                  height={30}
                  className="object-contain opacity-90"
                />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex space-x-16 items-center">
                <Image
                  src="/logos/huffpost.png"
                  alt="HuffPost"
                  width={90}
                  height={30}
                  className="object-contain opacity-90"
                />
                <Image
                  src="/logos/bloomberg.png"
                  alt="Bloomberg"
                  width={90}
                  height={30}
                  className="object-contain opacity-90"
                />
                <Image
                  src="/logos/techcrunch.png"
                  alt="TechCrunch"
                  width={45}
                  height={30}
                  className="object-contain opacity-90"
                />
                <Image
                  src="/logos/harvard.png"
                  alt="Harvard Business Review"
                  width={90}
                  height={30}
                  className="object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-20">
          <div className="agno-container relative">
            <div className="inline-block bg-agno text-white px-8 py-4 rounded-xl text-4xl md:text-5xl font-bold">
              Agno
            </div>
            <p className="text-white text-lg md:text-xl max-w-xl mt-4">
              Transformez votre Networking avec Agno
            </p>
          </div>
        </div>

        <div className="bg-agno py-6">
          <div className="agno-container flex flex-wrap justify-center md:justify-between items-center gap-8">
            <p className="text-white text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur. Hendrerit a morbi
              adipiscing lacus
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Image
                src="/logos/huffpost.png"
                alt="HuffPost Logo"
                width={120}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <Image
                src="/logos/bloomberg.png"
                alt="Bloomberg Logo"
                width={120}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <Image
                src="/logos/techcrunch.png"
                alt="TechCrunch Logo"
                width={60}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <Image
                src="/logos/harvard.png"
                alt="Harvard Business Review Logo"
                width={120}
                height={40}
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}

      {/* "Découvrez Agno" Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="agno-container text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Découvrez Agno : Votre Partenaire en Networking
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des solutions innovantes pour créer et partager vos cartes de
            visite, facilement et efficacement.
          </p>
        </div>

        <div className="agno-container flex flex-col lg:flex-row gap-8">
          {/* First Feature Block */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex-1">
            <div className="bg-gray-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
              <svg
                className="h-8 w-8 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Création Facile</h3>
            <p className="text-gray-600 mb-4">
              Créez vos cartes de visite en quelques clics grâce à notre
              interface simple et intuitive.
            </p>
          </div>

          {/* Second Feature Block */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex-1">
            <div className="bg-gray-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
              <svg
                className="h-8 w-8 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Partage Instantané</h3>
            <p className="text-gray-600 mb-4">
              Partagez vos informations professionnelles en un instant avec un
              QR Code ou un lien personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Transformez votre Networking Section */}
      <section className="py-16 bg-gradient-to-r from-gray-700 to-gray-800 text-white">
        <div className="agno-container flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Transformez votre Networking
              <span className="inline-block bg-gray-600 text-white px-6 py-2 mt-4 rounded-full">
                avec
              </span>
              <span className="inline-block bg-gray-600 text-white px-6 py-2 ml-2 rounded-full">
                Agno
              </span>
            </h2>
            <p className="text-xl mb-8">
              Transformez votre Networking avec Agno
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute bottom-0 right-10 w-24 h-24 bg-gray-800 rounded-full z-0">
              &nbsp;
            </div>
            <div className="absolute top-20 left-10 w-16 h-16 bg-gray-600/30 rounded-full z-0">
              &nbsp;
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-700 py-16 text-white">
        <div className="agno-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre networking?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de professionnels qui utilisent déjà Agno
            pour leur networking.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/creer-carte"
              className="bg-white text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Créer votre carte gratuitement
            </Link>
            <Link
              href="/decouvrir"
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
