# TradelabMod - Tactical HUD Game Mod APK Platform

TradelabMod is a high-tech tactical HUD gaming portal delivering safe Android game mod downloads, deep category navigation (All, Action, Idle RPG, Casual, Survival), real-time search, guest HWID user tracking, and an authentic military-cyberpunk HUD aesthetic modeled directly after the user reference design and zireku-inspired desktop backdrop.

***

## User Review & Critical Decisions

> [!IMPORTANT]
> The requirements from the user brief and clarifying responses have been synthesized into the plan below. Please review the core decisions:

- **Confirmed Categories**: Prioritizing **All**, **Action**, **Idle RPG**, **Casual**, and **Survival** genres in the catalog and filter bars.
- **Confirmed Download Experience**: **Direct instant download with background integrity badges** (SHA-256 integrity hash verification, 0/72 Antivirus clean scan indicators, and instant file package dispatch).
- **HUD Navbar & Sticky Scroll**: When scrolled, the top navbar transitions into a sleek, floating HUD visor frame with cyan neon bevel lines rather than an opaque boxy container. On mobile screens, the top search bar is gracefully hidden to maximize tactical visibility.
- **Guest HWID System**: Guests automatically receive a persistent unique hardware identifier (e.g., `guest_8F2B14C9`) displayed in the top HUD telemetry bar (`account: guest | name: guest_HWID | rank: RECRUIT | credits: 150 CR`).
- **Admin Command Center**: Accessible via password `1928`, providing download analytics, member counts (Guest, Free, VIP), and a mod posting/editing workbench.
- **Bottom-Right Tactical Deck**: Floating outside the navigation are the **Bilingual Switcher** (Indonesia / English) and the **Tactical Support Assistant** live comms panel.

***

## 1. Overview & Core Concept

- **What It Does**: Provides mobile gamers with a secure, virus-verified repository of Android Game Mod APKs. Gamers can browse featured highlights, filter by genre, inspect detailed tactical game dossiers (version, mod features, changelog, SHA-256 hash), and instantly trigger clean APK downloads.
- **Target Persona**: Gamers seeking verified mod menus, trainers, and unlocked features (unlimited resources, anti-ban protections, offline patches) within an immersive, high-framerate sci-fi HUD command interface.
- **Key Value**: Replaces sketchy, ad-riddled mod sites with a clean, high-performance tactical interface boasting transparent security verification and responsive mobile accessibility.

***

## 2. User Experience & Visual Design

### Key User Flows
1. **Browse & Discovery**: The user arrives into a dark, atmospheric command deck with tactical hero banners, top HUD telemetry, and category filters (All, Action, Idle RPG, Casual, Survival).
2. **Game Inspection & Safe Download**: Clicking any game card launches the Tactical Mod Dossier modal. Users view mod feature breakdowns (e.g. God Mode, Unlimited Diamonds, Aimbot ESP), antivirus scan logs, and hit the Instant Download button with background verification telemetry.
3. **Account & Role Upgrade**: Guest users view their unique HWID profile in the HUD; clicking "Account" enables instant signup via Email or Google Auth to elevate their rank from Guest to Free or VIP.
4. **Admin Operations**: Admin mode unlocks with passcode `1928`, offering real-time stats (download tallies, member distribution) and a full form to deploy new mod APK records.
5. **Comms & Language**: Floating buttons on the bottom right allow instant toggle between Indonesian (Bahasa Indonesia) and English, and launch an AI-powered tactical field assistant.

### Visual Identity & Theme
- **Aesthetic Direction**: Tactical Military Sci-Fi HUD / Cyberpunk Command Deck. Beveled 45-degree angle borders, cyan (`#06b6d4`) and neon violet (`#a855f7`) accents, tactical targeting brackets, scanlines, and deep obsidian canvases (`#070b12` to `#0d1520`).
- **Color Palette & Discipline**:
  - `Canvas Neutral (60%)`: Obsidian void (`#070a10`), dark charcoal navy surfaces (`#0c131f`).
  - `Structural HUD Elements (30%)`: Hairline cyan borders (`border-cyan-500/30`), beveled containers, subtle tactical grid backdrops.
  - `Accent Highlights (10%)`: Neon Cyan (`#00f0ff`), Electric Purple (`#9d4edd`), Tactical Green (`#10b981`) for virus-clean verifications.
- **Typography & Scale**:
  - Display & Headings: `Outfit` & `Plus Jakarta Sans` with sharp letter tracking (`tracking-wider`).
  - Telemetry & Hashes: `JetBrains Mono` / `Space Mono` (`tabular-nums font-mono`) for HWIDs, download counts, and checksums.
