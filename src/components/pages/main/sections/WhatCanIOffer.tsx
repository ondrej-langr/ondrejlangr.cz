import TitledSection from '@components/TitledSection';
import { useTranslation } from 'next-i18next';
import { FC, ReactElement } from 'react';

export const WhatCanIOfferSection: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <TitledSection title={t('What can I do for you')} id="what-can-i-offer">
      <p className="text-gray-500 text-opacity-80 text-2xl xsm:text-3xl xsm:leading-10 mt-10 !leading-relaxed">
        Let's get into the real stuff. For starters I'm very open person who
        loves to innovate and try new things - that means, when working with me,
        you are going to things that are important. <b>Your idea.</b>
        <br />
        <br />
        Every special idea needs special solution and for that we need special
        tools 😇. <br /> I usually go with Javascript <b>(Typescript only)</b>
        <br />
        for entire codebase, because I find it the most <b>productive 💪</b>,
        but I have a wide range of expertise on other technologies as well 😎.
        In the end its not about the language since its just a tool 🤫. <br />
        <a className="bold" href="#contact">
          Thirsty for more? I gotchu - lets talk! 🔥
        </a>
      </p>
    </TitledSection>
  );
};
