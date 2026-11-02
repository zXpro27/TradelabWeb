'use client';

import React, { useState } from 'react';
import { useTradelab } from '@/hooks/useTradelabStore';
import { 
  Users, 
  MessageCircle, 
  Send, 
  ThumbsUp, 
  Plus, 
  ExternalLink, 
  Sparkles, 
  Flame,
  ShieldCheck
} from 'lucide-react';

export default function CommunityView() {
  const { modRequests, upvoteRequest, submitRequest, t, triggerToast } = useTradelab();
  const [newRequestInput, setNewRequestInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRequestInput.trim()) return;
    submitRequest(newRequestInput.trim());
    setNewRequestInput('');
  };

  return (
    <section className="w-full px-4 sm:px-6 max-w-5xl mx-auto py-8 space-y-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-950/40 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 uppercase hud-corner-all">
          <Users className="w-3.5 h-3.5 text-cyan-400" />
          <span>GLOBAL NETWORK</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black font-mono text-white tracking-wide uppercase">
          {t.com_title}
        </h2>
        <p className="text-xs sm:text-sm font-mono text-slate-300">
          {t.com_subtitle}
        </p>
      </div>

      {/* Official Comms Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Discord */}
        <div className="p-5 bg-[#090e1a]/90 border border-[#5865F2]/40 hud-corner-all flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#5865F2]/20 border border-[#5865F2]/50 flex items-center justify-center hud-corner-all">
              <MessageCircle className="w-5 h-5 text-[#5865F2]" />
            </div>
            <div>
              <h4 className="text-sm font-mono font-bold text-white">TRADELAB DISCORD SERVER</h4>
              <span className="text-[11px] font-mono text-slate-400">28,450 Online Members</span>
            </div>
          </div>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              triggerToast('Membuka tautan Discord Tradelab Community...');
            }}
            className="px-3.5 py-1.5 text-xs font-mono font-bold text-white bg-[#5865F2] hover:bg-[#4752C4] hud-corner-all transition-colors flex items-center gap-1.5"
          >
            <span>JOIN</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Telegram */}
        <div className="p-5 bg-[#090e1a]/90 border border-cyan-500/40 hud-corner-all flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-950/40 border border-cyan-500/50 flex items-center justify-center hud-corner-all">
              <Send className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-sm font-mono font-bold text-white">TELEGRAM BROADCAST</h4>
              <span className="text-[11px] font-mono text-slate-400">16,200 Channel Subscribers</span>
            </div>
          </div>

          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              triggerToast('Membuka saluran Telegram Tradelab APK...');
            }}
            className="px-3.5 py-1.5 text-xs font-mono font-bold text-cyan-950 bg-cyan-400 hover:bg-cyan-300 hud-corner-all transition-colors flex items-center gap-1.5"
          >
            <span>JOIN</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Community Mod Request Board */}
      <div className="p-5 bg-[#080d19]/90 border border-cyan-500/30 hud-corner-all space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-cyan-500/20 gap-2">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-cyan-300 uppercase">
              {t.com_request_title}
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            MODDER VOTE SYSTEM
          </span>
        </div>

        {/* Submit Request Input */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={newRequestInput}
            onChange={(e) => setNewRequestInput(e.target.value)}
            placeholder="Tulis judul game & fitur mod yang diinginkan (e.g. Genshin Impact Fly Hack)..."
            className="flex-1 bg-black/60 border border-slate-700 px-3 py-2 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 hud-corner-all"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-cyan-950 text-xs font-mono font-bold tracking-wider uppercase hud-corner-all flex items-center gap-1.5 shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{t.com_request_btn}</span>
          </button>
        </form>

        {/* Requests List */}
        <div className="space-y-2 pt-2">
          {modRequests.map((req) => (
            <div
              key={req.id}
              className="p-3 bg-black/40 border border-slate-800/80 hover:border-cyan-500/40 text-xs font-mono flex items-center justify-between gap-3 hud-corner-all transition-colors"
            >
              <div className="min-w-0">
                <span className="text-slate-100 font-semibold block truncate">
                  {req.gameTitle}
                </span>
                <div className="flex items-center gap-3 text-[10px] text-slate-400 mt-1">
                  <span>Diajukan oleh: <strong className="text-cyan-300">{req.requestedBy}</strong></span>
                  <span>·</span>
                  <span className={`px-1.5 py-0.2 border uppercase ${
                    req.status === 'Released'
                      ? 'text-emerald-400 border-emerald-500/40'
                      : req.status === 'Testing'
                      ? 'text-amber-400 border-amber-500/40'
                      : 'text-cyan-400 border-cyan-500/40'
                  }`}>
                    {req.status}
                  </span>
                </div>
              </div>

              <button
                onClick={() => upvoteRequest(req.id)}
                className={`px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 border hud-corner-all transition-all ${
                  req.hasUpvoted
                    ? 'text-cyan-300 bg-cyan-500/20 border-cyan-400'
                    : 'text-slate-400 hover:text-white border-slate-700 hover:border-cyan-500/40 bg-black/30'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span className="tabular-nums">{req.upvotes}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
