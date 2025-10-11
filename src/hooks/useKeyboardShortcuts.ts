import { useEffect } from 'react';

interface KeyboardShortcuts {
  onAnime: () => void;
  onManga: () => void;
  onWiki: () => void;
  onThemeToggle: () => void;
  onHistoryToggle: () => void;
  onStatsToggle: () => void;
}

export const useKeyboardShortcuts = ({
  onAnime,
  onManga,
  onWiki,
  onThemeToggle,
  onHistoryToggle,
  onStatsToggle,
}: KeyboardShortcuts) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = event.key.toLowerCase();

      switch (key) {
        case 'a':
          onAnime();
          break;
        case 'm':
          onManga();
          break;
        case 'w':
          onWiki();
          break;
        case 't':
          onThemeToggle();
          break;
        case 'h':
          onHistoryToggle();
          break;
        case 's':
          onStatsToggle();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [onAnime, onManga, onWiki, onThemeToggle, onHistoryToggle, onStatsToggle]);
};
