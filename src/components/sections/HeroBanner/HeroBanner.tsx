import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { SocialLinks } from './SocialLinks';

const Text: FC<{ children: ReactNode }> = ({ children }) => (
  <p
    className={clsx(
      'relative font-sans text-2xl xsm:text-4xl font-bold mx-auto px-4 z-10 max-w-screen-xl text-headline-text',
      'opacity-90 hover:opacity-100 transition-colors duration-300'
    )}
  >
    {children}
  </p>
);

export const HeroBanner: FC = () => {
  return (
    <>
      <div className="flex flex-col xsm:pb-10 pb-20 pt-20">
        <div className="mt-20">
          <Text>Hi 👋 my name is</Text>
          <h1
            className={clsx(
              'text-6xl my-6 xsm:text-8xl font-bold uppercase text-blue-400',
              'dark:text-white  max-w-screen-xl mx-auto px-4 z-10 relative'
            )}
          >
            Ondřej Langr
          </h1>
          <Text>and I'm your next web developer</Text>
        </div>
        <SocialLinks />
      </div>
    </>
  );
};
