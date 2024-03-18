'use client';

import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

export const darkModeContext = createContext({
  enabled: false,
  toggle: (forceNextValue?: boolean) => {},
});

export const useDarkMode = () => useContext(darkModeContext);

export const DarkModeContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  // TODO: Save it to cookies and set default by prefers color scheme
  const [isToggled, setIsToggled] = useState(false);
  // const [activeDarkMode, setActiveDarkMode] = useLocalStorage(
  //   'theme',
  //   typeof window === 'undefined'
  //     ? 'light'
  //     : ((window.matchMedia('(prefers-color-scheme: dark)').matches
  //         ? 'dark'
  //         : 'light') as DarkModes)
  // );

  return (
    <darkModeContext.Provider
      value={useMemo(
        () => ({
          enabled: isToggled,
          toggle(nextValueForced) {
            setIsToggled((previous) => {
              return nextValueForced ?? !previous;
            });
          },
        }),
        [isToggled]
      )}
    >
      {children}
    </darkModeContext.Provider>
  );
};
