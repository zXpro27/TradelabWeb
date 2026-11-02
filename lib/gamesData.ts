import { ModGame, LiveActivity, ModRequestItem } from './types';

export const INITIAL_GAMES: ModGame[] = [
  {
    id: 'tlm-gta5-v42',
    title: 'GTA: San Andreas Definitive Edition',
    modName: 'Mod Menu v4.2 + Cleo Cheats',
    slug: 'gta-san-andreas-mod-menu',
    category: 'Action',
    version: 'v4.2.0',
    downloads: 1240000,
    rating: 4.9,
    fileSize: '1.82 GB',
    sha256: 'a7c938d4f091b2e88411c50e2719a4e320f92b71946dc3e410b0e51249b6b7a2',
    developer: 'Rockstar Games / TLM Engine',
    packageName: 'com.rockstargames.gtasa',
    reqAndroid: 'Android 9.0+',
    features: [
      'Infinite Money & Armor',
      'All Weapons & Heavy Artillery Unlocked',
      'Spawn 120+ Tuned Vehicles Instantly',
      'Invincible God Mode & Infinite Stamina',
      '60 FPS HD Graphic Texture Overhaul',
      'Cleo Script Floating HUD Activated'
    ],
    description: 'The definitive open world action crime experience updated with Tradelab exclusive Cleo touch overlay, unlocked remastered graphics, and full vehicle spawner.',
    coverImage: '/assets/images/gta_v_mod_cover_1793590950000.jpg',
    badge: 'Highly Rated',
    virusScan: '0/72 Clean (VirusTotal)',
    downloadUrl: '#download-gta-definitive-v42',
    updatedAt: '2 hours ago',
    isHero: true
  },
  {
    id: 'tlm-codw-v71',
    title: 'Call of Duty: Warzone Mobile',
    modName: 'Tactical Aimbot & Bone ESP v7.1',
    slug: 'cod-warzone-mobile-aimbot-esp',
    category: 'Survival',
    version: 'v7.1.4',
    downloads: 950000,
    rating: 4.8,
    fileSize: '1.45 GB',
    sha256: '83f510beaa4c52f674911d941ce01cb38b975aa1123490fd38e910245a498b11',
    developer: 'Activision / ShadowCore Team',
    packageName: 'com.activision.callofduty.warzone',
    reqAndroid: 'Android 10.0+',
    features: [
      '3D Bone ESP & Player Line Radar',
      'FOV Range Adjustable Silent Aimbot',
      'Zero Bullet Recoil & Fast Reload',
      'Wallhack Enemy Distance & Health Display',
      'Anti-Cheat Detection Shield Protocol v3',
      'Safe HWID Randomizer Built-in'
    ],
    description: 'Dominate Verdansk with military-grade tactical overlays, instant wallhack distance indicators, and intelligent smooth-aim algorithms tuned for mobile touch screens.',
    coverImage: '/assets/images/warzone_fps_cover_1793590949908.jpg',
    badge: 'Updated Today',
    virusScan: '0/72 Clean (VirusTotal)',
    downloadUrl: '#download-warzone-esp-v71',
    updatedAt: '1 hour ago',
    isHero: true
  },
  {
    id: 'tlm-cp2077-v30',
    title: 'Cyberpunk 2077 Mobile Edition',
    modName: 'Ultimate Night City Trainer v3.0',
    slug: 'cyberpunk-mobile-trainer',
    category: 'Action',
    version: 'v3.0.1',
    downloads: 810000,
    rating: 4.9,
    fileSize: '2.10 GB',
    sha256: '5e7142a19b88cd91834f826190ab74c83011ff83921980327f23a451e94812f9',
    developer: 'CD Projekt / CyberEngine',
    packageName: 'com.cdpred.cyberpunkmobile',
    reqAndroid: 'Android 11.0+',
    features: [
      'Unlimited Eddies & Skill Perk Points',
      'All Iconic Cyberware & Weapons Unlocked',
      'Hyper-Speed Raytracing Performance Patch',
      'Never-Wanted Police Neutralizer',
      'Direct Vehicle Spawner with Quadra Turbo-R',
      'Sandevistan Infinite Time Dilation'
    ],
    description: 'Explore Night City with limitless resources, ultra-smooth graphics profile tuning, and instantaneous legendary gear crafting at the touch of your HUD.',
    coverImage: '/assets/images/cyberpunk_neon_cover_1793590952812.jpg',
    badge: 'Trending Now',
    virusScan: '0/72 Clean (VirusTotal)',
    downloadUrl: '#download-cyberpunk-trainer-v30',
    updatedAt: '3 hours ago',
    isHero: true
  },
  {
    id: 'tlm-solorpg-v18',
    title: 'Solo Leveling: Arise',
    modName: 'Shadow Monarch Divine Mod v1.8',
    slug: 'solo-leveling-arise-divine-mod',
    category: 'Idle RPG',
    version: 'v1.8.2',
    downloads: 480000,
    rating: 4.9,
    fileSize: '890 MB',
    sha256: '91bc738102ff94a187342618991aeb78201948bc55102a98341e0192847c2110',
    developer: 'Netmarble / MonarchDev',
    packageName: 'com.netmarble.sololv',
    reqAndroid: 'Android 8.0+',
    features: [
      'God Mode (Damage Immune)',
      '10x Attack Power Multiplier (Adjustable Slider)',
      'Unlimited Mana & No Skill Cooldown',
      'Auto-Dungeon Skip & Instant Boss Loot',
      'Custom Anti-Ban Bypass Hook v2'
    ],
    description: 'Command the Shadow Army with unrestricted divine prowess, instant skill rotations, and custom damage multipliers designed for safe dungeon clearing.',
    coverImage: '/assets/images/idle_rpg_fantasy_cover_1793590950728.jpg',
    badge: 'Popular RPG',
    virusScan: '0/72 Clean (VirusTotal)',
    downloadUrl: '#download-solo-leveling-v18',
    updatedAt: '5 hours ago'
  },
  {
    id: 'tlm-subwaysurf-v32',
    title: 'Subway Surfers: World Tour',
    modName: 'Unlimited Keys & All Boards VIP v3.24',
    slug: 'subway-surfers-unlimited-keys-boards',
    category: 'Casual',
    version: 'v3.24.1',
    downloads: 2150000,
    rating: 4.7,
    fileSize: '142 MB',
    sha256: '38a90102b781934c901847120349811ab9018472309817410293481029384712',
    developer: 'SYBO Games / ModLab',
    packageName: 'com.kiloo.subwaysurf',
    reqAndroid: 'Android 6.0+',
    features: [
      'Infinite Coins & Unlimited Keys',
      'All Characters & Outfits Unlocked',
      'All Hoverboards with Special Powers',
      'Infinite Double Jump & High Altitude Fly',
      'Score Multiplier x9999'
    ],
    description: 'Sprint across global subway lines with unlimited revive keys, all secret character unlocks, and unrestricted hoverboard stunts.',
    coverImage: '/assets/images/cyberpunk_neon_cover_1793590952812.jpg',
    badge: 'Top Casual',
    virusScan: '0/72 Clean (VirusTotal)',
    downloadUrl: '#download-subway-surfers-v32',
    updatedAt: 'Yesterday'
  },
  {
    id: 'tlm-deadahead-v39',
    title: 'Dead Ahead: Zombie Survival',
    modName: 'Infinite Rage & Military Supply Mod',
    slug: 'dead-ahead-zombie-survival-mod',
    category: 'Survival',
    version: 'v3.9.0',
    downloads: 620000,
    rating: 4.8,
    fileSize: '215 MB',
    sha256: '4190823901bca908213409182349018234901823091823901823901823091823',
    developer: 'Mobirate / ZombieCore',
    packageName: 'com.mobirate.DeadAheadTactics',
    reqAndroid: 'Android 7.0+',
    features: [
      'Unlimited Courage & Rage Drops',
      'Free Unit Upgrades & Supply Crates',
      'Instant Bus Repair & Armor Defense',
      'Unlimited Gasoline for Fuel Runs'
    ],
    description: 'Defend your survivor bus against relentless zombie hordes with unlimited unit deployments and zero wait times for tactical supply crates.',
    coverImage: '/assets/images/gta_v_mod_cover_1793590950000.jpg',
    badge: 'Survival Hit',
    virusScan: '0/72 Clean (VirusTotal)',
    downloadUrl: '#download-dead-ahead-v39',
    updatedAt: '2 days ago'
  },
  {
    id: 'tlm-idleheroes-v21',
    title: 'Idle Heroes: Global Arena',
    modName: 'Auto Farm & VIP 13 Trainer v2.1',
    slug: 'idle-heroes-vip-trainer',
    category: 'Idle RPG',
    version: 'v2.1.8',
    downloads: 540000,
    rating: 4.8,
    fileSize: '360 MB',
    sha256: 'f892104928103498102934810293481029348102934810293481029348102934',
    developer: 'DHGAMES / HeroForge',
    packageName: 'com.droidhang.ad',
    reqAndroid: 'Android 8.0+',
    features: [
      'VIP 13 Privileges Unlocked',
      'Auto-Complete Daily Quests & Campaign',
      '100% Summon Rate Simulator',
      'Speed-up Combat 10x Velocity'
    ],
    description: 'Automate high-level dungeon sweeps, summon legendary 5-star heroes with boosted rates, and level up your champion squad seamlessly.',
    coverImage: '/assets/images/idle_rpg_fantasy_cover_1793590950728.jpg',
    badge: 'Editor Choice',
    virusScan: '0/72 Clean (VirusTotal)',
    downloadUrl: '#download-idle-heroes-v21',
    updatedAt: '3 days ago'
  },
  {
    id: 'tlm-blockcraft-v12',
    title: 'Block Craft 3D: World Sandbox',
    modName: 'God Mode & All Blueprints Mod',
    slug: 'block-craft-3d-world-sandbox-mod',
    category: 'Casual',
    version: 'v1.2.9',
    downloads: 1420000,
    rating: 4.6,
    fileSize: '110 MB',
    sha256: '7190823490182390182309182390182390182309182390182390182390182390',
    developer: 'Fun Games For Free / CraftLab',
    packageName: 'com.fungames.blockcraft',
    reqAndroid: 'Android 7.0+',
    features: [
      'Infinite Diamonds & Coins',
      'All Mega Blueprints Pre-Unlocked',
      'No Ads & Fast Build Instant Placement',
      'Fly Mode Enabled Across Custom Worlds'
    ],
    description: 'Build majestic castles and modern metropolises without resource restrictions or annoying popups.',
    coverImage: '/assets/images/cyberpunk_neon_cover_1793590952812.jpg',
    badge: 'Family Friendly',
    virusScan: '0/72 Clean (VirusTotal)',
    downloadUrl: '#download-block-craft-v12',
    updatedAt: '4 days ago'
  }
];

