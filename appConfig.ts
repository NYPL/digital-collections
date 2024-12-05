const appConfig = {
  environment: process.env.APP_ENV || "development",
  adobeEmbedUrl: {
    development:
      "https://assets.adobedtm.com/1a9376472d37/8519dfce636d/launch-bf8436264b01-development.min.js",
    qa: "https://assets.adobedtm.com/1a9376472d37/8519dfce636d/launch-bf8436264b01-development.min.js",
    production:
      "https://assets.adobedtm.com/1a9376472d37/8519dfce636d/launch-672b7e7f98ee.min.js",
  },
};

export default appConfig;
