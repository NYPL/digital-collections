const appConfig = {
  environment: process.env.APP_ENV || "development",
  DC_URL: {
    development: "", //http://localhost:3000
    qa: "https://digitalcollections.nypl.org",
    production: "https://digitalcollections.nypl.org",
  },
  IIIF_URL: {
    development: "https://iiif.nypl.org",
    qa: "https://iiif.nypl.org",
    production: "https://iiif.nypl.org",
  },
  adobeEmbedUrl: {
    development:
      "https://assets.adobedtm.com/1a9376472d37/8519dfce636d/launch-bf8436264b01-development.min.js",
    qa: "https://assets.adobedtm.com/1a9376472d37/8519dfce636d/launch-bf8436264b01-development.min.js",
    production:
      "https://assets.adobedtm.com/1a9376472d37/8519dfce636d/launch-672b7e7f98ee.min.js",
  },
};

export default appConfig;
