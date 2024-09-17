import data from "../../src/data/lanes";
import type { LaneDataType } from "../../src/types/Lane";
import { ENV_KEY } from "../../src/types/EnvironmentType";
import { imageURL, addCommas } from "../utils/utils";
import appConfig from "../../../appConfig";
import defaultFeaturedItems from "../data/defaultFeaturedItemData";
import { CARDS_PER_PAGE } from "../config/constants";

export const getHomePageData = async () => {
  const randomNumber = Math.floor(Math.random() * 2);
  const lanes: LaneDataType[] = data.lanes as unknown as LaneDataType[];

  // Get all the UUIDs from the collections
  const allCollectionUUIDs: string[] = lanes.reduce((acc, lane) => {
    return acc.concat(lane.collections.map((collection) => collection.uuid));
  }, [] as string[]);
  const uuidtoItemCountMap = await getItemsCountFromUUIDs(allCollectionUUIDs);

  // Update the collections for each lane with the number of items
  const updatedLanes = lanes.map((lane) => {
    const updatedCollections = lane.collections.map((collection) => {
      return {
        ...collection,
        numberOfDigitizedItems: uuidtoItemCountMap[collection.uuid] || "0",
      };
    });
    return { ...lane, collections: updatedCollections };
  });

  const newResponse = { randomNumber, lanesWithNumItems: updatedLanes };
  console.log("new response is: ", newResponse);
  return newResponse;
};

export const getFeaturedItemData = async () => {
  const featuredImageData = await getFeaturedImage();
  const numDigitizedItems = await getNumDigitizedItems();

  const featuredItemObject = {
    imageID: featuredImageData.imageID,
    backgroundImageSrc: imageURL(
      featuredImageData.imageID,
      "full",
      "!1600,1600",
      "0"
    ),
    foregroundImageSrc: imageURL(
      featuredImageData.imageID,
      "full",
      "!900,900",
      "0"
    ),
    uuid: featuredImageData.uuid,
    title: featuredImageData.title,
    href: `${appConfig.DC_URL[appConfig.environment as ENV_KEY]}/items/${
      featuredImageData.uuid
    }`,
  };
  const newResponse = {
    featuredItem: featuredItemObject,
    numberOfDigitizedItems: numDigitizedItems,
  };
  return newResponse;
};

export const getFeaturedImage = async () => {
  const defaultResponse =
    defaultFeaturedItems[appConfig.environment as ENV_KEY].featuredItem;
  const apiResponse = await getItemByIdentifier("featured", "", {
    random: "true",
  });

  return {
    uuid: apiResponse?.capture?.uuid || defaultResponse.uuid,
    title: apiResponse?.capture?.title || defaultResponse.title,
    imageID: apiResponse?.capture?.imageID || defaultResponse.imageID,
  };
};

/**
 * Returns the number of digitized items in repo api.
 */

export const getItemData = async (uuid: string) => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/mods_captures/${uuid}`;
  const res = await RepoAPICall(apiUrl);
  return res;
};

/**
 * Returns the number of digitized items in repo api.
 */

export const getNumDigitizedItems = async () => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/total`;
  const res = await apiResponse(apiUrl);

  const fallbackCount =
    defaultFeaturedItems[appConfig.environment as ENV_KEY]
      .numberOfDigitizedItems;
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
  const cleanCounts = uuidCounts.reduce((acc: any, count: any) => {
    acc[count.uuid["$"]] = count.count_value["$"];
    return acc;
  }, {});
  return cleanCounts ? cleanCounts : {};
};

/**
 * Returns the uuid, API uri, and numResults of an item given an identifier type and identifier value.
 * @param {string} identifierType - the identifier type
 * @param {string} identifier - the identifier value
 */

export const getItemByIdentifier = async (
  identifierType: string,
  identifier: string,
  urlParam?: { [key: string]: any }
) => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/${identifierType}/${identifier}`;
  const apiCallValue = apiResponse(apiUrl, urlParam);
  return apiCallValue;
};

/**
 * Returns Repo API response.
 * @param {string} apiUrl - the url to make a request to
 */

export const apiResponse = async (
  apiUrl: string,
  urlParam?: { [key: string]: any }
) => {
  const data = await RepoAPICall(apiUrl, urlParam);
  return data?.nyplAPI?.response;
};

/**
 * Returns Repo API response WITH request data.
 * @param {string} apiUrl - the url to make a request to
 * @param {[key: string]} urlParam = url parameters to use in the request
 */

export const RepoAPICall = async (
  apiUrl: string,
  urlParam?: { [key: string]: any }
) => {
  const apiKey = process.env.AUTH_TOKEN;
  const queryString = urlParam
    ? "?" + new URLSearchParams(urlParam).toString()
    : "";
  apiUrl += queryString;

  try {
    const response = await fetch(apiUrl, {
      // aggressively cache Repo API?
      // cache: "force-cache",
      headers: {
        Authorization: `Token token=${apiKey}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      console.log(`Response from Repo API ${apiUrl} was not a 200`);
      return undefined;
    }
  } catch (error) {
    console.log(`error fetching Repo API ${apiUrl}`);
    console.log(error);
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

export const getDivisionData = async (
  slug: string,
  pageNum: number = 1,
  perPage: number = CARDS_PER_PAGE
) => {
  const apiUrl = `${process.env.API_URL}/api/v2/divisions/${slug}?page=${pageNum}&per_page=${perPage}`;
  const res = await apiResponse(apiUrl);
  console.log("apiUrl in getDivisionData is: ", apiUrl);
  console.log("res in getDivisionData is: ", res);
  return res;
};
