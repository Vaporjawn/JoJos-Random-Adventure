import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';
import { ThemeMode } from '../types';

declare module '@mui/material/styles' {
  interface Palette {
    jojo: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      surface: string;
    };
    phantom: {
      main: string;
    };
    battle: {
      main: string;
    };
    stardust: {
      main: string;
    };
    diamond: {
      main: string;
    };
    golden: {
      main: string;
    };
    stone: {
      main: string;
    };
    steel: {
      main: string;
    };
    jojolion: {
      main: string;
    };
  }

  interface PaletteOptions {
    jojo?: {
      primary?: string;
      secondary?: string;
      accent?: string;
      background?: string;
      surface?: string;
    };
    phantom?: {
      main?: string;
    };
    battle?: {
      main?: string;
    };
    stardust?: {
      main?: string;
    };
    diamond?: {
      main?: string;
    };
    golden?: {
      main?: string;
    };
    stone?: {
      main?: string;
    };
    steel?: {
      main?: string;
    };
    jojolion?: {
      main?: string;
    };
  }
}

const jojoColors = {
  purple: '#9370db',
  gold: '#ffd700',
  pink: '#ff1493',
  blue: '#1e90ff',
  green: '#32cd32',
  orange: '#ff8c00',
  red: '#dc143c',
  // Part-specific colors
  phantom: '#8b0000', // Phantom Blood - Dark Red
  battle: '#ff6347', // Battle Tendency - Tomato Red
  stardust: '#4169e1', // Stardust Crusaders - Royal Blue
  diamond: '#ff69b4', // Diamond is Unbreakable - Hot Pink
  golden: '#ffd700', // Golden Wind - Gold
  stone: '#20b2aa', // Stone Ocean - Light Sea Green
  steel: '#87ceeb', // Steel Ball Run - Sky Blue
  jojolion: '#9370db', // JoJolion - Medium Purple
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: jojoColors.purple,
      light: '#a788e4',
      dark: '#6f4e9f',
    },
    secondary: {
      main: jojoColors.gold,
      light: '#ffdf33',
      dark: '#ccac00',
    },
    error: {
      main: jojoColors.red,
    },
    warning: {
      main: jojoColors.orange,
    },
    info: {
      main: jojoColors.blue,
    },
    success: {
      main: jojoColors.green,
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    jojo: {
      primary: jojoColors.purple,
      secondary: jojoColors.gold,
      accent: jojoColors.pink,
      background: '#f8f9fa',
      surface: '#ffffff',
    },
    phantom: {
      main: jojoColors.phantom,
    },
    battle: {
      main: jojoColors.battle,
    },
    stardust: {
      main: jojoColors.stardust,
    },
    diamond: {
      main: jojoColors.diamond,
    },
    golden: {
      main: jojoColors.golden,
    },
    stone: {
      main: jojoColors.stone,
    },
    steel: {
      main: jojoColors.steel,
    },
    jojolion: {
      main: jojoColors.jojolion,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 900,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 800,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 700,
      letterSpacing: '0.1em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: jojoColors.purple,
      light: '#a788e4',
      dark: '#6f4e9f',
    },
    secondary: {
      main: jojoColors.gold,
      light: '#ffdf33',
      dark: '#ccac00',
    },
    error: {
      main: jojoColors.red,
    },
    warning: {
      main: jojoColors.orange,
    },
    info: {
      main: jojoColors.blue,
    },
    success: {
      main: jojoColors.green,
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    jojo: {
      primary: jojoColors.purple,
      secondary: jojoColors.gold,
      accent: jojoColors.pink,
      background: '#121212',
      surface: '#1e1e1e',
    },
    phantom: {
      main: jojoColors.phantom,
    },
    battle: {
      main: jojoColors.battle,
    },
    stardust: {
      main: jojoColors.stardust,
    },
    diamond: {
      main: jojoColors.diamond,
    },
    golden: {
      main: jojoColors.golden,
    },
    stone: {
      main: jojoColors.stone,
    },
    steel: {
      main: jojoColors.steel,
    },
    jojolion: {
      main: jojoColors.jojolion,
    },
  },
  typography: lightThemeOptions.typography,
  shape: lightThemeOptions.shape,
  shadows: lightThemeOptions.shadows,
};

export const createJojoTheme = (mode: ThemeMode): Theme => {
  const themeOptions = mode === ThemeMode.LIGHT ? lightThemeOptions : darkThemeOptions;

  return createTheme({
    ...themeOptions,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            padding: '16px 32px',
            fontSize: '1.1rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
            border: '3px solid #000',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': {
              boxShadow: '6px 6px 0px rgba(0,0,0,0.4)',
              transform: 'translate(-2px, -2px)',
            },
            '&:active': {
              boxShadow: '2px 2px 0px rgba(0,0,0,0.3)',
              transform: 'translate(2px, 2px)',
            },
            '&.MuiButton-containedPrimary': {
              background: `linear-gradient(45deg, ${jojoColors.purple}, ${jojoColors.pink})`,
              '&:hover': {
                background: `linear-gradient(45deg, ${jojoColors.pink}, ${jojoColors.purple})`,
              },
            },
            '&.MuiButton-containedSecondary': {
              background: `linear-gradient(45deg, ${jojoColors.gold}, ${jojoColors.orange})`,
              '&:hover': {
                background: `linear-gradient(45deg, ${jojoColors.orange}, ${jojoColors.gold})`,
              },
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            border: '4px solid #000',
            boxShadow: '8px 8px 0px rgba(0,0,0,0.3)',
            transition: 'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
            position: 'relative',
            overflow: 'hidden',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)',
              pointerEvents: 'none',
            },
            '&:hover': {
              transform: 'translate(-4px, -4px)',
              boxShadow: '12px 12px 0px rgba(0,0,0,0.4)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === ThemeMode.LIGHT ? '#ffffff' : '#1e1e1e',
            color: mode === ThemeMode.LIGHT ? '#333333' : '#ffffff',
            boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            boxShadow: '0px 4px 20px rgba(0,0,0,0.15)',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          },
        },
      },
    },
  });
};