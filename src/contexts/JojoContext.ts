import { createContext } from 'react';
import { JojoContextType } from '../types';

export const JojoContext = createContext<JojoContextType | undefined>(undefined);
