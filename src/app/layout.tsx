import { DarkModeContextProvider } from '@contexts/DarkModeContext';
import { TitleChanger } from './_components/TitleChanger';

import '../styles/globals.scss';

export const metadata = {
  description:
    'Hledáte správného programátora, který je schopný se nezalekne maličkostí, tak trochu superman? Můžu s hrdostí oznámit, že tady Vaše hledání končí. Jmenuju se Ondřej Langr a odteď jsem Vaše solution na webový development.',
  authors: [{ name: 'Ondřej Langr' }],
  title: 'Ondřej Langr Portfolio',
  keywords:
    'HTML, CSS, JavaScript, Fullstack development, React, Vue, Vuejs, Svelte, Android, Laravel, Redux, Zustand, Top programátor, webový specialista, Webapp, PWA',
  icons: { icon: '/favicon-32x32.png', apple: '/apple-touch-icon.png' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#5c04cc',
};

export default function Layout({ children }) {
  return (
    <DarkModeContextProvider>
      <TitleChanger />
      <html lang="cs">
        <head>
          <script
            defer
            data-domain="ondrejlangr.cz"
            src="https://plausible.io/js/script.js"
          ></script>
        </head>
        <body>
          <div className="dark:bg-siteBg transition-all duration-200">
            <div className="absolute top-0 left-0 w-full h-full z-0 dark:bg-gradient-to-t dark:from-sitePurple opacity-20" />
            <div className="relative z-10 ">
              {/* <PageLayoutHeader /> */}

              <main role="main">{children}</main>

              <footer role="footer">{/*<FooterContactForm /> */}</footer>
            </div>
          </div>
        </body>
      </html>
    </DarkModeContextProvider>
  );
}
