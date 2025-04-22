"use client";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function GetStartedButton() {
  const router = useRouter();

  return (
    <>
      <SignedIn>
        <Button onClick={() => router.push("/dashboard")}>
          Accéder au tableau de bord
        </Button>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Commencer</Button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
