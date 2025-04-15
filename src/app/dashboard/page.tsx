import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-[240px] bg-white border-r border-gray-200 py-6 px-4">
        <div className="mb-8">
          <Image src="/logoagno.png" alt="AGNO" width={100} height={40} />
        </div>

        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 bg-[#FFF9E5] text-[#FF9500] rounded-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Accueil
          </Link>

          <Link
            href="/dashboard/gestion"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Gestion de carte
          </Link>

          <Link
            href="/dashboard/commande"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Commande
          </Link>

          <Link
            href="/dashboard/partage"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6L12 2L8 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Partage
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t">
          <Link
            href="/logout"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17L21 12L16 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Déconnexion
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-medium">Bienvenue chez vous !</h1>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                2
              </span>
            </button>
            <button className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="blue"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-600">Scans</span>
            </div>
            <p className="text-3xl font-semibold">15</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-600">Ajout du contact</span>
            </div>
            <p className="text-3xl font-semibold">50</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                >
                  <path
                    d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-600">Échanges</span>
            </div>
            <p className="text-3xl font-semibold">50</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFB800"
                >
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-600">Clics</span>
            </div>
            <p className="text-3xl font-semibold">80</p>
          </div>
        </div>

        {/* Personnalisation Card */}
        <div className="bg-white border-2 border-dashed border-orange-200 p-8 rounded-2xl shadow-sm mb-8">
          <div className="text-center">
            <h2 className="text-lg text-gray-600 mb-4">
              Personnalisé et créer votre carte de visite
            </h2>
            <button className="bg-[#FF9500] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF9500]/90 transition-colors flex items-center gap-2 mx-auto">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M12 5V19M5 12H19"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Créer votre carte
            </button>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Partage via QR Code</h2>
          <p className="text-gray-600 mb-4">
            Voici votre code QR AGNO unique qui dirigera les gens vers vos infos
            lorsqu'il sera scanné.
          </p>
          <div className="flex items-start gap-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">
                Haute qualité de l'image
              </p>
              <button className="flex items-center gap-2 text-[#FF9500] font-medium">
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
                Télécharger en PNG
              </button>
            </div>
            <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image
                src="/phone-screens/Qr.png"
                alt="QR Code"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
            <span className="text-gray-600">AGNO.ee/kouamefranck</span>
            <button className="ml-auto text-[#FF9500] font-medium">
              Copier
            </button>
          </div>
        </div>

        {/* Promo Card */}
        <div className="bg-[#FFE5E5] p-6 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
            <svg
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="#FF9500"
              opacity="0.1"
            >
              <path d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08996 16.01 3.08996 11.12V6.72997C3.08996 5.90997 3.70996 4.97997 4.47996 4.66997L10.05 2.39001C11.3 1.88001 12.71 1.88001 13.96 2.39001L19.53 4.66997C20.29 4.97997 20.92 5.90997 20.92 6.72997L20.91 11.12Z" />
            </svg>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold mb-2">Offres spéciales</h3>
              <p className="text-gray-700 mb-4">
                Inscrivez-vous maintenant et{" "}
                <span className="font-semibold">
                  bénéficiez de 20% de réduction
                </span>{" "}
                sur votre premier mois avec le code promo AGNO20.
              </p>
              <button className="text-[#FF9500] font-medium">
                Obtenir la réduction
              </button>
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF9500">
                <path d="M3.32996 13.32L8.20996 18.21C8.27996 18.28 8.34996 18.35 8.42996 18.41C8.55996 18.51 8.70996 18.56 8.86996 18.56C9.02996 18.56 9.17996 18.51 9.30996 18.41C9.37996 18.35 9.44996 18.28 9.51996 18.21L20.6599 7.07001C20.7799 6.95001 20.8599 6.79001 20.8599 6.62001C20.8599 6.45001 20.7799 6.29001 20.6599 6.17001L18.83 4.34001C18.71 4.22001 18.55 4.14001 18.38 4.14001C18.21 4.14001 18.05 4.22001 17.93 4.34001L8.86996 13.4L6.06996 10.6C5.94996 10.48 5.78996 10.4 5.61996 10.4C5.44996 10.4 5.28996 10.48 5.16996 10.6L3.32996 12.44C3.20996 12.56 3.12996 12.72 3.12996 12.89C3.12996 13.06 3.20996 13.22 3.32996 13.34V13.32Z" />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
