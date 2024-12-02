import {
  getDivisionData,
  getFeaturedImage,
  getFeaturedItemData,
  getHomePageData,
  getItemData,
  getItemsCountFromUUIDs,
  getLaneData,
  getNumDigitizedItems,
  getRandomFeaturedItem,
} from "./apiHelpers";
import { fetchAPI } from "./fetchApi";
import defaultFeaturedItem from "../data/defaultFeaturedItemData";
import {
  mockFeaturedItemResponse,
  mockItemResponse,
} from "__tests__/__mocks__/data/mockApiResponses";

jest.mock("./fetchAPI");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("getHomePageData", () => {
  it("creates response containing random number and all 7 lanes", async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({
        nyplAPI: {
          response: {
            counts: {
              count: [
                {
                  uuid: { $: "test" },
                  count_value: { $: "10" },
                },
              ],
            },
          },
        },
      })
    );
    const result = await getHomePageData();
    expect(fetchAPI as jest.Mock).toHaveBeenCalled();
    expect([0, 1]).toContain(result.randomNumber);
    expect(result.lanesWithNumItems.length).toEqual(7);
    // Fallback data (all 0s).
    expect(
      result.lanesWithNumItems[0].collections[3].numberOfDigitizedItems
    ).toEqual("0");
  });
});

describe("getFeaturedItemData", () => {
  it("creates response containing featuredItem and numDigitizedItems", async () => {
    const result = await getFeaturedItemData();
    expect(fetchAPI as jest.Mock).toHaveBeenCalledTimes(2);
    expect(fetchAPI as jest.Mock).toHaveBeenNthCalledWith(
      1,
      `${process.env.API_URL}/api/v2/items/featured`,
      { params: { random: "true" } }
    );
    expect(fetchAPI as jest.Mock).toHaveBeenNthCalledWith(
      2,
      `${process.env.API_URL}/api/v2/items/total`
    );
    // Fallback data.
    expect(result.numberOfDigitizedItems).toEqual("875,861");
    expect(result.featuredItem.imageID).toEqual(
      defaultFeaturedItem.production.featuredItem.imageID
    );
  });
});

describe("getDivisionData", () => {
  it("forms the correct request from params with slug", async () => {
    await getDivisionData({
      slug: "testSlug",
      pageNum: 1,
      perPage: 3,
    });

    expect(fetchAPI as jest.Mock).toHaveBeenCalledWith(
      `${process.env.API_URL}/api/v2/divisions/testSlug?page=1&per_page=3`
    );
  });

  it("forms the correct request from no params", async () => {
    await getDivisionData();

    expect(fetchAPI as jest.Mock).toHaveBeenCalledWith(
      `${process.env.API_URL}/api/v2/divisions`
    );
  });

  it("returns successful response", async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({
        headers: { status: "success", code: "200", message: "ok" },
        summary: "divisions test",
        divisions: [
          {
            name: "Billy Rose Theatre Division",
            slug: "billy-rose-theatre-division",
            collections: [],
          },
          {
            name: "Carl H. Pforzheimer Collection of Shelley and His Circle",
            slug: "carl-h-pforzheimer-collection-of-shelley-and-his-circle",
            collections: [],
          },
        ],
      })
    );
    const result = await getDivisionData();
    expect(result.divisions.length).toEqual(2);
    expect(result).toHaveProperty("summary");
  });

  it("handles error response", async () => {
    (fetchAPI as jest.Mock).mockRejectedValue(
      new Error("fetchAPI: Request timed out")
    );

    await expect(getDivisionData()).rejects.toThrow(
      new Error("fetchAPI: Request timed out")
    );
  });
});

describe("getLaneData", () => {
  it("returns successful response", async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({
        headers: {
          status: "200",
          code: "200",
          message: "Collections retrieved successfully",
        },
        genre: "recently digitized collections",
        numResults: "4689",
        page: "1",
        perPage: "48",
        collection: [
          {
            title: "Edward Harrigan papers",
            uuid: "e4d9e770-8b49-013d-5581-0242ac110002",
            url: "https://digitalcollections.nypl.org/collections/e4d9e770-8b49-013d-5581-0242ac110002",
            apiUri:
              "https://api.repo.nypl.org/api/v2/collections/e4d9e770-8b49-013d-5581-0242ac110002",
            imageID: "3932292",
            containsOnSiteMaterials: "false",
            numItems: "1",
            numberOfDigitizedItems: "1",
          },
          {
            title: "Die Bauwelt ",
            uuid: "1f182f10-78ed-013d-5352-0242ac110004",
            url: "https://digitalcollections.nypl.org/collections/1f182f10-78ed-013d-5352-0242ac110004",
            apiUri:
              "https://api.repo.nypl.org/api/v2/collections/1f182f10-78ed-013d-5352-0242ac110004",
            imageID: "58928925",
            containsOnSiteMaterials: "false",
            numItems: "2",
            numberOfDigitizedItems: "2",
          },
          {
            title: "Velhagen & Klasings Monatshefte",
            uuid: "2f151240-6247-013d-50f1-0242ac110004",
            url: "https://digitalcollections.nypl.org/collections/2f151240-6247-013d-50f1-0242ac110004",
            apiUri:
              "https://api.repo.nypl.org/api/v2/collections/2f151240-6247-013d-50f1-0242ac110004",
            imageID: "58928893",
            containsOnSiteMaterials: "false",
            numItems: "1",
            numberOfDigitizedItems: "1",
          },
        ],
      })
    );
    const result = await getLaneData({
      slug: "recently-digitized-collections",
    });
    expect(result.collection.length).toEqual(3);
    expect(result).toHaveProperty("genre");
  });

  it("handles error response", async () => {
    (fetchAPI as jest.Mock).mockRejectedValue(
      new Error("fetchAPI: Request timed out")
    );

    await expect(getLaneData({ slug: "testSlug" })).rejects.toThrow(
      new Error("fetchAPI: Request timed out")
    );
  });

  it("forms the correct request from params with slug", async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({
        headers: {
          status: "200",
          code: "200",
          message: "Collections retrieved successfully",
        },
      })
    );

    await getLaneData({
      slug: "testSlug",
      pageNum: 1,
      perPage: 3,
    });

    expect(fetchAPI as jest.Mock).toHaveBeenCalledWith(
      `${process.env.API_URL}/api/v2/collections?genre=testSlug&page=1&per_page=3`
    );
  });

  it("forms the correct request from no page params", async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({
        headers: {
          status: "200",
          code: "200",
          message: "Collections retrieved successfully",
        },
      })
    );
    await getLaneData({ slug: "testSlug" });
    expect(fetchAPI as jest.Mock).toHaveBeenCalledWith(
      `${process.env.API_URL}/api/v2/collections?genre=testSlug&page=1&per_page=48`
    );
  });
});

