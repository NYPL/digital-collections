import { ENV_KEY } from "../types/EnvironmentType";
import appConfig from "../../appConfig";

export const BASE_URL = "/";
export const SITE_NAME = "NYPL Digital Collections";
// String used to namespace Digital Collection events in Adobe Analytics
export const ADOBE_ANALYTICS_SITE_SECTION = "Digital Collections";

export const ADOBE_ANALYTICS_DC_PREFIX = "dc|";

export const ADOBE_ANALYTICS_PAGE_NAMES = {
  HOME: "home",
  REDIRECT: "error|redirect",
  NOT_FOUND_404: "error|404",
};

export const DC_URL = appConfig.DC_URL[appConfig.environment as ENV_KEY];
export const ADOBE_EMBED_URL =
  appConfig.adobeEmbedUrl[appConfig.environment as ENV_KEY];
