import featuredItemsData from "../data/featureditems.json";
let featuredItemArray = [];

/**
 * Sets global featuredItemArray so other functions can use it.
 **/
export const setFeaturedItemArray = () => {
  if (featuredItemArray.length !== 0) {
    // The global array already has what it needs.
    return;
  }

  // If it's empty, now is the time to generate and update the array.
  let itemsArray = [];
  for (let i = 0; i < featuredItemsData.featuredItems.images.length; i++) {
    itemsArray.push(featuredItemsData.featuredItems.images[i].split(".")[0]);
  }
  // set featuredItemArray
  featuredItemArray = itemsArray;

  return featuredItemArray;
};

/**
 * Returns a random image ID from the list of featured items.
 */
export const generateRandomImageID = () => {
  if (featuredItemArray.length === 0) {
    setFeaturedItemArray();
  }
  const randomIndex = Math.floor(Math.random() * featuredItemArray.length);
  return featuredItemArray[randomIndex];
};

/**
 * Returns a valid featured imageID.
 * Checks if an imageID passed by as a query parameter is included in the pre-approved list of image IDs for featured items.
 * If the imageID is not valid, the function returns a random imageID.
 * @param {string} imageID - optional imageID to check against list of image IDs for featured items.
 */
export const featuredImageID = (imageID = "") => {
  if (featuredItemArray.length === 0) {
    setFeaturedItemArray();
  }
  if (imageID !== "") {
    return featuredItemArray.includes(imageID)
      ? imageID
      : generateRandomImageID();
  } else {
    return generateRandomImageID();
  }
};

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
  return `${process.env.IIIF_URL}/iiif/2/${imageId}/${region}/${size}/${rotation}/default.jpg`;
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
  const totalItems = res.count.$ || fallbackCount;
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

export const getAPIUri = async (identifierType: string, identifier: string) => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/${identifierType}/${identifier}`;
  // console.log(`getAPIUri: About to fetch ${apiUrl}`);
  // console.log(`getAPIUri calls apiCall function internally`);
  const apiCallValue = apiCall(apiUrl);
  return apiCallValue;
};

/**
 * Returns Repo API response.
 * @param {string} apiUrl - the url to make a request to
 */

export const apiCall = async (apiUrl: string) => {
  const apiKey = process.env.AUTH_TOKEN;
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

export const getItemDataFromImageID = async (imageID: string) => {
  console.log(
    `getItemDataFromImageID: About call getAPIUri and apiCall for image id: ${imageID}`
  );
  const apiUri = await getAPIUri("local_image_id", imageID);
  const data = await apiCall(apiUri.apiUri);
  return {
    uuid: apiUri.uuid,
    title: getTitleFromRepoAPIResponseData(data) || "",
  };
};

function addCommas(number) {
  // Return the formatted number
  return Number(number).toLocaleString("en-US");
}

function getTitleFromRepoAPIResponseData(data) {
  // If titleInfo is an array of objects, use the title whose usage is primary. If titleInfo is a hash, return the title.
  if (!data) {
    return "";
  }

  const titleInfo = data.mods.titleInfo;
  let title = "";
  if (Array.isArray(titleInfo)) {
    const result = titleInfo.find((titleObj) => {
      return titleObj.usage === "primary";
    });
    title = result.title.$;
  } else {
    title = titleInfo.title.$;
  }
  return title;
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
  console.log("ADOBE_EMBED_URL: ", process.env.ADOBE_EMBED_URL);
  // console.log("NEXT_PUBLIC_ADOBE_EMBED_URL: ", process.env.NEXT_PUBLIC_ADOBE_EMBED_URL);

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
