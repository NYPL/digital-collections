import { CollectionsApi } from "./apiClients";
import { fetchApi } from "../fetchApi/fetchApi";
import defaultFeaturedItem from "@/src/data/defaultFeaturedItemData";
import { mockCollectionsResponse } from "__tests__/__mocks__/data/collectionsApi/mockCollectionsResponse";
jest.mock("../fetchApi/fetchApi");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Collections API methods", () => {
  describe("getFeaturedItemData", () => {
    describe("getCollectionsData", () => {
      it("returns expected results", async () => {
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
});
