import {
  auth,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Routes protégées qui nécessitent une authentification
const isProtectedRoute = createRouteMatcher([
  "/dashboard/:path*",
  "/profile/:path*",
  "/settings/:path*",
  "/cards/:path*",
  "/analytics/:path*",
]);

// Routes publiques
const publicRoutes = ["/", "/contact", "/fonctionnalites", "/tarifs"];

export default clerkMiddleware(async (_, request) => {
  const { userId } = await auth();

  const isPublicRoute = publicRoutes.some(
    (route) =>
      request.nextUrl.pathname === route ||
      request.nextUrl.pathname.startsWith(route + "/")
  );

  // Permettre l'accès aux routes publiques
  if (isPublicRoute) return;

  // Redirection vers le dashboard si connecté et sur la page de connexion
  if (userId && request.nextUrl.pathname === "/sign-up") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Protection des routes qui nécessitent une authentification
  if (isProtectedRoute(request)) {
    if (!userId) {
      return NextResponse.redirect(new URL("/sign-up", request.url));
    }
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
