import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

export type DarkModes = 'light' | 'dark';

export const useThemeToggle = () => {
  const [active, setActive] = useLocalStorage(
    'theme',
    typeof window === 'undefined'
      ? 'light'
      : ((window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light') as DarkModes)
  );

  return useMemo(() => ({ active, update: setActive }), [active, setActive]);
};
