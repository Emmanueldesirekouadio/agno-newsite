import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <Link href="/" className="text-2xl font-bold">
        Agno
      </Link>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="ghost">Se connecter</Button>
          </SignInButton>
        </SignedOut>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
