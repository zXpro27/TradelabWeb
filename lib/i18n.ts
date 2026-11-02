export type Language = 'id' | 'en';

export const translations = {
  id: {
    // HUD Telemetry
    hud_account: 'AKUN',
    hud_name: 'NAMA',
    hud_rank: 'PERINGKAT',
    hud_credits: 'KREDIT',
    hud_guest: 'TAMU',
    hud_status_secure: 'PROTOKOL: ENKRIPSI AMAN TLS 1.3',
    hud_latency: 'PING: 18ms',

    // Top Navigation
    nav_home: 'Home',
    nav_payment: 'Payment',
    nav_community: 'Community',
    nav_account: 'Account',
    nav_admin: 'Admin Panel',
    nav_login: 'MASUK / DAFTAR',
    nav_search_placeholder: 'CARI MOD MENU ATAU GAME APK...',
    nav_live_chat: 'LIVE CHAT',
    nav_notifications: 'NOTIFIKASI',

    // Hero & Highlights
    hero_badge: 'OPERASI VERIFIKASI AKTIF',
    hero_title: 'ARSIP GAME MOD APK RESMI & AMAN',
    hero_subtitle: 'Akses instan ribuan menu cheat, trainer VIP, dan mod unlocked untuk game Android favoritmu dengan proteksi anti-ban dan uji integritas SHA-256.',
    hero_btn_explore: 'JELAJAHI MOD',
    hero_btn_download: 'UNDUH INSTAN',
    hero_safe_guarantee: '100% Bebas Malware · Scan Antivirus 0/72 Bersih · Langsung Unduh',

    // Categories
    cat_all: 'Semua',
    cat_action: 'Action',
    cat_idle_rpg: 'Idle RPG',
    cat_casual: 'Casual',
    cat_survival: 'Survival',

    // Section Titles
    sec_game_library: 'GAME LIBRARY',
    sec_recent_updates: 'UPDATE TERBARU',
    sec_featured_menus: 'MENU UNGGULAN',
    sec_user_activity: 'AKTIVITAS MEMBER',
    sec_community_hub: 'KOMUNITAS GAMING',

    // Card Details
    card_downloads: 'Unduhan',
    card_view_menu: 'LIHAT MENU',
    card_download_btn: 'UNDUH APK',
    card_updated: 'Diperbarui',
    card_verified: 'Terverifikasi Aman',

    // Game Detail Modal
    modal_dossier_title: 'DOSIR TAKTIS MOD APK',
    modal_version: 'Versi Mod',
    modal_filesize: 'Ukuran Berkas',
    modal_req_android: 'Min. Android',
    modal_developer: 'Pengembang',
    modal_package: 'Nama Paket',
    modal_sha256: 'Hash Integritas SHA-256',
    modal_virus_status: 'Status Uji VirusTotal',
    modal_features_title: 'FITUR MODIFIKASI TERPASANG',
    modal_install_guide_title: 'PANDUAN PEMASANGAN CEPAT',
    modal_install_step1: '1. Unduh file APK dari server direct mirror di bawah.',
    modal_install_step2: '2. Izinkan "Install from Unknown Sources" pada Pengaturan Android Anda.',
    modal_install_step3: '3. Pasang APK dan jalankan game (Menu HUD mengambang akan aktif otomatis).',
    modal_instant_download_btn: 'UNDUH APK LANGSUNG (SERVER 1)',
    modal_downloading_telemetry: 'MEMERIKSA HASH INTEGRITAS & MEMULAI BERKAS...',
    modal_download_success: 'Unduhan berhasil dimulai! Berkas aman telah dikirim.',
    modal_close: 'TUTUP',

    // Floating Widgets
    floating_lang_title: 'BAHASA / LANG',
    floating_assistant_title: 'OPERATOR BANTUAN TAKTIS',
    assistant_online: 'OPERATOR AKTIF',
    assistant_welcome: 'Halo Agen! Ada yang bisa saya bantu terkait pemasangan APK, lisensi VIP, atau kendala OBB?',
    assistant_placeholder: 'Ketik pertanyaan Anda di sini...',
    assistant_send: 'Kirim',
    assistant_quick_1: 'Cara instal Mod APK?',
    assistant_quick_2: 'Apa keuntungan VIP?',
    assistant_quick_3: 'Cara atasi Force Close?',

    // Admin Panel
    admin_title: 'PUSAT KONTROL ADMIN TRADELAB',
    admin_login_prompt: 'Masukkan Password Kunci Otorisasi Admin (1928)',
    admin_password_placeholder: 'Masukkan sandi...',
    admin_unlock_btn: 'BUKA PANEL ADMIN',
    admin_invalid_key: 'Sandi otorisasi salah! Coba lagi.',
    admin_stats_total_dl: 'TOTAL UNDUHAN',
    admin_stats_guest: 'MEMBER TAMU',
    admin_stats_free: 'MEMBER GRATIS',
    admin_stats_vip: 'MEMBER VIP',
    admin_post_new_title: 'POSTING MOD GAME BARU',
    admin_field_title: 'Judul Game',
    admin_field_modname: 'Nama Mod / Trainer',
    admin_field_category: 'Kategori',
    admin_field_version: 'Versi Game',
    admin_field_size: 'Ukuran APK (MB)',
    admin_field_features: 'Fitur Mod (pisahkan koma)',
    admin_field_dlurl: 'Tautan Unduh APK',
    admin_field_desc: 'Deskripsi Mod',
    admin_btn_publish: 'TERBITKAN MOD BARU',
    admin_game_list_title: 'MANAJEMEN ARSIP GAME',
    admin_delete_btn: 'Hapus',
    admin_edit_dl: 'Ubah Stats',

    // Account & Auth
    acc_title: 'PUSAT IDENTITAS PENGGUNA',
    acc_guest_info: 'Anda saat ini terhubung sebagai Tamu dengan HWID unik perangkat ini.',
    acc_upgrade_prompt: 'Daftarkan akun email Anda atau gunakan Google untuk menyimpan favorit dan membuka kuota unduhan cepat.',
    acc_email_label: 'Alamat Email',
    acc_username_label: 'Username Pilihan',
    acc_register_btn: 'DAFTAR AKUN BARU',
    acc_google_btn: 'MASUK DENGAN GOOGLE',
    acc_logout: 'Keluar Akun',
    acc_curr_role: 'Tingkat Akses Saat Ini',

    // Payment & VIP
    pay_title: 'UPGRADE VIP ACCESS TRADELAB',
    pay_subtitle: 'Dapatkan kecepatan unduh tanpa batas, bypass anti-ban eksklusif, dan request mod prioritas.',
    pay_pass_monthly: 'MONTHLY COMBAT PASS',
    pay_pass_lifetime: 'LIFETIME OPERATOR VIP',
    pay_qris_dana: 'Metode Pembayaran Instan (QRIS / DANA / GoPay / Crypto)',
    pay_upgrade_now: 'AKTIFKAN VIP SEKARANG',
    pay_success_notice: 'Akses VIP Berhasil Diaktifkan! Peringkat akun Anda kini VIP.',

    // Community
    com_title: 'KOMUNITAS OPERATOR TRADELAB',
    com_subtitle: 'Bergabunglah dengan lebih dari 45.000 modder dan gamer di seluruh dunia.',
    com_discord: 'GABUNG DISCORD RESMI',
    com_telegram: 'SALURAN TELEGRAM TAKTIS',
    com_request_title: 'PAPAN REQUEST MOD GAME',
    com_request_btn: 'Ajukan Request',
    com_upvote_btn: 'Dukung'
  },
  en: {
    // HUD Telemetry
    hud_account: 'ACCOUNT',
    hud_name: 'NAME',
    hud_rank: 'RANK',
    hud_credits: 'CREDITS',
    hud_guest: 'GUEST',
    hud_status_secure: 'PROTOCOL: SECURE TLS 1.3 ENCRYPTION',
    hud_latency: 'PING: 18ms',

    // Top Navigation
    nav_home: 'Home',
    nav_payment: 'Payment',
    nav_community: 'Community',
    nav_account: 'Account',
    nav_admin: 'Admin Panel',
    nav_login: 'LOGIN / REGISTER',
    nav_search_placeholder: 'SEARCH FOR MOD MENUS OR APK GAMES...',
    nav_live_chat: 'LIVE CHAT',
    nav_notifications: 'NOTIFICATIONS',

    // Hero & Highlights
    hero_badge: 'SECURITY VERIFICATION ACTIVE',
    hero_title: 'OFFICIAL & SAFE GAME MOD APK REPOSITORY',
    hero_subtitle: 'Instant access to thousands of verified cheat menus, VIP trainers, and unlocked features for your favorite Android games with anti-ban and SHA-256 integrity inspection.',
    hero_btn_explore: 'EXPLORE MODS',
    hero_btn_download: 'INSTANT DOWNLOAD',
    hero_safe_guarantee: '100% Clean Malware Free · VirusTotal 0/72 Clean Scan · Direct Download',

    // Categories
    cat_all: 'All',
    cat_action: 'Action',
    cat_idle_rpg: 'Idle RPG',
    cat_casual: 'Casual',
    cat_survival: 'Survival',

    // Section Titles
    sec_game_library: 'GAME LIBRARY',
    sec_recent_updates: 'RECENT UPDATES',
    sec_featured_menus: 'FEATURED MENUS',
    sec_user_activity: 'MEMBER ACTIVITY',
    sec_community_hub: 'GAMING COMMUNITY',

    // Card Details
    card_downloads: 'Downloads',
    card_view_menu: 'VIEW MENU',
    card_download_btn: 'DOWNLOAD APK',
    card_updated: 'Updated',
    card_verified: 'Verified Safe',

    // Game Detail Modal
    modal_dossier_title: 'TACTICAL MOD DOSSIER',
    modal_version: 'Mod Version',
    modal_filesize: 'File Size',
    modal_req_android: 'Min. Android',
    modal_developer: 'Developer',
    modal_package: 'Package Name',
    modal_sha256: 'SHA-256 Integrity Hash',
    modal_virus_status: 'VirusTotal Scan Result',
    modal_features_title: 'INSTALLED MOD FEATURES',
    modal_install_guide_title: 'QUICK INSTALLATION GUIDE',
    modal_install_step1: '1. Download APK from direct mirror below.',
    modal_install_step2: '2. Enable "Install from Unknown Sources" in Android Settings.',
    modal_install_step3: '3. Launch game (Floating HUD Trainer menu activates automatically).',
    modal_instant_download_btn: 'DIRECT INSTANT DOWNLOAD (MIRROR 1)',
    modal_downloading_telemetry: 'VERIFYING INTEGRITY HASH & DISPATCHING FILE...',
    modal_download_success: 'Download triggered successfully! Safe package dispatched.',
    modal_close: 'CLOSE',

    // Floating Widgets
    floating_lang_title: 'LANGUAGE / BAHASA',
    floating_assistant_title: 'TACTICAL SUPPORT OPERATOR',
    assistant_online: 'OPERATOR READY',
    assistant_welcome: 'Greetings Agent! How can I assist you with APK installation, VIP membership, or OBB configurations?',
    assistant_placeholder: 'Type your inquiry here...',
    assistant_send: 'Send',
    assistant_quick_1: 'How to install Mod APK?',
    assistant_quick_2: 'What are VIP perks?',
    assistant_quick_3: 'How to fix Force Close?',

    // Admin Panel
    admin_title: 'TRADELAB ADMIN COMMAND HUB',
    admin_login_prompt: 'Enter Admin Authorization Passcode (1928)',
    admin_password_placeholder: 'Enter security passcode...',
    admin_unlock_btn: 'UNLOCK ADMIN COMMAND',
    admin_invalid_key: 'Invalid authorization passcode! Try again.',
    admin_stats_total_dl: 'TOTAL DOWNLOADS',
    admin_stats_guest: 'GUEST USERS',
    admin_stats_free: 'FREE MEMBERS',
    admin_stats_vip: 'VIP MEMBERS',
    admin_post_new_title: 'PUBLISH NEW GAME MOD',
    admin_field_title: 'Game Title',
    admin_field_modname: 'Mod Name / Trainer',
    admin_field_category: 'Category',
    admin_field_version: 'Game Version',
    admin_field_size: 'APK File Size (MB)',
    admin_field_features: 'Mod Features (comma separated)',
    admin_field_dlurl: 'APK Direct Download URL',
    admin_field_desc: 'Mod Description',
    admin_btn_publish: 'PUBLISH MOD DOSSIER',
    admin_game_list_title: 'ARCHIVED GAME REPOSITORY',
    admin_delete_btn: 'Delete',
    admin_edit_dl: 'Edit Stats',

    // Account & Auth
    acc_title: 'USER IDENTITY CENTER',
    acc_guest_info: 'You are currently identified as Guest with a unique hardware fingerprint.',
    acc_upgrade_prompt: 'Register with email or 1-click Google to safeguard favorites and unlock accelerated download channels.',
    acc_email_label: 'Email Address',
    acc_username_label: 'Preferred Username',
    acc_register_btn: 'REGISTER MEMBER ACCOUNT',
    acc_google_btn: 'SIGN IN WITH GOOGLE',
    acc_logout: 'Sign Out',
    acc_curr_role: 'Current Access Tier',

    // Payment & VIP
    pay_title: 'TRADELAB VIP ACCESS UPGRADE',
    pay_subtitle: 'Unlock uncapped download bandwidth, private anti-ban hooks, and priority mod release requests.',
    pay_pass_monthly: 'MONTHLY COMBAT PASS',
    pay_pass_lifetime: 'LIFETIME OPERATOR VIP',
    pay_qris_dana: 'Instant Checkout (QRIS / DANA / GoPay / Crypto)',
    pay_upgrade_now: 'ACTIVATE VIP NOW',
    pay_success_notice: 'VIP Access Activated! Your rank has been upgraded to VIP.',

    // Community
    com_title: 'TRADELAB OPERATOR COMMUNITY',
    com_subtitle: 'Join over 45,000 active modders and mobile gamers across the globe.',
    com_discord: 'JOIN OFFICIAL DISCORD',
    com_telegram: 'TACTICAL TELEGRAM CHANNEL',
    com_request_title: 'COMMUNITY MOD REQUEST BOARD',
    com_request_btn: 'Submit Request',
    com_upvote_btn: 'Upvote'
  }
};
