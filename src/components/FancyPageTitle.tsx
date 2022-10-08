import { useRef } from 'react';
import { FC, useEffect } from 'react';

/**
 * React fancy title. It has useEffect which listens to 'visibilitychange' on window and changes page label accordingly
 * Its a react component instead of hook due to nature of how Astro works
 */
export const FancyPageLabel: FC = () => {
  const prevTitle = useRef('');

  useEffect(() => {
    const onUnloadCallback = () => {
      switch (document.visibilityState) {
        case 'hidden':
          prevTitle.current = document.title;
          document.title = 'Hey! Come back!';
          break;
        case 'visible':
          document.title = prevTitle.current;
          break;
      }
    };

    window.addEventListener('visibilitychange', onUnloadCallback);
    return () => {
      window.removeEventListener('visibilitychange', onUnloadCallback);
    };
  }, []);

  return null;
};