describe("getNumDigitizedItems", () => {
  it("returns the correct numDigitizedItems", async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({
        count: {
          $: 78,
        },
      })
    );
    const result = await getNumDigitizedItems();
    expect(fetchAPI as jest.Mock).toHaveBeenCalledWith(
      `${process.env.API_URL}/api/v2/items/total`
    );
    expect(result).toEqual("78");
  });

  it("returns the fallback numDigitizedItems on empty response", async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce(Promise.resolve({}));

    const result = await getNumDigitizedItems();

    // Fallback data.
    expect(result).toEqual(
      defaultFeaturedItem["development"].numberOfDigitizedItems
    );
  });
});

describe("getItemsCountFromUUIDs", () => {
  it("should return the correct numItems for each UUID", async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({
        nyplAPI: {
          response: {
            counts: {
              count: [
                { uuid: { $: "uuid1" }, count_value: { $: "10" } },
                { uuid: { $: "uuid2" }, count_value: { $: "45" } },
              ],
            },
          },
        },
      })
    );

    const uuids = ["uuid1", "uuid2"];

    const results = await getItemsCountFromUUIDs(uuids);

    expect(results).toEqual({
      uuid1: "10",
      uuid2: "45",
    });
  });

  it("should handle missing count field gracefully", async () => {
    const uuids = ["uuid1", "uuid2", "uuid3"];
    (fetchAPI as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({
        nyplAPI: {
          response: {
            counts: {
              count: [
                { uuid: { $: "uuid1" }, count_value: { $: "10" } },
                { uuid: { $: "uuid3" }, count_value: { $: "60" } },
              ],
            },
          },
        },
      })
    );
    const results = await getItemsCountFromUUIDs(uuids);
    expect(results).toEqual({
      uuid1: "10",
      uuid3: "60",
    });
  });
});

describe("getRandomFeaturedItem", () => {
  it("returns expected item", async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce(
      Promise.resolve(mockFeaturedItemResponse)
    );
    const item = await getRandomFeaturedItem();
    expect(fetchAPI as jest.Mock).toHaveBeenCalledWith(
      `${process.env.API_URL}/api/v2/items/featured`,
      { params: { random: "true" } }
    );
    expect(item).toEqual(mockFeaturedItemResponse);
    expect(item).toHaveProperty("capture");
    expect(item.numResults).toEqual("1");
  });
});

describe("getFeaturedImage", () => {
  it("returns expected image", async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce(
      Promise.resolve(defaultFeaturedItem["production"].featuredItem)
    );
    const imageData = await getFeaturedImage();
    expect(fetchAPI as jest.Mock).toHaveBeenCalledWith(
      `${process.env.API_URL}/api/v2/items/featured`,
      { params: { random: "true" } }
    );

    expect(imageData.imageID).toEqual("482815");
    expect(imageData).toHaveProperty("uuid");
    expect(imageData).toHaveProperty("imageID");
    expect(imageData).toHaveProperty("title");
    expect(imageData).not.toHaveProperty("capture");
  });

  it("returns the fallback featured image on empty response", async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce(Promise.resolve({}));

    const imageData = await getFeaturedImage();

    // Fallback data.
    expect(imageData.uuid).toEqual(
      defaultFeaturedItem["development"].featuredItem.uuid
    );
  });
});

describe("getItemData", () => {
  it("returns expected item", async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce(
      Promise.resolve(mockItemResponse)
    );
    const item = await getItemData("uuid1");
    expect(fetchAPI as jest.Mock).toHaveBeenCalledWith(
      `${process.env.API_URL}/api/v2/items/mods_captures/uuid1`
    );
    expect(item).toEqual(mockItemResponse);
    expect(item).toHaveProperty("capture");
    expect(item).toHaveProperty("mods");
  });
});
