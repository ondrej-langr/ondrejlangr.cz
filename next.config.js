const withPWA = require("next-pwa");

module.exports = withPWA({
  webpack5: true,
  i18n: {
    locales: ["en-US", "cs-CZ"],
    defaultLocale: "en-US",
  },
  pwa: {
    dest: "public",
    disable: true || process.env.NODE_ENV === "development",
  },
});
