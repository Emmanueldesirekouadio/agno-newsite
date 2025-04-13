import DigitalCard from "@/components/DigitalCard";
import { HoverEffect } from "@/components/ui/hover-effect";
import { FileText, GraduationCap, QrCode } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const projects = [
  {
    icon: "creation" as const,
    description:
      "Créez vos cartes de visite en quelques clics grâce à notre interface simple et intuitive.",
  },
  {
    icon: "qrcode" as const,
    description:
      "Partagez vos informations professionnelles en un instant avec un QR Code ou un lien personnalisé.",
  },
  {
    icon: "stats" as const,
    description:
      "Suivez l'interaction avec vos cartes et optimisez votre réseau grâce à nos statistiques détaillées.",
  },
] as const;

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
          <div className="absolute inset-0 bg-gradient-to-r from-agno from-20% via-agno/60 via-35% to-transparent to-70%" />
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
                  className="bg-white text-agno-600 px-8 py-3 rounded-full font-medium flex items-center justify-center hover:bg-gray-100 hover:text-agno-700 transition-colors"
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
              <div className="relative h-[400px] w-full">{/*todo  */}</div>
            </div>
          </div>

          {/* Sponsors Banner */}
          <div className="absolute bottom-0 left-0 right-0 w-full bg-agno/95 backdrop-blur-sm py-2.5 overflow-hidden">
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
      </section>

      {/* Rest of the sections remain unchanged */}

      {/* "Découvrez Agno" Section */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
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
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </section>

      {/* Pourquoi Choisir Agno Section */}
      <section className="w-full py-16 bg-[#FFF8F8]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
            {/* Left Column */}
            <div className="w-full lg:w-[45%]">
              <h2 className="text-[32px] font-bold text-gray-900 mb-3">
                Pourquoi Choisir Agno ?
              </h2>
              <p className="text-gray-600 mb-10">
                Les avantages des cartes digitales par rapport aux cartes papier
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-[#FFF8E7] rounded-md flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#FFB800]"
                    >
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Écologique :{" "}
                    </span>
                    <span className="text-gray-600">
                      Réduisez votre impact environnemental avec des cartes
                      digitales.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-[#FFF8E7] rounded-md flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#FFB800]"
                    >
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Économique :{" "}
                    </span>
                    <span className="text-gray-600">
                      Évitez les coûts d'impression et de réimpression.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-[#FFF8E7] rounded-md flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#FFB800]"
                    >
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Pratique :{" "}
                    </span>
                    <span className="text-gray-600">
                      Accédez à vos cartes à tout moment, partout, depuis votre
                      smartphone.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-[#FFF8E7] rounded-md flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#FFB800]"
                    >
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Interactivité :{" "}
                    </span>
                    <span className="text-gray-600">
                      Intégrez des liens vers vos réseaux sociaux, votre site
                      web, et plus encore.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-[55%]">
              <div className="relative w-full aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-[#FFF8F8]">
                {/* Fond dégradé avec la forme exacte */}
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 transform -skew-y-6"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF4B4B 0%, #FF6B6B 50%, #FFE5E5 100%)",
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    }}
                  />
                </div>

                {/* Image du téléphone */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="relative w-[85%] max-w-[500px]">
                    <div
                      className="w-full h-auto"
                      style={{
                        filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))",
                        transform: "scale(0.85)",
                      }}
                    >
                      <div className="relative bg-white rounded-[2rem] overflow-hidden">
                        <div className="w-full max-w-[400px] mx-auto p-4">
                          <DigitalCard />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* card  */}

      <div className="min-h-screen">
        <div className="orange-gradient-bg rounded-[2rem] mx-4 my-8 overflow-hidden">
          <div className="diagonal-lines" />
          <div className="content py-12 px-8">
            <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto">
              <div className="text-white mb-8 md:mb-0 md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">
                  Gérez vos cartes facilement :
                </h1>
                <p className="text-xl mb-6">
                  Connectez-vous à votre espace client pour :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">•</span>
                    <span>Modifier vos cartes existantes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">•</span>
                    <span>Suivre vos commandes et livraisons.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">•</span>
                    <span>
                      Accéder à des statistiques sur l'utilisation de vos
                      cartes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-xl">•</span>
                    <span>Créer de nouvelles cartes en toute simplicité.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col md:w-1/2 md:pl-8 w-full relative">
                {/* Cards with zigzag layout */}
                <div className="relative space-y-6">
                  {/* First card - shifted slightly right */}
                  <div className="card ml-auto mr-4 md:w-[90%]">
                    <div className="mr-6 text-orange-500">
                      <QrCode size={38} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">500 scans</p>
                      <p className="text-gray-500">Ce mois-ci</p>
                    </div>
                  </div>

                  {/* Second card - shifted left */}
                  <div className="card ml-2 md:w-[95%]">
                    <div className="mr-6 text-black">
                      <FileText size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg">Cartes créées</p>
                    </div>
                    <div className="ml-auto">
                      <span className="font-bold text-lg text-orange-500">
                        81
                      </span>
                    </div>
                  </div>

                  {/* Third card - shifted right again */}
                  <div className="card ml-auto mr-10 md:w-[85%]">
                    <div className="mr-6 text-blue-500">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Résumé du compte</p>
                      <p className="text-gray-500">
                        Progression du réseau +45% ce trimestre
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transformez votre Networking Section */}

      {/* CTA Section */}
      <section className="bg-gray-800 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
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
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
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
