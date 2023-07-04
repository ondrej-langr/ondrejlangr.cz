import {
  ContactForm,
  HeroBanner,
  AboutSection,
  WhatCanIOfferSection,
  MyWorkSection,
} from '../components/pages/main';
import HeadTitle from '../components/HeadTitle';
import { useTranslations } from '@hooks';

const HomePage = () => {
  const { t } = useTranslations();

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
