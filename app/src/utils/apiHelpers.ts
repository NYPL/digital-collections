import data from "../../src/data/lanes";
import type { LaneDataType } from "../../src/types/Lane";
import { imageURL, addCommas } from "../utils/utils";
import defaultFeaturedItems from "../data/defaultFeaturedItemData";
import {
  CARDS_PER_PAGE,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
  COLLECTION_SORT_OPTIONS,
  DEFAULT_FILTERS,
  DEFAULT_SORT,
} from "../config/constants";
import { fetchApi } from "./fetchApi";
import { Filter } from "../types/FilterType";

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
    href: `/items/${featuredImageData.uuid}`,
  };
  const newResponse = {
    featuredItem: featuredItemObject,
    numberOfDigitizedItems: numDigitizedItems,
  };
  return newResponse;
};

export const getFeaturedImage = async () => {
  const defaultResponse = defaultFeaturedItems.featuredItem;
  const apiResponse = await getRandomFeaturedItem();

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
  const res = await fetchApi(apiUrl);
  return res;
};

/**
 * Returns the number of digitized items in repo api.
 */

export const getNumDigitizedItems = async () => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/total`;
  const res = await fetchApi(apiUrl);

  const fallbackCount = defaultFeaturedItems.numberOfDigitizedItems;
  const totalItems = res?.count?.$ ? addCommas(res.count.$) : fallbackCount; // only add commas to repo api response data
  return totalItems;
};

/**
 * Returns a map of uuids to its item count.
 */
export const getItemsCountFromUUIDs = async (uuids: string[]) => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/counts`;
  const response = await fetchApi(apiUrl, {
    method: "POST",
    body: { uuids },
  });

  const { counts } = response?.nyplAPI?.response;
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
 * Returns a random featured item from set list.
 */

export const getRandomFeaturedItem = async () => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/featured`;
  const res = await fetchApi(apiUrl, {
    params: {
      random: "true",
    },
  });
  return res;
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

  const res = await fetchApi(apiUrl);
  return res;
};

export const getCollectionsData = async ({
  keyword = DEFAULT_SEARCH_TERM,
  sort = DEFAULT_COLLECTION_SORT,
  page = DEFAULT_PAGE_NUM,
  perPage = CARDS_PER_PAGE,
}: {
  keyword?: string;
  sort?: string;
  page?: number;
  perPage?: number;
} = {}) => {
  let apiUrl = `${process.env.API_URL}/api/v2/collections?page=${page}&per_page=${perPage}&sort=${COLLECTION_SORT_OPTIONS[sort]}&q=${keyword}`;
  const res = await fetchApi(apiUrl);
  return res;
};

export const getLaneData = async ({
  slug,
  pageNum = 1,
  perPage = CARDS_PER_PAGE,
}: {
  slug: string;
  pageNum?: number;
  perPage?: number;
}) => {
  const apiUrl = `${process.env.API_URL}/api/v2/collections?genre=${slug}&page=${pageNum}&per_page=${perPage}`;
  return await fetchApi(apiUrl);
};

/**
 * Fetches search results based on the provided parameters, for /search/index and /collections/[uuid] pages.
 *
 * @param {Object} params - The parameters for the search query.
 * @param {string} [params.keyword=DEFAULT_SEARCH_TERM] - The search keyword(s) to query for.
 * @param {string} [params.sort=DEFAULT_SORT] - The sorting method to apply to the search results.
 * @param {Filter[]} [params.filters=DEFAULT_FILTERS] - An array of filters to apply to the search results.
 * @param {number} [params.page=DEFAULT_PAGE_NUM] - The page number.
 * @param {number} [params.perPage=CARDS_PER_PAGE] - The number of items to retrieve per page.
 *
 * @returns {Promise<any>}
 */

export const getSearchData = async ({
  keyword = DEFAULT_SEARCH_TERM,
  sort = DEFAULT_SORT,
  filters = DEFAULT_FILTERS,
  page = DEFAULT_PAGE_NUM,
  perPage = CARDS_PER_PAGE,
}: {
  keyword?: string;
  sort?: string;
  filters?: Filter[];
  page?: number;
  perPage?: number;
} = {}) => {
  let apiUrl = `${process.env.API_URL}/api/v2/items/search?q=${keyword}${filters}&sort=${sort}&page=${page}&per_page=${perPage}`;
  const res = await fetchApi(apiUrl);
  return res;
};
