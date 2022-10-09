/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'cs'],
  i18next: {
    debug: false, // convenient during development to check for missing keys
    resources: {
      en: {
        translation: {
          key: 'hello world',
        },
      },
      cs: {
        translation: {
          key: 'bonjour le monde',
        },
      },
    },
  },
  i18nextPlugins: {
    '{initReactI18next}': 'react-i18next',
  },
};
