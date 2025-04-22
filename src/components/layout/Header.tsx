import { LanguageDialog } from "@/components/dialogs/LanguageDialog";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [languageDialogOpen, setLanguageDialogOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguageDialogOpen(true)}
          >
            <Globe className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <LanguageDialog
        open={languageDialogOpen}
        onOpenChange={setLanguageDialogOpen}
      />
    </header>
  );
}
