// infrastructure/auth/auth-guard.ts
/**
 * Authentication Guard
 * 
 * Server-side authentication guard for protected routes.
 * Use this in Server Components to protect pages.
 */

import { auth } from "@/infrastructure/auth/auth";
import { redirect } from "next/navigation";

export async function requireAuth() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  // Check if iDempiere token is expired
  if (session.user.tokenExpiry) {
    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    const isExpired = now >= session.user.tokenExpiry;
    
    if (isExpired) {
      console.warn('⚠️ Token expired, redirecting to sign-in...');
      redirect("/sign-in");
    }
  }

  return session;
}

