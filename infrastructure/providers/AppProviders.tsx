// infrastructure/providers/AppProviders.tsx
/**
 * Application Providers
 * 
 * Composes all providers needed for the application.
 * This is the only place where providers are composed.
 */

"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/infrastructure/store/store";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}

