import fetch from "node-fetch"; // ES module syntax for import
import { URLSearchParams } from "url"; // ES module syntax for import

const DEFAULT_SEARCH_TERM = "";
const DEFAULT_COLLECTION_SORT = "date-desc";
const DEFAULT_PAGE_NUM = 1;
const CARDS_PER_PAGE = 48;

// Helper function to make an API request
const fetchApi = async ({ apiUrl, options = {} }) => {
  const { method = "GET", params, body, isRepoApi = true } = options;
  const headers = {};

  if (isRepoApi) {
    headers["Authorization"] = `Token token=${process.env.AUTH_TOKEN || ""}`;
  } else {
    headers["x-nypl-collections-api-key"] = "xVd!x9_8ao4Z7B@p" || "";
  }

  if (method === "POST") {
    headers["Content-Type"] = "application/json";
  }

  if (method === "GET" && params) {
    const queryString = "?" + new URLSearchParams(params).toString();
    apiUrl += queryString;
  }

  const timeout = 10000;

  const fetchWithTimeout = (url, opts) => {
    return Promise.race([
      fetch(url, opts),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("fetchApi: Request timed out")),
          timeout
        )
      ),
    ]);
  };

  try {
    const response = await fetchWithTimeout(apiUrl, {
      method,
      headers,
      body: method === "POST" ? JSON.stringify(body) : undefined,
    });

    if (response.status === 422) {
      console.error(`Invalid parameter value: ${apiUrl}`);
    } else if (!response.ok) {
      console.log("couldn't fetch");
    }

    return await response.json();
  } catch (error) {
    console.log("couldn't fetch");
  }
};

class CollectionService {
  static async getCollectionsData({
    keyword = DEFAULT_SEARCH_TERM,
    sort = DEFAULT_COLLECTION_SORT,
    page = DEFAULT_PAGE_NUM,
    perPage = CARDS_PER_PAGE,
  } = {}) {
    const apiUrl = `https://api-collections.nypl.org/collections?page=${page}&perPage=${perPage}&sort=${sort}&keyword=${keyword}`;
    const response = await fetchApi({ apiUrl, options: { isRepoApi: false } });
    return response;
  }

  static async getCollectionChildren(uuid) {
    const apiUrl = `http://api-collections.nypl.org/collections/${uuid}/children?perPage=30`;
    const response = await fetchApi({ apiUrl, options: { isRepoApi: false } });
    return response;
  }
}

async function fetchAllCollectionsAndChildren() {
  let page = 1;
  const perPage = CARDS_PER_PAGE;
  let allCollections = [];
  let hasMore = true;

  console.log("Fetching all collections...");

  // Fetch all pages of collections
  while (hasMore) {
    const data = await CollectionService.getCollectionsData({ page, perPage });
    allCollections.push(...data.collections);

    const totalResults = data.numResults;
    const totalPages = Math.ceil(totalResults / perPage);
    hasMore = page < totalPages;
    page++;
  }

  console.log(`Total collections fetched: ${allCollections.length}`);
  let collectionsBig = [];

  // Fetch children for each collection
  for (const collection of allCollections) {
    const childrenData = await CollectionService.getCollectionChildren(
      collection.uuid
    );
    const numChildren = childrenData?.numResults || 0;
    if (numChildren > 25) {
      collectionsBig.push(collection);
      console.log(
        `Collection "${collection.title}" (${collection.uuid}) has ${numChildren} children`
      );
    }
  }

  console.log(collectionsBig);
  console.log("big collections length:", collectionsBig.length);
}

fetchAllCollectionsAndChildren().catch((err) => {
  console.error("Error fetching collections or children:", err);
});
