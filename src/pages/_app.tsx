import '../styles/globals.scss';
import { SiteLayout } from '@layouts';
import { useEffect } from 'react';
import { SiteContextProvider } from 'src/contexts';

let prevTitle = '';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
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

  return (
    <SiteContextProvider>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </SiteContextProvider>
  );
}

export default MyApp;
