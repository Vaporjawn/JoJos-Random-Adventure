import { STORAGE_KEYS, DEFAULT_PREFERENCES, MAX_HISTORY_ENTRIES } from './constants';
import type {
  UserPreferences,
  HistoryEntry,
  UserStatistics,
  FavoriteItem,
  ExportData,
} from './types';
import { ThemeMode } from './types';

/**
 * Storage utility class for managing localStorage operations
 */
export class StorageManager {
  /**
   * Get user preferences from localStorage
   */
  static getPreferences(): UserPreferences {
    const stored = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing preferences:', error);
        return DEFAULT_PREFERENCES;
      }
    }
    return DEFAULT_PREFERENCES;
  }

  /**
   * Save user preferences to localStorage
   */
  static savePreferences(preferences: Partial<UserPreferences>): void {
    const current = this.getPreferences();
    const updated = { ...current, ...preferences };
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(updated));
  }

  /**
   * Get viewing history from localStorage
   */
  static getHistory(): HistoryEntry[] {
    const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing history:', error);
        return [];
      }
    }
    return [];
  }

  /**
   * Add entry to viewing history
   */
  static addToHistory(entry: Omit<HistoryEntry, 'id' | 'timestamp'>): void {
    const history = this.getHistory();
    const newEntry: HistoryEntry = {
      ...entry,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
    };

    // Add to beginning and limit size
    const updatedHistory = [newEntry, ...history].slice(0, MAX_HISTORY_ENTRIES);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updatedHistory));

    // Update statistics
    this.updateStatistics(entry.part);
  }

  /**
   * Clear viewing history
   */
  static clearHistory(): void {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify([]));
  }

  /**
   * Get user statistics
   */
  static getStatistics(): UserStatistics {
    const stored = localStorage.getItem(STORAGE_KEYS.STATISTICS);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing statistics:', error);
        return this.createEmptyStatistics();
      }
    }
    return this.createEmptyStatistics();
  }

  /**
   * Update statistics after viewing content
   */
  private static updateStatistics(part: number): void {
    const stats = this.getStatistics();
    stats.totalViews += 1;
    stats.partViews[part] = (stats.partViews[part] || 0) + 1;
    stats.lastViewDate = new Date().toISOString();
    localStorage.setItem(STORAGE_KEYS.STATISTICS, JSON.stringify(stats));
  }

  /**
   * Create empty statistics object
   */
  private static createEmptyStatistics(): UserStatistics {
    return {
      totalViews: 0,
      partViews: {},
      favoriteCount: 0,
      lastViewDate: new Date().toISOString(),
    };
  }

  /**
   * Toggle favorite part
   */
  static toggleFavorite(part: number): boolean {
    const preferences = this.getPreferences();
    const favoriteParts = preferences.favoriteParts || [];
    const index = favoriteParts.indexOf(part);

    if (index > -1) {
      favoriteParts.splice(index, 1);
    } else {
      favoriteParts.push(part);
    }

    this.savePreferences({ favoriteParts });
    return index === -1; // Returns true if added, false if removed
  }

  /**
   * Check if part is favorited
   */
  static isFavorite(part: number): boolean {
    const preferences = this.getPreferences();
    return (preferences.favoriteParts || []).includes(part);
  }

  /**
   * Get theme preference
   */
  static getTheme(): ThemeMode {
    const stored = localStorage.getItem(STORAGE_KEYS.THEME);
    return (stored as ThemeMode) || DEFAULT_PREFERENCES.theme;
  }

  /**
   * Set theme preference
   */
  static setTheme(theme: ThemeMode): void {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }

  /**
   * Toggle theme between light and dark
   */
  static toggleTheme(): ThemeMode {
    const currentTheme = this.getTheme();
    const newTheme: ThemeMode = currentTheme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
    this.setTheme(newTheme);
    return newTheme;
  }

  /**
   * Get favorites from localStorage
   */
  static getFavorites(): FavoriteItem[] {
    const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing favorites:', error);
        return [];
      }
    }
    return [];
  }

  /**
   * Add item to favorites
   */
  static addFavorite(item: Omit<FavoriteItem, 'id' | 'timestamp'>): void {
    const favorites = this.getFavorites();
    const newFavorite: FavoriteItem = {
      ...item,
      id: `fav-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
    };

    const updatedFavorites = [newFavorite, ...favorites];
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updatedFavorites));

    // Update statistics
    const stats = this.getStatistics();
    stats.favoriteCount = updatedFavorites.length;
    localStorage.setItem(STORAGE_KEYS.STATISTICS, JSON.stringify(stats));
  }

  /**
   * Remove item from favorites
   */
  static removeFavorite(id: string): void {
    const favorites = this.getFavorites();
    const updatedFavorites = favorites.filter(fav => fav.id !== id);
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updatedFavorites));

    // Update statistics
    const stats = this.getStatistics();
    stats.favoriteCount = updatedFavorites.length;
    localStorage.setItem(STORAGE_KEYS.STATISTICS, JSON.stringify(stats));
  }

  /**
   * Check if URL is favorited
   */
  static isFavorited(url: string): boolean {
    const favorites = this.getFavorites();
    return favorites.some(fav => fav.url === url);
  }

  /**
   * Get favorite by URL
   */
  static getFavoriteByUrl(url: string): FavoriteItem | undefined {
    const favorites = this.getFavorites();
    return favorites.find(fav => fav.url === url);
  }

  /**
   * Clear all favorites
   */
  static clearFavorites(): void {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([]));
    const stats = this.getStatistics();
    stats.favoriteCount = 0;
    localStorage.setItem(STORAGE_KEYS.STATISTICS, JSON.stringify(stats));
  }

  /**
   * Export all user data
   */
  static exportData(): ExportData {
    return {
      version: '2.0.0',
      exportDate: new Date().toISOString(),
      preferences: this.getPreferences(),
      history: this.getHistory(),
      favorites: this.getFavorites(),
      statistics: this.getStatistics(),
    };
  }

  /**
   * Import user data from backup
   */
  static importData(data: ExportData): boolean {
    try {
      // Validate data structure
      if (!data.version || !data.preferences) {
        throw new Error('Invalid export data format');
      }

      // Import preferences
      if (data.preferences) {
        localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(data.preferences));
      }

      // Import history
      if (data.history && Array.isArray(data.history)) {
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(data.history));
      }

      // Import favorites
      if (data.favorites && Array.isArray(data.favorites)) {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(data.favorites));
      }

      // Import statistics
      if (data.statistics) {
        localStorage.setItem(STORAGE_KEYS.STATISTICS, JSON.stringify(data.statistics));
      }

      // Import theme
      if (data.preferences.theme) {
        localStorage.setItem(STORAGE_KEYS.THEME, data.preferences.theme);
      }

      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }

  /**
   * Download export data as JSON file
   */
  static downloadExport(): void {
    const data = this.exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `jojo-randomizer-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * Search history and favorites
   */
  static search(query: string, includeHistory = true, includeFavorites = true): (HistoryEntry | FavoriteItem)[] {
    const results: (HistoryEntry | FavoriteItem)[] = [];
    const lowerQuery = query.toLowerCase();

    if (includeHistory) {
      const history = this.getHistory();
      const historyResults = history.filter(item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.part.toString().includes(query)
      );
      results.push(...historyResults);
    }

    if (includeFavorites) {
      const favorites = this.getFavorites();
      const favoriteResults = favorites.filter(item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.part.toString().includes(query) ||
        (item.notes && item.notes.toLowerCase().includes(lowerQuery))
      );
      results.push(...favoriteResults);
    }

    return results;
  }
}
