import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TradelabMod - Tactical Android Game Mod APK Vault',
  description: 'Download safe and verified Android game mods, trainers, and unlimited cheat menus with SHA-256 integrity check and tactical HUD command deck.',
  openGraph: {
    title: 'TradelabMod - Tactical Android Game Mod APK Vault',
    description: 'Download safe and verified Android game mods, trainers, and unlimited cheat menus with SHA-256 integrity check and tactical HUD command deck.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradelabMod - Tactical Android Game Mod APK Vault',
    description: 'Download safe and verified Android game mods with SHA-256 integrity check.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800;900&family=Rajdhani:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body suppressHydrationWarning className="bg-[#050811] text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