- **Interactive Feedback**: Beveled HUD buttons with glowing borders on hover, smooth modal spring animations via `motion`, and non-blocking background downloads.

***

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Direct Instant Download with Background Verification**:
  - *Chosen Approach*: Users click "Download APK", an instant progress telemetry badge confirms package integrity (`SHA-256 VERIFIED · 0/72 CLEAN`), and the download triggers without annoying countdown gatekeepers.
  - *Why*: Directly aligns with user preference while preserving tactical realism and zero friction.
- **Decision 2: Client Persistence with LocalStorage**:
  - *Chosen Approach*: Game catalog, download metrics, guest HWID, language preference, and member registrations are saved persistently in browser storage, initialized with rich curated seed data (GTA V, Warzone Mobile, Cyberpunk Mobile Trainer, Solo Leveling Arise, Subway Surfers VIP, Genshin Trainer).
  - *Why*: Guarantees instant responsiveness, offline persistence, and seamless admin modifications without requiring slow external database roundtrips.
- **Decision 3: Native HUD Assistant vs Generic Chatbot**:
  - *Chosen Approach*: Built-in tactical operator assistant providing mod installation guidance, OBB file instructions, anti-ban tips, and troubleshooting in both Indonesian and English.

***

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TRADELABMOD ARCHITECTURE                        │
└────────────────────────────────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────────────────────────┐
  │                           ROOT LAYOUT                            │
  │   - Atmospheric Desktop Hero Backdrop (zireku-style canvas grid) │
  │   - Audio/SFX Feedback Controller                                │
  │   - Persistent State Context (Guest HWID, Auth, Catalog, Lang)   │
  └────────────────────────────────┬─────────────────────────────────┘
                                   │
       ┌───────────────────────────┴───────────────────────────┐
       ▼                                                       ▼
┌──────────────────────────────┐              ┌──────────────────────────────┐
│       HUD TOP BAR NAV        │              │     FLOATING HUD WIDGETS     │
│ - Telemetry Bar (HWID, Rank) │              │ - Language Switcher (ID/EN)  │
│ - Brand "TRADELABMOD"        │              │ - Tactical Comms Assistant   │
│ - Menus: Home, Payment,      │              └──────────────────────────────┘
│   Community, Account, Admin  │
│ - Mobile-responsive collapse │
└──────────────┬───────────────┘
               │
       ┌───────┴───────────────────────────────────────────────┐
       ▼                                                       ▼
┌──────────────────────────────┐              ┌──────────────────────────────┐
│        MAIN VIEWS            │              │          HUD MODALS          │
│ - Hero Spotlight Mod Banner  │              │ - Game Detail Dossier        │
│ - Tactical Category Filter   │              │   (Specs, SHA-256, Features) │
│ - Game Grid & Trending Cards │              │ - Safe Direct Download Flow  │
│ - Live Activity & Updates    │              │ - Admin Panel (Key: 1928)    │
│ - Community & Payment Hub    │              │ - Member Login / Google Auth │
└──────────────────────────────┘              └──────────────────────────────┘
```

### Data Model & Entities
- **ModGame**: `id`, `title`, `slug`, `category` (Action, Idle RPG, Casual, Survival), `version`, `downloads`, `rating`, `fileSize`, `updatedAt`, `sha256`, `safeBadges` (VirusTotal, PlayProtect, AntiBan), `features` (array), `image`, `bannerImage`, `downloadUrl`, `description`, `packageName`.
- **UserState**: `hwid` (e.g. `guest_7C491A`), `accountType` (`guest` | `free` | `vip`), `username`, `goldCredits`, `avatar`, `downloadedGameIds`.
- **AdminStats**: `totalDownloads`, `guestCount`, `freeCount`, `vipCount`, `activityLogs`.
- **Language**: `id` (Indonesian) or `en` (English) with full i18n dictionary for all HUD strings.

***

## Next Steps Upon Approval
Once approved, implementation will proceed systematically:
1. Update `metadata.json` and configure HUD fonts & Tailwind styling.
2. Build tactical HUD visual components (beveled borders, telemetry tags, HUD header).
3. Implement core views (Game Catalog, Search, Detail Dossier modal, Safe Instant Download).
4. Implement Member Auth & Admin Command Panel (`1928`).
5. Wire up the bottom-right Language Switcher (ID/EN) and Tactical Chat Assistant.
6. Verify responsive mobile layout and run `compile_applet`.
