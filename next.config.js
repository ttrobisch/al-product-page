/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  i18n: {
    locales: ['en', 'de'],
    localeDetection: true,
    defaultLocale: 'en',
  },
  pageExtensions: ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "javascript/auto",
      use: "yaml-loader",
    });
    return config;
  },
};
