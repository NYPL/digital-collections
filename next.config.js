/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DC_URL: "https://qa-digitalcollections.nypl.org",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iiif.nypl.org",
      },
    ],
  },
};

module.exports = nextConfig;
