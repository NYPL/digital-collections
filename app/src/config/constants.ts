import { ENV_KEY } from "../types/EnvironmentType";
import appConfig from "../../../appConfig";

export const BASE_URL = "/";
export const SITE_NAME = "NYPL Digital Collections";

// String used to namespace Digital Collection events in Adobe Analytics
export const ADOBE_ANALYTICS_SITE_SECTION = "Digital Collections";
export const ADOBE_ANALYTICS_DC_PREFIX = "dc|";
export const ADOBE_EMBED_URL =
  appConfig.adobeEmbedUrl[appConfig.environment as ENV_KEY];

export const TRUNCATED_LENGTH = 80;

export const CARDS_PER_PAGE = 48;

export const DEFAULT_PAGE_NUM = 1;
export const DEFAULT_COLLECTION_SORT = "date-desc";
export const DEFAULT_SORT = "date-desc";
export const DEFAULT_SEARCH_TERM = "";
export const DEFAULT_FILTERS = [];

export const COLLECTION_SORT_OPTIONS = {
  "date-desc": "date DESC",
  "date-asc": "date ASC",
  "title-desc": "title DESC",
  "title-asc": "title ASC",
};
export const COLLECTION_SORT_LABELS = {
  "date-desc": "Newest to oldest",
  "date-asc": "Oldest to newest",
  "title-desc": "Title Z to A",
  "title-asc": "Title A to Z",
};

export const METADATA_FIELDS = [
  "Title",
  "Names",
  "Collection",
  "Date/Origin",
  "Table of Contents",
  "Library Locations",
  "Subjects",
  "Genres",
  "Notes",
  "Physical Description",
  "Abstract",
  "Types",
  "Languages",
  "Identifiers",
  "Access",
  "Rights",
];
