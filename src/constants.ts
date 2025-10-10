import { JoJoPart, MediaType, ThemeMode, PartInfo, MangaConfig, AnimeConfig } from './types';

/**
 * Part information constants
 */
export const PART_INFO: Record<number, PartInfo> = {
  [JoJoPart.PHANTOM_BLOOD]: {
    id: 1,
    name: 'Phantom Blood',
    protagonist: 'Jonathan Joestar',
    hasAnime: true,
    bioPath: '/bios/jonathan.html',
  },
  [JoJoPart.BATTLE_TENDENCY]: {
    id: 2,
    name: 'Battle Tendency',
    protagonist: 'Joseph Joestar',
    hasAnime: true,
    bioPath: '/bios/joseph.html',
  },
  [JoJoPart.STARDUST_CRUSADERS]: {
    id: 3,
    name: 'Stardust Crusaders',
    protagonist: 'Jotaro Kujo',
    hasAnime: true,
    bioPath: '/bios/jotaro.html',
  },
  [JoJoPart.DIAMOND_IS_UNBREAKABLE]: {
    id: 4,
    name: 'Diamond is Unbreakable',
    protagonist: 'Josuke Higashikata',
    hasAnime: true,
    bioPath: '/bios/josuke.html',
  },
  [JoJoPart.GOLDEN_WIND]: {
    id: 5,
    name: 'Golden Wind',
    protagonist: 'Giorno Giovanna',
    hasAnime: true,
    bioPath: '/bios/giorno.html',
  },
  [JoJoPart.STONE_OCEAN]: {
    id: 6,
    name: 'Stone Ocean',
    protagonist: 'Jolyne Cujoh',
    hasAnime: false,
    bioPath: '/bios/jolyne.html',
  },
  [JoJoPart.STEEL_BALL_RUN]: {
    id: 7,
    name: 'Steel Ball Run',
    protagonist: 'Johnny Joestar',
    hasAnime: false,
    bioPath: '/bios/johnny.html',
  },
  [JoJoPart.JOJOLION]: {
    id: 8,
    name: 'JoJolion',
    protagonist: 'Josuke Higashikata (Gappy)',
    hasAnime: false,
    bioPath: '/bios/gappy.html',
  },
  [JoJoPart.THUS_SPOKE_ROHAN]: {
    id: 9,
    name: 'Thus Spoke Kishibe Rohan',
    protagonist: 'Rohan Kishibe',
    hasAnime: false,
    bioPath: '/bios/josuke.html', // Uses Josuke's bio as fallback
  },
  [JoJoPart.DEAD_MANS_QUESTIONS]: {
    id: 10,
    name: "Dead Man's Questions",
    protagonist: 'Yoshikage Kira',
    hasAnime: false,
    bioPath: '/bios/josuke.html', // Uses Josuke's bio as fallback
  },
};

/**
 * Manga chapter configuration by part
 */
export const MANGA_CONFIG: Record<number, MangaConfig> = {
  [JoJoPart.PHANTOM_BLOOD]: {
    base: 'https://manganelo.com/chapter/phantom_blood/chapter_',
    max: 44,
  },
  [JoJoPart.BATTLE_TENDENCY]: {
    base: 'https://mangaplus.shueisha.co.jp/viewer/',
    max: 2,
    isSpecial: true,
  },
  [JoJoPart.STARDUST_CRUSADERS]: {
    base: 'https://manganelo.com/chapter/phantom_blood/chapter_',
    max: 612,
  },
  [JoJoPart.DIAMOND_IS_UNBREAKABLE]: {
    base: 'https://manganelo.com/chapter/diamond_wa_kudakenai/chapter_',
    max: 439,
  },
  [JoJoPart.GOLDEN_WIND]: {
    base: 'https://manganelo.com/chapter/vento_aureo/chapter_',
    max: 154,
  },
  [JoJoPart.STONE_OCEAN]: {
    base: 'https://manganelo.com/chapter/bi918289/chapter_',
    max: 158,
  },
  [JoJoPart.STEEL_BALL_RUN]: {
    base: 'https://manganelo.com/chapter/af918141/chapter_',
    max: 95,
  },
  [JoJoPart.JOJOLION]: {
    base: 'https://manganelo.com/chapter/yx917940/chapter_',
    max: 110, // Updated to current chapter count
  },
  [JoJoPart.THUS_SPOKE_ROHAN]: {
    base: 'https://manganelo.com/chapter/oo922205/chapter_',
    max: 5,
  },
  [JoJoPart.DEAD_MANS_QUESTIONS]: {
    base: 'https://manganelo.com/chapter/jojo_dead_mans_questions/chapter_',
    max: 3,
  },
};

