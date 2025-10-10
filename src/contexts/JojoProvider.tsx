import React, { useReducer, useCallback, useEffect } from 'react';
import {
  JoJoPart,
  MediaType,
  ThemeMode,
  HistoryEntry,
  FavoriteItem,
  ExportData,
  JojoState,
  JojoContextType,
} from '../types';
import { JojoContext } from './JojoContext';

const initialState: JojoState = {
  theme: ThemeMode.LIGHT,
  history: [],
  favorites: [],
  statistics: {
    totalViews: 0,
    partViews: {},
    favoriteCount: 0,
    lastViewDate: '',
  },
  currentBackground: '',
  isLoading: false,
  notifications: [],
};

type JojoAction =
  | { type: 'SET_THEME'; payload: ThemeMode }
  | { type: 'ADD_TO_HISTORY'; payload: Omit<HistoryEntry, 'id' | 'timestamp'> }
  | { type: 'CLEAR_HISTORY' }
  | { type: 'ADD_FAVORITE'; payload: Omit<FavoriteItem, 'id' | 'timestamp'> }
  | { type: 'REMOVE_FAVORITE'; payload: string }
  | { type: 'SET_BACKGROUND'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'ADD_NOTIFICATION'; payload: { message: string; type: 'success' | 'error' | 'info' } }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'LOAD_STORED_DATA'; payload: Partial<JojoState> };

function jojoReducer(state: JojoState, action: JojoAction): JojoState {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };

    case 'ADD_TO_HISTORY': {
      const newEntry: HistoryEntry = {
        ...action.payload,
        id: Date.now().toString(),
        timestamp: Date.now(),
      };

      const updatedHistory = [newEntry, ...state.history.slice(0, 49)]; // Keep max 50 entries

      // Update statistics
      const updatedStats = {
        ...state.statistics,
        totalViews: state.statistics.totalViews + 1,
        partViews: {
          ...state.statistics.partViews,
          [action.payload.part]: (state.statistics.partViews[action.payload.part] || 0) + 1,
        },
        lastViewDate: new Date().toISOString(),
      };

      return {
        ...state,
        history: updatedHistory,
        statistics: updatedStats,
      };
    }

    case 'CLEAR_HISTORY':
      return { ...state, history: [] };

    case 'ADD_FAVORITE': {
      const newFavorite: FavoriteItem = {
        ...action.payload,
        id: Date.now().toString(),
        timestamp: Date.now(),
      };

      const updatedFavorites = [newFavorite, ...state.favorites];
      const updatedStats = {
        ...state.statistics,
        favoriteCount: updatedFavorites.length,
      };

      return {
        ...state,
        favorites: updatedFavorites,
        statistics: updatedStats,
      };
    }

    case 'REMOVE_FAVORITE': {
      const updatedFavorites = state.favorites.filter(fav => fav.id !== action.payload);
      const updatedStats = {
        ...state.statistics,
        favoriteCount: updatedFavorites.length,
      };

      return {
        ...state,
        favorites: updatedFavorites,
        statistics: updatedStats,
      };
    }

    case 'SET_BACKGROUND':
      return { ...state, currentBackground: action.payload };

    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'ADD_NOTIFICATION': {
      const notification = {
        id: Date.now().toString(),
        ...action.payload,
      };

      return {
        ...state,
        notifications: [...state.notifications, notification],
      };
    }

    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(notif => notif.id !== action.payload),
      };

    case 'LOAD_STORED_DATA':
      return { ...state, ...action.payload };

    default:
      return state;
  }
}

