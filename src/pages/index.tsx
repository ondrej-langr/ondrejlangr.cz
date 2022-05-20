import {
  ContactForm,
  HeroBanner,
  AboutSection,
  WhatCanIOfferSection,
  MyWorkSection,
} from '../components/pages/main';
import HeadTitle from '../components/HeadTitle';
import { useTranslation } from 'next-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadTitle title={t('Main page')} />
      <HeroBanner />
      <AboutSection />
      <WhatCanIOfferSection />
      <MyWorkSection />
      <ContactForm />
    </>
  );
};

export default HomePage;
