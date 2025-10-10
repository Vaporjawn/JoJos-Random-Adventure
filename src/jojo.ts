import { MediaType, JoJoPart, ThemeMode } from './types';
import { PART_INFO, MANGA_CONFIG, ANIME_CONFIG, GITHUB_IMAGE_BASE, INIT_BACKGROUNDS } from './constants';
import { StorageManager } from './storage.ts';
import { backgrounds } from './data/backgrounds.ts';
import { episodes } from './data/episodes.ts';

/**
 * Main application class for JoJo's Bizarre Adventure Randomizer
 */
export class JojoRandomizer {
  /**
   * Select a random manga chapter
   */
  static selectManga(part?: number): void {
    try {
      const selectedPart = part ?? Math.floor(Math.random() * 10) + 1;
      const config = MANGA_CONFIG[selectedPart];

      if (!config) {
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

      // Add to history
    StorageManager.addToHistory({
      part: selectedPart as JoJoPart,
      medium: MediaType.MANGA,
      url: mangaChapter,
      title: `Part ${selectedPart} - Chapter`,
    });      // Open in new tab
      window.open(mangaChapter, '_blank');
      this.showNotification('Opening random manga chapter...');
    } catch (error) {
      console.error('Error selecting manga:', error);
      this.showError('Failed to select manga chapter');
    }
  }

  /**
   * Select a random anime episode
   */
  static selectAnime(part?: number): void {
    try {
      const selectedPart = part ?? Math.floor(Math.random() * 5) + 1;

      // Validate part has anime
      const partInfo = PART_INFO[selectedPart];
      if (!partInfo?.hasAnime) {
        throw new Error(`Part ${selectedPart} does not have anime adaptation`);
      }

      const config = ANIME_CONFIG[selectedPart];
      if (!config) {
        throw new Error(`No anime config for part ${selectedPart}`);
      }

      const episodeIndex = Math.floor(Math.random() * (config.max - config.min + 1)) + config.min;
      const episodeUrl = episodes[episodeIndex - 1]; // Adjust for 0-indexing

      if (!episodeUrl) {
        throw new Error(`Episode ${episodeIndex} not found`);
      }

      // Add to history
    StorageManager.addToHistory({
      part: selectedPart as JoJoPart,
      medium: MediaType.ANIME,
      url: episodeUrl,
      title: `Part ${selectedPart} - Episode ${episodeIndex}`,
    });      // Open in new tab
      window.open(episodeUrl, '_blank');
      this.showNotification('Opening random anime episode...');
    } catch (error) {
      console.error('Error selecting anime:', error);
      this.showError('Failed to select anime episode');
    }
  }

  /**
   * Open random JoJo wiki page
   */
  static randomWiki(): void {
    const wikiUrl = 'https://jojowiki.com/Special:Random';
    window.open(wikiUrl, '_blank');
    this.showNotification('Opening random wiki page...');
  }

  /**
   * Open random character biography
   */
  static bio(): void {
    const bioFiles = Object.values(PART_INFO)
      .filter(info => info.bioPath)
      .map(info => info.bioPath);

    if (bioFiles.length === 0) {
      this.showError('No biographies available');
      return;
    }

    const randomBio = bioFiles[Math.floor(Math.random() * bioFiles.length)];
    window.open(randomBio, '_blank');
    this.showNotification('Opening random biography...');
  }

  /**
   * Handle customized selection from form
   */
  static customize(part: number, medium: string): void {
    try {
      if (medium === MediaType.ANIME) {
        this.selectAnime(part);
      } else if (medium === MediaType.MANGA) {
        this.selectManga(part);
      } else if (medium === 'both') {
        // Randomly choose between manga and anime
        const choice = Math.random() < 0.5;
        if (choice) {
          this.selectManga(part);
        } else {
          this.selectAnime(part);
        }
      } else {
        throw new Error(`Invalid medium: ${medium}`);
      }
    } catch (error) {
      console.error('Error in customize:', error);
      this.showError('Customization failed');
    }
  }

  /**
   * Change background image
   */
  static newBackground(): void {
    try {
      const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      document.body.style.backgroundImage = `url('${randomBg}')`;
      this.showNotification('Background changed!');
    } catch (error) {
      console.error('Error changing background:', error);
      this.showError('Failed to change background');
    }
  }

  /**
   * Initialize background based on selected part
   */
  static initBackground(part?: number): void {
    try {
      if (part && INIT_BACKGROUNDS[part]) {
        const bgPath = `${GITHUB_IMAGE_BASE}${INIT_BACKGROUNDS[part]}`;
        document.body.style.backgroundImage = `url('${bgPath}')`;
      } else {
        this.newBackground();
      }
    } catch (error) {
      console.error('Error initializing background:', error);
      this.newBackground(); // Fallback to random background
    }
  }

  /**
   * Show notification message
   */
  private static showNotification(message: string): void {
    // Implementation will be added with UI enhancements
    console.log('✓', message);
  }

  /**
   * Show error message
   */
  private static showError(message: string): void {
    // Implementation will be added with UI enhancements
    console.error('✗', message);
    alert(message);
  }

  /**
   * Get user statistics
   */
  static getStatistics() {
    return StorageManager.getStatistics();
  }

  /**
   * Get user history
   */
  static getHistory() {
    return StorageManager.getHistory();
  }

  /**
   * Clear all history
   */
  static clearHistory(): void {
    StorageManager.clearHistory();
    this.showNotification('History cleared');
  }

  /**
   * Toggle theme
   */
  static toggleTheme(): ThemeMode {
    const newTheme = StorageManager.toggleTheme();
    document.body.setAttribute('data-theme', newTheme);
    this.showNotification(`Theme changed to ${newTheme}`);
    return newTheme;
  }
}
