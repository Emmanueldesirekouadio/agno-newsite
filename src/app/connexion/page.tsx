"use client";

import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth, provider } from "../../../ firebase";

type LoginInputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function ConnexionPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    setIsLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push("/dashboard"); // Redirect to dashboard after login
    } catch (err: any) {
      console.error("Erreur de connexion:", err);
      setError(err.message || "Échec de la connexion");
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);
    setError("");

    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard"); // Redirect to dashboard after login
    } catch (err: any) {
      console.error("Erreur de connexion Google:", err);
      setError(err.message || "Échec de la connexion avec Google");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Veuillez entrer votre adresse email");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
    } catch (err: any) {
      console.error("Erreur de réinitialisation du mot de passe:", err);
      setError(err.message || "Échec d'envoi de l'email de réinitialisation");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen overflow-y-auto">
      {/* Left side - Image */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/images/login-image.jpeg"
          alt="Login"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Bon retour parmi nous !
            </h2>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {resetEmailSent && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              Email de réinitialisation envoyé ! Veuillez vérifier votre boîte
              email.
            </div>
          )}

          {/* Google Sign In Button */}
          <button
            onClick={signInWithGoogle}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <Image
              src="/images/google-icon.webp"
              alt="Google"
              width={20}
              height={20}
            />
            {isLoading ? "Chargement..." : "Se connecter avec Google"}
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                S'identifier avec votre Email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email Address
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
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-700">
                Password
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
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agno focus:border-agno pr-10"
                  placeholder="Mot de passe"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 mt-1"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  {...register("rememberMe")}
                  className="h-4 w-4 text-agno focus:ring-agno border-gray-300 rounded"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-sm text-gray-700"
                >
                  Gardez-moi connecté
                </label>
              </div>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-agno hover:text-agno-dark"
              >
                Mot de passe oublié ?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-agno text-white py-2 px-4 rounded-lg hover:bg-agno-dark transition-colors disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Se connecter"}
            </button>

            <div className="text-center text-sm">
              <span className="text-gray-600">
                Vous n'avez pas de compte ?{" "}
              </span>
              <Link
                href="/inscription"
                className="text-agno hover:text-agno-dark"
              >
                S'inscrire
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
