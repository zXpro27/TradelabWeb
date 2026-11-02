'use client';

import React from 'react';
import { TradelabProvider, useTradelab } from '@/hooks/useTradelabStore';
import HudNavbar from '@/components/HudNavbar';
import ZirekuHeroBackdrop from '@/components/ZirekuHeroBackdrop';
import HeroSpotlight from '@/components/HeroSpotlight';
import GameLibrary from '@/components/GameLibrary';
import GameDetailModal from '@/components/GameDetailModal';
import AdminPanelModal from '@/components/AdminPanelModal';
import AccountModal from '@/components/AccountModal';
import PaymentView from '@/components/PaymentView';
import CommunityView from '@/components/CommunityView';
import FloatingHudControls from '@/components/FloatingHudControls';
import ChatSupportModal from '@/components/ChatSupportModal';
import HudToast from '@/components/HudToast';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Terminal, Heart, Sparkles, ExternalLink } from 'lucide-react';

function MainApp() {
  const { activeView, t, setActiveView } = useTradelab();

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Atmospheric Desktop Hero Backdrop inspired by zireku.com */}
      <ZirekuHeroBackdrop />

      {/* 2. Top HUD Telemetry & Navigation */}
      <HudNavbar />

      {/* 3. Notification Toast */}
      <HudToast />

      {/* 4. Active Main View Container with Smooth Transitions */}
      <main className="relative z-10 flex-1 w-full">
        <AnimatePresence mode="wait">
          {activeView === 'home' && (
            <motion.div
              key="view-home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <HeroSpotlight />
              <GameLibrary />
            </motion.div>
          )}

          {activeView === 'payment' && (
            <motion.div
              key="view-payment"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <PaymentView />
            </motion.div>
          )}

          {activeView === 'community' && (
            <motion.div
              key="view-community"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <CommunityView />
            </motion.div>
          )}

          {activeView === 'account' && (
            <motion.div
              key="view-account"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <AccountModal />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 5. Tactical Detail Modal */}
      <GameDetailModal />

      {/* 6. Admin Panel Modal (Passcode: 1928) */}
      <AdminPanelModal />

      {/* 7. Tactical Chat Support / Assistant Drawer */}
      <ChatSupportModal />

      {/* 8. Floating Bottom-Right Controls (Language Switcher & Assistant) */}
      <FloatingHudControls />

      {/* 9. Tactical Footer */}
      <footer className="relative z-10 border-t border-cyan-500/20 bg-black/60 backdrop-blur-md px-4 sm:px-8 py-6 text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-cyan-300 font-bold tracking-wider">TRADELABMOD</span>
            <span className="text-slate-600">|</span>
            <span className="text-[11px] text-slate-400">
              TACTICAL APK DISPATCH VAULT © {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Virus-Free Engine
            </span>
            <span className="text-slate-600">·</span>
            <button
              onClick={() => setActiveView('payment')}
              className="hover:text-cyan-300 transition-colors"
            >
              VIP Pass
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={() => setActiveView('community')}
              className="hover:text-cyan-300 transition-colors"
            >
              Komunitas
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Page() {
  return (
    <TradelabProvider>
      <MainApp />
    </TradelabProvider>
  );
}
