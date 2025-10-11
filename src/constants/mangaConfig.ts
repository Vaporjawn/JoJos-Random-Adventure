import { JoJoPart, MangaConfig } from '../types';

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
    max: 110,
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
