import { ENV_KEY } from "../types/EnvironmentType";
import appConfig from "../../../appConfig";

export const BASE_URL = "/";
export const SITE_NAME = "NYPL Digital Collections";

// String used to namespace Digital Collection events in Adobe Analytics
export const ADOBE_ANALYTICS_SITE_SECTION = "Digital Collections";
export const ADOBE_ANALYTICS_DC_PREFIX = "dc|";
export const ADOBE_EMBED_URL =
  appConfig.adobeEmbedUrl[appConfig.environment as ENV_KEY];

export const TRUNCATED_CARD_LENGTH = 80;
export const TRUNCATED_SEARCH_CARD_LENGTH = 140;

export const CARDS_PER_PAGE = 48;

export const DEFAULT_PAGE_NUM = 1;
export const DEFAULT_COLLECTION_SORT = "date-desc";
export const DEFAULT_SEARCH_SORT = "relevance";
export const DEFAULT_SEARCH_TERM = "";
export const DEFAULT_FILTERS = [];
// export const DEFAULT_SORT = [];

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

export const SEARCH_SORT_LABELS = {
  relevance: "Relevance",
  "date-desc": "Newest to oldest",
  "date-asc": "Oldest to newest",
  "title-desc": "Title Z to A",
  "title-asc": "Title A to Z",
  "collections-first": "Collections first",
  "items-first": "Items first",
};

export const ALLOWED_FILTERS = [
  "topic",
  "name",
  "collection",
  // To do: subcollection?
  "place",
  "format",
  "name",
  "genre",
  "publisher",
  "division",
  "type",
  "dateStart",
  "dateEnd",
  "rightsFilter",
  "rights",
  "materialType",
];

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

export const CONTENT_TYPES = {
  text: "image",
  cartographic: "image",
  "notated music": "image",
  "still image": "image",
  "moving image": "video",
  "sound recording": "audio",
  "sound recording-nonmusical": "audio",
  "sound recording-musical": "audio",
  "three dimensional object": "image",
  "software, multimedia": "image",
};

export const IMAGE_CONTENT_TYPE_NAMES = [
  "recto",
  "verso",
  "page (from a bound volume)",
  "volume of a multi-volume work",
  "one page of a multi-page document",
  "item in a scrapbook",
  "detail view (of an image, map, etc.)",
  "single image",
  "complex image",
  "spine",
  "back cover",
  "front cover",
  "component image",
  "composite image",
];

export const VIDEO_CONTENT_TYPE_NAMES = [
  "video recording",
  "multiple camera view of simultaneous content",
];

export const AUDIO_CONTENT_TYPE_NAMES = [
  "audio track, discrete (song on an album, etc.)",
  "a single piece of recorded music spread over multiple discs because of its duration",
];
