import TitledSection from '@/components/TitledSection';
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

export const WhatCanIOfferSection: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <TitledSection title={t('What can I do for you')} id="what-can-i-offer">
      <p className="text-gray-500 text-opacity-80 text-2xl xsm:text-3xl xsm:leading-10 mt-10 !leading-relaxed">
        Let's get into the real stuff. For starters I'm very open person who
        loves to innovate and try new things. What that really means, when
        working with me, you are going to get done things that are important.
        <br />
        <br />
        As every project is special the solution must be also special. <br />
        I'm choosing tools that I consider myself the best for each
        problem/project. What I find myself using most of the time is{' '}
        <b>Typescript</b>, <b>React (React Native too) + Next.js Framework</b>{' '}
        and sometimes <b>PHP</b>. Any other tool that is connected to web
        development, such as CSS or knowledge HTML5, is not an issue at all.
        <a className="bold" href="#work">
          Interested in specific projects? Click me! 🔥
        </a>
      </p>
    </TitledSection>
  );
};
