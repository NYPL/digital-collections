/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    DC_URL: process.env.DC_URL,
    IIIF_URL: process.env.IIIF_URL,
    ADOBE_EMBED_URL: process.env.ADOBE_EMBED_URL,
    APP_ENV: process.env.APP_ENV,
    NEW_RELIC_LICENSE_KEY: process.env.NEW_RELIC_LICENSE_KEY,
    NEXT_PUBLIC_ANOTHER_TEST: process.env.NEXT_PUBLIC_ANOTHER_TEST,
    NEXT_PUBLIC_CONFIG_MANUAL_TEST: process.env.NEXT_PUBLIC_CONFIG_MANUAL_TEST,
    NEW_RELIC_CLIENT_LICENSE_KEY: process.env.NEW_RELIC_CLIENT_LICENSE_KEY,
    NEW_RELIC_APPLICATION_ID: process.env.NEW_RELIC_APPLICATION_ID,
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
};

module.exports = nextConfig;
