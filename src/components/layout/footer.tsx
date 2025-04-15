import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fff9c9] py-8 md:py-12 shadow-[0_0_10px_rgba(0,0,0,0.1)] relative">
      <div className="absolute inset-0 bg-[#fff9c9]"></div>
      <div className="agno-container relative z-10 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          {/* Logo et description */}
          <div className="w-full md:max-w-xs">
            <div className="flex items-center mb-4">
              <Image
                src="/logoagno.png"
                alt="Logo AGNO"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Simplifiez votre gestion scolaire avec AGNO, la solution
              tout-en-un pour les établissements modernes.
            </p>
          </div>

          {/* Pages et Contact */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16 w-full md:w-auto">
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-contrast">Pages</h3>
              <div className="grid gap-3">
                <Link
                  href="/"
                  className="text-muted hover:text-primary transition-colors text-sm md:text-base"
                >
                  Accueil
                </Link>
                <Link
                  href="/fonctionnalites"
                  className="text-muted hover:text-primary transition-colors text-sm md:text-base"
                >
                  Fonctionnalités
                </Link>
                <Link
                  href="/espace-client"
                  className="text-muted hover:text-primary transition-colors text-sm md:text-base"
                >
                  Espace client
                </Link>
                <Link
                  href="/tarifs"
                  className="text-muted hover:text-primary transition-colors text-sm md:text-base"
                >
                  Tarifs
                </Link>
                <Link
                  href="/contact"
                  className="text-muted hover:text-primary transition-colors text-sm md:text-base"
                >
                  Contact & support
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-xl text-contrast">Contact</h3>
              <p className="text-muted text-sm md:text-base">
                Téléphone : +225 0789637733
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:max-w-sm space-y-6">
            <h3 className="font-bold text-xl text-contrast">
              S'inscrire à notre newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Entrer votre Email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm md:text-base transition-colors"
              />
              <button className="bg-agno text-white px-6 py-3 rounded-lg font-medium hover:bg-agno/90 transition-colors text-sm md:text-base">
                Envoyer
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              <Link
                href="#"
                className="hover-lift bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </Link>
              <Link
                href="#"
                className="hover-lift bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <Image
                  src="/icons/twitter.png"
                  alt="Twitter"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </Link>
              <Link
                href="#"
                className="hover-lift bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <Image
                  src="/icons/tiktok.png"
                  alt="TikTok"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </Link>
              <Link
                href="#"
                className="hover-lift bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <Image
                  src="/icons/youtube.png"
                  alt="YouTube"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </Link>
            </div>
            <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
              © 2025, AGNO Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
