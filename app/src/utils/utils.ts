import {
  ADOBE_ANALYTICS_SITE_SECTION,
  ADOBE_ANALYTICS_DC_PREFIX,
  ALLOWED_FILTERS,
} from "../config/constants";
import CollectionDataType from "@/src/types/CollectionDataType";
import ItemDataType from "@/src/types/ItemDataType";
import {
  AvailableFilter,
  AvailableFilterOption,
} from "../types/AvailableFilterType";
import type { Highlight } from "../types/HighlightType";
import { isValidFilter } from "./searchManager";

/**
 * Represents a IIIF Image API URL, which will be used globally throughout the application.
 * IIIF Image API has several params, the ones we are the most concerned about are Region, Size, and Rotation.
 * This function currently is concerned with the Size parameter. This function currently uses the '!h,w' format.
 * @param {string} imageId - the image ID of the book
 * @param {string} region - optional param for the width of an image, default is "full"
 * @param {string} size - optional param for the height of an image, default is "!1600,1600"
 * @param {string} rotation - optional param for the height of an image, default is "0"
 */

export const imageURL = (
  imageId: any,
  region = "full",
  size = "!1600,1600",
  rotation = "0"
) => {
  return `https://iiif.nypl.org/iiif/2/${imageId}/${region}/${size}/${rotation}/default.jpg`;
};

export function addCommas(number: string) {
  // Return the formatted number
  return Number(number).toLocaleString("en-US");
}

export function getCustomTimestamp() {
  // Return the formatted number
  // timestamp: date
  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
  const currentYear = currentDate.getFullYear();
  const dateString =
    currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;
  // timestamp: time
  const hh = currentDate.getUTCHours();
  const mm = currentDate.getUTCMinutes();
  const ss = currentDate.getSeconds();
  const timeString = hh + ":" + mm + ":" + ss;
  const timestamp = dateString + " " + timeString;

  return timestamp;
}

/**
 * Tracks a virtual page view to Adobe Analytics on page navigation.
 */
export const trackVirtualPageView = (pagename) => {
  // @ts-ignore
  // Adobe does not support TS types.
  const adobeDataLayer = window["adobeDataLayer"] || [];

  adobeDataLayer.push({
    page_name: null,
    site_section: null,
  });
  adobeDataLayer.push({
    event: "virtual_page_view",
    page_name: `${ADOBE_ANALYTICS_DC_PREFIX}${pagename}`,
    site_section: ADOBE_ANALYTICS_SITE_SECTION,
  });
};

export const slugToString = (slug: string = ""): string => {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const stringToSlug = (string: string = ""): string => {
  return string
    .replace(/^\s+|\s+$/g, "") // trim leading/trailing white space
    .toLowerCase() // convert string to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
};

export const parseBoolean = (value: string): boolean => {
  return value == "true" ? true : false;
};

export const titleToDCParam = (string: string = ""): string => {
  return string?.replace(/\s+/g, "+"); // replace spaces with +
};

export const totalNumPages = (numResults: string, perPage: number): number => {
  return Math.ceil(parseInt(numResults) / perPage);
};

export function isCollectionType(
  records: CollectionDataType[] | ItemDataType[]
): records is CollectionDataType[] {
  return "numberOfDigitizedItems" in records[0];
}

export const createAdobeAnalyticsPageName = (
  base: string,
  recordName: string = ""
): string => {
  return recordName ? `${base}|${stringToSlug(recordName)}` : base;
};

export function displayResults(
  numFound: number,
  perPage: number,
  page: number
) {
  const start = (page - 1) * perPage + 1;
  const end = Math.min(page * perPage, numFound);
  return `${start}-${end} of ${numFound}`;
}

export function formatHighlightText(highlights): Highlight[] {
  const result = Object.entries(highlights)
    .map(([field, values]) => {
      return (values as string[]).map((text) => ({
        field,
        text,
      }));
    })
    .flat();

  return result;
}

export const capitalize = (text: string): string => {
  return text?.charAt(0) ? text.charAt(0).toUpperCase() + text.slice(1) : text;
};

export const getCollectionFilterFromUUID = (
  uuid: string,
  filters: AvailableFilterOption[]
): any => {
  const filter = filters.find((filterObject) => {
    if (filterObject.name.split("||")[1] === uuid) {
    }
    return filterObject.name.split("||")[1] === uuid;
  });
  return filter ? filter : null;
};

export const filterStringToCollectionApiFilterString = (filters: string) => {
  if (filters !== "") {
    const dcflFiltersArray = filters.slice(1, -1).split("][");
    const apiFiltersArray = dcflFiltersArray
      .map((filter) => {
        const splitArray = filter.split("=");
        let name;
        if (splitArray[0] === "rights") {
          name = "rightsFilter";
        } else if (
          splitArray[0] === "dateEnd" ||
          splitArray[0] === "dateStart"
        ) {
          name = splitArray[0];
        } else {
          name = splitArray[0].toLowerCase();
        }
        const value = splitArray[1];
        if (!isValidFilter(name)) {
          return null;
        }
        if (name === "subcollection" || name === "collection") {
          return `${name}=${value}`;
        }
        return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      })
      .filter(Boolean);

    return apiFiltersArray.join("&");
  } else {
    return "";
  }
};

export const replaceEmWithMark = (htmlString) => {
  return htmlString.replace(/<em>(.*?)<\/em>/g, "<mark>$1</mark>");
};

export const getHighestRankedHighlight = (highlights: Highlight[]) => {
  if (!highlights || !Array.isArray(highlights)) return null;
  const rankingOrder = [
    "name",
    "place",
    "topic",
    "note",
    "abstract",
    "genre",
    "identifier",
    "collection",
    "division",
    "publisher",
    "type",
    "exhibition id",
    "image id",
    "bnumber",
  ];
  for (const key of rankingOrder) {
    const matchedHighlight = highlights.find(
      (highlight) => highlight.field.toLowerCase() === key
    );
    if (matchedHighlight) {
      return matchedHighlight;
    }
  }
  return null;
};

export const getTitleWithHighlights = (highlights, title) => {
  const titleHighlight = highlights.find(
    (highlight) => highlight.field === "Title"
  );
  return titleHighlight ? replaceEmWithMark(titleHighlight.text) : title;
};

export const deSlugify = (slug: string): string => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};
