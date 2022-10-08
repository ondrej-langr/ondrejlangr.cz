/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'cs'],
  i18next: {
    debug: true, // convenient during development to check for missing keys
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
};
