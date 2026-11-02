'use client';

import React from 'react';
import { useTradelab } from '@/hooks/useTradelabStore';
import { Terminal, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function HudToast() {
  const { toastMessage } = useTradelab();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300">
      <div className="px-4 py-2 bg-[#090f1d]/95 border border-cyan-400 text-cyan-200 text-xs font-mono font-semibold tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.4)] hud-corner-all flex items-center gap-2.5 backdrop-blur-md">
        <span className="w-2 h-2 bg-cyan-400 rotate-45 animate-pulse" />
        <Terminal className="w-3.5 h-3.5 text-cyan-300" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
