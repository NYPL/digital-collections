/** @type {import('next').NextConfig} */
// This is found in the codebase example but both seem to work and send data
// correctly. Keep the above but can use the bottom for debugging.
const nrExternals = require("newrelic/load-externals");

const nextConfig = {
  experimental: {
    // Without this setting, the Next.js compilation step will routinely
    // try to import files such as `LICENSE` from the `newrelic` module.
    // See https://nextjs.org/docs/app/api-reference/next-config-js/serverComponentsExternalPackages.
    serverComponentsExternalPackages: ["newrelic"],
  },
  reactStrictMode: false,
  env: {
    ADOBE_EMBED_URL: process.env.ADOBE_EMBED_URL,
    APP_ENV: process.env.APP_ENV,
    NEW_RELIC_LICENSE_KEY: process.env.NEW_RELIC_LICENSE_KEY,
    NEW_RELIC_APP_NAME: `${process.env.NEW_RELIC_APP_NAME}`,
    COLLECTIONS_API_URL: process.env.COLLECTIONS_API_URL,
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
  // In order for newrelic to effectively instrument a Next.js application,
  // the modules that newrelic supports should not be mangled by webpack. Thus,
  // we need to "externalize" all of the modules that newrelic supports.

  webpack: (config) => {
    if (process.env.NEW_RELIC_APP_NAME) {
      nrExternals(config);
    }
    return config;
  },
};

module.exports = nextConfig;
