declare module "@clerk/nextjs" {
  export function currentUser(): Promise<{
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
  } | null>;

  export function useUser(): {
    user: {
      id: string;
      email: string;
      firstName?: string;
      lastName?: string;
      imageUrl?: string;
    } | null;
    isLoaded: boolean;
    isSignedIn: boolean;
  };
}
