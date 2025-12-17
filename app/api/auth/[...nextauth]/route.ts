// app/api/auth/[...nextauth]/route.ts
/**
 * NextAuth API Route Handler
 * 
 * This file exports the HTTP handlers for NextAuth.js.
 * All authentication API requests are handled here.
 */

import { handlers } from "@/infrastructure/auth/auth";

export const { GET, POST } = handlers;
