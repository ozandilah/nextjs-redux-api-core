
'use client';

import { useTokenMonitor } from '@/infrastructure/hooks/useTokenMonitor';

export function TokenMonitor() {
  useTokenMonitor();
  return null; // Component ini tidak render apapun, hanya menjalankan monitoring
}


