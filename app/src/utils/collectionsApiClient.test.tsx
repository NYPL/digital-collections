import { CollectionsApi } from "./apiClients";
import { mockCollectionsResponse } from "__tests__/__mocks__/data/collectionsApi/mockCollectionsResponse";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Collections API methods", () => {
  beforeAll(() => {
    global.fetch = jest.fn() as jest.Mock;
  });

  describe("getCollectionsData", () => {
    it("returns expected results", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: jest.fn().mockResolvedValue(mockCollectionsResponse),
      });

      const collections = await CollectionsApi.getCollectionsData({
        keyword: "cat",
        sort: "date-asc",
        page: 2,
      });

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.COLLECTIONS_API_URL}/collections?page=2&perPage=48&sort=date-asc&q=cat`
      );

      expect(collections).toEqual(mockCollectionsResponse);
      expect(collections).toHaveProperty("collections");
      expect(collections).toHaveProperty("perPage");
      expect(collections).toHaveProperty("page");
      expect(collections).toHaveProperty("numResults");
    });

    it("returns default search when given no params", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: jest.fn().mockResolvedValue(mockCollectionsResponse),
      });

      const collections = await CollectionsApi.getCollectionsData();

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.COLLECTIONS_API_URL}/collections?page=1&perPage=48&sort=date-desc&q=`
      );

      expect(collections).toEqual(mockCollectionsResponse);
      expect(collections).toHaveProperty("collections");
      expect(collections).toHaveProperty("perPage");
      expect(collections).toHaveProperty("page");
      expect(collections).toHaveProperty("numResults");
    });
  });
});
