import { useState, useMemo } from 'react';
import { HistoryEntry } from '../types';

export const useHistorySearch = (history: HistoryEntry[], getPartName: (part: number) => string) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHistory = useMemo(() => {
    if (!searchQuery) return history;

    const lowerQuery = searchQuery.toLowerCase();
    return history.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      getPartName(item.part).toLowerCase().includes(lowerQuery)
    );
  }, [history, searchQuery, getPartName]);

  return {
    searchQuery,
    setSearchQuery,
    filteredHistory,
  };
};
