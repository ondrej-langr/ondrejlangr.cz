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
        Every special project needs special solution and for that it needs
        special tools ⚒️ <br /> My usual go-to for web apps is Javascript{' '}
        <b>(Typescript only)</b>
        <br />, because I find it the most <b>productive 💪</b>, but I have a
        wide range of expertise on other technologies as well 😎 <br />
        <a className="bold" href="#contact">
          Thirsty for more? I gotchu - lets talk! 🔥
        </a>
      </p>
    </TitledSection>
  );
};
