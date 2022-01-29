import { createContext, useContext } from 'react';

export const ThemeContext = createContext(false);

export function useIsDark() {
  return useContext(ThemeContext);
}
