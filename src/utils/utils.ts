/**
 * Represents a IIIF Image API URL, which will be used globally throughout the application.
 * IIIF Image API has several params, the ones we are the most concerned about are Region, Size, and Rotation.
 * This function currently is concerned with the Size parameter. This function currently uses the '!h,w' format.
 * @param {string} imageId - the image ID of the book
 * @param {string} region - optional param for the width of an image, default is "full"
 * @param {string} size - optional param for the height of an image, default is "!1600,1600"
 * @param {string} rotation - optional param for the height of an image, default is "0"
 */
import appConfig from "../../appConfig";

export const imageURL = (
  imageId: any,
  region = "full",
  size = "!1600,1600",
  rotation = "0"
) => {
  return `${
    appConfig.IIIF_URL[appConfig.environment]
  }/iiif/2/${imageId}/${region}/${size}/${rotation}/default.jpg`;
};

/**
 * Returns the number of digitized items in repo api.
 */

export const getNumDigitizedItems = async () => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/total`;
  // console.log(`getNumDigitizedItems: About to fetch ${apiUrl}`);
  // console.log(`getNumDigitizedItems calls apiCall function internally`);
  const res = await apiCall(apiUrl);

  const fallbackCount = 863848;
  const totalItems = res?.count?.$ || fallbackCount;
  return addCommas(totalItems);
};

/**
 * Returns the total number of items in the collection.
 * @param {string} uuid - the collection ID
 */

export const getNumItems = async (uuid: string) => {
  const apiUrl = `${process.env.API_URL}/api/v2/collections/${uuid}/items`;
  // console.log(`getNumItems: About to fetch ${apiUrl}`);
  // console.log(`getNumItems calls apiCall function internally`);
  const res = await apiCall(apiUrl);
  return res.numItems || 0;
};

/**
 * Returns the uuid, API uri, and numResults of an item given an identifier type and identifier value.
 * @param {string} identifierType - the identifier type
 * @param {string} identifier - the identifier value
 */

export const getAPIResponse = async (
  identifierType: string,
  identifier: string,
  urlParam?: { [key: string]: any }
) => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/${identifierType}/${identifier}`;
  // console.log(`getAPIUri: About to fetch ${apiUrl}`);
  // console.log(`getAPIUri calls apiCall function internally`);
  const apiCallValue = apiCall(apiUrl, urlParam);
  return apiCallValue;
};

/**
 * Returns Repo API response.
 * @param {string} apiUrl - the url to make a request to
 */

export const apiCall = async (
  apiUrl: string,
  urlParam?: { [key: string]: any }
) => {
  const apiKey = process.env.AUTH_TOKEN;
  const queryString = urlParam
    ? "?" + new URLSearchParams(urlParam).toString()
    : "";
  apiUrl += queryString;

  try {
    const startTime = new Date().getTime();
    const response = await fetch(apiUrl, {
      // aggressively cache Repo API?
      // cache: "force-cache",
      headers: {
        Authorization: `Token token=${apiKey}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      // console.log(`apiCall: called ${apiUrl}`);
      // console.log(`Response time: ${new Date().getTime() - startTime}`);
      return data.nyplAPI.response;
    } else {
      return undefined;
    }
  } catch (error) {
    return undefined;
  }
};

export const getFeaturedImage = async () => {
  console.log(`getFeaturedImage: About call getAPIResponse`);
  const apiResponse = await getAPIResponse("featured", "", { random: "true" });
  return {
    uuid: apiResponse?.capture?.uuid || "510d47d9-4f93-a3d9-e040-e00a18064a99",
    title: apiResponse?.capture?.title || "Watuppa, From water front, Brooklyn",
    imageID: apiResponse?.capture?.imageID || 482815,
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
