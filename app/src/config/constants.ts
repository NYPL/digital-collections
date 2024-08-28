import { ENV_KEY } from "../types/EnvironmentType";
import appConfig from "../appConfig";

// Internal path names
export const PATHS = {
  HOME: "/",
  SEARCH: "/search",
  DIVISIONS: "/divisions",
  DIVISION: "/divisions/",
  COLLECTIONS: "/collections",
  COLLECTION_LANE: "/collections/lane",
  "404": "/404",
  "404_REDIRECT": "/404/redirect",
};

export const BASE_URL = "/";
export const SITE_NAME = "NYPL Digital Collections";

// String used to namespace Digital Collection events in Adobe Analytics
export const ADOBE_ANALYTICS_SITE_SECTION = "Digital Collections";

export const ADOBE_ANALYTICS_DC_PREFIX = "dc|";

export const ADOBE_ANALYTICS_PAGE_NAMES = {
  HOME: "home",
  REDIRECT: "error|redirect",
  NOT_FOUND_404: "error|404",
  SEARCH_RESULTS: "search|",
  DIVISIONS: "divisions",
  // DIVISION: "division|",
  COLLECTIONS: "all-collections",
  // COLLECTON_LANE: "collections|lane|"
};

export const DC_URL = appConfig.DC_URL[appConfig.environment as ENV_KEY];
export const ADOBE_EMBED_URL =
  appConfig.adobeEmbedUrl[appConfig.environment as ENV_KEY];
