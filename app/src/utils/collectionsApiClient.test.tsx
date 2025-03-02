import { CollectionsApi } from "./apiClients";
import { mockCollectionsResponse } from "__tests__/__mocks__/data/collectionsApi/mockCollectionsResponse";
import { fetchApi } from "./fetchApi";
jest.mock("./fetchApi");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Collections API methods", () => {
  describe("getCollectionsData", () => {
    it("returns expected results", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(mockCollectionsResponse);

      const collections = await CollectionsApi.getCollectionsData({
        keyword: "cat",
        sort: "date-asc",
        page: 2,
      });

      expect(fetchApi).toHaveBeenCalledWith({
        apiUrl: `${process.env.COLLECTIONS_API_URL}/collections?page=2&perPage=48&sort=date-asc&q=cat`,
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
        apiUrl: `${process.env.COLLECTIONS_API_URL}/collections?page=1&perPage=48&sort=date-desc&q=`,
        options: { isRepoApi: false },
      });

      expect(collections).toEqual(mockCollectionsResponse);
      expect(collections).toHaveProperty("collections");
      expect(collections).toHaveProperty("perPage");
      expect(collections).toHaveProperty("page");
      expect(collections).toHaveProperty("numResults");
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
});
