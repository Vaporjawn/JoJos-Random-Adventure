import { JoJoPart, PartInfo } from '../types';

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
    bioPath: '/bios/josuke.html',
  },
  [JoJoPart.DEAD_MANS_QUESTIONS]: {
    id: 10,
    name: "Dead Man's Questions",
    protagonist: 'Yoshikage Kira',
    hasAnime: false,
    bioPath: '/bios/josuke.html',
  },
};
