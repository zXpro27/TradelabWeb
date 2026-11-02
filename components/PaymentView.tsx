'use client';

import React, { useState } from 'react';
import { useTradelab } from '@/hooks/useTradelabStore';
import { 
  CreditCard, 
  Crown, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  QrCode, 
  Wallet,
  ArrowRight
} from 'lucide-react';

export default function PaymentView() {
  const { user, upgradeToVip, t, triggerToast, setActiveView } = useTradelab();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'lifetime'>('lifetime');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      upgradeToVip();
      setIsProcessing(false);
      triggerToast(t.pay_success_notice);
    }, 1200);
  };

  return (
    <section className="w-full px-4 sm:px-6 max-w-5xl mx-auto py-8 space-y-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950/40 border border-amber-400/40 text-[10px] font-mono text-amber-300 uppercase hud-corner-all">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>OFFICIAL TRADELAB PASS</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black font-mono text-white tracking-wide uppercase">
          {t.pay_title}
        </h2>
        <p className="text-xs sm:text-sm font-mono text-slate-300">
          {t.pay_subtitle}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Monthly Plan */}
        <div 
          onClick={() => setSelectedPlan('monthly')}
          className={`p-6 bg-[#080d19]/90 border transition-all cursor-pointer hud-corner-all flex flex-col justify-between ${
            selectedPlan === 'monthly'
              ? 'border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.25)]'
              : 'border-slate-800 hover:border-cyan-500/40'
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">
                {t.pay_pass_monthly}
              </span>
              <span className="text-[10px] font-mono text-slate-400">30 DAYS</span>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black font-mono text-white">Rp 49.000</span>
                <span className="text-xs font-mono text-slate-400">/ bln</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 block mt-1">($3.99 USD equivalent)</span>
            </div>

            <ul className="space-y-2 text-xs font-mono text-slate-300 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Dedicated CDN Mirror (Up to 100 MB/s)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Anti-Ban Hook Updates v2.4</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>VIP Discord Role & Priority Support</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <div className={`w-full py-2 text-center text-xs font-mono font-bold uppercase hud-corner-all border ${
              selectedPlan === 'monthly' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400' : 'border-slate-700 text-slate-400'
            }`}>
              {selectedPlan === 'monthly' ? 'PILIHAN AKTIF' : 'PILIH PAKET'}
            </div>
          </div>
        </div>

        {/* Lifetime Plan */}
        <div 
          onClick={() => setSelectedPlan('lifetime')}
          className={`p-6 bg-[#080d19]/90 border relative transition-all cursor-pointer hud-corner-all flex flex-col justify-between ${
            selectedPlan === 'lifetime'
              ? 'border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.25)]'
              : 'border-slate-800 hover:border-amber-500/40'
          }`}
        >
          <div className="absolute top-0 right-6 -translate-y-1/2 px-2.5 py-0.5 bg-amber-400 text-black text-[10px] font-mono font-black tracking-widest uppercase hud-corner-all">
            RECOMMENDED FOR GAMERS
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold tracking-wider text-amber-300 uppercase flex items-center gap-1.5">
                <Crown className="w-4 h-4 text-amber-400" />
                {t.pay_pass_lifetime}
              </span>
              <span className="text-[10px] font-mono text-amber-400 font-bold">LIFETIME ACCESS</span>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black font-mono text-white">Rp 149.000</span>
                <span className="text-xs font-mono text-amber-400">/ selamanya</span>
              </div>
              <span className="text-[10px] font-mono text-amber-400/80 block mt-1">($9.99 USD one-time pay)</span>
            </div>

            <ul className="space-y-2 text-xs font-mono text-slate-300 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Unlimited Bandwidth All Game Mods Forever</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>0-Day Mod Requests (24h SLA response)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Private Custom Anti-Ban Kernel Bypass</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>VIP Architect Role + 9,999 Gold Credits</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <div className={`w-full py-2 text-center text-xs font-mono font-bold uppercase hud-corner-all border ${
              selectedPlan === 'lifetime' ? 'bg-amber-400 text-black border-amber-300' : 'border-slate-700 text-slate-400'
            }`}>
              {selectedPlan === 'lifetime' ? 'PILIHAN AKTIF' : 'PILIH PAKET'}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Gateway Box */}
      <div className="p-5 bg-black/50 border border-cyan-500/30 hud-corner-all space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyan-500/20 pb-3">
          <div className="flex items-center gap-2">
            <QrCode className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">
              {t.pay_qris_dana}
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400">
            AUTO-CONFIRMATION ENGINE
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
          <div className="p-3 bg-slate-950 border border-slate-800 hud-corner-all hover:border-cyan-400 cursor-pointer transition-colors">
            <span className="text-white font-bold block">QRIS</span>
            <span className="text-[10px] text-slate-400">Semua E-Wallet</span>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 hud-corner-all hover:border-cyan-400 cursor-pointer transition-colors">
            <span className="text-blue-400 font-bold block">DANA</span>
            <span className="text-[10px] text-slate-400">Instan Pay</span>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 hud-corner-all hover:border-cyan-400 cursor-pointer transition-colors">
            <span className="text-emerald-400 font-bold block">GoPay</span>
            <span className="text-[10px] text-slate-400">Zero Fee</span>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 hud-corner-all hover:border-cyan-400 cursor-pointer transition-colors">
            <span className="text-amber-400 font-bold block">USDT Crypto</span>
            <span className="text-[10px] text-slate-400">TRC20 / Polygon</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] font-mono text-slate-400 text-center sm:text-left">
            Total Pembayaran: <strong className="text-white">{selectedPlan === 'lifetime' ? 'Rp 149.000' : 'Rp 49.000'}</strong>
          </div>

          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-mono font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] disabled:opacity-75 hud-corner-all flex items-center justify-center gap-2"
          >
            <Crown className="w-4 h-4" />
            <span>{isProcessing ? 'MEMVERIFIKASI TRANSAKSI...' : t.pay_upgrade_now}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