export function JojoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(jojoReducer, initialState);

  // Load data from localStorage on mount
  useEffect(() => {
    const loadStoredData = () => {
      try {
        const theme = localStorage.getItem('jojo_theme') as ThemeMode || ThemeMode.LIGHT;
        const history = JSON.parse(localStorage.getItem('jojo_history') || '[]');
        const favorites = JSON.parse(localStorage.getItem('jojo_favorites') || '[]');
        const statistics = JSON.parse(localStorage.getItem('jojo_statistics') || JSON.stringify(initialState.statistics));

        dispatch({
          type: 'LOAD_STORED_DATA',
          payload: { theme, history, favorites, statistics },
        });
      } catch (error) {
        console.error('Error loading stored data:', error);
      }
    };

    loadStoredData();
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('jojo_theme', state.theme);
    localStorage.setItem('jojo_history', JSON.stringify(state.history));
    localStorage.setItem('jojo_favorites', JSON.stringify(state.favorites));
    localStorage.setItem('jojo_statistics', JSON.stringify(state.statistics));
  }, [state.theme, state.history, state.favorites, state.statistics]);

  const selectAnime = useCallback((part?: number) => {
    // Import episodes dynamically to avoid loading all data upfront
    import('../data/episodes.ts').then(({ episodes }) => {
      import('../constants').then(({ ANIME_CONFIG, PART_INFO }) => {
        try {
          const selectedPart = part ?? Math.floor(Math.random() * 6) + 1; // Parts 1-6 have anime

          const partInfo = PART_INFO[selectedPart];
          if (!partInfo?.hasAnime) {
            throw new Error(`Part ${selectedPart} does not have anime adaptation`);
          }

          const config = ANIME_CONFIG[selectedPart];
          if (!config) {
            throw new Error(`No anime config for part ${selectedPart}`);
          }

          const partEpisodes = episodes.slice(config.min - 1, config.max);
          const randomEpisodeUrl = partEpisodes[Math.floor(Math.random() * partEpisodes.length)];

          if (!randomEpisodeUrl) {
            throw new Error(`Episode not found for part ${selectedPart}`);
          }

          const episodeIndex = episodes.indexOf(randomEpisodeUrl) + 1;

          dispatch({
            type: 'ADD_TO_HISTORY',
            payload: {
              part: selectedPart as JoJoPart,
              medium: MediaType.ANIME,
              url: randomEpisodeUrl,
              title: `${partInfo.name} - Episode ${episodeIndex}`,
            },
          });

          window.open(randomEpisodeUrl, '_blank');
          dispatch({
            type: 'ADD_NOTIFICATION',
            payload: { message: 'Opening random anime episode...', type: 'success' },
          });
        } catch (error) {
          console.error('Error selecting anime:', error);
          dispatch({
            type: 'ADD_NOTIFICATION',
            payload: { message: 'Failed to select anime episode', type: 'error' },
          });
        }
      });
    });
  }, []);

  const selectManga = useCallback((part?: number) => {
    import('../constants').then(({ MANGA_CONFIG, PART_INFO }) => {
      try {
        const selectedPart = part ?? Math.floor(Math.random() * 10) + 1;
        const config = MANGA_CONFIG[selectedPart];
        const partInfo = PART_INFO[selectedPart];

        if (!config || !partInfo) {
          throw new Error(`Invalid part: ${selectedPart}`);
        }

        let mangaChapter: string;

        // Handle special case for Battle Tendency (MangaPlus)
        if (selectedPart === 2 && config.isSpecial) {
          const chapterSelect = Math.floor(Math.random() * 2) + 1;
          const baseId = chapterSelect === 1 ? 1005751 : 1005785;
          const range = chapterSelect === 1 ? 4 : 7;
          const chapterNumber = Math.floor(Math.random() * range) + baseId;
          mangaChapter = `${config.base}${chapterNumber}`;
        } else {
          const chapterNumber = Math.floor(Math.random() * config.max) + 1;
          mangaChapter = `${config.base}${chapterNumber}`;
        }

        dispatch({
          type: 'ADD_TO_HISTORY',
          payload: {
            part: selectedPart as JoJoPart,
            medium: MediaType.MANGA,
            url: mangaChapter,
            title: `${partInfo.name} - Chapter`,
          },
        });

        window.open(mangaChapter, '_blank');
        dispatch({
          type: 'ADD_NOTIFICATION',
          payload: { message: 'Opening random manga chapter...', type: 'success' },
        });
      } catch (error) {
        console.error('Error selecting manga:', error);
        dispatch({
          type: 'ADD_NOTIFICATION',
          payload: { message: 'Failed to select manga chapter', type: 'error' },
        });
      }
    });
  }, []);

  const openRandomWiki = useCallback(() => {
    const wikiUrl = 'https://jojowiki.com/Special:Random';
    window.open(wikiUrl, '_blank');
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: { message: 'Opening random wiki page...', type: 'info' },
    });
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = state.theme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
    dispatch({ type: 'SET_THEME', payload: newTheme });
  }, [state.theme]);

  const clearHistory = useCallback(() => {
    dispatch({ type: 'CLEAR_HISTORY' });
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: { message: 'History cleared', type: 'info' },
    });
  }, []);

  const addToFavorites = useCallback((item: Omit<FavoriteItem, 'id' | 'timestamp'>) => {
    dispatch({ type: 'ADD_FAVORITE', payload: item });
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: { message: 'Added to favorites', type: 'success' },
    });
  }, []);

  const removeFromFavorites = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: { message: 'Removed from favorites', type: 'info' },
    });
  }, []);

  const showNotification = useCallback((message: string, type: 'success' | 'error' | 'info' = 'info') => {
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: { message, type },
    });
  }, []);

  const exportData = useCallback(() => {
    try {
      const exportData = {
        version: '3.0.0',
        exportDate: new Date().toISOString(),
        theme: state.theme,
        history: state.history,
        favorites: state.favorites,
        statistics: state.statistics,
      };

      const dataStr = JSON.stringify(exportData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `jojo-randomizer-data-${new Date().toISOString().split('T')[0]}.json`;
      link.click();

      URL.revokeObjectURL(url);

      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: { message: 'Data exported successfully!', type: 'success' },
      });
    } catch (error) {
      console.error('Export failed:', error);
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: { message: 'Failed to export data', type: 'error' },
      });
    }
  }, [state]);

  const importData = useCallback((data: ExportData) => {
    try {
      if (data.history) {
        dispatch({ type: 'LOAD_STORED_DATA', payload: { history: data.history } });
      }
      if (data.favorites) {
        dispatch({ type: 'LOAD_STORED_DATA', payload: { favorites: data.favorites } });
      }
      if (data.statistics) {
        dispatch({ type: 'LOAD_STORED_DATA', payload: { statistics: data.statistics } });
      }
      if (data.preferences?.theme) {
        dispatch({ type: 'SET_THEME', payload: data.preferences.theme });
      }

      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: { message: 'Data imported successfully!', type: 'success' },
      });
    } catch (error) {
      console.error('Import failed:', error);
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: { message: 'Failed to import data', type: 'error' },
      });
    }
  }, []);

  // Auto-remove notifications after 5 seconds
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    state.notifications.forEach(notification => {
      const timer = setTimeout(() => {
        dispatch({ type: 'REMOVE_NOTIFICATION', payload: notification.id });
      }, 5000);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [state.notifications]);

  const contextValue: JojoContextType = {
    state,
    selectAnime,
    selectManga,
    openRandomWiki,
    toggleTheme,
    clearHistory,
    addToFavorites,
    removeFromFavorites,
    showNotification,
    exportData,
    importData,
  };

  return (
    <JojoContext.Provider value={contextValue}>
      {children}
    </JojoContext.Provider>
  );
}
