"use client";

import { HoverEffect } from "@/components/ui/hover-effect";
import { motion } from "framer-motion";
import {
  Clock,
  FileText,
  GraduationCap,
  QrCode,
  ShieldCheck,
  Zap,
} from "lucide-react";
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

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FF9500] to-[#FF5F00] min-h-screen overflow-hidden">
        <div className="container mx-auto px-4 py-20 flex items-center relative z-10">
          <div className="w-full lg:w-1/2 text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Transformez votre{" "}
              <span className="relative">
                Networking
                <motion.span
                  className="absolute -right-6 top-[3.8rem] lg:top-[4.8rem] lg:-right-8 bg-red-500 px-2 py-1 rounded-lg text-white text-4xl"
                  animate={{ rotate: [-4.5, 4.5] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.5,
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: "50% 0%" }}
                >
                  avec
                </motion.span>
              </span>
              <br />
              <span className="inline-block mt-2 bg-red-500 px-4 py-2 rounded-lg transform -rotate-2">
                Agno
              </span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Transformez votre Networking avec AgnoTransformez votre Networking
              avec Agno
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/creer-carte"
                className="bg-white text-[#FF9500] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center gap-2"
              >
                Commencer
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="transform translate-x-1"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <button className="text-white border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10L12 15L17 10"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15V3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Télécharger l'application
              </button>
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-20 w-[600px]">
            <div className="relative">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-[#1E1E1E] rounded-[60px] transform rotate-12 scale-90 translate-x-10 translate-y-10 shadow-2xl"></div>
              {/* Phone Screen */}
              <div className="relative bg-white rounded-[50px] overflow-hidden shadow-xl transform rotate-12">
                <div className="w-[380px]">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-2 flex justify-between items-center">
                    <span className="text-black text-sm">9:41</span>
                    <div className="flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M2 22h20V2L2 22z" />
                      </svg>
                    </div>
                  </div>
                  {/* App Content */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                      </div>
                      <button className="bg-[#FF9500] text-white px-4 py-2 rounded-full text-sm">
                        + Nouvelle carte
                      </button>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
                      <div className="flex gap-4">
                        <div className="relative w-16 h-16 overflow-hidden rounded-xl">
                          <Image
                            src="/phone-screens/phto.png"
                            alt="Kouamé Serge"
                            fill
                            className="object-cover"
                            sizes="64px"
                            priority
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">Kouamé serge</h3>
                          <p className="text-gray-500 text-sm">Ingénieur</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-[#FF9500]/10 rounded-lg flex items-center justify-center">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              stroke="#FF9500"
                              fill="none"
                            >
                              <path
                                d="M12 2L2 7l10 5 10-5-10-5z"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-600">
                            10 Cartes
                          </span>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-[#FF9500]/10 rounded-lg flex items-center justify-center">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              stroke="#FF9500"
                              fill="none"
                            >
                              <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-600">
                            2 Connaissances
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute top-10 right-20 bg-red-500 w-12 h-12 rounded-xl transform rotate-12 flex items-center justify-center text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5v-2h7v2zm7-4H5v-2h14v2zm0-4H5V7h14v2z" />
                </svg>
              </div>
              <div className="absolute bottom-20 left-0 bg-[#FF9500] w-12 h-12 rounded-xl transform -rotate-12 flex items-center justify-center text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Background Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] opacity-10"></div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}

      {/* "Découvrez Agno" Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#fafafa]">
        <div className="agno-container text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Découvrez Agno : Votre Partenaire en Networking
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Des solutions innovantes pour créer et partager vos cartes de
            visite, facilement et efficacement.
          </p>
        </div>

        <div className="agno-container flex flex-col lg:flex-row gap-6 sm:gap-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </section>

      {/* Pourquoi Choisir Agno Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="agno-container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Pourquoi Choisir Agno ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck className="w-6 h-6 text-agno" />
              </div>
              <h3 className="feature-title">Sécurité Avancée</h3>
              <p className="feature-description">
                Protection de vos données avec un chiffrement de bout en bout et
                authentification multi-facteurs.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Zap className="w-6 h-6 text-agno" />
              </div>
              <h3 className="feature-title">Performance Optimale</h3>
              <p className="feature-description">
                Interface fluide et rapide, synchronisation instantanée sur tous
                vos appareils.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Clock className="w-6 h-6 text-agno" />
              </div>
              <h3 className="feature-title">Disponibilité 24/7</h3>
              <p className="feature-description">
                Support client réactif et plateforme accessible à tout moment,
                où que vous soyez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* card  */}

      <div className="min-h-screen">
        <div className="orange-gradient-bg rounded-[1.5rem] sm:rounded-[2rem] mx-3 sm:mx-4 my-6 sm:my-8 overflow-hidden">
          <div className="diagonal-lines" />
          <div className="content py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto">
              <div className="text-white mb-6 sm:mb-8 md:mb-0 md:w-1/2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
                  Gérez vos cartes facilement :
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">
                  Connectez-vous à votre espace client pour :
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-base sm:text-lg md:text-xl">
                      •
                    </span>
                    <span className="text-sm sm:text-base md:text-lg">
                      Modifier vos cartes existantes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-base sm:text-lg md:text-xl">
                      •
                    </span>
                    <span className="text-sm sm:text-base md:text-lg">
                      Suivre vos commandes et livraisons.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-base sm:text-lg md:text-xl">
                      •
                    </span>
                    <span className="text-sm sm:text-base md:text-lg">
                      Accéder à des statistiques sur l'utilisation de vos
                      cartes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-base sm:text-lg md:text-xl">
                      •
                    </span>
                    <span className="text-sm sm:text-base md:text-lg">
                      Créez de nouvelles cartes en toute simplicité.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col md:w-1/2 md:pl-6 sm:md:pl-8 w-full relative">
                {/* Cards with zigzag layout */}
                <div className="relative space-y-3 sm:space-y-4 md:space-y-6">
                  {/* First card - shifted slightly right */}
                  <div className="card ml-auto mr-2 sm:mr-4 md:w-[90%]">
                    <div className="mr-3 sm:mr-4 md:mr-6 text-orange-500">
                      <QrCode size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base md:text-lg">
                        500 scans
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                        Ce mois-ci
                      </p>
                    </div>
                  </div>

                  {/* Second card - shifted left */}
                  <div className="card ml-2 md:w-[95%]">
                    <div className="mr-3 sm:mr-4 md:mr-6 text-black">
                      <FileText size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm sm:text-base md:text-lg">
                        Cartes créées
                      </p>
                    </div>
                    <div className="ml-auto">
                      <span className="font-bold text-sm sm:text-base md:text-lg text-orange-500">
                        81
                      </span>
                    </div>
                  </div>

                  {/* Third card - shifted right again */}
                  <div className="card ml-auto mr-3 sm:mr-4 md:mr-10 md:w-[85%]">
                    <div className="mr-3 sm:mr-4 md:mr-6 text-blue-500">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base md:text-lg">
                        Résumé du compte
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm md:text-base">
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
      <section className="bg-gray-800 py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Prêt à transformer votre networking?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de professionnels qui utilisent déjà Agno
            pour leur networking.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              href="/creer-carte"
              className="bg-white text-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Créer votre carte gratuitement
            </Link>
            <Link
              href="/decouvrir"
              className="border border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-white/10 transition-colors text-sm sm:text-base"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
