/** @type {import('next').NextConfig} */
// This is found in the codebase example but both seem to work and send data
// correctly. Keep the above but can use the bottom for debugging.
const nrExternals = require("newrelic/load-externals");

const nextConfig = {
  // Without this setting, the Next.js compilation step will routinely
  // try to import files such as `LICENSE` from the `newrelic` module.
  // See https://nextjs.org/docs/app/api-reference/next-config-js/serverExternalPackages.
  serverExternalPackages: ["newrelic"],
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

  webpack: (config, { isServer }) => {
    if (isServer) {
      const path = require("path");
      // Several packages bundle their own React JSX runtime in their ESM builds.
      // The module-init order in shared server chunks in Next.js 15 causes
      // ReactCurrentOwner to be undefined. We alias these to their CJS builds on
      // the server so webpack picks up the version that initialises React correctly.
      config.resolve.alias = {
        ...config.resolve.alias,
        // universalviewer is always wrapped in dynamic({ ssr: false }) — stub it.
        universalviewer$: path.resolve(
          __dirname,
          "app/src/utils/universalviewer-stub.js"
        ),
        "universalviewer/dist/esm/index.css": path.resolve(
          __dirname,
          "app/src/utils/universalviewer-stub.css"
        ),
        "@nypl/design-system-react-components": path.resolve(
          __dirname,
          "node_modules/@nypl/design-system-react-components/dist/design-system-react-components.cjs"
        ),
        "@chakra-ui/react": path.resolve(
          __dirname,
          "node_modules/@chakra-ui/react/dist/index.js"
        ),
      };
    }
    if (process.env.NEW_RELIC_APP_NAME) {
      nrExternals(config);
    }
    return config;
  },
};

module.exports = nextConfig;
