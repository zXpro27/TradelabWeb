'use client';

import React from 'react';

export default function ZirekuHeroBackdrop() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Deep Obsidian Canvas with Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-75" />

      {/* 2. Radial Cyan and Violet Light Pools (zireku desktop hero ambiance) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[450px] h-[450px] bg-fuchsia-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 3. Tactical Vignette Framing */}
      <div className="absolute inset-0 radial-vignette pointer-events-none" />

      {/* 4. Subtle Tactical HUD Corner Brackets on Desktop Viewport */}
      <div className="hidden xl:block absolute top-16 left-6 w-8 h-8 border-t-2 border-l-2 border-cyan-500/30 pointer-events-none" />
      <div className="hidden xl:block absolute top-16 right-6 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30 pointer-events-none" />
      <div className="hidden xl:block absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-cyan-500/30 pointer-events-none" />
      <div className="hidden xl:block absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-cyan-500/30 pointer-events-none" />

      {/* 5. Delicate Scanlines Overlay */}
      <div className="absolute inset-0 hud-scanlines opacity-25 pointer-events-none" />
    </div>
  );
}
