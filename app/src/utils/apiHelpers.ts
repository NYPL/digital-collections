import data from "../data/lanes";
import type { LaneDataType } from "../types/Lane";
import { imageURL, addCommas } from "./utils";
import defaultFeaturedItems from "../data/defaultFeaturedItemData";
import { CARDS_PER_PAGE } from "../config/constants";
import { fetchApi } from "./fetchApi";

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
