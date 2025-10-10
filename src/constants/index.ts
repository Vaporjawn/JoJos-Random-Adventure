import { JoJoPart, MediaType, PartInfo, MangaConfig, AnimeConfig, JoJoFact } from '../types';

/**
 * Part information constants
 */
export const PART_INFO: Record<number, PartInfo> = {
  [JoJoPart.PHANTOM_BLOOD]: {
    id: 1,
    name: 'Phantom Blood',
    protagonist: 'Jonathan Joestar',
    hasAnime: true,
    bioPath: './bios/jonathan.html',
  },
  [JoJoPart.BATTLE_TENDENCY]: {
    id: 2,
    name: 'Battle Tendency',
    protagonist: 'Joseph Joestar',
    hasAnime: true,
    bioPath: './bios/joseph.html',
  },
  [JoJoPart.STARDUST_CRUSADERS]: {
    id: 3,
    name: 'Stardust Crusaders',
    protagonist: 'Jotaro Kujo',
    hasAnime: true,
    bioPath: './bios/jotaro.html',
  },
  [JoJoPart.DIAMOND_IS_UNBREAKABLE]: {
    id: 4,
    name: 'Diamond is Unbreakable',
    protagonist: 'Josuke Higashikata',
    hasAnime: true,
    bioPath: './bios/josuke.html',
  },
  [JoJoPart.GOLDEN_WIND]: {
    id: 5,
    name: 'Golden Wind',
    protagonist: 'Giorno Giovanna',
    hasAnime: true,
    bioPath: './bios/giorno.html',
  },
  [JoJoPart.STONE_OCEAN]: {
    id: 6,
    name: 'Stone Ocean',
    protagonist: 'Jolyne Cujoh',
    hasAnime: true,
    bioPath: './bios/jolyne.html',
  },
  [JoJoPart.STEEL_BALL_RUN]: {
    id: 7,
    name: 'Steel Ball Run',
    protagonist: 'Johnny Joestar',
    hasAnime: false,
    bioPath: './bios/johnny.html',
  },
  [JoJoPart.JOJOLION]: {
    id: 8,
    name: 'JoJolion',
    protagonist: 'Josuke Higashikata (Gappy)',
    hasAnime: false,
    bioPath: './bios/gappy.html',
  },
  [JoJoPart.THUS_SPOKE_ROHAN]: {
    id: 9,
    name: 'Thus Spoke Kishibe Rohan',
    protagonist: 'Rohan Kishibe',
    hasAnime: false,
    bioPath: './bios/josuke.html',
  },
  [JoJoPart.DEAD_MANS_QUESTIONS]: {
    id: 10,
    name: "Dead Man's Questions",
    protagonist: 'Yoshikage Kira',
    hasAnime: false,
    bioPath: './bios/josuke.html',
  },
};

/**
 * Manga chapter configuration by part
 */
export const MANGA_CONFIG: {
    [key: number]: { base: string; max: number; isSpecial?: boolean };
} = {
    1: { base: 'https://mangadex.org/chapter/39a40175-96c7-4f23-8073-557b73b38e6b/', max: 44 }, // Phantom Blood
    2: { base: 'https://mangadex.org/chapter/d2b8b3d2-1552-451d-82b3-337a43f374a3/', max: 69 }, // Battle Tendency
    3: { base: 'https://mangadex.org/chapter/a296f5f5-8134-483a-9597-a3d5642ee0e0/', max: 152 }, // Stardust Crusaders
    4: { base: 'https://mangadex.org/chapter/3b3ba84a-cf3e-4dfc-8256-6315d9c899e4/', max: 174 }, // Diamond is Unbreakable
    5: { base: 'https://mangadex.org/chapter/b35f4f3a-14b6-4336-95a3-107552455d6e/', max: 155 }, // Golden Wind
    6: { base: 'https://mangadex.org/chapter/11326a7e-5268-4533-85a6-8375705317e2/', max: 158 }, // Stone Ocean
    7: { base: 'https://mangadex.org/chapter/02ac17e8-5629-4460-a933-5c86093fd693/', max: 95 }, // Steel Ball Run
    8: { base: 'https://mangadex.org/chapter/3a751963-afee-4312-9bae-4ee2dd204c66/', max: 110 }, // JoJolion
    9: { base: 'https://mangadex.org/chapter/524d22c4-865b-46ab-9391-116512651378/', max: 1 }, // The JOJOLands (Ongoing)
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
  [JoJoPart.STONE_OCEAN]: { min: 153, max: 190 },
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
  theme: 'light' as const,
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
export const JOJO_FACTS: JoJoFact[] = [
  {
    text: "Araki never forgets - it's a running joke in the community, but most 'inconsistencies' are actually misunderstandings!",
    category: 'trivia',
  },
  {
    text: 'The Joestar family birthmark is a star-shaped mark on the left shoulder.',
    category: 'character',
  },
  {
    text: "Stand names are references to bands, musicians, and songs - it's Araki's love letter to music!",
    category: 'stand',
  },
  {
    text: "The iconic 'To Be Continued' arrow and Roundabout by Yes became a massive meme.",
    category: 'reference',
  },
  {
    text: 'Hirohiko Araki has been writing JoJo since 1987 - over 35 years!',
    category: 'trivia',
  },
  {
    text: "Each JoJo has 'Jo' in their name - Jonathan, Joseph, Jotaro, Josuke, Giorno (GioGio), Jolyne, Johnny, and Josuke again!",
    category: 'character',
  },
  {
    text: 'Star Platinum and The World have the same type of Stand - time manipulation.',
    category: 'stand',
  },
  {
    text: "The poses in JoJo are inspired by fashion magazines and Italian sculptures.",
    category: 'trivia',
  },
  {
    text: 'Speedwagon is best waifu - this is not up for debate.',
    category: 'character',
  },
  {
    text: 'Gold Experience Requiem has the ability to reset actions and willpower to zero.',
    category: 'stand',
  },
];