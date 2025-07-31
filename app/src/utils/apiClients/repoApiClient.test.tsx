import {
  mockFeaturedItemResponse,
  mockItemResponse,
} from "__tests__/__mocks__/data/repoApi/mockApiResponses";
import { fetchApi } from "../fetchApi/fetchApi";
import { RepoApi } from "./apiClients";
import defaultFeaturedItem from "@/src/data/defaultFeaturedItemData";

jest.mock("../fetchApi/fetchApi");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Repo API methods", () => {
  describe("getFeaturedItemData", () => {
    it("creates response containing featuredItem and numDigitizedItems", async () => {
      const result = await RepoApi.getFeaturedItemData();
      expect(fetchApi as jest.Mock).toHaveBeenCalledTimes(2);
      expect(fetchApi as jest.Mock).toHaveBeenNthCalledWith(1, {
        apiUrl: `${process.env.API_URL}/api/v2/items/featured`,
        options: {
          params: { random: "true" },
        },
      });
      expect(fetchApi as jest.Mock).toHaveBeenNthCalledWith(2, {
        apiUrl: `${process.env.API_URL}/api/v2/items/total`,
      });
      // Fallback data.
      expect(result.numberOfDigitizedItems).toEqual("1,059,731");
      expect(result.featuredItem.imageID).toEqual(
        defaultFeaturedItem.featuredItem.imageID
      );
    });
  });

  describe("getDivisionData", () => {
    it("forms the correct request from params with slug", async () => {
      await RepoApi.getDivisionData({
        slug: "testSlug",
        pageNum: 1,
        perPage: 3,
      });

      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.API_URL}/api/v2/divisions/testSlug?page=1&per_page=3`,
      });
    });

    it("forms the correct request from no params", async () => {
      await RepoApi.getDivisionData();

      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.API_URL}/api/v2/divisions`,
      });
    });

    it("returns successful response", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          nyplAPI: {
            response: {
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
            },
          },
        })
      );
      const result = await RepoApi.getDivisionData();
      expect(result.divisions.length).toEqual(2);
      expect(result).toHaveProperty("summary");
    });

    it("handles error response", async () => {
      (fetchApi as jest.Mock).mockRejectedValue(
        new Error("fetchApi: Request timed out")
      );

      await expect(RepoApi.getDivisionData()).rejects.toThrow(
        new Error("fetchApi: Request timed out")
      );
    });
  });

  describe("getLaneData", () => {
    it("returns successful response", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          nyplAPI: {
            response: {
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
                  containsOnSiteMaterial: "false",
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
                  containsOnSiteMaterial: "false",
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
                  containsOnSiteMaterial: "false",
                  numItems: "1",
                  numberOfDigitizedItems: "1",
                },
              ],
            },
          },
        })
      );
      const result = await RepoApi.getLaneData({
        slug: "recently-digitized-collections",
      });
      expect(result.collection.length).toEqual(3);
      expect(result).toHaveProperty("genre");
    });

    it("handles error response", async () => {
      (fetchApi as jest.Mock).mockRejectedValue(
        new Error("fetchApi: Request timed out")
      );

      await expect(RepoApi.getLaneData({ slug: "testSlug" })).rejects.toThrow(
        new Error("fetchApi: Request timed out")
      );
    });

    it("forms the correct request from params with slug", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          nyplAPI: {
            response: {
              headers: {
                status: "200",
                code: "200",
                message: "Collections retrieved successfully",
              },
            },
          },
        })
      );

      await RepoApi.getLaneData({
        slug: "testSlug",
        pageNum: 1,
        perPage: 3,
      });

      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.API_URL}/api/v2/collections?genre=testSlug&page=1&per_page=3`,
      });
    });

    it("forms the correct request from no page params", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          nyplAPI: {
            response: {
              headers: {
                status: "200",
                code: "200",
                message: "Collections retrieved successfully",
              },
            },
          },
        })
      );
      await RepoApi.getLaneData({ slug: "testSlug" });
      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.API_URL}/api/v2/collections?genre=testSlug&page=1&per_page=48`,
      });
    });
  });

  describe("getNumDigitizedItems", () => {
    it("returns the correct numDigitizedItems", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          nyplAPI: {
            response: {
              count: {
                $: 78,
              },
            },
          },
        })
      );
      const result = await RepoApi.getNumDigitizedItems();
      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.API_URL}/api/v2/items/total`,
      });
      expect(result).toEqual("78");
    });

    it("returns the fallback numDigitizedItems on empty response", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(Promise.resolve({}));

      const result = await RepoApi.getNumDigitizedItems();

      // Fallback data.
      expect(result).toEqual(defaultFeaturedItem.numberOfDigitizedItems);
    });
  });

  describe("getItemsCountFromUUIDs", () => {
    it("should return the correct numItems for each UUID", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
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

      const results = await RepoApi.getItemsCountFromUUIDs(uuids);

      expect(results).toEqual({
        uuid1: "10",
        uuid2: "45",
      });
    });

    it("should handle missing count field gracefully", async () => {
      const uuids = ["uuid1", "uuid2", "uuid3"];
      (fetchApi as jest.Mock).mockResolvedValueOnce(
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
      const results = await RepoApi.getItemsCountFromUUIDs(uuids);
      expect(results).toEqual({
        uuid1: "10",
        uuid3: "60",
      });
    });
  });

  describe("getRandomFeaturedItem", () => {
    it("returns expected item", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          nyplAPI: {
            response: mockFeaturedItemResponse,
          },
        })
      );
      const item = await RepoApi.getRandomFeaturedItem();
      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.API_URL}/api/v2/items/featured`,
        options: { params: { random: "true" } },
      });
      expect(item).toEqual(mockFeaturedItemResponse);
      expect(item).toHaveProperty("capture");
      expect(item.numResults).toEqual("1");
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
      const imageData = await RepoApi.getFeaturedImage();
      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.API_URL}/api/v2/items/featured`,
        options: { params: { random: "true" } },
      });

      expect(imageData.imageID).toEqual("482815");
      expect(imageData).toHaveProperty("uuid");
      expect(imageData).toHaveProperty("imageID");
      expect(imageData).toHaveProperty("title");
      expect(imageData).not.toHaveProperty("capture");
    });

    it("returns the fallback featured image on empty response", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(Promise.resolve({}));

      const imageData = await RepoApi.getFeaturedImage();

      // Fallback data.
      expect(imageData.uuid).toEqual(defaultFeaturedItem.featuredItem.uuid);
    });
  });

  describe("getItemData", () => {
    it("returns expected item", async () => {
      (fetchApi as jest.Mock).mockResolvedValueOnce(
        Promise.resolve({
          nyplAPI: {
            response: mockItemResponse,
          },
        })
      );
      const item = await RepoApi.getItemData("uuid1");
      expect(fetchApi as jest.Mock).toHaveBeenCalledWith({
        apiUrl: `${process.env.API_URL}/api/v2/items/mods_captures/uuid1`,
      });
      expect(item).toEqual(mockItemResponse);
      expect(item).toHaveProperty("capture");
      expect(item).toHaveProperty("mods");
    });
  });
});
