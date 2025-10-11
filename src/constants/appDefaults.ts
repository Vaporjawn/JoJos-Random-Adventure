import { MediaType, ThemeMode } from '../types';

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
 * Default user preferences
 */
export const DEFAULT_PREFERENCES = {
  favoriteParts: [],
  preferredMedium: MediaType.BOTH,
  theme: ThemeMode.DARK,
  lastVisited: new Date().toISOString(),
};
