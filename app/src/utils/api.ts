import data from "../../src/data/lanes";
import type { LaneDataType } from "../../src/types/Lane";
import { imageURL, addCommas } from "../utils/utils";
import defaultFeaturedItems from "../data/defaultFeaturedItemData";
import { CARDS_PER_PAGE } from "../config/constants";
import { DC_URL } from "../config/constants";

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
    href: `${DC_URL}/items/${featuredImageData.uuid}`,
  };
  const newResponse = {
    featuredItem: featuredItemObject,
    numberOfDigitizedItems: numDigitizedItems,
  };
  return newResponse;
};

export const getFeaturedImage = async () => {
  const defaultResponse = defaultFeaturedItems.featuredItem;
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
 *
 */

export const getItemData = async (uuid: string) => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/mods_captures/${uuid}`;
  const res = await apiResponse(apiUrl);
  return res;
};

/**
 * Returns the number of digitized items in repo api.
 */

export const getNumDigitizedItems = async () => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/total`;
  const res = await apiResponse(apiUrl);

  const fallbackCount = defaultFeaturedItems.numberOfDigitizedItems;
  const totalItems = res?.count?.$ ? addCommas(res.count.$) : fallbackCount; // only add commas to repo api response data
  return totalItems;
};

/**
 * Returns a map of uuids to its item count.
 */
export const getItemsCountFromUUIDs = async (uuids: string[]) => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/counts`;
  const response = await apiResponse(apiUrl, {
    method: "POST",
    body: { uuids },
  });

  const { counts } = response.nyplAPI.response;
  if (!counts?.count?.length) {
    return {};
  }
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
  return apiResponse(apiUrl, { params: urlParam });
};

export const getDivisionData = async ({
  pageNum = 1,
  perPage = CARDS_PER_PAGE,
  slug,
}: {
  pageNum?: number;
  perPage?: number;
  slug?: string;
} = {}) => {
  let apiUrl = `${process.env.API_URL}/api/v2/divisions`;

  if (slug) {
    apiUrl += `/${slug}?page=${pageNum}&per_page=${perPage}`;
  }

  const res = await apiResponse(apiUrl);
  return res;
};

export const getLaneData = async ({
  pageNum = 1,
  perPage = CARDS_PER_PAGE,
  slug,
}: {
  pageNum?: number;
  perPage?: number;
  slug?: string;
} = {}) => {
  let apiUrl = `${process.env.API_URL}/api/v2/collections?genre=${slug}&page=${pageNum}&per_page=${perPage}`;
  const res = await apiResponse(apiUrl);
  return res;
};

/**
 * Makes a GET or POST request to the Repo API and returns the response.
 * Times out at 7 seconds to prevent 504 crash.
 * @param {string} apiUrl - The URL for the API request.
 * @param {object} options - Options for the request:
 *   - method: "GET" or "POST" (default is "GET").
 *   - params: URL parameters for GET requests.
 *   - body: Body data for POST requests.
 * @returns {Promise<any>} - The API response.
 */
export const apiResponse = async (
  apiUrl: string,
  options?: {
    method?: "GET" | "POST";
    params?: { [key: string]: any };
    body?: any;
  }
) => {
  const apiKey = process.env.AUTH_TOKEN;
  const method = options?.method || "GET";
  const headers = {
    Authorization: `Token token=${apiKey}`,
    ...(method === "POST" && { "Content-Type": "application/json" }),
  };

  if (method === "GET" && options?.params) {
    const queryString = "?" + new URLSearchParams(options?.params).toString();
    apiUrl += queryString;
  }

  const timeout = 14000;

  const fetchWithTimeout = (url: string, opts: RequestInit) => {
    return Promise.race([
      fetch(url, opts),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("apiResponse: Request timed out")),
          timeout
        )
      ),
    ]);
  };

  try {
    const response = (await fetchWithTimeout(apiUrl, {
      method,
      headers,
      body: method === "POST" ? JSON.stringify(options?.body) : undefined,
    })) as Response;

    if (!response.ok && response.status !== 200) {
      throw new Error(
        `apiResponse: ${response.status} ${
          response.statusText ? response.statusText : "No message"
        }`
      );
    }

    const data = await response.json();
    return method === "GET" ? data?.nyplAPI?.response : data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
