import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fff9c9] py-16 shadow-[0_0_10px_rgba(0,0,0,0.1)] relative">
      <div className="absolute inset-0 bg-[#fff9c9]"></div>
      <div className="agno-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo et description */}
          <div className="max-w-xs">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Logo AGNO"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">Lorem ipsum dolor sit amet con</p>
          </div>

          {/* Pages et Contact */}
          <div className="flex flex-col md:flex-row gap-16">
            <div>
              <h3 className="font-bold text-xl mb-4">Pages</h3>
              <div className="grid gap-3">
                <Link href="/" className="text-gray-600 hover:text-[#d98200]">
                  Accueil
                </Link>
                <Link
                  href="/fonctionnalites"
                  className="text-gray-600 hover:text-[#d98200]"
                >
                  Fonctionnalités
                </Link>
                <Link
                  href="/espace-client"
                  className="text-gray-600 hover:text-[#d98200]"
                >
                  Espace client
                </Link>
                <Link
                  href="/tarifs"
                  className="text-gray-600 hover:text-[#d98200]"
                >
                  Tarifs
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-[#d98200]"
                >
                  Contact & support
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Contact</h3>
              <p className="text-gray-600">Téléphone : +225 0789637733</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm">
            <h3 className="font-bold text-xl mb-4">
              S'inscrire à notre newsletter
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Entrer votre Email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#d98200]"
              />
              <button className="bg-[#d98200] text-white px-6 py-2 rounded-lg hover:bg-[#c77800] transition-colors">
                Envoyer
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
              >
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="#"
                className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
              >
                <Image
                  src="/icons/twitter.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="#"
                className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
              >
                <Image
                  src="/icons/tiktok.png"
                  alt="TikTok"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="#"
                className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
              >
                <Image
                  src="/icons/youtube.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
            <p className="text-gray-600">© 2025, AGNO Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
