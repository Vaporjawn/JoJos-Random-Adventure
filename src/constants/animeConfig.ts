import { JoJoPart, AnimeConfig } from '../types';

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
