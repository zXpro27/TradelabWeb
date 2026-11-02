'use client';

import React from 'react';
import { useTradelab } from '@/hooks/useTradelabStore';
import { Globe, MessageSquare, Bot, Sparkles } from 'lucide-react';

export default function FloatingHudControls() {
  const { language, toggleLanguage, isChatOpen, setIsChatOpen, t } = useTradelab();

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 select-none pointer-events-auto">
      {/* 1. Language Switcher (Indonesia / Inggris toggle) */}
      <button
        onClick={toggleLanguage}
        className="group relative px-3 py-1.5 bg-[#080d19]/90 hover:bg-[#0c1424] border border-cyan-500/50 hover:border-cyan-300 text-xs font-mono font-bold tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all flex items-center gap-2 hud-corner-all backdrop-blur-md"
        title="Ubah Bahasa / Switch Language"
        aria-label="Toggle language"
      >
        <Globe className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform" />
        <span className="text-[11px] uppercase">
          {language === 'id' ? (
            <>
              <strong className="text-white">ID</strong> <span className="text-slate-500">|</span> EN
            </>
          ) : (
            <>
              ID <span className="text-slate-500">|</span> <strong className="text-white">EN</strong>
            </>
          )}
        </span>
        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
      </button>

      {/* 2. Chat Support / Tactical Assistant Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="group relative px-4 py-2.5 bg-gradient-to-r from-cyan-950/90 to-fuchsia-950/90 hover:from-cyan-900 hover:to-fuchsia-900 border border-cyan-400/60 hover:border-cyan-300 text-xs font-mono font-bold tracking-wider text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all flex items-center gap-2.5 hud-corner-all backdrop-blur-md"
        aria-label="Open support assistant"
      >
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-cyan-300" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-black animate-pulse" />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-xs font-mono tracking-wider font-bold text-white uppercase">
            {language === 'id' ? 'ASISTEN TAKTIS' : 'TACTICAL COMMS'}
          </span>
          <span className="text-[9px] font-mono text-cyan-300/80 -mt-0.5">
            SUPPORT LIVE 24/7
          </span>
        </div>
      </button>
    </div>
  );
}
