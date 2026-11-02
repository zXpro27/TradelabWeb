'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ModGame, UserState, LiveActivity, ModRequestItem, ChatMessage, UserRole } from '@/lib/types';
import { INITIAL_GAMES, INITIAL_LIVE_ACTIVITIES, INITIAL_MOD_REQUESTS } from '@/lib/gamesData';
import { Language, translations } from '@/lib/i18n';

interface TradelabContextType {
  // Navigation & View
  activeView: 'home' | 'payment' | 'community' | 'account';
  setActiveView: (view: 'home' | 'payment' | 'community' | 'account') => void;
  
  // Language & i18n
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (typeof translations)['id'];

  // User & Guest HWID
  user: UserState;
  loginAsMember: (username: string, email: string) => void;
  loginWithGoogle: () => void;
  logoutToGuest: () => void;
  upgradeToVip: () => void;

  // Games & Catalog
  games: ModGame[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  selectedGame: ModGame | null;
  setSelectedGame: (game: ModGame | null) => void;
  recordDownload: (gameId: string) => void;

  // Admin Hub
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isAdminAuthenticated: boolean;
  verifyAdminPasscode: (pass: string) => boolean;
  logoutAdmin: () => void;
  adminStats: {
    totalDownloads: number;
    guestCount: number;
    freeCount: number;
    vipCount: number;
  };
  addGameMod: (newGame: Omit<ModGame, 'id' | 'downloads' | 'rating' | 'updatedAt'>) => void;
  deleteGameMod: (id: string) => void;

  // Live Activity & Requests
  activities: LiveActivity[];
  modRequests: ModRequestItem[];
  upvoteRequest: (id: string) => void;
  submitRequest: (title: string) => void;

  // Tactical Chat Assistant
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  chatMessages: ChatMessage[];
  sendChatMessage: (text: string) => void;
  
  // Notification Toast
  toastMessage: string | null;
  triggerToast: (msg: string) => void;
}

const TradelabContext = createContext<TradelabContextType | null>(null);

function generateHwid(): string {
  if (typeof window === 'undefined') return 'guest_8F2C10';
  const chars = '0123456789ABCDEF';
  let result = 'guest_';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function TradelabProvider({ children }: { children: React.ReactNode }) {
  const [activeView, setActiveView] = useState<'home' | 'payment' | 'community' | 'account'>('home');
  const [language, setLanguageState] = useState<Language>('id');

  // User State - deterministic for SSR to prevent hydration mismatch
  const [user, setUser] = useState<UserState>({
    hwid: 'guest_8F2C10',
    username: 'guest_8F2C10',
    role: 'guest',
    goldCredits: 150,
    rank: 'RECRUIT',
    joinedAt: 'Today',
    downloadsCount: 0
  });

  // Games & Search
  const [games, setGames] = useState<ModGame[]>(INITIAL_GAMES);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedGame, setSelectedGame] = useState<ModGame | null>(null);

interface AdminStatsData {
  totalDownloads: number;
  guestCount: number;
  freeCount: number;
  vipCount: number;
}

  // Admin
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminStats, setAdminStats] = useState<AdminStatsData>({
    totalDownloads: 8430000,
    guestCount: 14820,
    freeCount: 8450,
    vipCount: 1920
  });

  // Hydrate client-only values asynchronously after mount to prevent hydration mismatch
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedLang = localStorage.getItem('tlm_language');
        if (savedLang === 'en' || savedLang === 'id') {
          setLanguageState(savedLang);
        }

        let storedHwid = localStorage.getItem('tlm_hwid');
        if (!storedHwid) {
          storedHwid = generateHwid();
          localStorage.setItem('tlm_hwid', storedHwid);
        }

