'use client';

import React from 'react';
import { useTradelab } from '@/hooks/useTradelabStore';
import { 
  Download, 
  Star, 
  Clock, 
  ShieldCheck, 
  Radio, 
  ExternalLink, 
  Zap, 
  Flame, 
  Search,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { ModGame } from '@/lib/types';

export default function GameLibrary() {
  const { 
    games, 
    activeCategory, 
    setActiveCategory, 
    searchQuery, 
    setSelectedGame, 
    activities, 
    t,
    setActiveView
  } = useTradelab();

  const categories = [
    { id: 'All', label: t.cat_all },
    { id: 'Action', label: t.cat_action },
    { id: 'Idle RPG', label: t.cat_idle_rpg },
    { id: 'Casual', label: t.cat_casual },
    { id: 'Survival', label: t.cat_survival }
  ];

  // Filter games by category and search
  const filteredGames = games.filter((game) => {
    const matchesCat = activeCategory === 'All' || game.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = 
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.modName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  // Recent 4 updates
  const recentUpdates = games.slice(0, 4);

  return (
    <section className="w-full px-4 sm:px-6 max-w-7xl mx-auto pb-16">
      {/* Category Tabs (Confirmed: All, Action, Idle RPG, Casual, Survival) */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-cyan-500/20 pb-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">
            CATEGORIES
          </span>
        </div>

        {/* Tactical Segmented Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 text-xs font-mono tracking-wider uppercase transition-all hud-corner-all ${
                  isActive
                    ? 'text-cyan-200 bg-cyan-500/20 border border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                    : 'text-slate-400 hover:text-cyan-300 bg-black/40 border border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tactical Grid (Image 1 Layout: Left Updates, Center Featured Menus, Right User Activity) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left Column: Recent Updates & Categories */}
        <div className="lg:col-span-3 space-y-5">
          {/* Recent Updates Box */}
          <div className="bg-[#080d19]/80 border border-cyan-500/30 p-3.5 hud-corner-all shadow-[0_0_15px_rgba(6,182,212,0.08)]">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-cyan-500/20">
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {t.sec_recent_updates}
              </span>
              <span className="text-[10px] font-mono text-cyan-500/60">LIVE</span>
            </div>

            <div className="space-y-2.5">
              {recentUpdates.map((game) => (
                <div
                  key={game.id}
                  onClick={() => setSelectedGame(game)}
                  className="group p-2 bg-black/40 hover:bg-cyan-950/40 border border-slate-800/80 hover:border-cyan-500/40 transition-all cursor-pointer hud-corner-all flex items-start gap-2.5"
                >
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 object-cover border border-cyan-500/30 hud-corner-all shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-mono font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                      {game.title}
                    </h4>
                    <p className="text-[11px] font-mono text-cyan-400/80 truncate">
                      {game.modName}
                    </p>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span>{game.version}</span>
                      <span className="text-cyan-500/70">{game.updatedAt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick HUD Specs Banner */}
          <div className="bg-gradient-to-br from-cyan-950/40 to-black/60 border border-cyan-500/20 p-3.5 hud-corner-all text-xs font-mono space-y-2">
            <span className="text-cyan-300 font-bold tracking-wider uppercase block">
              {'// SECURITY ENCRYPTION'}
            </span>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Semua APK diuji melalui lingkungan sandboxed emulasi dengan SHA-256 integrity hash verification aktif.
            </p>
            <div className="pt-2 border-t border-cyan-500/20 flex items-center justify-between text-[10px] text-emerald-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> 0 Malicious Vectors
              </span>
              <span className="text-slate-400">v2.4 Engine</span>
            </div>
          </div>
        </div>

        {/* Center Column: Featured Menus Grid */}
        <div className="lg:col-span-6 space-y-3">
          <div className="bg-[#080d19]/80 border border-cyan-500/30 p-3.5 hud-corner-all shadow-[0_0_15px_rgba(6,182,212,0.08)]">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-cyan-500/20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400" />
                <h3 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-cyan-300 uppercase">
                  {t.sec_featured_menus}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                {filteredGames.length} {t.sec_game_library}
              </span>
            </div>

            {/* Empty State */}
            {filteredGames.length === 0 ? (
              <div className="py-12 text-center text-xs font-mono text-slate-400 space-y-2">
                <Search className="w-8 h-8 text-cyan-400/40 mx-auto" />
                <p>Tidak ada game mod yang cocok dengan pencarian &quot;{searchQuery}&quot;.</p>
                <button
                  onClick={() => {
                    setActiveCategory('All');
                  }}
                  className="px-3 py-1.5 text-xs text-cyan-300 border border-cyan-500/40 hover:bg-cyan-950/40 hud-corner-all"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredGames.map((game) => (
                  <div
                    key={game.id}
                    onClick={() => setSelectedGame(game)}
                    className="group bg-black/50 hover:bg-[#0c1424] border border-cyan-500/25 hover:border-cyan-400 p-2.5 transition-all cursor-pointer flex flex-col justify-between hud-corner-all shadow-[0_0_10px_rgba(6,182,212,0.05)] hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                  >
                    <div>
                      {/* Thumbnail with Cyber Border */}
                      <div className="relative w-full h-24 overflow-hidden border border-cyan-500/20 mb-2">
                        <img
                          src={game.coverImage}
                          alt={game.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <span className="absolute bottom-1 left-1.5 text-[9px] font-mono text-cyan-300 bg-black/70 px-1 py-0.5 border border-cyan-500/30">
                          {game.category}
                        </span>
                        <span className="absolute top-1 right-1 text-[9px] font-mono text-emerald-300 bg-black/70 px-1 py-0.5">
                          {game.fileSize}
                        </span>
                      </div>

                      <h4 className="text-xs font-mono font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {game.title}
                      </h4>
                      <p className="text-[10px] font-mono text-cyan-400/80 line-clamp-1 mt-0.5">
                        {game.modName}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400">{game.version}</span>
                      <span className="text-cyan-300 flex items-center gap-1 group-hover:underline">
                        <Download className="w-3 h-3 text-cyan-400" />
                        <span>{t.card_download_btn}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: User Activity & Live Feed & Community (Image 1 Layout) */}
        <div className="lg:col-span-3 space-y-5">
          {/* User Activity Top Rated */}
          <div className="bg-[#080d19]/80 border border-cyan-500/30 p-3.5 hud-corner-all shadow-[0_0_15px_rgba(6,182,212,0.08)]">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-cyan-500/20">
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-cyan-400" />
                {t.sec_user_activity}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                ONLINE
              </span>
            </div>

            {/* Live Feed List */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-cyan-400/70 uppercase block">
                {'// LIVE DISPATCH FEED'}
              </span>

              {activities.map((act) => (
                <div
                  key={act.id}
                  className="p-2 bg-black/40 border border-slate-800/80 text-[11px] font-mono space-y-1 hud-corner-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-300 font-semibold truncate max-w-[120px]">
                      {act.user}
                    </span>
                    <span className="text-[9px] text-slate-500">{act.timestamp}</span>
                  </div>
                  <p className="text-slate-300 text-[10px] truncate">
                    <span className="text-slate-500">{act.action}</span> {act.target}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Box Shortcut */}
          <div className="bg-[#080d19]/80 border border-cyan-500/30 p-3.5 hud-corner-all shadow-[0_0_15px_rgba(6,182,212,0.08)]">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/20">
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">
                {t.sec_community_hub}
              </span>
            </div>

            <p className="text-[11px] font-mono text-slate-300 leading-relaxed mb-3">
              Bergabung dengan markas komunitas untuk update mod 0-day, bypass game guard, dan diskusi trainer.
            </p>

            <button
              onClick={() => setActiveView('community')}
              className="w-full py-2 px-3 text-xs font-mono font-bold tracking-wider text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-500/40 transition-all flex items-center justify-center gap-2 hud-corner-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>BUKA KOMUNITAS</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
