import { waitFor } from "@testing-library/react";

import { slugToString, stringToSlug } from "./utils";
import { apiPOSTCall, apiResponse, getItemsCountFromUUIDs } from "./api";

describe.skip("apiResponse()", () => {
  it("should not return undefined", async () => {
    expect(
      await apiResponse(
        "https://api.repo.nypl.org/api/v2/items/local_image_id/105180"
      )
    ).toBeDefined();
    expect(
      await apiResponse(
        "http://api.repo.nypl.org/api/v2/mods/6265a5c0-c5ef-012f-687c-58d385a7bc34"
      )
    ).toBeDefined();
  });
});

describe("apiPOSTCall()", () => {
  it("should return undefined for an unsuccessful request", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 500,
        json: () => Promise.resolve({ nyplAPI: { response: "success" } }),
      })
    ) as jest.Mock;

    await waitFor(async () => {
      expect(
        await apiPOSTCall(
          "https://api.repo.nypl.org/api/v2/items/local_image_id/105180",
          { uuid: ["uuid1", "uuid2"] }
        )
      ).toBe(undefined);
    });
  });

  it("should return the API response for a successful request", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ nyplAPI: { response: "success" } }),
      })
    ) as jest.Mock;

    await waitFor(async () => {
      expect(
        await apiPOSTCall(
          "https://api.repo.nypl.org/api/v2/items/local_image_id/105180",
          { uuid: ["uuid1", "uuid2"] }
        )
      ).toBe("success");
    });
  });
});

describe("getItemsCountFromUUIDs()", () => {
  it("should return an empty object with a bad request", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 500,
        json: () => Promise.resolve({ nyplAPI: { response: "success" } }),
      })
    ) as jest.Mock;

    const data = ["uuid1", "uuid2"];

    await waitFor(async () => {
      expect(await getItemsCountFromUUIDs(data)).toEqual({});
    });
  });

  it("should return an empty object with a successful request but bad data structure", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ nyplAPI: { response: { counts: {} } } }),
      })
    ) as jest.Mock;

    const data = ["uuid1", "uuid2"];

    await waitFor(async () => {
      expect(await getItemsCountFromUUIDs(data)).toEqual({});
    });
  });

  it("should return a map of all the uuids passed with their item count", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () =>
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
          }),
      })
    ) as jest.Mock;

    const data = ["uuid1", "uuid2"];

    await waitFor(async () => {
      expect(await getItemsCountFromUUIDs(data)).toEqual({
        uuid1: "10",
        uuid2: "45",
      });
    });
  });
});

// TODO:
/**
 * Represents a IIIF Image API URL, which will be used globally throughout the application.
 * IIIF Image API has several params, the ones we are the most concerned about are Region, Size, and Rotation.
 * This function currently is concerned with the Size parameter. This function currently uses the '!h,w' format.
 * @param {string} imageId - the image ID of the book
 * @param {string} region - optional param for the width of an image, default is "full"
 * @param {string} size - optional param for the height of an image, default is "!1600,1600"
 * @param {string} rotation - optional param for the height of an image, default is "0"
 */

// imageURL(
//   imageId: any,
//   region = "full",
//   size = "!1600,1600",
//   rotation = "0"
// )

// Cases:
// if imageID is not a string: 12345
// if imageID is not supplied
// if imageID is a string

// if region is not a string
// if region is not supplied
// if region is a string

// if size is not a string
// if size is not supplied
// if size is a string

// if rotation is not a string
// if rotation is not supplied
// if rotation is a string & not default

//// Example usage:
// let numberWithCommas = addCommas(1234567);
// console.log(numberWithCommas); // Output: "1,234,567"

describe("slugToString", () => {
  test("converts a slug to a human-readable string", () => {
    const input = "this-is-a-test-slug";
    const output = "This Is A Test Slug";
    expect(slugToString(input)).toBe(output);
  });

  test("handles slugs with lots of hyphens", () => {
    const input = "a-slug-with----many-hyphens";
    const output = "A Slug With Many Hyphens";
    expect(slugToString(input)).toBe(output);
  });

  test("returns an empty string for an empty input", () => {
    const input = "";
    const output = "";
    expect(slugToString(input)).toBe(output);
  });
});

describe("stringToSlug", () => {
  test("converts a human-readable string to a slug", () => {
    const output = "this-is-a-test-slug";
    const input = "This Is A Test Slug";
    expect(stringToSlug(input)).toBe(output);
  });

  test("handles slugs with lots of symbols", () => {
    const output = "a-slug-with-many-symbols-23";
    const input = "A Slug With --- ? /, Many ; Symbols 23";
    expect(stringToSlug(input)).toBe(output);
  });

  test("returns an empty string for an empty input", () => {
    const input = "";
    const output = "";
    expect(stringToSlug(input)).toBe(output);
  });
});
