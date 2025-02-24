import { fetchApi } from "./fetchApi";
import { CollectionsApi } from "./apiClients";
import { mockCollectionsResponse } from "__tests__/__mocks__/data/collectionsApi/mockCollectionsResponse";

jest.mock("./fetchApi");
beforeEach(() => {
  jest.clearAllMocks();
});

describe("Collections API methods", () => {
  describe("getCollectionsData", () => {
    it("returns expected results", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve(mockCollectionsResponse)
      );
      const collections = await CollectionsApi.getCollectionsData({
        keyword: "cat",
        sort: "date-asc",
        page: 2,
      });

      expect(fetchApi as jest.Mock).toHaveBeenCalledWith(
        `${process.env.COLLECTIONS_API_URL}/collections?page=2&perPage=48&sort=date-asc&q=cat`
      );

      expect(collections).toEqual(mockCollectionsResponse);
      expect(collections).toHaveProperty("collections");
      expect(collections).toHaveProperty("perPage");
      expect(collections).toHaveProperty("page");
      expect(collections).toHaveProperty("numResults");
    });

    it("returns default search when given no params", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve(mockCollectionsResponse)
      );
      const collections = await CollectionsApi.getCollectionsData();

      expect(fetchApi as jest.Mock).toHaveBeenCalledWith(
        `${process.env.COLLECTIONS_API_URL}/collections?page=1&perPage=48&sort=date-desc&q=`
      );

      expect(collections).toEqual(mockCollectionsResponse);
      expect(collections).toHaveProperty("collections");
      expect(collections).toHaveProperty("perPage");
      expect(collections).toHaveProperty("page");
      expect(collections).toHaveProperty("numResults");
    });
  });

  describe.skip("getSearchData", () => {
    it("returns expected results", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve(mockCollectionsResponse)
      );
      const collections = await CollectionsApi.getCollectionsData({
        keyword: "cat",
        sort: "date-asc",
        page: 2,
      });

      expect(fetchApi as jest.Mock).toHaveBeenCalledWith(
        `${process.env.COLLECTIONS_API_URL}/collections?page=2&perPage=48&sort=date-asc&q=cat`
      );

      expect(collections).toEqual(mockCollectionsResponse);
      expect(collections).toHaveProperty("collections");
      expect(collections).toHaveProperty("perPage");
      expect(collections).toHaveProperty("page");
      expect(collections).toHaveProperty("numResults");
    });

    it("returns default search when given no params", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve(mockCollectionsResponse)
      );
      const collections = await CollectionsApi.getCollectionsData();

      expect(fetchApi as jest.Mock).toHaveBeenCalledWith(
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
