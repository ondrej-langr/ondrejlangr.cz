import { useLocalStorage } from './useLocalStorage';

export enum ThemeModes {
  DARK = 'dark',
  LIGHT = 'light',
}

export const useThemeToggle = () => {
  const [active, setActive] = useLocalStorage(
    'theme',
    typeof window === 'undefined'
      ? ThemeModes.LIGHT
      : ((window.matchMedia('(prefers-color-scheme: dark)').matches
          ? ThemeModes.DARK
          : ThemeModes.LIGHT) as ThemeModes)
  );

  return { active, update: setActive };
};
