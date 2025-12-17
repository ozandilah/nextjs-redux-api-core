/**
 * Environment Configuration
 * iDempiere API and Application configuration
 */

// ===========================================
// iDempiere API Configuration
// ===========================================

export const IDEMPIERE_API_URL =
  process.env.IDEMPIERE_API_URL || "http://your-idempiere-server:8080/ADInterface/services/rest";

export const IDEMPIERE_API_USERNAME =
  process.env.IDEMPIERE_API_USERNAME || "";

export const IDEMPIERE_API_PASSWORD =
  process.env.IDEMPIERE_API_PASSWORD || "";

export const IDEMPIERE_CLIENT_ID =
  process.env.IDEMPIERE_API_CLIENT_ID || "1000000";

export const IDEMPIERE_ROLE_ID =
  process.env.IDEMPIERE_API_ROLE_ID || "1000000";

export const IDEMPIERE_ORG_ID =
  process.env.IDEMPIERE_API_ORG_ID || "1000000";

export const IDEMPIERE_WAREHOUSE_ID =
  process.env.IDEMPIERE_API_WAREHOUSE_ID || "1000000";

/**
 * iDempiere API Endpoints
 */
export const IDEMPIERE_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/tokens',
    VALIDATE: '/auth/tokens/validate',
    LOGOUT: '/auth/tokens/logout',
    ROLES: '/auth/roles',
    ORGANIZATIONS: '/auth/organizations',
    WAREHOUSES: '/auth/warehouses',
    LANGUAGE: '/auth/language',
  },
  WINDOWS: '/windows',
  PROCESSES: '/processes',
  MODELS: '/models',
  FORMS: '/forms',
  REPORTS: '/reports',
} as const;

/**
 * Consolidated iDempiere Config object
 */
export const IDEMPIERE_CONFIG = {
  baseUrl: IDEMPIERE_API_URL,
  endpoints: IDEMPIERE_ENDPOINTS,
  defaults: {
    clientId: IDEMPIERE_CLIENT_ID,
    roleId: IDEMPIERE_ROLE_ID,
    orgId: IDEMPIERE_ORG_ID,
    warehouseId: IDEMPIERE_WAREHOUSE_ID,
  },
} as const;

// ===========================================
// Application Configuration
// ===========================================

import { APP_NAME, APP_DESCRIPTION, APP_URL, SERVER_URL } from './constants';

export const APP_CONFIG = {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  url: APP_URL,
  serverUrl: SERVER_URL,
} as const;