export const INITIAL_LIVE_ACTIVITIES: LiveActivity[] = [
  {
    id: 'act-1',
    user: 'AlphaRanger_99',
    action: 'downloaded',
    target: 'GTA: San Andreas Mod Menu v4.2',
    timestamp: 'Just now',
    avatarSeed: 'alpha'
  },
  {
    id: 'act-2',
    user: 'CyberPhantom_ID',
    action: 'activated',
    target: 'Warzone Mobile Aimbot & ESP v7.1',
    timestamp: '2m ago',
    avatarSeed: 'phantom'
  },
  {
    id: 'act-3',
    user: 'Valkyrie_VIP',
    action: 'upgraded to',
    target: 'Lifetime Operator VIP Pass',
    timestamp: '5m ago',
    avatarSeed: 'valk'
  },
  {
    id: 'act-4',
    user: 'ShadowStrike_X',
    action: 'verified hash on',
    target: 'Cyberpunk 2077 Mobile Trainer',
    timestamp: '8m ago',
    avatarSeed: 'strike'
  },
  {
    id: 'act-5',
    user: 'MonarchSlayer',
    action: 'downloaded',
    target: 'Solo Leveling: Arise Divine Mod',
    timestamp: '12m ago',
    avatarSeed: 'monarch'
  }
];

export const INITIAL_MOD_REQUESTS: ModRequestItem[] = [
  {
    id: 'req-1',
    gameTitle: 'Zenless Zone Zero (ZZZ) - Infinite Energy & Speed Mod',
    requestedBy: 'ProxyKav',
    upvotes: 412,
    status: 'In Development'
  },
  {
    id: 'req-2',
    gameTitle: 'Wuthering Waves - Auto-Collect Echoes & God Mode',
    requestedBy: 'Resonator9',
    upvotes: 389,
    status: 'Testing'
  },
  {
    id: 'req-3',
    gameTitle: 'Delta Force Mobile - Tactical Radar ESP',
    requestedBy: 'OperatorNova',
    upvotes: 275,
    status: 'Investigating'
  },
  {
    id: 'req-4',
    gameTitle: 'Honkai: Star Rail - Speed 4x & Auto Battle Menu',
    requestedBy: 'TrailblazerX',
    upvotes: 198,
    status: 'Released'
  }
];
