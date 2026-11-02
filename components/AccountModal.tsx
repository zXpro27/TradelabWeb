'use client';

import React, { useState } from 'react';
import { useTradelab } from '@/hooks/useTradelabStore';
import { 
  User, 
  Mail, 
  Key, 
  Crown, 
  ShieldCheck, 
  LogOut, 
  HardDrive, 
  Fingerprint, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function AccountModal() {
  const { 
    user, 
    loginAsMember, 
    loginWithGoogle, 
    logoutToGuest, 
    activeView, 
    setActiveView, 
    t 
  } = useTradelab();

  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!usernameInput.trim() || !emailInput.trim()) return;
    loginAsMember(usernameInput.trim(), emailInput.trim());
  };

  return (
    <section className="w-full px-4 sm:px-6 max-w-4xl mx-auto py-8">
      <div className="bg-[#080d19]/90 border border-cyan-500/40 p-5 sm:p-8 hud-corner-all shadow-[0_0_30px_rgba(6,182,212,0.15)] space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-cyan-500/20 gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 border border-cyan-400/60 bg-cyan-950/40 flex items-center justify-center hud-corner-all">
              <Fingerprint className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-mono font-black tracking-wider text-cyan-300 uppercase">
                {t.acc_title}
              </h2>
              <span className="text-[11px] font-mono text-cyan-500/70">
                {'// HARDWARE IDENTIFIER PROTOCOL'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">{t.acc_curr_role}:</span>
            <span className={`px-2.5 py-0.5 text-xs font-mono font-bold tracking-wider uppercase hud-corner-all border ${
              user.role === 'vip' 
                ? 'bg-amber-950/70 text-amber-300 border-amber-400' 
                : user.role === 'free'
                ? 'bg-emerald-950/70 text-emerald-300 border-emerald-400'
                : 'bg-cyan-950/70 text-cyan-300 border-cyan-400'
            }`}>
              {user.role} ({user.rank})
            </span>
          </div>
        </div>

        {/* Guest HWID Overview Box */}
        <div className="p-4 bg-black/50 border border-slate-800 hud-corner-all space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">STATUS IDENTIFIKASI PERANGKAT</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> AKTIF & VALID
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-2.5 bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 block">HARDWARE ID (HWID)</span>
              <strong className="text-cyan-300 text-xs sm:text-sm font-mono truncate block">
                {user.hwid}
              </strong>
            </div>

            <div className="p-2.5 bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 block">NAMA TAMPILAN</span>
              <strong className="text-slate-200 text-xs sm:text-sm font-mono truncate block">
                {user.username}
              </strong>
            </div>

            <div className="p-2.5 bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 block">KREDIT GOLD</span>
              <strong className="text-amber-400 text-xs sm:text-sm font-mono block">
                {user.goldCredits} CR
              </strong>
            </div>
          </div>

          <p className="text-[11px] font-mono text-slate-400 leading-relaxed">
            {t.acc_guest_info}
          </p>
        </div>

        {/* Member Sign-in / Registration Form (Email or Google only as requested) */}
        {user.role === 'guest' ? (
          <div className="p-5 bg-cyan-950/15 border border-cyan-500/30 hud-corner-all space-y-4">
            <div>
              <h3 className="text-sm font-mono font-bold tracking-wider text-cyan-300 uppercase">
                DAFTAR / MASUK SEBAGAI MEMBER
              </h3>
              <p className="text-xs font-mono text-slate-300 mt-0.5">
                {t.acc_upgrade_prompt}
              </p>
            </div>

            {/* 1-Click Google Sign In */}
            <button
              onClick={loginWithGoogle}
              className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-900 text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-2 hud-corner-all transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{t.acc_google_btn}</span>
            </button>

            <div className="flex items-center gap-3 my-2 text-xs font-mono text-slate-500">
              <div className="flex-1 h-px bg-slate-800" />
              <span>ATAU DAFTAR EMAIL</span>
              <div className="flex-1 h-px bg-slate-800" />
            </div>

            {/* Email Registration Form */}
            <form onSubmit={handleRegister} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">
                    {t.acc_username_label}
                  </label>
                  <input
                    type="text"
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="e.g. ShadowHunter_99"
                    className="w-full bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 hud-corner-all"
                    required
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">
                    {t.acc_email_label}
                  </label>
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="gamer@domain.com"
                    className="w-full bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 hud-corner-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-mono font-bold tracking-widest text-cyan-950 bg-cyan-400 hover:bg-cyan-300 transition-all hud-corner-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t.acc_register_btn}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="p-4 bg-slate-950 border border-emerald-500/40 hud-corner-all flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-emerald-400/50 bg-emerald-950/40 flex items-center justify-center hud-corner-all">
                <Crown className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-300 font-bold block">
                  AKUN RESMI TRADELAB AKTIF
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Email: {user.email || 'terhubung via Google ID'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {user.role !== 'vip' && (
                <button
                  onClick={() => setActiveView('payment')}
                  className="px-3.5 py-1.5 text-xs font-mono font-bold text-amber-300 bg-amber-950/60 hover:bg-amber-900 border border-amber-500/50 hud-corner-all flex items-center gap-1.5"
                >
                  <Crown className="w-3.5 h-3.5" />
                  <span>UPGRADE VIP</span>
                </button>
              )}

              <button
                onClick={logoutToGuest}
                className="px-3.5 py-1.5 text-xs font-mono text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 hud-corner-all flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{t.acc_logout}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
