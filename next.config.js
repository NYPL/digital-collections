/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  env: {
    DC_URL: process.env.DC_URL,
    IIIF_URL: process.env.IIIF_URL,
    ADOBE_EMBED_URL: process.env.ADOBE_EMBED_URL,
    APP_ENV: process.env.APP_ENV,
    NEW_RELIC_LICENSE_KEY: process.env.NEW_RELIC_LICENSE_KEY,
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
    deviceSizes: [480, 768, 1024, 1280],
  },
  generateEtags: false,
};

module.exports = nextConfig;
