import {
  ADOBE_ANALYTICS_SITE_SECTION,
  ADOBE_ANALYTICS_DC_PREFIX,
} from "../config/constants";
import CollectionDataType from "@/src/types/CollectionDataType";
import ItemDataType from "@/src/types/ItemDataType";

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

export const totalNumPages = (numResults: string, perPage: string): number => {
  return Math.ceil(parseInt(numResults) / parseInt(perPage));
};

export function isCollectionType(
  records: CollectionDataType[] | ItemDataType[]
): records is CollectionDataType[] {
  return "numberOfDigitizedItems" in records[0];
}

export const collectionsSortOptions = {
  "date-desc": "date DESC",
  "date-asc": "date ASC",
  "title-desc": "title DESC",
  "title-asc": "title ASC",
};

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
