import type { Metadata } from 'next';
import './globals.css';

const LOGO_PATH = '/assets/aistudio/tradelab_e506ff45.png';

export const metadata: Metadata = {
  title: 'TradelabMod - Tactical Android Game Mod APK Vault',
  description: 'Download safe and verified Android game mods, trainers, and unlimited cheat menus with SHA-256 integrity check and tactical HUD command deck.',
  icons: {
    icon: [
      { url: LOGO_PATH, type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: LOGO_PATH,
    apple: [
      { url: LOGO_PATH, sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'TradelabMod - Tactical Android Game Mod APK Vault',
    description: 'Download safe and verified Android game mods, trainers, and unlimited cheat menus with SHA-256 integrity check and tactical HUD command deck.',
    type: 'website',
    siteName: 'TradelabMod',
    images: [
      {
        url: LOGO_PATH,
        width: 512,
        height: 512,
        alt: 'TradelabMod Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradelabMod - Tactical Android Game Mod APK Vault',
    description: 'Download safe and verified Android game mods with SHA-256 integrity check.',
    images: [LOGO_PATH],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <head>
        <link rel="icon" href={LOGO_PATH} type="image/png" />
        <link rel="shortcut icon" href={LOGO_PATH} type="image/png" />
        <link rel="apple-touch-icon" href={LOGO_PATH} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800;900&family=Rajdhani:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'TradelabMod',
              applicationCategory: 'GameApplication',
              operatingSystem: 'Android',
              description: 'Download safe and verified Android game mods, trainers, and unlimited cheat menus.',
              image: LOGO_PATH,
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#050811] text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
