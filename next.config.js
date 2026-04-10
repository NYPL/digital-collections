/** @type {import('next').NextConfig} */
// This is found in the codebase example but both seem to work and send data
// correctly. Keep the above but can use the bottom for debugging.
const CopyPlugin = require("copy-webpack-plugin");
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
    APP_ENV: process.env.APP_ENV,
    COLLECTIONS_API_URL: process.env.COLLECTIONS_API_URL,
    IIIF_URL: process.env.IIIF_URL,
    NEW_RELIC_LICENSE_KEY: process.env.NEW_RELIC_LICENSE_KEY,
    NEW_RELIC_APP_NAME: `${process.env.NEW_RELIC_APP_NAME}`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iiif.nypl.org",
      },
      {
        protocol: "https",
        hostname: "qa-iiif.nypl.org",
      },
      {
        protocol: "https",
        hostname: "repo-transcoded-web-media-thumnails.s3.amazonaws.com",
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
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "./node_modules/universalviewer/dist/uv.html",
            to: "./static/",
          },
          {
            from: "./node_modules/universalviewer/dist/uv.css",
            to: "./static/",
          },
          {
            from: "./node_modules/universalviewer/dist/umd/",
            to: "./static/umd",
          },
        ],
      })
    );
    return config;
  },
};

module.exports = nextConfig;
