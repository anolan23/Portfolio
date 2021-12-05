import { createContext, useContext } from 'react';

export const ThemeContext = createContext('dark');

export function useIsDark() {
  return useContext(ThemeContext);
}
