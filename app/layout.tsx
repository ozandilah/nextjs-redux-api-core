// app/layout.tsx
/**
 * Root Layout
 * 
 * This is the root layout for the entire application.
 * It sets up providers and global UI components.
 * 
 * NO business logic should be here - only composition.
 */

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { GeistSans } from "geist/font/sans";

import { APP_CONFIG } from "@/config/env";
import { Toaster } from "@/components/ui/sonner";

import "@/assets/styles/globals.css";
import { TokenMonitor } from "@/components/molecules/TokenMonitor";
import ProgressBar from "@/components/molecules/ProgressBar";
import AppProviders from "@/infrastructure/providers/AppProviders";

export const metadata: Metadata = {
  title: {
    template: `%s | CORE - APP - PT BINTANG INDOKARYA GEMILANG`,
    default: APP_CONFIG.name,
  },
  description: APP_CONFIG.description,
  metadataBase: new URL(APP_CONFIG.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased`}>
        <AppProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <TokenMonitor />
            <ProgressBar />
            {children}
            <Toaster richColors />
          </ThemeProvider>
        </AppProviders>
      </body>
    </html>
  );
}

