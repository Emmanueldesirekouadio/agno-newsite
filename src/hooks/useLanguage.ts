import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export function useLanguage() {
  const { user } = useUser();
  const [language, setLanguage] = useState("fr");
  const [region, setRegion] = useState("FR");

  useEffect(() => {
    // Charger les préférences depuis le localStorage
    const savedLanguage = localStorage.getItem("userLanguage");
    const savedRegion = localStorage.getItem("userRegion");

    if (savedLanguage) setLanguage(savedLanguage);
    if (savedRegion) setRegion(savedRegion);

    // Si l'utilisateur est connecté, charger depuis les métadonnées
    if (user?.unsafeMetadata) {
      const userLanguage = user.unsafeMetadata.language as string;
      const userRegion = user.unsafeMetadata.region as string;

      if (userLanguage) setLanguage(userLanguage);
      if (userRegion) setRegion(userRegion);
    }
  }, [user]);

  return { language, region, setLanguage, setRegion };
}
