// config/routes.ts
/**
 * Feature Route Configuration
 * 
 * Maps iDempiere Window/Form/Process IDs to Feature modules.
 * This is the SINGLE source of truth for routing to features.
 * 
 * Usage:
 * - app/(root)/form/[id]/page.tsx uses getRouteByFormId
 * - app/(root)/window/[id]/page.tsx uses getRouteByWindowId
 */

// ============================================
// TYPES
// ============================================

export interface FeatureRoute {
  /** Feature module name (folder name in features/) */
  module: string;
  /** Component name exported from feature */
  component: string;
  /** Display title */
  title: string;
  /** Optional description */
  description?: string;
}

// ============================================
// FORM ROUTES
// ============================================

/**
 * Form ID → Feature mapping
 * 
 * Key: iDempiere Form ID (AD_Form_ID)
 * Value: Feature configuration
 */
export const FORM_ROUTES: Record<number, FeatureRoute> = {
  // Production Sewing (Form ID: 1000000 or 1000001)
  1000000: {
    module: 'production-sewing',
    component: 'ProductionSewingPage',
    title: 'Production Sewing',
    description: 'Manage sewing production with barcode scanning'
  },
  
  // Production Assembly (Form ID: 1000002)
  1000002: {
    module: 'production-assembly',
    component: 'ProductionAssemblyPage',
    title: 'Production Assembly',
    description: 'Manage assembly production process'
  },
  
  // Add more form routes here...
};

// ============================================
// WINDOW ROUTES
// ============================================

/**
 * Window ID → Feature mapping
 * 
 * Key: iDempiere Window ID (AD_Window_ID)
 * Value: Feature configuration
 */
export const WINDOW_ROUTES: Record<number, FeatureRoute> = {
  // Production Barcode (Window ID: 1000011)
  1000011: {
    module: 'production-barcode',
    component: 'ProductionBarcodePage',
    title: 'Production Barcode',
    description: 'Scan and track production barcodes'
  },
  
  // Add more window routes here...
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get feature route by Form ID
 */
export function getRouteByFormId(formId: number): FeatureRoute | null {
  return FORM_ROUTES[formId] ?? null;
}

/**
 * Get feature route by Window ID
 */
export function getRouteByWindowId(windowId: number): FeatureRoute | null {
  return WINDOW_ROUTES[windowId] ?? null;
}

/**
 * Check if a Form ID has a registered feature
 */
export function hasFormFeature(formId: number): boolean {
  return formId in FORM_ROUTES;
}

/**
 * Check if a Window ID has a registered feature
 */
export function hasWindowFeature(windowId: number): boolean {
  return windowId in WINDOW_ROUTES;
}

/**
 * Get all registered form IDs
 */
export function getRegisteredFormIds(): number[] {
  return Object.keys(FORM_ROUTES).map(Number);
}

/**
 * Get all registered window IDs
 */
export function getRegisteredWindowIds(): number[] {
  return Object.keys(WINDOW_ROUTES).map(Number);
}
