/**
 * JoJo's Bizarre Adventure Parts Enumeration
 */
export enum JoJoPart {
  PHANTOM_BLOOD = 1,
  BATTLE_TENDENCY = 2,
  STARDUST_CRUSADERS = 3,
  DIAMOND_IS_UNBREAKABLE = 4,
  GOLDEN_WIND = 5,
  STONE_OCEAN = 6,
  STEEL_BALL_RUN = 7,
  JOJOLION = 8,
  THUS_SPOKE_ROHAN = 9,
  DEAD_MANS_QUESTIONS = 10,
}

/**
 * Media type for JoJo content
 */
export enum MediaType {
  ANIME = 'anime',
  MANGA = 'manga',
  BOTH = 'both',
  BIO = 'bio',
}

/**
 * Theme mode options
 */
export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

/**
 * Manga configuration for a specific part
 */
export interface MangaConfig {
  base: string;
  max: number;
  isSpecial?: boolean;
}

/**
 * Anime episode range configuration
 */
export interface AnimeConfig {
  min: number;
  max: number;
}

/**
 * User preferences stored in localStorage
 */
export interface UserPreferences {
  favoriteParts: number[];
  preferredMedium: MediaType;
  theme: ThemeMode;
  lastVisited: string;
}

/**
 * History entry for viewed content
 */
export interface HistoryEntry {
  id: string;
  part: number;
  medium: MediaType;
  url: string;
  title: string;
  timestamp: number;
}

/**
 * Statistics for user activity
 */
export interface UserStatistics {
  totalViews: number;
  partViews: Record<number, number>;
  favoriteCount: number;
  lastViewDate: string;
}

/**
 * JoJo facts for random display
 */
export interface JoJoFact {
  text: string;
  category: 'trivia' | 'character' | 'stand' | 'reference';
}

/**
 * Part information
 */
export interface PartInfo {
  id: number;
  name: string;
  protagonist: string;
  hasAnime: boolean;
  bioPath: string;
}

/**
 * Favorite item stored in localStorage
 */
export interface FavoriteItem {
  id: string;
  part: number;
  medium: MediaType;
  url: string;
  title: string;
  timestamp: number;
  notes?: string;
}

/**
 * Share options for social media
 */
export interface ShareOptions {
  platform: 'twitter' | 'discord' | 'copy';
  title: string;
  url: string;
  hashtags?: string[];
}

/**
 * Export data structure for backup
 */
export interface ExportData {
  version: string;
  exportDate: string;
  preferences: UserPreferences;
  history: HistoryEntry[];
  favorites: FavoriteItem[];
  statistics: UserStatistics;
}

/**
 * Search filter options
 */
export interface SearchFilters {
  query?: string;
  parts?: number[];
  medium?: MediaType;
  sortBy?: 'date' | 'part' | 'title';
  sortOrder?: 'asc' | 'desc';
}

/**
 * BeforeInstallPromptEvent for PWA installation
 * This interface extends the standard Event with PWA-specific properties
 */
export interface BeforeInstallPromptEvent extends Event {
  /**
   * Triggers the installation prompt
   */
  prompt: () => Promise<void>;

  /**
   * Promise that resolves with the user's choice
   */
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface JojoState {
  theme: ThemeMode;
  history: HistoryEntry[];
  favorites: FavoriteItem[];
  statistics: UserStatistics;
  currentBackground: string;
  isLoading: boolean;
  notifications: Notification[];
}

export interface JojoContextType {
  state: JojoState;
  selectAnime: (part?: number) => void;
  selectManga: (part?: number) => void;
  openRandomWiki: () => void;
  toggleTheme: () => void;
  clearHistory: () => void;
  addToFavorites: (item: Omit<FavoriteItem, 'id' | 'timestamp'>) => void;
  removeFromFavorites: (id: string) => void;
  showNotification: (message: string, type?: 'success' | 'error' | 'info') => void;
  exportData: () => void;
  importData: (data: ExportData) => void;
}
