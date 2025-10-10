import { useContext } from 'react';
import { JojoContext } from '../contexts/JojoContext';
import { JojoContextType } from '../types';

export function useJojo(): JojoContextType {
  const context = useContext(JojoContext);
  if (!context) {
    throw new Error('useJojo must be used within a JojoProvider');
  }
  return context;
}
