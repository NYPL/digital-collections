/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    DC_URL: process.env.DC_URL,
    IIIF_URL: process.env.IIIF_URL,
    ADOBE_EMBED_URL: process.env.ADOBE_EMBED_URL,
    APP_ENV: process.env.APP_ENV,
    NEXT_PUBLIC_ANOTHER_TEST: process.env.NEXT_PUBLIC_ANOTHER_TEST,
    NEXT_PUBLIC_CONFIG_MANUAL_TEST: process.env.NEXT_PUBLIC_CONFIG_MANUAL_TEST,
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
