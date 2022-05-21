import { useLocalStorage } from '@hooks';
import { FC, ReactNode, useEffect, useMemo, useReducer } from 'react';
import { defaultValue } from './constants';
import { reducer } from './reducer';
import { SiteContextInstance } from './SiteContextInstance';
import { SiteContextValue, DarkModes } from './types';

export interface SiteContextProviderProps {
  children: ReactNode;
}

export const SiteContextProvider: FC<SiteContextProviderProps> = ({
  children,
}) => {
  const [value, updateReducerValue] = useReducer(reducer, defaultValue);
  const [activeDarkMode, setActiveDarkMode] = useLocalStorage(
    'theme',
    typeof window === 'undefined'
      ? 'light'
      : ((window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light') as DarkModes)
  );

  const contextValue: SiteContextValue = useMemo(
    () => ({
      ...value,
      darkModeActive: activeDarkMode === 'dark',
      setValue(key, value) {
        if (key === 'darkModeActive') {
          setActiveDarkMode(value ? 'dark' : 'light');

          return;
        }

        updateReducerValue({ key, value });
      },
    }),
    [value, updateReducerValue, activeDarkMode, setActiveDarkMode]
  );

  useEffect(() => {
    if (activeDarkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [activeDarkMode]);

  // window.matchMedia('(prefers-color-scheme: dark)').matches
  // useEffect(() => {}, [])

  return (
    <SiteContextInstance.Provider value={contextValue}>
      {children}
    </SiteContextInstance.Provider>
  );
};
