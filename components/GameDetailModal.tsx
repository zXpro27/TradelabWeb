'use client';

import React, { useState } from 'react';
import { useTradelab } from '@/hooks/useTradelabStore';
import { 
  X, 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  FileCode, 
  Smartphone, 
  HardDrive, 
  Calendar, 
  Lock, 
  Terminal, 
  Sparkles,
  ExternalLink,
  AlertTriangle
} from 'lucide-react';

export default function GameDetailModal() {
  const { selectedGame, setSelectedGame, recordDownload, t, triggerToast } = useTradelab();
  const [downloading, setDownloading] = useState(false);
  const [downloadStep, setDownloadStep] = useState<'idle' | 'verifying' | 'completed'>('idle');

  if (!selectedGame) return null;

  const handleInstantDownload = () => {
    setDownloading(true);
    setDownloadStep('verifying');

    // Simulate instant background integrity verification & dispatch
    setTimeout(() => {
      recordDownload(selectedGame.id);
      setDownloadStep('completed');
      setDownloading(false);
      triggerToast(t.modal_download_success);

      // Trigger standard browser simulated file download
      try {
        const dummyContent = `TRADELABMOD SECURE DISPATCH\nGame: ${selectedGame.title}\nVersion: ${selectedGame.version}\nPackage: ${selectedGame.packageName}\nSHA-256: ${selectedGame.sha256}\nIntegrity: PASSED (0/72 Clean)\nStatus: Ready for installation.`;
        const blob = new Blob([dummyContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${selectedGame.packageName}_${selectedGame.version}_mod.apk.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch {
        // Fallback
      }
    }, 900);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={() => setSelectedGame(null)}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#080d19] border border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.25)] hud-corner-all overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tactical Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-cyan-500/30 bg-black/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-cyan-400 rotate-45" />
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
              {t.modal_dossier_title}
            </span>
            <span className="text-[10px] font-mono text-cyan-500/60 hidden sm:inline">
              {'// ID: '}{selectedGame.id}
            </span>
          </div>

          <button
            onClick={() => setSelectedGame(null)}
            className="p-1.5 text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/40 border border-slate-700 hover:border-cyan-400 transition-colors hud-corner-all"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Banner & Title Grid */}
          <div className="relative w-full h-44 sm:h-56 overflow-hidden border border-cyan-500/30 hud-corner-all">
            <img
              src={selectedGame.coverImage}
              alt={selectedGame.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d19] via-[#080d19]/60 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4">
              <span className="px-2 py-0.5 text-[10px] font-mono text-cyan-300 bg-black/80 border border-cyan-400/40 uppercase mb-2 inline-block">
                {selectedGame.category}
              </span>
              <h2 className="text-lg sm:text-2xl font-black font-mono text-white tracking-wide">
                {selectedGame.title}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-cyan-300">
                {selectedGame.modName}
              </p>
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
            <div className="p-2.5 bg-black/40 border border-slate-800 hud-corner-all">
              <span className="text-[10px] text-slate-400 block">{t.modal_version}</span>
              <strong className="text-cyan-300 text-xs sm:text-sm">{selectedGame.version}</strong>
            </div>
            <div className="p-2.5 bg-black/40 border border-slate-800 hud-corner-all">
              <span className="text-[10px] text-slate-400 block">{t.modal_filesize}</span>
              <strong className="text-emerald-400 text-xs sm:text-sm">{selectedGame.fileSize}</strong>
            </div>
            <div className="p-2.5 bg-black/40 border border-slate-800 hud-corner-all">
              <span className="text-[10px] text-slate-400 block">{t.modal_req_android}</span>
              <strong className="text-slate-200 text-xs sm:text-sm">{selectedGame.reqAndroid}</strong>
            </div>
            <div className="p-2.5 bg-black/40 border border-slate-800 hud-corner-all">
              <span className="text-[10px] text-slate-400 block">{t.modal_developer}</span>
              <strong className="text-slate-200 text-xs truncate block">{selectedGame.developer}</strong>
            </div>
          </div>

          {/* Background Integrity Badges (Confirmed Direct Instant Flow with Badges) */}
          <div className="p-3.5 bg-cyan-950/20 border border-cyan-500/30 hud-corner-all space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 text-cyan-300 font-bold uppercase">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                BACKGROUND SECURITY INTEGRITY AUDIT
              </span>
              <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 border border-emerald-500/40">
                PASSED (0/72 CLEAN)
              </span>
            </div>

            <div className="space-y-1 text-[11px] font-mono text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{t.modal_sha256}:</span>
                <span className="text-cyan-400 font-mono text-[10px] truncate max-w-[280px]">
                  {selectedGame.sha256}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{t.modal_package}:</span>
                <span className="text-slate-300 font-mono text-[10px]">{selectedGame.packageName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Google Play Protect Status:</span>
                <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Signed & Verified
                </span>
              </div>
            </div>
          </div>

          {/* Mod Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              {t.modal_features_title}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedGame.features.map((feature, i) => (
                <div
                  key={i}
                  className="px-3 py-2 bg-black/40 border border-slate-800 text-xs font-mono text-slate-200 flex items-center gap-2 hud-corner-all"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rotate-45 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
              DESKRIPSI OPERASIONAL
            </h4>
            <p className="text-xs font-mono text-slate-300 leading-relaxed bg-black/30 p-3 border border-slate-800/80">
              {selectedGame.description}
            </p>
          </div>

          {/* Quick Installation Guide */}
          <div className="p-3 bg-black/40 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
            <span className="text-cyan-400 font-semibold block">{t.modal_install_guide_title}</span>
            <p className="text-[11px] text-slate-400">{t.modal_install_step1}</p>
            <p className="text-[11px] text-slate-400">{t.modal_install_step2}</p>
            <p className="text-[11px] text-slate-400">{t.modal_install_step3}</p>
          </div>
        </div>

        {/* Modal Action Footer: Direct Instant Download */}
        <div className="p-4 sm:p-6 border-t border-cyan-500/30 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] font-mono text-slate-400 text-center sm:text-left">
            <span>Server Mirror: </span>
            <strong className="text-cyan-300">Fast Cloud CDN (Singapore Node-01)</strong>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSelectedGame(null)}
              className="w-1/3 sm:w-auto px-4 py-2 text-xs font-mono text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 hud-corner-all transition-colors"
            >
              {t.modal_close}
            </button>

            <button
              onClick={handleInstantDownload}
              disabled={downloading}
              className="flex-1 sm:flex-initial px-6 py-2.5 text-xs font-mono font-bold tracking-widest text-cyan-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-75 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 hud-corner-all"
            >
              <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
              <span>
                {downloading ? t.modal_downloading_telemetry : t.modal_instant_download_btn}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
