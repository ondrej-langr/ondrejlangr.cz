import { useSiteContext } from '@contexts';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import PageLayoutHead from './Head';
import { PageLayoutHeader } from './Header';

export interface SiteLayoutProps {
  children: ReactNode;
}

export const SiteLayout: FC<SiteLayoutProps> = ({ children }) => {
  const { isLoading } = useSiteContext();

  return (
    <div className="dark:bg-siteBg transition-all duration-200">
      <div className="absolute top-0 left-0 w-full h-full z-0 dark:bg-gradient-to-t dark:from-sitePurple opacity-20" />
      <div className={clsx(isLoading && 'cursor-wait', 'relative z-10 ')}>
        <PageLayoutHead />
        <PageLayoutHeader />

        <main role="main">{children}</main>

        <footer role="footer">
          {/*<FooterContactForm /> */}
          <div>
            <a></a>
          </div>
        </footer>
        {/*<div className="z-20 fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center flex-col">
        <div className="my-2">
          <b>Stránka se intenzivně připravuje.</b>
        </div>{" "}
        <div className="my-2">
          {" "}
          V mezičase mi stačí brnknout na{" "}
          <a href="tel:+420607445251" className="text-indigo-700">
            {" "}
            +420 607 445 251{" "}
          </a>{" "}
          nebo si se mnou psát na mailu{" "}
          <a href="mailto:hi@ondrejlangr.cz" className="text-indigo-700">
            {" "}
            hi@ondrejlangr.cz{" "}
          </a>
  </div>
      </div>*/}
      </div>
    </div>
  );
};
