"use client";

import { useSignIn } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";

export default function SignInForm() {
  const { signIn, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signIn) return;

    try {
      setIsLoading(true);
      await signIn.create({
        identifier: email,
        password,
      });
    } catch (err) {
      console.error("Error signing in", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!signIn) return;
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
      });
    } catch (err) {
      console.error("Error signing in with Google", err);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 hidden lg:block">
        <Image
          src="/images/login-image.jpeg"
          alt="Authentication"
          width={960}
          height={1080}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Bon retour parmi nous !</h2>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Image
              src="/images/google-icon.webp"
              alt="Google"
              width={20}
              height={20}
            />
            Se connecter avec Google
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                S'identifier avec votre Email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-agno focus:border-agno"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-agno focus:border-agno"
                placeholder="Mot de passe"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-agno focus:ring-agno border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Gardez-moi connecté
                </label>
              </div>
              <a href="#" className="text-sm text-agno hover:text-agno-dark">
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              disabled={!isLoaded || isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#FF9500] hover:bg-[#FF5F00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-agno"
            >
              {isLoading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Vous n'avez pas de compte ?{" "}
            <a
              href="/sign-up"
              className="font-medium text-agno hover:text-agno-dark"
            >
              S'inscrire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
