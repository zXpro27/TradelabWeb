export type ModCategory = 'All' | 'Action' | 'Idle RPG' | 'Casual' | 'Survival';

export type UserRole = 'guest' | 'free' | 'vip' | 'admin';

export interface ModGame {
  id: string;
  title: string;
  modName: string;
  slug: string;
  category: 'Action' | 'Idle RPG' | 'Casual' | 'Survival';
  version: string;
  downloads: number;
  rating: number;
  fileSize: string;
  sha256: string;
  developer: string;
  packageName: string;
  reqAndroid: string;
  features: string[];
  description: string;
  coverImage: string;
  badge?: string; // e.g. "Trending", "Highly Rated", "Verified Safe"
  virusScan: string; // e.g. "0/72 Clean"
  downloadUrl: string;
  updatedAt: string;
  isHero?: boolean;
}

export interface UserState {
  hwid: string;
  username: string;
  role: UserRole;
  email?: string;
  goldCredits: number;
  rank: string;
  joinedAt: string;
  downloadsCount: number;
}

export interface LiveActivity {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  avatarSeed: string;
}

export interface ModRequestItem {
  id: string;
  gameTitle: string;
  requestedBy: string;
  upvotes: number;
  status: 'Investigating' | 'In Development' | 'Testing' | 'Released';
  hasUpvoted?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'operator' | 'user';
  text: string;
  timestamp: string;
  quickAction?: string;
}
