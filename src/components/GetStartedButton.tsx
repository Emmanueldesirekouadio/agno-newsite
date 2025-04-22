"use client";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface GetStartedButtonProps {
  className?: string;
}

export default function GetStartedButton({ className }: GetStartedButtonProps) {
  const router = useRouter();

  return (
    <>
      <SignedIn>
        <button
          onClick={() => router.push("/dashboard/create-card")}
          className={className}
        >
          Commencer
        </button>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className={className}>Commencer</button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
