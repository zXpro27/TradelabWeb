'use client';

import React, { useState } from 'react';
import { useTradelab } from '@/hooks/useTradelabStore';
import { 
  X, 
  ShieldAlert, 
  Lock, 
  Unlock, 
  PlusCircle, 
  Trash2, 
  Download, 
  Users, 
  Crown, 
  FileCheck, 
  Terminal,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { ModCategory } from '@/lib/types';

export default function AdminPanelModal() {
  const { 
    isAdminOpen, 
    setIsAdminOpen, 
    isAdminAuthenticated, 
    verifyAdminPasscode, 
    logoutAdmin, 
    adminStats, 
    games, 
    addGameMod, 
    deleteGameMod, 
    t,
    triggerToast
  } = useTradelab();

  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Form states
  const [title, setTitle] = useState('');
  const [modName, setModName] = useState('');
  const [category, setCategory] = useState<ModCategory>('Action');
  const [version, setVersion] = useState('v1.0.0');
  const [fileSize, setFileSize] = useState('450 MB');
  const [features, setFeatures] = useState('God Mode, Infinite Ammo, Anti-Ban');
  const [downloadUrl, setDownloadUrl] = useState('#download-direct');
  const [description, setDescription] = useState('Mod APK terverifikasi dengan fitur premium unlocked.');
  const [coverImage, setCoverImage] = useState('/assets/images/gta_v_mod_cover_1793590950000.jpg');

  if (!isAdminOpen) return null;

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyAdminPasscode(passcode)) {
      setPasscode('');
      setErrorMsg('');
    } else {
      setErrorMsg(t.admin_invalid_key);
    }
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !modName.trim()) {
      triggerToast('Judul dan Nama Mod harus diisi!');
      return;
    }

    const featureList = features
      .split(',')
      .map((f) => f.trim())
      .filter(Boolean);

    addGameMod({
      title: title.trim(),
      modName: modName.trim(),
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: category === 'All' ? 'Action' : category,
      version: version.trim() || 'v1.0.0',
      fileSize: fileSize.trim() || '250 MB',
      sha256: '9f' + Math.random().toString(16).substring(2, 10) + 'c81920' + Date.now().toString(16) + 'aa4',
      developer: 'Tradelab Certified Studio',
      packageName: 'com.tradelab.' + title.toLowerCase().replace(/[^a-z0-9]+/g, ''),
      reqAndroid: 'Android 8.0+',
      features: featureList.length > 0 ? featureList : ['Unlocked All', 'No Ads'],
      description: description.trim(),
      coverImage: coverImage,
      badge: 'Admin Pick',
      virusScan: '0/72 Clean (VirusTotal)',
      downloadUrl: downloadUrl.trim() || '#download'
    });

    // Reset Form
    setTitle('');
    setModName('');
    setFeatures('God Mode, Infinite Ammo, Anti-Ban');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={() => setIsAdminOpen(false)}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#070b16] border border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.2)] hud-corner-all overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-amber-500/30 bg-black/50">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-amber-300 uppercase">
              {t.admin_title}
            </span>
            <span className="text-[10px] font-mono text-amber-500/60 hidden sm:inline">
              {'// PASSCODE PROTECTED (1928)'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {isAdminAuthenticated && (
              <button
                onClick={logoutAdmin}
                className="text-[10px] font-mono text-amber-400 hover:text-white px-2 py-1 border border-amber-500/40 hover:bg-amber-950/40 hud-corner-all"
              >
                KUNCI PANEL
              </button>
            )}
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-1.5 text-slate-400 hover:text-amber-300 border border-slate-700 hover:border-amber-400 hud-corner-all"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Panel Content */}
        {!isAdminAuthenticated ? (
          /* Authentication Gate */
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 mx-auto rounded-none border border-amber-400/60 bg-amber-950/30 flex items-center justify-center hud-corner-all">
              <Lock className="w-6 h-6 text-amber-400" />
            </div>

            <h3 className="text-base font-mono font-bold text-white tracking-wide uppercase">
              {t.admin_login_prompt}
            </h3>
            <p className="text-xs font-mono text-slate-400">
              Akses khusus komandan TradelabMod. Gunakan sandi otorisasi resmi untuk mengelola data unduhan dan arsip game.
            </p>

            <form onSubmit={handleAuth} className="space-y-3 pt-2">
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="1928"
                className="w-full bg-black/60 border border-amber-500/50 px-4 py-2 text-center text-sm font-mono text-amber-300 placeholder:text-amber-500/30 focus:outline-none focus:border-amber-400 hud-corner-all"
                autoFocus
              />

              {errorMsg && (
                <p className="text-xs font-mono text-rose-400">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-mono font-bold tracking-widest text-black bg-amber-400 hover:bg-amber-300 transition-all hud-corner-all"
              >
                {t.admin_unlock_btn}
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Admin Workbench */
          <div className="p-4 sm:p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* 4 Analytics Counters (Guest, Free, VIP, Downloads) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-black/40 border border-cyan-500/30 hud-corner-all">
                <span className="text-[10px] font-mono text-slate-400 block flex items-center gap-1">
                  <Download className="w-3 h-3 text-cyan-400" />
                  {t.admin_stats_total_dl}
                </span>
                <strong className="text-sm sm:text-base font-mono text-cyan-300 tabular-nums">
                  {adminStats.totalDownloads.toLocaleString()}
                </strong>
              </div>

              <div className="p-3 bg-black/40 border border-slate-700 hud-corner-all">
                <span className="text-[10px] font-mono text-slate-400 block flex items-center gap-1">
                  <Users className="w-3 h-3 text-slate-400" />
                  {t.admin_stats_guest}
                </span>
                <strong className="text-sm sm:text-base font-mono text-slate-200 tabular-nums">
                  {adminStats.guestCount.toLocaleString()}
                </strong>
              </div>

              <div className="p-3 bg-black/40 border border-emerald-500/30 hud-corner-all">
                <span className="text-[10px] font-mono text-slate-400 block flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {t.admin_stats_free}
                </span>
                <strong className="text-sm sm:text-base font-mono text-emerald-400 tabular-nums">
                  {adminStats.freeCount.toLocaleString()}
                </strong>
              </div>

              <div className="p-3 bg-black/40 border border-amber-500/30 hud-corner-all">
                <span className="text-[10px] font-mono text-slate-400 block flex items-center gap-1">
                  <Crown className="w-3 h-3 text-amber-400" />
                  {t.admin_stats_vip}
                </span>
                <strong className="text-sm sm:text-base font-mono text-amber-400 tabular-nums">
                  {adminStats.vipCount.toLocaleString()}
                </strong>
              </div>
            </div>

            {/* Post New Game Mod Section */}
            <div className="p-4 bg-black/40 border border-amber-500/30 hud-corner-all space-y-4">
              <div className="flex items-center gap-2 border-b border-amber-500/20 pb-2">
                <PlusCircle className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-mono font-bold tracking-wider text-amber-300 uppercase">
                  {t.admin_post_new_title}
                </h4>
              </div>

              <form onSubmit={handlePublish} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">
                      {t.admin_field_title}
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Free Fire MAX"
                      className="w-full bg-slate-950 border border-slate-700 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 hud-corner-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">
                      {t.admin_field_modname}
                    </label>
                    <input
                      type="text"
                      value={modName}
                      onChange={(e) => setModName(e.target.value)}
                      placeholder="e.g. Auto Headshot & Antenna ESP v2.8"
                      className="w-full bg-slate-950 border border-slate-700 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 hud-corner-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">
                      {t.admin_field_category}
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as ModCategory)}
                      className="w-full bg-slate-950 border border-slate-700 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 hud-corner-all"
                    >
                      <option value="Action">Action</option>
                      <option value="Idle RPG">Idle RPG</option>
                      <option value="Casual">Casual</option>
                      <option value="Survival">Survival</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">
                      {t.admin_field_version}
                    </label>
                    <input
                      type="text"
                      value={version}
                      onChange={(e) => setVersion(e.target.value)}
                      placeholder="v2.5.0"
                      className="w-full bg-slate-950 border border-slate-700 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 hud-corner-all"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">
                      {t.admin_field_size}
                    </label>
                    <input
                      type="text"
                      value={fileSize}
                      onChange={(e) => setFileSize(e.target.value)}
                      placeholder="650 MB"
                      className="w-full bg-slate-950 border border-slate-700 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 hud-corner-all"
                    />
                  </div>
                </div>

                <div className="text-xs font-mono">
                  <label className="text-[10px] text-slate-400 block mb-1">
                    {t.admin_field_features}
                  </label>
                  <input
                    type="text"
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                    placeholder="Wallhack, No Recoil, God Mode, Unlimited Diamonds"
                    className="w-full bg-slate-950 border border-slate-700 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 hud-corner-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">
                      Cover Asset Artwork
                    </label>
                    <select
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 hud-corner-all"
                    >
                      <option value="/assets/images/gta_v_mod_cover_1793590950000.jpg">GTA / Action Tactical Art</option>
                      <option value="/assets/images/warzone_fps_cover_1793590949908.jpg">Warzone / Military FPS Art</option>
                      <option value="/assets/images/cyberpunk_neon_cover_1793590952812.jpg">Cyberpunk Neon Racing Art</option>
                      <option value="/assets/images/idle_rpg_fantasy_cover_1793590950728.jpg">Idle RPG Fantasy Hero Art</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">
                      {t.admin_field_dlurl}
                    </label>
                    <input
                      type="text"
                      value={downloadUrl}
                      onChange={(e) => setDownloadUrl(e.target.value)}
                      placeholder="#direct-download-cdn"
                      className="w-full bg-slate-950 border border-slate-700 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 hud-corner-all"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="py-2 px-5 text-xs font-mono font-bold tracking-widest text-black bg-amber-400 hover:bg-amber-300 transition-all hud-corner-all flex items-center gap-1.5"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>{t.admin_btn_publish}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Management Table of Games */}
            <div className="p-4 bg-black/40 border border-slate-800 hud-corner-all space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h4 className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
                  {t.admin_game_list_title} ({games.length})
                </h4>
              </div>

              <div className="space-y-2">
                {games.map((g) => (
                  <div
                    key={g.id}
                    className="p-2.5 bg-slate-950 border border-slate-800 text-xs font-mono flex items-center justify-between gap-3 hud-corner-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={g.coverImage}
                        alt={g.title}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 object-cover border border-slate-700 shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-white font-semibold truncate block">
                          {g.title}
                        </span>
                        <span className="text-[10px] text-cyan-400 block truncate">
                          {g.modName} · {g.category} · {g.version}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 text-[11px]">
                      <span className="text-slate-400 tabular-nums">
                        {g.downloads.toLocaleString()} dl
                      </span>
                      <button
                        onClick={() => deleteGameMod(g.id)}
                        className="p-1.5 text-rose-400 hover:text-white hover:bg-rose-950/60 border border-rose-500/40 hud-corner-all transition-colors"
                        title="Hapus game"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
