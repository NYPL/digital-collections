/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DC_URL: "https://qa-digitalcollections.nypl.org/",
  },
};

module.exports = nextConfig;
