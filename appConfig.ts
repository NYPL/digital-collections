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
  TEST_ENV_VAR: process.env.TEST_ENV_VAR,
  NEXT_PUBLIC_ANOTHER_TEST: process.env.NEXT_PUBLIC_ANOTHER_TEST,
  NEXT_PUBLIC_ONLY: process.env.NEXT_PUBLIC_ONLY,
  NEXT_PUBLIC_CONFIG_MANUAL_TEST: process.env.NEXT_PUBLIC_CONFIG_MANUAL_TEST,
  NEXT_PUBLIC_ONLY_MANUAL_TEST: process.env.NEXT_PUBLIC_ONLY_MANUAL_TEST,
};

export default appConfig;
