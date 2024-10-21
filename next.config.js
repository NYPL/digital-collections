/** @type {import('next').NextConfig} */

const nrExternals = require("@newrelic/next/load-externals");

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["newrelic"],
  },
  reactStrictMode: false,
  env: {
    DC_URL: process.env.DC_URL,
    IIIF_URL: process.env.IIIF_URL,
    ADOBE_EMBED_URL: process.env.ADOBE_EMBED_URL,
    APP_ENV: process.env.APP_ENV,
    NEW_RELIC_LICENSE_KEY: process.env.NEW_RELIC_LICENSE_KEY,
    NEW_RELIC_APP_NAME: `${process.env.NEW_RELIC_APP_NAME} ${process.env.APP_ENV}`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iiif.nypl.org",
      },
      {
        protocol: "https",
        hostname: "iiif-qa.nypl.org",
      },
    ],
  },
  generateEtags: false,
  webpack: (config) => {
    nrExternals(config);
    return config;
  },
};

module.exports = nextConfig;
