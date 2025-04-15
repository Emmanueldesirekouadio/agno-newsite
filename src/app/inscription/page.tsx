"use client";

import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth, provider } from "../../../ firebase";

type RegisterInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
};

export default function InscriptionPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const password = watch("password");

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    setIsLoading(true);
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      setSuccess(true);
      setTimeout(() => {
        router.push("/connexion");
      }, 2000);
    } catch (err: any) {
      console.error("Erreur d'inscription:", err);
      let errorMessage = "Échec de l'inscription";

      if (err.code === "auth/email-already-in-use") {
        errorMessage = "Cette adresse email est déjà utilisée";
      } else if (err.code === "auth/invalid-email") {
        errorMessage = "Adresse email invalide";
      } else if (err.code === "auth/operation-not-allowed") {
        errorMessage = "L'inscription par email est désactivée";
      } else if (err.code === "auth/weak-password") {
        errorMessage = "Le mot de passe est trop faible";
      } else if (err.code === "auth/network-request-failed") {
        errorMessage = "Erreur de connexion réseau";
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const signUpWithGoogle = async () => {
    setIsLoading(true);
    setError("");

    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard"); // Redirect to dashboard after registration
    } catch (err: any) {
      console.error("Erreur de connexion Google:", err);
      let errorMessage = "Échec de la connexion avec Google";

      if (err.code === "auth/popup-closed-by-user") {
        errorMessage = "La fenêtre de connexion a été fermée";
      } else if (err.code === "auth/popup-blocked") {
        errorMessage =
          "La fenêtre de connexion a été bloquée par votre navigateur";
      } else if (err.code === "auth/cancelled-popup-request") {
        errorMessage = "La demande de connexion a été annulée";
      } else if (err.code === "auth/account-exists-with-different-credential") {
        errorMessage = "Un compte existe déjà avec cette adresse email";
      } else if (err.code === "auth/network-request-failed") {
        errorMessage = "Erreur de connexion réseau";
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-agno to-agno-dark text-white py-16 md:py-24">
        <div className="agno-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Créez votre compte
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Commencez à créer vos cartes de visite numériques en quelques
            minutes
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 md:py-24">
        <div className="agno-container">
          <div className="max-w-md mx-auto">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                Compte créé avec succès ! Redirection vers la page de
                connexion...
              </div>
            )}

            {/* Google Sign Up Button */}
            <button
              onClick={signUpWithGoogle}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 mb-6"
            >
              <Image
                src="/images/google-icon.webp"
                alt="Google"
                width={20}
                height={20}
              />
              {isLoading ? "Chargement..." : "S'inscrire avec Google"}
            </button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Ou s'inscrire avec votre email
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName", {
                      required: "Le prénom est requis",
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno"
                    placeholder="Prénom"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName", {
                      required: "Le nom est requis",
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno"
                    placeholder="Nom"
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "L'email est requis",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Adresse email invalide",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: "Le mot de passe est requis",
                      minLength: {
                        value: 6,
                        message:
                          "Le mot de passe doit contenir au moins 6 caractères",
                      },
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    {...register("confirmPassword", {
                      required: "La confirmation du mot de passe est requise",
                      validate: (value) =>
                        value === password ||
                        "Les mots de passe ne correspondent pas",
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showConfirmPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              <div className="flex items-center">
                <input
                  id="agreeTerms"
                  type="checkbox"
                  {...register("agreeTerms", {
                    required:
                      "Vous devez accepter les conditions d'utilisation",
                  })}
                  className="h-4 w-4 text-agno focus:ring-agno border-gray-300 rounded"
                />
                <label
                  htmlFor="agreeTerms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  J'accepte les{" "}
                  <Link
                    href="/conditions"
                    className="text-agno hover:underline"
                  >
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link
                    href="/confidentialite"
                    className="text-agno hover:underline"
                  >
                    politique de confidentialité
                  </Link>
                </label>
              </div>
              {errors.agreeTerms && (
                <span className="text-red-500 text-sm">
                  {errors.agreeTerms.message}
                </span>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-agno text-white py-3 px-6 rounded-lg font-semibold hover:bg-agno-dark transition-colors disabled:opacity-50"
              >
                {isLoading ? "Chargement..." : "Créer un compte"}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Déjà un compte ?{" "}
                <Link href="/connexion" className="text-agno hover:underline">
                  Connectez-vous
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="agno-container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir Agno ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Création facile</h3>
              <p className="text-gray-600">
                Créez votre carte de visite numérique en quelques minutes avec
                notre interface intuitive.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Partage instantané</h3>
              <p className="text-gray-600">
                Partagez votre carte avec n'importe qui, n'importe où, en un
                seul clic.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Statistiques détaillées
              </h3>
              <p className="text-gray-600">
                Suivez l'utilisation de votre carte et mesurez son impact avec
                nos outils d'analyse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-agno py-16 text-white">
        <div className="agno-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl mb-8">
            Créez votre première carte de visite numérique gratuitement dès
            aujourd'hui
          </p>
          <Link
            href="/inscription"
            className="bg-white text-agno agno-button hover:bg-gray-100 hover:text-agno-dark transition-colors"
          >
            Créer votre carte gratuitement
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="agno-container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Les avantages d'Agno
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-agno-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Simple et rapide</h3>
              <p className="text-gray-600">
                Créez et partagez vos cartes de visite digitales en quelques
                minutes seulement.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-agno-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Personnalisable</h3>
              <p className="text-gray-600">
                Adaptez vos cartes à votre image professionnelle avec de
                nombreuses options de personnalisation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-agno-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Analytiques détaillées</h3>
              <p className="text-gray-600">
                Suivez qui consulte vos cartes et optimisez votre stratégie de
                networking avec des données précises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="agno-container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Questions fréquentes sur l'inscription
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                L'inscription est-elle gratuite ?
              </h3>
              <p className="text-gray-600">
                Oui, l'inscription à Agno est totalement gratuite. Vous pouvez
                créer un compte et utiliser les fonctionnalités de base sans
                frais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Combien de cartes puis-je créer ?
              </h3>
              <p className="text-gray-600">
                Le plan gratuit vous permet de créer jusqu'à 2 cartes digitales.
                Pour des besoins plus importants, découvrez nos forfaits Pro et
                Entreprise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Puis-je changer de forfait plus tard ?
              </h3>
              <p className="text-gray-600">
                Absolument ! Vous pouvez passer à un forfait supérieur à tout
                moment depuis votre espace client.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Comment fonctionne le partage de cartes ?
              </h3>
              <p className="text-gray-600">
                Vous pouvez partager vos cartes via QR code, lien direct, email,
                SMS ou sur les réseaux sociaux en quelques clics depuis votre
                tableau de bord.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
