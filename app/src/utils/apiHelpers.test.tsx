import { waitFor } from "@testing-library/react";
import {
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

describe("getHomePageData", () => {});

describe("getFeaturedItemData", () => {});

describe("getFeaturedImage", () => {});

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

describe("getDivisionData", () => {});
