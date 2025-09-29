import data from "../../data/lanesData";
import type { LaneDataType } from "../../types/LaneDataType";
import {
  imageURL,
  addCommas,
  filterStringToCollectionApiFilterString,
} from "../utils";
import defaultFeaturedItems from "../../data/defaultFeaturedItemData";
import {
  CARDS_PER_PAGE,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
  DEFAULT_FILTERS,
  DEFAULT_SEARCH_SORT,
} from "../../config/constants";
import { fetchApi } from "../fetchApi/fetchApi";
import { Filter } from "../../types/FilterType";
import { APIItem } from "@/src/types/CollectionsAPI";

export class CollectionsApi {
  static async getCaptureMetadata(uuid: string) {
    const apiUrl = `${process.env.COLLECTIONS_API_URL}/captures/${uuid}/metadata`;
    return await fetchApi({
      apiUrl: apiUrl,
      options: { isRepoApi: false },
    });
  }

  static async getCitationsData(uuid: string) {
    const apiUrl = `${process.env.COLLECTIONS_API_URL}/items/${uuid}/citations`;
    return await fetchApi({
      apiUrl: apiUrl,
      options: { isRepoApi: false, cache: "no-store" },
    });
  }

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
      options: { isRepoApi: false },
    });
    return response;
  }

  static async getCollectionData(uuid: string) {
    let apiUrl = `${process.env.COLLECTIONS_API_URL}/collections/${uuid}`;
    const response = await fetchApi({
      apiUrl: apiUrl,
      options: { isRepoApi: false },
    });
    return response;
  }

  static async getCollectionChildren(uuid: string) {
    let apiUrl = `${process.env.COLLECTIONS_API_URL}/collections/${uuid}/children`;
    const response = await fetchApi({
      apiUrl: apiUrl,
      options: { isRepoApi: false },
    });
    return response;
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
    let apiUrl = `${process.env.COLLECTIONS_API_URL}/divisions`;

    if (slug) {
      apiUrl += `/${slug}?page=${pageNum}&per_page=${perPage}`;
    }
    return await fetchApi({
      apiUrl: apiUrl,
      options: { isRepoApi: false },
    });
  }

  static async getNumDigitizedItems() {
    const apiUrl = `${process.env.COLLECTIONS_API_URL}/items/total`;
    const response = await fetchApi({
      apiUrl: apiUrl,
      options: { isRepoApi: false },
    });

    const fallbackCount = defaultFeaturedItems.numberOfDigitizedItems;

    return response?.count ? addCommas(response?.count) : fallbackCount;
  }

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

    return {
      featuredItem: featuredItemObject,
      numberOfDigitizedItems: numDigitizedItems,
    };
  }

  static async getFeaturedImage() {
    const defaultResponse = defaultFeaturedItems.featuredItem;
    const response = await this.getRandomFeaturedItem();

    return {
      uuid: response?.uuid || defaultResponse.uuid,
      title: response?.title || defaultResponse.title,
      imageID: response?.imageID || defaultResponse.imageID,
    };
  }

  static async getRandomFeaturedItem() {
    const apiUrl = `${process.env.COLLECTIONS_API_URL}/items/featured`;
    return await fetchApi({
      apiUrl: apiUrl,
      options: {
        isRepoApi: false,
      },
    });
  }

  static async getItemData(
    uuid: string,
    clientIP: string | null
  ): Promise<APIItem> {
    return await fetchApi({
      apiUrl: `${process.env.COLLECTIONS_API_URL}/items/${uuid}`,
      options: { isRepoApi: false, clientIP: clientIP, cache: "no-store" },
    });
  }

  static async getLaneData({
    slug,
    sort = "items-count",
    pageNum = 1,
    perPage = CARDS_PER_PAGE,
  }: {
    slug: string;
    sort: string;
    pageNum?: number;
    perPage?: number;
  }) {
    const apiUrl = `${process.env.COLLECTIONS_API_URL}/collections?genre=${slug}&sort=${sort}&page=${pageNum}&perPage=${perPage}`;
    return await fetchApi({
      apiUrl: apiUrl,
      options: {
        isRepoApi: false,
      },
    });
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
    let filterString = filterStringToCollectionApiFilterString(
      filters.toString()
    );
    let filterURL = filters.length > 0 ? `&${filterString}` : "";

    let apiUrl = `${
      process.env.COLLECTIONS_API_URL
    }/search/?q=${encodeURIComponent(
      keyword
    )}${filterURL}&sort=${sort}&page=${page}&perPage=${perPage}`;

    const response = await fetchApi({
      apiUrl: apiUrl,
      options: { isRepoApi: false },
    });
    return response;
  }

  static async getManifestForItemUUID(uuid: string, clientIP: string | null) {
    let apiUrl = `${process.env.COLLECTIONS_API_URL}/manifests/${uuid}`;
    const response = await fetchApi({
      apiUrl: apiUrl,
      options: { isRepoApi: false, clientIP: clientIP },
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
        isRepoApi: false,
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
