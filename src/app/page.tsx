import {
  ContactForm,
  HeroBanner,
  AboutSection,
} from '../components/pages/main';

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      {/* <WhatCanIOfferSection /> */}
      {/* <MyWorkSection /> */}
      <ContactForm />
    </>
  );
};

export default HomePage;
