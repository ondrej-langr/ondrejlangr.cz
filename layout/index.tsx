import clsx from 'clsx';
import { FC, ReactElement } from 'react';
import PageLayoutHead from './head';
import PageLayoutHeader from './header';
import useSiteStore from './store';

const PageLayout: FC = ({ children }): ReactElement => {
  const isLoading = useSiteStore((state) => state.isLoading);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-t from-sitePurple opacity-20" />
      <div className={clsx(isLoading && 'cursor-wait', 'relative z-10')}>
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
    </>
  );
};

export default PageLayout;
