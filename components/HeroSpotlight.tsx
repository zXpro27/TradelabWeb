'use client';

import React from 'react';
import { useTradelab } from '@/hooks/useTradelabStore';
import { Star, Download, ShieldCheck, Eye, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { ModGame } from '@/lib/types';

export default function HeroSpotlight() {
  const { games, setSelectedGame, t } = useTradelab();

  // Top 3 featured games matching Image 1
  const heroGames = games.slice(0, 3);

  return (
    <section className="relative w-full overflow-hidden pt-4 pb-6 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Tactical Ambient Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-cyan-500/20">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-cyan-400 rotate-45 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <h2 className="text-sm sm:text-base font-black font-mono tracking-widest text-cyan-300 uppercase">
            {t.sec_game_library}
          </h2>
          <span className="text-[10px] font-mono text-cyan-500/60 uppercase">
            {'// TOP PRIORITY TRAINERS'}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.hero_safe_guarantee}</span>
            <span className="sm:hidden">100% CLEAN SAFE</span>
          </span>
        </div>
      </div>

      {/* 3-Card Featured Grid (Exact Image 1 Layout & Proportions) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {heroGames.map((game, index) => {
          const isCenter = index === 1;
          return (
            <div
              key={game.id}
              onClick={() => setSelectedGame(game)}
              className={`group relative bg-[#090e1a]/85 border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between hud-corner-all ${
                isCenter
                  ? 'border-fuchsia-500/50 hover:border-fuchsia-400 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]'
                  : 'border-cyan-500/40 hover:border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.12)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]'
              }`}
            >
              {/* Tactical Corner HUD Reticles */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-cyan-400 pointer-events-none z-10" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-cyan-400 pointer-events-none z-10" />
              <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-cyan-400 pointer-events-none z-10" />
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-cyan-400 pointer-events-none z-10" />

              {/* Cover Image with Vignette Overlay */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-950">
                <img
                  src={game.coverImage}
                  alt={game.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-[#090e1a]/40 to-transparent" />
                
                {/* Status Badge */}
                {game.badge && (
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/75 border border-cyan-400/40 text-[10px] font-mono tracking-wider text-cyan-300 uppercase hud-corner-all flex items-center gap-1 backdrop-blur-sm">
                    {index === 1 ? <Flame className="w-3 h-3 text-fuchsia-400" /> : <Sparkles className="w-3 h-3 text-cyan-400" />}
                    <span>{game.badge}</span>
                  </div>
                )}

                {/* VirusTotal Clean Badge */}
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-emerald-950/80 border border-emerald-400/50 text-[10px] font-mono text-emerald-300 uppercase hud-corner-all flex items-center gap-1 backdrop-blur-sm">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{game.virusScan}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-black font-mono tracking-wide text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {game.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mt-0.5 line-clamp-1">
                    {game.modName}
                  </p>

                  {/* Downloads & Star Rating */}
                  <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Download className="w-3.5 h-3.5 text-cyan-400" />
                      <strong className="text-white">{(game.downloads / 1000000).toFixed(1)}M</strong> {t.card_downloads}
                    </span>

                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button (HUD Beveled) */}
                <div className="mt-4 pt-3 border-t border-cyan-500/20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedGame(game);
                    }}
                    className={`w-full py-2 px-4 text-xs font-mono font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 hud-corner-all ${
                      isCenter
                        ? 'text-fuchsia-200 bg-fuchsia-950/60 hover:bg-fuchsia-900 border border-fuchsia-500/50 hover:border-fuchsia-300 shadow-[0_0_12px_rgba(168,85,247,0.2)]'
                        : 'text-cyan-200 bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-500/50 hover:border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                    }`}
                  >
                    {index === 0 && (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>{t.hero_btn_explore}</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{t.card_view_menu}</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>{t.card_download_btn}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
