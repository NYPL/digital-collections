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
import defaultFeaturedItems from "../data/defaultFeaturedItemData";

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
  console.log("helper response", response);

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
  console.log("uuidCounts", uuidCounts);
  const cleanCounts = uuidCounts.reduce((acc, count) => {
    acc[count.uuid["$"]] = count.count_value["$"];
    return acc;
  }, {});
  console.log("cleanCounts", cleanCounts);
  return cleanCounts ? cleanCounts : {};
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

/**
 * Makes a POST request to Repo API.
 */
export const apiPOSTCall = async (apiUrl: string, postData: any) => {
  const apiKey = process.env.AUTH_TOKEN;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${apiKey}`,
      },
      body: JSON.stringify(postData),
    });

    if (response.status === 200) {
      const data = await response.json();
      return data?.nyplAPI?.response;
    } else {
      return undefined;
    }
  } catch (error) {
    return undefined;
  }
};

export const getFeaturedImage = async () => {
  //console.log(`getFeaturedImage: About call getAPIResponse`);
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
