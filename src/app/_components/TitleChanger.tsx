'use client';

import { FC, useEffect } from 'react';

export const TitleChanger: FC = () => {
  useEffect(() => {
    let prevTitle = '';
    const onUnloadCallback = () => {
      switch (document.visibilityState) {
        case 'hidden':
          prevTitle = document.title;
          document.title = 'Hey! Come back!';
          break;
        case 'visible':
          document.title = prevTitle;
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
