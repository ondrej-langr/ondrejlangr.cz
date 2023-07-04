/**
 * @type {import('next').NextConfig}
 */
const config = {
  redirects: async () => [
    {
      source: '/github',
      destination: 'https://github.com/ondrej-langr',
      permanent: true,
    },
    {
      source: '/linkedin',
      destination: 'https://www.linkedin.com/in/langr-ondrej/',
      permanent: true,
    },
  ],
};

module.exports = config;
