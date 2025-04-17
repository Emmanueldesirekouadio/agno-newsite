"use client";

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Image de gauche */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('images/login-image.jpeg')" }}
      />

      {/* Formulaire de droite */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="relative -ml-12">
            <h1 className="text-3xl font-bold text-center mb-8 text-[#FF9500]">
              Bon retour parmi nous !
            </h1>
          </div>
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: "bg-agno hover:bg-agno-dark text-white",
                footerActionLink: "text-agno hover:text-agno-dark",
                card: "shadow-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton:
                  "border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50",
                formFieldInput:
                  "border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno",
                formFieldLabel: "text-sm text-gray-700",
                dividerLine: "border-gray-300",
                dividerText: "text-sm text-gray-500",
              },
            }}
            afterSignUpUrl="/dashboard"
            signInUrl="/connexion"
            routing="path"
            path="/sign-up"
          />
        </div>
      </div>
    </div>
  );
}
