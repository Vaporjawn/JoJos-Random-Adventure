import { useState } from 'react';

export const useDrawers = () => {
  const [historyDrawerOpen, setHistoryDrawerOpen] = useState(false);
  const [statsDrawerOpen, setStatsDrawerOpen] = useState(false);

  const toggleHistory = () => setHistoryDrawerOpen(prev => !prev);
  const toggleStats = () => setStatsDrawerOpen(prev => !prev);

  const openHistory = () => setHistoryDrawerOpen(true);
  const closeHistory = () => setHistoryDrawerOpen(false);

  const openStats = () => setStatsDrawerOpen(true);
  const closeStats = () => setStatsDrawerOpen(false);

  return {
    historyDrawerOpen,
    statsDrawerOpen,
    toggleHistory,
    toggleStats,
    openHistory,
    closeHistory,
    openStats,
    closeStats,
  };
};
