"use client";

import { ArrowLeft, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/logoagno.png"
            alt="Agno Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-6xl font-bold text-agno mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Page non trouvée
        </h2>
        <p className="text-gray-600 mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été
          déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center px-6 py-3 border border-agno text-agno rounded-full font-semibold hover:bg-agno/10 transition-colors gap-2"
          >
            <ArrowLeft size={20} />
            <span>Retour</span>
          </button>
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 bg-agno text-white rounded-full font-semibold hover:bg-agno-dark transition-colors gap-2"
          >
            <Home size={20} />
            <span>Accueil</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
