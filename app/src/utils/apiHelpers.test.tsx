import {
  getDivisionData,
  getFeaturedImage,
  getFeaturedItemData,
  getHomePageData,
  getItemsCountFromUUIDs,
  getNumDigitizedItems,
  getRandomFeaturedItem,
} from "./apiHelpers";
import { apiResponse } from "./apiResponse";
import defaultFeaturedItem from "../data/defaultFeaturedItemData";
import {
  mockFeaturedItemResponse,
  mockItemResponse,
} from "__tests__/__mocks__/data/mockApiResponses";

jest.mock("./apiResponse");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("getHomePageData", () => {
  it("creates response containing random number and all 7 lanes", async () => {
    (apiResponse as jest.Mock).mockResolvedValueOnce(
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
    expect(apiResponse as jest.Mock).toHaveBeenCalled();
    expect([0, 1]).toContain(result.randomNumber);
    expect(result.lanesWithNumItems.length).toEqual(7);
    // Test uuid response doesn't match the collection uuid, so all of these should be 0.
    expect(
      result.lanesWithNumItems[0].collections[3].numberOfDigitizedItems
    ).toEqual("0");
  });
});

describe("getFeaturedItemData", () => {
  it("creates response containing featuredItem and numDigitizedItems", async () => {
    const result = await getFeaturedItemData();

    // Fallback values:
    expect(result.numberOfDigitizedItems).toEqual("875,861");
    expect(result.featuredItem.imageID).toEqual(
      defaultFeaturedItem.production.featuredItem.imageID
    );
  });
});

describe("getDivisionData", () => {
  it("forms the correct request from params", async () => {
    const result = await getDivisionData({
      slug: "testSlug",
      pageNum: 1,
      perPage: 3,
    });

    expect(apiResponse as jest.Mock).toHaveBeenCalledWith(
      `${process.env.API_URL}/api/v2/divisions/testSlug?page=1&per_page=3`
    );
  });
  it("returns successful response", async () => {
    (apiResponse as jest.Mock).mockResolvedValueOnce(
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
    const result = await getDivisionData({
      pageNum: 1,
      perPage: 2,
    });
    expect(result.divisions.length).toEqual(2);
    expect(result).toHaveProperty("summary");
  });
});

describe("getNumDigitizedItems", () => {
  it("returns the correct numDigitizedItems", async () => {
    (apiResponse as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({
        count: {
          $: 78,
        },
      })
    );
    const result = await getNumDigitizedItems();

    expect(result).toEqual("78");
  });

  it("returns the fallback numDigitizedItems on empty response", async () => {
    (apiResponse as jest.Mock).mockResolvedValueOnce(Promise.resolve({}));

    const result = await getNumDigitizedItems();

    expect(result).toEqual(
      defaultFeaturedItem["development"].numberOfDigitizedItems
    );
  });
});

describe("getItemsCountFromUUIDs", () => {
  it("should return the correct numItems for each UUID", async () => {
    (apiResponse as jest.Mock).mockResolvedValueOnce(
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
    (apiResponse as jest.Mock).mockResolvedValueOnce(
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
    (apiResponse as jest.Mock).mockResolvedValueOnce(
      Promise.resolve(mockFeaturedItemResponse)
    );
    const item = await getRandomFeaturedItem();
    expect(item).toEqual(mockFeaturedItemResponse);
    expect(item).toHaveProperty("capture");
  });
});

describe("getFeaturedImage", () => {
  it("returns expected item", async () => {
    (apiResponse as jest.Mock).mockResolvedValueOnce(
      Promise.resolve(defaultFeaturedItem["production"].featuredItem)
    );
    const item = await getFeaturedImage();
    expect(item).toHaveProperty("imageID");
    expect(item.imageID).toEqual("482815");
  });
});

describe("getItemData", () => {
  it("returns expected item", async () => {
    (apiResponse as jest.Mock).mockResolvedValueOnce(
      Promise.resolve(mockItemResponse)
    );
    const item = await getRandomFeaturedItem();
    expect(item).toEqual(mockItemResponse);
    expect(item).toHaveProperty("capture");
    expect(item).toHaveProperty("mods");
  });
});
