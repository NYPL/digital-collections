import { CollectionsApi } from "./apiClients";
import { fetchApi } from "../fetchApi/fetchApi";
import defaultFeaturedItem from "@/src/data/defaultFeaturedItemData";
import {
  mockCollectionsResponse,
  mockFeaturedItemResponse,
} from "__tests__/__mocks__/data/collectionsApi/mockCollectionsResponse";
jest.mock("../fetchApi/fetchApi");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Collections API methods", () => {
  describe("getFeaturedItemData", () => {
    it("creates response containing featuredItem and numDigitizedItems", async () => {
      const result = await CollectionsApi.getFeaturedItemData();
      expect(fetchApi as jest.Mock).toHaveBeenCalledTimes(2);
      expect(fetchApi as jest.Mock).toHaveBeenNthCalledWith(1, {
        apiUrl: `${process.env.COLLECTIONS_API_URL}/items/featured`,
        options: { isRepoApi: false },
      });
      expect(fetchApi as jest.Mock).toHaveBeenNthCalledWith(2, {
        apiUrl: `${process.env.COLLECTIONS_API_URL}/items/total`,
        options: { isRepoApi: false },
      });
      // Fallback data.
      expect(result.numberOfDigitizedItems).toEqual("1,059,731");
      expect(result.featuredItem.imageID).toEqual(
        defaultFeaturedItem.featuredItem.imageID
      );
    });
  });

  describe("getCollectionsData", () => {
    it("returns expected results", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(mockCollectionsResponse);

      const collections = await CollectionsApi.getCollectionsData({
        keyword: "cat",
        sort: "date-asc",
        page: 2,
      });

      expect(fetchApi).toHaveBeenCalledWith({
        apiUrl: `${process.env.COLLECTIONS_API_URL}/collections?page=2&perPage=48&sort=date-asc&keyword=cat`,
        options: { isRepoApi: false },
      });

      expect(collections).toEqual(mockCollectionsResponse);
      expect(collections).toHaveProperty("collections");
      expect(collections).toHaveProperty("perPage");
      expect(collections).toHaveProperty("page");
      expect(collections).toHaveProperty("numResults");
    });

    it("returns default search when given no params", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(mockCollectionsResponse);

      const collections = await CollectionsApi.getCollectionsData();

      expect(fetchApi).toHaveBeenCalledWith({
        apiUrl: `${process.env.COLLECTIONS_API_URL}/collections?page=1&perPage=48&sort=relevance&keyword=`,
        options: { isRepoApi: false },
      });

      expect(collections).toEqual(mockCollectionsResponse);
      expect(collections).toHaveProperty("collections");
      expect(collections).toHaveProperty("perPage");
      expect(collections).toHaveProperty("page");
      expect(collections).toHaveProperty("numResults");
    });
  });

  describe("getDivisionData", () => {
    it("forms the correct request from params with slug", async () => {
      await CollectionsApi.getDivisionData({
        slug: "testSlug",
        pageNum: 1,
        perPage: 3,
      });

      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.COLLECTIONS_API_URL}/divisions/testSlug?page=1&per_page=3`,
        options: { isRepoApi: false },
      });
    });

    it("forms the correct request from no params", async () => {
      await CollectionsApi.getDivisionData();

      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.COLLECTIONS_API_URL}/divisions`,
        options: { isRepoApi: false },
      });
    });

    it("returns successful response", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
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
      const result = await CollectionsApi.getDivisionData();
      expect(result.divisions.length).toEqual(2);
      expect(result).toHaveProperty("summary");
    });

    it("handles error response", async () => {
      (fetchApi as jest.Mock).mockRejectedValue(
        new Error("fetchApi: Request timed out")
      );

      await expect(CollectionsApi.getDivisionData()).rejects.toThrow(
        new Error("fetchApi: Request timed out")
      );
    });
  });

  describe("getHomePageData", () => {
    it("creates response containing random number and all 7 lanes", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          data: {
            test: "10",
          },
        })
      );
      const result = await CollectionsApi.getHomePageData();
      expect(fetchApi as jest.Mock).toHaveBeenCalled();
      expect([0, 1]).toContain(result.randomNumber);
      expect(result.lanesWithNumItems.length).toEqual(7);
      // Fallback data (all 0s).
      expect(
        result.lanesWithNumItems[0].collections[3].numberOfDigitizedItems
      ).toEqual("0");
    });
  });

  describe("getRandomFeaturedItem", () => {
    it("returns expected item", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve(mockFeaturedItemResponse)
      );
      const item = await CollectionsApi.getRandomFeaturedItem();
      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.COLLECTIONS_API_URL}/items/featured`,
        options: { isRepoApi: false },
      });
      expect(item).toEqual(mockFeaturedItemResponse);
      expect(item).toHaveProperty("title");
    });
  });

  describe("getFeaturedImage", () => {
    it("returns expected image", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          nyplAPI: {
            response: defaultFeaturedItem.featuredItem,
          },
        })
      );
      const imageData = await CollectionsApi.getFeaturedImage();
      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.COLLECTIONS_API_URL}/items/featured`,
        options: { isRepoApi: false },
      });

      expect(imageData.imageID).toEqual("482815");
      expect(imageData).toHaveProperty("uuid");
      expect(imageData).toHaveProperty("imageID");
      expect(imageData).toHaveProperty("title");
      expect(imageData).not.toHaveProperty("capture");
    });

    it("returns the fallback featured image on empty response", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(Promise.resolve({}));

      const imageData = await CollectionsApi.getFeaturedImage();

      // Fallback data.
      expect(imageData.uuid).toEqual(defaultFeaturedItem.featuredItem.uuid);
    });
  });

  describe("getItemsCountFromUUIDs", () => {
    it("should return the correct numItems for each UUID", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          data: {
            uuid1: 10,
            uuid2: 45,
          },
        })
      );
      const uuids = ["uuid1", "uuid2"];
      const results = await CollectionsApi.getItemsCountFromUUIDs(uuids);
      expect(results).toEqual({
        uuid1: 10,
        uuid2: 45,
      });
    });

    it("should handle missing count fields gracefully", async () => {
      const uuids = ["uuid1", "uuid2", "uuid3", "uuid4"];
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          data: {
            uuid1: 10,
            uuid3: 60,
          },
        })
      );
      const results = await CollectionsApi.getItemsCountFromUUIDs(uuids);
      expect(results).toEqual({
        uuid1: 10,
        uuid3: 60,
      });
    });
  });

  describe("getNumDigitizedItems", () => {
    it("returns the correct numDigitizedItems", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          count: 78,
        })
      );
      const result = await CollectionsApi.getNumDigitizedItems();
      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.COLLECTIONS_API_URL}/items/total`,
        options: { isRepoApi: false },
      });
      expect(result).toEqual("78");
    });

    it("returns the fallback numDigitizedItems on empty response", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(Promise.resolve({}));

      const result = await CollectionsApi.getNumDigitizedItems();

      // Fallback data.
      expect(result).toEqual(defaultFeaturedItem.numberOfDigitizedItems);
    });
  });

  describe("getLaneData", () => {
    it("returns successful response", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          numResults: 4689,
          page: 1,
          perPage: 48,
          collections: [
            {
              title: "Edward Harrigan papers",
              uuid: "e4d9e770-8b49-013d-5581-0242ac110002",
              firstIndexed: "2025-07-02T17:41:45+00:00",
              imageID: "3932292",
              numberOfDigitizedItems: 1,
              containsOnSiteMaterial: false,
              containsAVMaterial: false,
            },
            {
              title: "Die Bauwelt ",
              uuid: "1f182f10-78ed-013d-5352-0242ac110004",
              firstIndexed: "2025-07-01T15:57:12+00:00",
              imageID: "58928925",
              numberOfDigitizedItems: 2,
              containsOnSiteMaterial: false,
              containsAVMaterial: false,
            },
            {
              title: "Velhagen & Klasings Monatshefte",
              uuid: "2f151240-6247-013d-50f1-0242ac110004",
              firstIndexed: "2025-07-01T15:51:37+00:00",
              imageID: "58928893",
              numberOfDigitizedItems: 1,
              containsOnSiteMaterial: false,
              containsAVMaterial: false,
            },
          ],
        })
      );
      const result = await CollectionsApi.getLaneData({
        slug: "recently-digitized-collections",
      });
      expect(result.collections.length).toEqual(3);
    });

    it("handles error response", async () => {
      (fetchApi as jest.Mock).mockRejectedValue(
        new Error("fetchApi: Request timed out")
      );

      await expect(
        CollectionsApi.getLaneData({ slug: "testSlug" })
      ).rejects.toThrow(new Error("fetchApi: Request timed out"));
    });

    it("forms the correct request from params with slug", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          numResults: "4689",
          page: "1",
          perPage: "48",
          collections: [
            {
              title: "Test Collection",
              uuid: "de1dcfb0-c5f6-012f-1dfc-58d385a7bc34",
              firstIndexed: "2023-08-15T17:28:21+00:00",
              imageID: "5221461",
              numberOfDigitizedItems: 11722,
              containsAVMaterial: false,
              containsOnSiteMaterial: false,
            },
          ],
        })
      );

      await CollectionsApi.getLaneData({
        slug: "testSlug",
        sort: "items-count",
        pageNum: 1,
        perPage: 3,
      });

      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.COLLECTIONS_API_URL}/collections?genre=testSlug&sort=items-count&page=1&perPage=3`,
        options: {
          isRepoApi: false,
        },
      });
    });

    it("forms the correct request from no page params", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          numResults: "4689",
          page: "1",
          perPage: "48",
          collections: [
            {
              title: "Test Collection",
              uuid: "de1dcfb0-c5f6-012f-1dfc-58d385a7bc34",
              firstIndexed: "2023-08-15T17:28:21+00:00",
              imageID: "5221461",
              numberOfDigitizedItems: 11722,
              containsAVMaterial: false,
              containsOnSiteMaterial: false,
            },
          ],
        })
      );
      await CollectionsApi.getLaneData({ slug: "testSlug" });
      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.COLLECTIONS_API_URL}/collections?genre=testSlug&sort=items-count&page=1&perPage=48`,
        options: {
          isRepoApi: false,
        },
      });
    });
  });
});
