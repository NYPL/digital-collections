import data from "../data/lanes";
import type { LaneDataType } from "../types/Lane";
import { imageURL, addCommas } from "./utils";
import defaultFeaturedItems from "../data/defaultFeaturedItemData";
import {
  CARDS_PER_PAGE,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
  COLLECTION_SORT_OPTIONS,
  DEFAULT_FILTERS,
  DEFAULT_SEARCH_SORT,
} from "../config/constants";
import { fetchApi } from "./fetchApi";
import { Filter } from "../types/FilterType";

export class RepoApi {
  static async getFeaturedItemData() {
    const featuredImageData = await this.getFeaturedImage();
    const numDigitizedItems = await this.getNumDigitizedItems();

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
  }

  static async getFeaturedImage() {
    const defaultResponse = defaultFeaturedItems.featuredItem;
    const apiResponse = await this.getRandomFeaturedItem();

    return {
      uuid: apiResponse?.capture?.uuid || defaultResponse.uuid,
      title: apiResponse?.capture?.title || defaultResponse.title,
      imageID: apiResponse?.capture?.imageID || defaultResponse.imageID,
    };
  }

  /**
   *
   */

  static async getItemData(uuid: string) {
    const apiUrl = `${process.env.API_URL}/api/v2/items/mods_captures/${uuid}`;
    const res = await fetchApi({ apiUrl });
    return res?.nyplAPI?.response;
  }

  /**
   * Returns the number of digitized items.
   */

  static async getNumDigitizedItems() {
    const apiUrl = `${process.env.API_URL}/api/v2/items/total`;
    const res = await fetchApi({ apiUrl });

    const fallbackCount = defaultFeaturedItems.numberOfDigitizedItems;
    const totalItems = res?.nyplAPI?.response.count?.$
      ? addCommas(res?.nyplAPI?.response.count?.$)
      : fallbackCount;
    return totalItems;
  }

  /**
   * Returns a map of UUID to item count. Replaced by Collections API.
   */
  static async getItemsCountFromUUIDs(uuids: string[]) {
    const apiUrl = `${process.env.API_URL}/api/v2/items/counts`;
    const response = await fetchApi({
      apiUrl: apiUrl,
      options: {
        method: "POST",
        body: { uuids },
      },
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
  }

  /**
   * Returns a random featured item from set list.
   */
  static async getRandomFeaturedItem() {
    const apiUrl = `${process.env.API_URL}/api/v2/items/featured`;
    const res = await fetchApi({
      apiUrl: apiUrl,
      options: {
        params: {
          random: "true",
        },
      },
    });
    return res?.nyplAPI?.response;
  }

  static async getDivisionData({
    pageNum = 1,
    perPage = CARDS_PER_PAGE,
    slug,
  }: {
    pageNum?: number;
    perPage?: number;
    slug?: string;
  } = {}) {
    let apiUrl = `${process.env.API_URL}/api/v2/divisions`;

    if (slug) {
      apiUrl += `/${slug}?page=${pageNum}&per_page=${perPage}`;
    }

    const res = await fetchApi({ apiUrl });

    return res?.nyplAPI?.response;
  }

  static async getLaneData({
    slug,
    pageNum = 1,
    perPage = CARDS_PER_PAGE,
  }: {
    slug: string;
    pageNum?: number;
    perPage?: number;
  }) {
    const apiUrl = `${process.env.API_URL}/api/v2/collections?genre=${slug}&page=${pageNum}&per_page=${perPage}`;
    const res = await fetchApi({ apiUrl });
    return res?.nyplAPI?.response;
  }
}

export class CollectionsApi {
  static async getCollectionsData({
    keyword = DEFAULT_SEARCH_TERM,
    sort = DEFAULT_COLLECTION_SORT,
    page = DEFAULT_PAGE_NUM,
    perPage = CARDS_PER_PAGE,
  }: {
    keyword?: string;
    sort?: string;
    page?: number;
    perPage?: number;
  } = {}) {
    let apiUrl = `${process.env.COLLECTIONS_API_URL}/collections?page=${page}&perPage=${perPage}&sort=${sort}&keyword=${keyword}`;
    const response = await fetchApi({
      apiUrl: apiUrl,
      options: { isRepoApi: false, cache: false },
    });
    return response;
  }

  /**
   * Fetches search results based on the provided parameters, for /search/index and /collections/[uuid] pages.
   *
   * @param {Object} params - The parameters for the search query.
   * @param {string} [params.keyword=DEFAULT_SEARCH_TERM] - The search keyword(s) to query for.
   * @param {string} [params.sort=DEFAULT_SEARCH_SORT] - The sorting method to apply to the search results.
   * @param {Filter[]} [params.filters=DEFAULT_FILTERS] - An array of filters to apply to the search results.
   * @param {number} [params.page=DEFAULT_PAGE_NUM] - The page number.
   * @param {number} [params.perPage=CARDS_PER_PAGE] - The number of items to retrieve per page.
   *
   * @returns {Promise<any>}
   */

  static async getSearchData({
    keyword = DEFAULT_SEARCH_TERM,
    sort = DEFAULT_SEARCH_SORT,
    filters = DEFAULT_FILTERS,
    page = DEFAULT_PAGE_NUM,
    perPage = CARDS_PER_PAGE,
  }: {
    keyword?: string;
    sort?: string;
    filters?: Filter[];
    page?: number;
    perPage?: number;
  } = {}): Promise<any> {
    let apiUrl = `${process.env.COLLECTIONS_API_URL}/search/index?q=${keyword}${filters}&sort=${sort}&page=${page}&perPage=${perPage}`;
    const response = await fetchApi({
      apiUrl: apiUrl,
      options: { isRepoApi: false },
    });
    return response;
  }

  /**
   * Returns mapping of given collection UUIDs to their item counts.
   * @param {string[]} uuids - Array of collection UUIDs
   *
   * @returns {Promise<any>}
   **/
  static async getItemsCountFromUUIDs(uuids: string[]) {
    const apiUrl = `${process.env.COLLECTIONS_API_URL}/collections/item_counts`;
    const response = await fetchApi({
      apiUrl: apiUrl,
      options: {
        method: "POST",
        body: { uuids },
      },
    });
    const counts = response?.data;
    return counts || {};
  }

  static async getHomePageData() {
    const randomNumber = Math.floor(Math.random() * 2);
    const lanes: LaneDataType[] = data.lanes as unknown as LaneDataType[];

    // Get all the UUIDs from the collections
    const allCollectionUUIDs: string[] = lanes.reduce((acc, lane) => {
      return acc.concat(lane.collections.map((collection) => collection.uuid));
    }, [] as string[]);
    const uuidtoItemCountMap =
      await this.getItemsCountFromUUIDs(allCollectionUUIDs);

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
  }
}
