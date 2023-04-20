/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  output: 'export',
  images: {
    unoptimized: true
  },
  distDir: 'dist',
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