/**
 * Anime episode ranges by part
 */
export const ANIME_CONFIG: Record<number, AnimeConfig> = {
  [JoJoPart.PHANTOM_BLOOD]: { min: 1, max: 9 },
  [JoJoPart.BATTLE_TENDENCY]: { min: 10, max: 26 },
  [JoJoPart.STARDUST_CRUSADERS]: { min: 27, max: 98 },
  [JoJoPart.DIAMOND_IS_UNBREAKABLE]: { min: 99, max: 138 },
  [JoJoPart.GOLDEN_WIND]: { min: 139, max: 152 },
};

/**
 * Background image filenames for initial backgrounds
 */
export const INIT_BACKGROUNDS: string[] = [
  'PB.png',
  'BT.png',
  'SDC.png',
  'DiU.png',
  'VA.png',
  'SO.png',
  'SBRJohnny.png',
  'SBRLucy.png',
  'JJL.png',
];

/**
 * GitHub repository base URL for images
 */
export const GITHUB_IMAGE_BASE =
  'https://raw.githubusercontent.com/Vaporjawn/JoJos-Bizarre-Adventure-Randomizer/master/images/';

/**
 * localStorage keys
 */
export const STORAGE_KEYS = {
  PREFERENCES: 'jojo_preferences',
  HISTORY: 'jojo_history',
  STATISTICS: 'jojo_statistics',
  THEME: 'jojo_theme',
  FAVORITES: 'jojo_favorites',
} as const;

/**
 * Maximum history entries to store
 */
export const MAX_HISTORY_ENTRIES = 50;

/**
 * Default user preferences
 */
export const DEFAULT_PREFERENCES = {
  favoriteParts: [],
  preferredMedium: MediaType.BOTH,
  theme: ThemeMode.DARK,
  lastVisited: new Date().toISOString(),
};

/**
 * Keyboard shortcuts
 */
export const KEYBOARD_SHORTCUTS = {
  RANDOM_ANIME: 'a',
  RANDOM_MANGA: 'm',
  NEW_BACKGROUND: 'b',
  RANDOM_WIKI: 'w',
  TOGGLE_THEME: 't',
  SHOW_HISTORY: 'h',
  SHOW_STATS: 's',
} as const;

/**
 * JoJo facts for random display
 */
export const JOJO_FACTS = [
  {
    text: "Araki never forgets - it's a running joke in the community, but most 'inconsistencies' are actually misunderstandings!",
    category: 'trivia' as const,
  },
  {
    text: 'The Joestar family birthmark is a star-shaped mark on the left shoulder.',
    category: 'character' as const,
  },
  {
    text: "Stand names are references to bands, musicians, and songs - it's Araki's love letter to music!",
    category: 'stand' as const,
  },
  {
    text: "The iconic 'To Be Continued' arrow and Roundabout by Yes became a massive meme.",
    category: 'reference' as const,
  },
  {
    text: 'Hirohiko Araki has been writing JoJo since 1987 - over 35 years!',
    category: 'trivia' as const,
  },
  {
    text: "Each JoJo has 'Jo' in their name - Jonathan, Joseph, Jotaro, Josuke, Giorno (GioGio), Jolyne, Johnny, and Josuke again!",
    category: 'character' as const,
  },
  {
    text: 'Star Platinum and The World have the same type of Stand - time manipulation.',
    category: 'stand' as const,
  },
  {
    text: "The poses in JoJo are inspired by fashion magazines and Italian sculptures.",
    category: 'trivia' as const,
  },
  {
    text: 'Speedwagon is best waifu - this is not up for debate.',
    category: 'character' as const,
  },
  {
    text: 'Gold Experience Requiem has the ability to reset actions and willpower to zero.',
    category: 'stand' as const,
  },
];
