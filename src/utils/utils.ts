import { apiCall, getAPIResponse, apiPOSTCall } from "./api";
import appConfig from "../../appConfig";
import defaultFeaturedItems from "../data/defaultFeaturedItemData";

/**
 * Returns the number of digitized items in repo api.
 */
export const getNumDigitizedItems = async () => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/total`;
  const res = await apiCall(apiUrl);

  const fallbackCount =
    defaultFeaturedItems[appConfig.environment].numberOfDigitizedItems;
  const totalItems = res?.count?.$ ? addCommas(res.count.$) : fallbackCount; // only add commas to repo api response data
  return totalItems;
};

/**
 * Returns a map of uuids to its item count.
 */
export const getItemsCountFromUUIDs = async (uuids: string[]) => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/counts`;
  const response = await apiPOSTCall(apiUrl, { uuids });

  if (!response?.counts?.count?.length) {
    return {};
  }

  const counts = response.counts;

  // The response is an array of objects:
  // [
  //   { uuid: { $: 'uuid1' }, count_value: { $: 'count1' }}
  // ]
  // We want to convert it to an object:
  // {
  //   uuid1: count1
  //
  const uuidCounts = counts?.count || [];
  const cleanCounts = uuidCounts.reduce((acc, count) => {
    acc[count.uuid["$"]] = count.count_value["$"];
    return acc;
  }, {});

  return cleanCounts ? cleanCounts : {};
};

export const getFeaturedImage = async () => {
  console.log(`getFeaturedImage: About call getAPIResponse`);
  const defaultResponse =
    defaultFeaturedItems[appConfig.environment].featuredItem;
  const apiResponse = await getAPIResponse("featured", "", { random: "true" });

  return {
    uuid: apiResponse?.capture?.uuid || defaultResponse.uuid,
    title: apiResponse?.capture?.title || defaultResponse.title,
    imageID: apiResponse?.capture?.imageID || defaultResponse.imageID,
  };
};

function addCommas(number) {
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

import {
  ADOBE_ANALYTICS_SITE_SECTION,
  ADOBE_ANALYTICS_PAGE_NAMES,
  ADOBE_ANALYTICS_DC_PREFIX,
  BASE_URL,
} from "../config/constants";

/**
 * adobeAnalyticsParam
 * Utility function that builds a param string as expected by the Adobe Analytics dashboard
 */
const adobeAnalyticsParam = (param = "") => {
  return param.length ? `|${param}` : "";
};

// Maps routes to the appropriate page name for Adobe Analytics.
export const adobeAnalyticsRouteToPageName = (route = "", queryParams = "") => {
  // parse additional route attributes
  let pageName = "";

  switch (route) {
    case route.match(/^\/?(\?.+)?$/)?.input:
      pageName = ADOBE_ANALYTICS_PAGE_NAMES.HOME;
      break;
    default:
      pageName = `UNREGISTERED ROUTE: ${route}`;
      break;
  }

  return ADOBE_ANALYTICS_DC_PREFIX + pageName;
};

/**
 * Tracks a virtual page view to Adobe Analytics on page navigation.
 */
export const trackVirtualPageView = (pathname = "") => {
  const adobeDataLayer = window["adobeDataLayer"] || [];
  const route = pathname.toLowerCase().replace(BASE_URL, "");
  const queryIndex = route.indexOf("?");
  const path = route.substring(0, queryIndex);
  const queryParams = route.slice(queryIndex);

  adobeDataLayer.push({
    page_name: null,
    site_section: null,
  });
  adobeDataLayer.push({
    event: "virtual_page_view",
    page_name: adobeAnalyticsRouteToPageName(path, queryParams),
    site_section: ADOBE_ANALYTICS_SITE_SECTION,
  });
};
