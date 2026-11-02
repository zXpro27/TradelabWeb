'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTradelab } from '@/hooks/useTradelabStore';
import { 
  Search, 
  Menu, 
  X, 
  User,
  MessageSquare
} from 'lucide-react';

export default function HudNavbar() {
  const { 
    user, 
    activeView, 
    setActiveView, 
    searchQuery, 
    setSearchQuery, 
    setIsAdminOpen, 
    setIsChatOpen, 
    language,
    t
  } = useTradelab();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home' as const, label: t.nav_home, symbol: '⌂' },
    { id: 'payment' as const, label: t.nav_payment, symbol: '◈' },
    { id: 'community' as const, label: t.nav_community, symbol: '☍' },
    { id: 'account' as const, label: t.nav_account, symbol: '◉' },
  ];

  const getRoleBadge = (role: string) => {
    if (role === 'vip') {
      return (
        <span className="px-2 py-0.5 text-[9.5px] font-rajdhani font-black tracking-wider uppercase bg-amber-400/20 text-amber-300 border border-amber-400/60 hud-corner-all shadow-[0_0_8px_rgba(245,158,11,0.3)] shrink-0">
          EKSLUSIF
        </span>
      );
    }
    if (role === 'free') {
      return (
        <span className="px-2 py-0.5 text-[9.5px] font-rajdhani font-black tracking-wider uppercase bg-emerald-400/20 text-emerald-300 border border-emerald-400/60 hud-corner-all shrink-0">
          MEMBER
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 text-[9.5px] font-rajdhani font-black tracking-wider uppercase bg-cyan-400/15 text-cyan-300 border border-cyan-400/50 hud-corner-all shrink-0">
        GUEST
      </span>
    );
  };

  return (
    <div className="w-full px-2 sm:px-4 pt-2 sticky top-0 z-50 pointer-events-none">
      <div 
        className={`nav-outer-hud max-w-7xl mx-auto pointer-events-auto transition-all duration-300 ${
          isScrolled ? 'scrolled' : ''
        }`}
      >
        <header 
          className={`nav-wrap-hud w-full transition-all duration-300 ${
            isScrolled 
              ? 'scrolled' 
              : 'bg-transparent'
          }`}
        >
          {/* Main Navbar Row */}
          <div className="flex items-center justify-between gap-3 w-full">
            
            {/* 1. SEBELAH KIRI: Logo Image + Title "TradelabMod" + Deskripsi "Premium Modding Expert" */}
            <div 
              onClick={() => setActiveView('home')}
              className="group cursor-pointer select-none py-0.5 flex items-center gap-2 sm:gap-2.5 shrink-0 pl-0.5"
            >
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/assets/aistudio/tradelab_e506ff45.png"
                  alt="TradelabMod Logo"
                  fill
                  sizes="32px"
                  className="object-contain drop-shadow-[0_0_8px_rgba(0,229,255,0.65)]"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="font-orbitron font-extrabold text-xs sm:text-sm tracking-wider flex items-center leading-none">
                  <span className="text-[#00e5ff] drop-shadow-[0_0_8px_rgba(0,229,255,0.65)]">
                    TRADELAB
                  </span>
                  <span className="text-[#a855f7] drop-shadow-[0_0_8px_rgba(168,85,247,0.65)] ml-1">
                    MOD
                  </span>
                </h1>
                <span className="font-rajdhani font-bold text-[8px] sm:text-[9.5px] tracking-[0.14em] sm:tracking-[0.18em] text-cyan-300/80 uppercase leading-none mt-1">
                  Premium Modding Expert
                </span>
              </div>
            </div>

            {/* 2. TENGAH DI MOBILE: Badge "guest/member/ekslusif" + Nama */}
            <div className="lg:hidden flex-1 min-w-0 flex items-center justify-center px-1">
              <div 
                suppressHydrationWarning 
                className="topbar-hud-shape flex items-center justify-center gap-1.5 text-[11px] font-rajdhani font-semibold tracking-wider px-2.5 py-1 w-full max-w-[210px] truncate"
              >
                {getRoleBadge(user.role)}
                <span className="truncate text-white font-bold">{user.username}</span>
              </div>
            </div>

            {/* 2. TENGAH DI DESKTOP: Menu Navbar Berada Tepat di Tengah */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-2">
              <nav className="nav-links-hud-shape flex items-center gap-1 px-5 xl:px-7 py-2">
                {navItems.map((item) => {
                  const isActive = activeView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveView(item.id)}
                      className={`relative px-3 py-1 text-xs xl:text-sm font-rajdhani font-bold tracking-wider transition-all flex items-center gap-1.5 uppercase ${
                        isActive
                          ? 'nav-item-active text-white shadow-[0_0_10px_rgba(0,229,255,0.4)]'
                          : 'text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10'
                      }`}
                    >
                      <span className="text-cyan-400 text-xs">{item.symbol}</span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}

                {/* Admin Panel Nav Item */}
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="px-3 py-1 text-xs xl:text-sm font-rajdhani font-bold tracking-wider text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 transition-all flex items-center gap-1.5 uppercase"
                  title="Admin Command Hub (Passcode: 1928)"
                >
                  <span className="text-amber-400 text-xs">⚙</span>
                  <span>{t.nav_admin}</span>
                </button>
              </nav>
            </div>

            {/* 3. SEBELAH KANAN DI DESKTOP: Satu Bagian Terpadu (Badge + Nama di Atas, Search Bar di Bawah) */}
            <div className="hidden lg:flex flex-col items-end gap-1.5 shrink-0 w-[240px] xl:w-[275px] pr-0.5 pt-0.5 pb-0.5">
              {/* Badge + Nama di Atas Sebelah Kanan (Beri breathing room agar tidak nempel ke border) */}
              <div className="flex items-center justify-end gap-2.5 w-full mb-0.5">
                <div 
                  suppressHydrationWarning 
                  className="topbar-hud-shape flex items-center justify-end gap-2 text-[11px] xl:text-[12px] font-rajdhani font-semibold tracking-wider px-3.5 py-1 max-w-[220px] truncate"
                >
                  {getRoleBadge(user.role)}
                  <span className="truncate text-white font-bold">{user.username}</span>
                </div>

                {/* Ikon Profil */}
                <button
                  onClick={() => setActiveView('account')}
                  suppressHydrationWarning
                  className="p-1.5 text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 hud-corner-all transition-all shrink-0"
                  title={user.role === 'guest' ? t.nav_login : user.username}
                  aria-label="Profil Akun"
                >
                  <User className="w-3.5 h-3.5 text-cyan-300" />
                </button>
              </div>

              {/* Search Bar di Bawah */}
              <div className="searchbox-hud-shape flex items-center px-3 py-1 w-full">
                <Search className="w-3.5 h-3.5 text-cyan-400 shrink-0 mr-1.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={language === 'id' ? 'Cari mod menu...' : 'Search mods...'}
                  className="w-full bg-transparent border-none text-xs font-rajdhani font-semibold text-cyan-100 placeholder:text-cyan-400/50 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-[10px] font-mono text-cyan-400/60 hover:text-cyan-200 ml-1"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* 3. SEBELAH KANAN DI MOBILE: Icon Profil & Tombol Menu */}
            <div className="lg:hidden flex items-center gap-1.5 shrink-0 pr-0.5">
              {/* Tombol Icon Profil */}
              <button
                onClick={() => setActiveView('account')}
                suppressHydrationWarning
                className="p-1.5 text-cyan-300 hover:text-white border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-900/60 hud-corner-all transition-all"
                title={user.role === 'guest' ? t.nav_login : user.username}
                aria-label="Profil Akun"
              >
                <User className="w-4 h-4 text-cyan-300" />
              </button>

              {/* Tombol Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-950/40 hud-corner-all transition-all"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-cyan-500/30 space-y-2">
              <div className="grid grid-cols-2 gap-1.5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveView(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 text-xs font-rajdhani font-bold tracking-wider text-left flex items-center gap-2 border ${
                      activeView === item.id
                        ? 'text-cyan-300 bg-cyan-500/20 border-cyan-400'
                        : 'text-slate-300 border-slate-800 bg-black/40'
                    } hud-corner-all`}
                  >
                    <span className="text-cyan-400">{item.symbol}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                <button
                  onClick={() => {
                    setIsAdminOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs font-rajdhani font-bold text-amber-400 flex items-center gap-1.5 py-1"
                >
                  <span>⚙</span>
                  <span>ADMIN</span>
                </button>

                <button
                  onClick={() => {
                    setIsChatOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs font-rajdhani font-bold text-cyan-300 flex items-center gap-1.5 py-1"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LIVE CHAT</span>
                </button>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}
