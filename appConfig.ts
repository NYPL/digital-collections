const appConfig = {
  environment: process.env.APP_ENV || "production",
  DC_URL: process.env.DC_URL,
  adobeEmbedUrl: {
    development:
      process.env.ADOBE_EMBED_URL ||
      "https://assets.adobedtm.com/1a9376472d37/ddf1bedfe52e/launch-4eefcc91c90e.min.js",
    production:
      process.env.ADOBE_EMBED_URL ||
      "https://assets.adobedtm.com/1a9376472d37/8519dfce636d/launch-672b7e7f98ee.min.js",
  },
};

export default appConfig;
