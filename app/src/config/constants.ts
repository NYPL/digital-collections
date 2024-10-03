import { ENV_KEY } from "../types/EnvironmentType";
import appConfig from "../../../appConfig";

export const BASE_URL = "/";
export const SITE_NAME = "NYPL Digital Collections";
export const DC_URL = appConfig.DC_URL[appConfig.environment as ENV_KEY];

// String used to namespace Digital Collection events in Adobe Analytics
export const ADOBE_ANALYTICS_SITE_SECTION = "Digital Collections";
export const ADOBE_ANALYTICS_DC_PREFIX = "dc|";
export const ADOBE_EMBED_URL =
  appConfig.adobeEmbedUrl[appConfig.environment as ENV_KEY];

export const TRUNCATED_LENGTH = 80;

export const CARDS_PER_PAGE = 48;
