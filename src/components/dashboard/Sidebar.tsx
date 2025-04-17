"use client";

import { useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = () => {
    signOut(() => router.push("/"));
  };

  return (
    <aside className="w-[240px] bg-[#FFF9E5] py-6 flex flex-col h-screen">
      <div className="px-6 mb-8">
        <Image src="/logoagno.png" alt="AGNO" width={100} height={40} />
      </div>

      <nav className="flex-1 px-3 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3 text-[#FF9500] bg-white rounded-lg"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22V12h6v10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Accueil
        </Link>

        <Link
          href="/dashboard/gestion"
          className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-white/60 rounded-lg"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M14 2v6h6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Gestion de carte
        </Link>

        <Link
          href="/dashboard/commande"
          className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-white/60 rounded-lg"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M9 17h6M9 13h6M9 9h6M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Commande
        </Link>

        <Link
          href="/dashboard/partage"
          className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-white/60 rounded-lg"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Partage
        </Link>
      </nav>

      <div className="px-3 mt-auto">
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 px-4 py-3 text-gray-600 hover:bg-white/60 rounded-lg"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Déconnexion
        </button>
      </div>
    </aside>
  );
}
