import { waitFor } from "@testing-library/react";
import {
  getItemsCountFromUUIDs,
  getNumDigitizedItems,
  getRandomFeaturedItem,
} from "./apiHelpers";
import { apiResponse } from "./apiResponse";
import defaultFeaturedItem from "../data/defaultFeaturedItemData";

jest.mock("./apiResponse");

const mockFeaturedItemResponse = {
  headers: { status: "success", code: "200", message: "ok" },
  numResults: "1",
  capture: {
    uuid: "510d47d9-7c7c-a3d9-e040-e00a18064a99",
    imageLinks: { imageLink: [Array] },
    apiUri:
      "http://api.repo.nypl.org/api/v2/items/mods/510d47d9-7c7c-a3d9-e040-e00a18064a99",
    typeOfResource: "still image",
    imageID: "54795",
    sortString: "0000000001|0000000011|0000000430|0000000001",
    itemLink:
      "http://digitalcollections.nypl.org/items/510d47d9-7c7c-a3d9-e040-e00a18064a99",
    highResLink: "https://link.nypl.org/3iIRPl9YEd2naebMmVbNCAA",
    title: "View of High Bridge and the Harlem River",
    dateDigitized: "2015-10-14T12:02:36Z",
    rightsStatement:
      'The New York Public Library believes that this item is in the public domain under the laws of the United States, but did not make a determination as to its copyright status under the copyright laws of other countries. This item may not be in the public domain under the laws of other countries. Though not required, if you want to credit us as the source, please use the following statement, "From The New York Public Library," and provide a link back to the item on our Digital Collections site. Doing so helps us track how our collection is used and helps justify freely releasing even more content in the future.',
    rightsStatementURI: "http://rightsstatements.org/vocab/NoC-US/1.0/",
  },
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe("getHomePageData", () => {});

describe("getFeaturedItemData", () => {});

describe("getFeaturedImage", () => {});

describe("getItemData", () => {});

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
  it("returns correct item", async () => {
    (apiResponse as jest.Mock).mockResolvedValueOnce(
      Promise.resolve(mockFeaturedItemResponse)
    );
    const item = await getRandomFeaturedItem();
    expect(item).toEqual(mockFeaturedItemResponse);
    expect(item).toHaveProperty("capture");
  });
});

describe("getDivisionData", () => {});
