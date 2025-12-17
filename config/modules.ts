/**
 * Module Configuration
 * 
 * Defines available modules/features in the dashboard
 */

import { LucideIcon } from 'lucide-react';

export interface ModuleConfig {
  /** Unique module identifier */
  id: string;
  /** Display name */
  name: string;
  /** Module description */
  description: string;
  /** Link to module */
  href: string;
  /** Lucide icon component */
  icon: LucideIcon;
  /** Background color class (tailwind) */
  color: string;
  /** Whether module is active/available */
  isActive: boolean;
  /** Optional badge text */
  badge?: string;
}

/**
 * Available modules configuration
 * Add new modules here to display them in the dashboard
 */
import { 
  Scissors, 
  Barcode, 
  Package, 
  Settings, 
  BarChart3,
  Users
} from 'lucide-react';

export const MODULES: ModuleConfig[] = [
  {
    id: 'production-sewing',
    name: 'Production Sewing',
    description: 'Manage sewing production with barcode scanning and output tracking',
    href: '/form/1000001',
    icon: Scissors,
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    isActive: true,
    badge: 'Active',
  },
  {
    id: 'production-barcode',
    name: 'Production Barcode',
    description: 'Scan and track production barcodes for quality control',
    href: '/window/1000011',
    icon: Barcode,
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    isActive: true,
  },
  {
    id: 'production-assembly',
    name: 'Production Assembly',
    description: 'Track assembly production processes and component management',
    href: '/form/1000002',
    icon: Package,
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    isActive: true,
  },
  {
    id: 'reports',
    name: 'Reports',
    description: 'View production reports and analytics dashboard',
    href: '/reports',
    icon: BarChart3,
    color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    isActive: false,
  },
  {
    id: 'users',
    name: 'User Management',
    description: 'Manage users, roles, and permissions',
    href: '/users',
    icon: Users,
    color: 'bg-gradient-to-br from-pink-500 to-pink-600',
    isActive: false,
  },
  {
    id: 'settings',
    name: 'Settings',
    description: 'Application settings and configuration',
    href: '/settings',
    icon: Settings,
    color: 'bg-gradient-to-br from-gray-500 to-gray-600',
    isActive: false,
  },
];

/**
 * Get active modules only
 */
export function getActiveModules(): ModuleConfig[] {
  return MODULES.filter(m => m.isActive);
}

/**
 * Get module by ID
 */
export function getModuleById(id: string): ModuleConfig | undefined {
  return MODULES.find(m => m.id === id);
}