        const storedUser = localStorage.getItem('tlm_user_profile');
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
          } catch {
            setUser((prev) => ({ ...prev, hwid: storedHwid, username: storedHwid }));
          }
        } else {
          setUser((prev) => ({ ...prev, hwid: storedHwid, username: storedHwid }));
        }

        const storedGames = localStorage.getItem('tlm_games_db');
        if (storedGames) {
          try {
            setGames(JSON.parse(storedGames));
          } catch {
            // ignore
          }
        }

        const storedStats = localStorage.getItem('tlm_admin_stats');
        if (storedStats) {
          try {
            setAdminStats(JSON.parse(storedStats) as AdminStatsData);
          } catch {
            // ignore
          }
        }
      } catch {
        // ignore in private browsing modes
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Live activity & Community
  const [activities, setActivities] = useState<LiveActivity[]>(INITIAL_LIVE_ACTIVITIES);
  const [modRequests, setModRequests] = useState<ModRequestItem[]>(INITIAL_MOD_REQUESTS);

  // Chat
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'operator',
      text: 'Tradelab Support System Online. Silakan tanyakan panduan instalasi APK, lisensi VIP, bypass anti-ban, atau request mod baru.',
      timestamp: 'Now'
    }
  ]);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3800);
  }, []);

  // Language setter
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('tlm_language', lang);
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'id' ? 'en' : 'id';
    setLanguage(nextLang);
    triggerToast(nextLang === 'id' ? 'Bahasa beralih ke Bahasa Indonesia' : 'Language switched to English');
  };

  // Auth operations
  const loginAsMember = (username: string, email: string) => {
    const updated: UserState = {
      ...user,
      username: username.trim() || 'AlphaRanger',
      email: email.trim(),
      role: 'free',
      rank: 'ELITE MEMBER',
      goldCredits: 500
    };
    setUser(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('tlm_user_profile', JSON.stringify(updated));
    }
    setAdminStats((prev) => {
      const next = { ...prev, freeCount: prev.freeCount + 1 };
      localStorage.setItem('tlm_admin_stats', JSON.stringify(next));
      return next;
    });
    triggerToast(language === 'id' ? `Selamat datang kembali, ${updated.username}!` : `Welcome back, ${updated.username}!`);
  };

  const loginWithGoogle = () => {
    const updated: UserState = {
      ...user,
      username: 'GoogleAgent_' + Math.floor(100 + Math.random() * 900),
      email: 'gamer@gmail.com',
      role: 'free',
      rank: 'ELITE MEMBER',
      goldCredits: 750
    };
    setUser(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('tlm_user_profile', JSON.stringify(updated));
    }
    setAdminStats((prev) => {
      const next = { ...prev, freeCount: prev.freeCount + 1 };
      localStorage.setItem('tlm_admin_stats', JSON.stringify(next));
      return next;
    });
    triggerToast(language === 'id' ? 'Otorisasi Google Berhasil! Akun Member aktif.' : 'Google Authorization Successful! Member account active.');
  };

  const logoutToGuest = () => {
    const guestState: UserState = {
      hwid: user.hwid,
      username: user.hwid,
      role: 'guest',
      goldCredits: 150,
      rank: 'RECRUIT',
      joinedAt: 'Today',
      downloadsCount: user.downloadsCount
    };
    setUser(guestState);
    if (typeof window !== 'undefined') {
      localStorage.setItem('tlm_user_profile', JSON.stringify(guestState));
    }
    triggerToast(language === 'id' ? 'Beralih kembali ke mode Tamu.' : 'Switched back to Guest mode.');
  };

  const upgradeToVip = () => {
    const updated: UserState = {
      ...user,
      role: 'vip',
      rank: 'VIP OPERATOR',
      goldCredits: 9999
    };
    setUser(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('tlm_user_profile', JSON.stringify(updated));
    }
    setAdminStats((prev) => {
      const next = { ...prev, vipCount: prev.vipCount + 1 };
      localStorage.setItem('tlm_admin_stats', JSON.stringify(next));
      return next;
    });
    triggerToast(language === 'id' ? 'Status VIP Terkonfirmasi! Akses Unlocked.' : 'VIP Status Confirmed! Full Access Unlocked.');
  };

  // Download recorder
  const recordDownload = (gameId: string) => {
    setGames((prev) => {
      const next = prev.map((g) => (g.id === gameId ? { ...g, downloads: g.downloads + 1 } : g));
      if (typeof window !== 'undefined') {
        localStorage.setItem('tlm_games_db', JSON.stringify(next));
      }
      return next;
    });

    setAdminStats((prev) => {
      const next = { ...prev, totalDownloads: prev.totalDownloads + 1 };
      if (typeof window !== 'undefined') {
        localStorage.setItem('tlm_admin_stats', JSON.stringify(next));
      }
      return next;
    });

    setUser((prev) => {
      const next = { ...prev, downloadsCount: prev.downloadsCount + 1 };
      if (typeof window !== 'undefined') {
        localStorage.setItem('tlm_user_profile', JSON.stringify(next));
      }
      return next;
    });

    // Add to live feed
    const targetGame = games.find((g) => g.id === gameId);
    if (targetGame) {
      setActivities((prev) => [
        {
          id: 'act-' + Date.now(),
          user: user.username,
          action: 'downloaded',
          target: targetGame.title,
          timestamp: 'Just now',
          avatarSeed: user.username
        },
        ...prev.slice(0, 7)
      ]);
    }
  };

  // Admin verification with passcode 1928
  const verifyAdminPasscode = (pass: string): boolean => {
    if (pass.trim() === '1928') {
      setIsAdminAuthenticated(true);
      triggerToast(language === 'id' ? 'Otorisasi Admin Berhasil! Selamat Datang Commander.' : 'Admin Authorization Verified! Welcome Commander.');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    setIsAdminOpen(false);
    triggerToast(language === 'id' ? 'Sesi Admin Berakhir.' : 'Admin Session Terminated.');
  };

  const addGameMod = (newGame: Omit<ModGame, 'id' | 'downloads' | 'rating' | 'updatedAt'>) => {
    const fullGame: ModGame = {
      ...newGame,
      id: 'tlm-mod-' + Date.now(),
      downloads: 1,
      rating: 5.0,
      updatedAt: 'Just now'
    };
    const updated = [fullGame, ...games];
    setGames(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('tlm_games_db', JSON.stringify(updated));
    }
    triggerToast(language === 'id' ? `Game "${fullGame.title}" berhasil diposting!` : `Game "${fullGame.title}" published successfully!`);
  };

  const deleteGameMod = (id: string) => {
    const updated = games.filter((g) => g.id !== id);
    setGames(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('tlm_games_db', JSON.stringify(updated));
    }
    triggerToast(language === 'id' ? 'Game berhasil dihapus dari arsip.' : 'Game deleted from repository.');
  };

  const upvoteRequest = (id: string) => {
    setModRequests((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          const hasUp = r.hasUpvoted;
          return {
            ...r,
            upvotes: hasUp ? r.upvotes - 1 : r.upvotes + 1,
            hasUpvoted: !hasUp
          };
        }
        return r;
      })
    );
  };

  const submitRequest = (title: string) => {
    if (!title.trim()) return;
    const item: ModRequestItem = {
      id: 'req-' + Date.now(),
      gameTitle: title.trim(),
      requestedBy: user.username,
      upvotes: 1,
      status: 'Investigating',
      hasUpvoted: true
    };
    setModRequests((prev) => [item, ...prev]);
    triggerToast(language === 'id' ? 'Request mod berhasil diajukan!' : 'Mod request submitted successfully!');
  };

  // Chat message send
  const sendChatMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: text.trim(),
      timestamp: 'Now'
    };
    setChatMessages((prev) => [...prev, userMsg]);

    // Simulated tactical operator response
    setTimeout(() => {
      let reply = '';
      const lower = text.toLowerCase();
      if (lower.includes('instal') || lower.includes('install') || lower.includes('cara')) {
        reply = language === 'id' 
          ? 'Panduan Instalasi: 1) Unduh APK dari tombol langsung di halaman detail game. 2) Pastikan setting "Izinkan sumber tidak dikenal" aktif di Android. 3) Buka APK, izinkan overlay floating window saat game pertama dibuka. Menu cheat akan muncul di sudut layar!'
          : 'Installation Guide: 1) Download APK directly from the game dossier. 2) Enable "Install unknown apps" in Android settings. 3) Launch the game and grant floating display overlay permission. The HUD cheat menu will appear automatically!';
      } else if (lower.includes('vip') || lower.includes('bayar') || lower.includes('payment') || lower.includes('harga')) {
        reply = language === 'id'
          ? 'Keuntungan VIP: Download kecepatan tanpa batas lewat dedicated CDN, bypass anti-ban private server, dan hak request mod 0-day. Anda bisa mengaktifkan VIP di menu "Payment" via QRIS, DANA, GoPay, atau Crypto!'
          : 'VIP Perks: Uncapped download bandwidth via dedicated CDN mirrors, private anti-ban bypass, and priority 0-day mod requests. You can activate VIP in the "Payment" tab via QRIS, DANA, or Crypto!';
      } else if (lower.includes('obb') || lower.includes('data') || lower.includes('force close') || lower.includes('crash')) {
        reply = language === 'id'
          ? 'Mengatasi Force Close / OBB: Sebagian besar mod kami sudah auto-installer (XAPK/APKs digabung). Jika game memerlukan OBB terpisah, ekstrak folder com.xxx ke Android/obb sebelum membuka game.'
          : 'Fixing Force Close / OBB: Most of our APKs are pre-bundled with auto-installers. If separate OBB is needed, extract the com.xxx folder into Android/obb before opening the game.';
      } else {
        reply = language === 'id'
          ? `Laporan diterima, Agen ${user.username}. Tim engineering Tradelab siap memvalidasi berkas APK dan memeriksa kompatibilitas versi Android Anda.`
          : `Transmission received, Agent ${user.username}. The Tradelab technical crew is standing by to verify APK hashes and test Android firmware compatibility.`;
      }

      setChatMessages((prev) => [
        ...prev,
        {
          id: 'msg-reply-' + Date.now(),
          sender: 'operator',
          text: reply,
          timestamp: 'Now'
        }
      ]);
    }, 600);
  };

  const t = translations[language];

  return (
    <TradelabContext.Provider
      value={{
        activeView,
        setActiveView,
        language,
        setLanguage,
        toggleLanguage,
        t,
        user,
        loginAsMember,
        loginWithGoogle,
        logoutToGuest,
        upgradeToVip,
        games,
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        selectedGame,
        setSelectedGame,
        recordDownload,
        isAdminOpen,
        setIsAdminOpen,
        isAdminAuthenticated,
        verifyAdminPasscode,
        logoutAdmin,
        adminStats,
        addGameMod,
        deleteGameMod,
        activities,
        modRequests,
        upvoteRequest,
        submitRequest,
        isChatOpen,
        setIsChatOpen,
        chatMessages,
        sendChatMessage,
        toastMessage,
        triggerToast
      }}
    >
      {children}
    </TradelabContext.Provider>
  );
}

export function useTradelab() {
  const ctx = useContext(TradelabContext);
  if (!ctx) {
    throw new Error('useTradelab must be used within a TradelabProvider');
  }
  return ctx;
}
