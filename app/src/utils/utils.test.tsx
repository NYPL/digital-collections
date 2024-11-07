import { waitFor } from "@testing-library/react";
import {
  slugToString,
  stringToSlug,
  createAdobeAnalyticsPageName,
} from "./utils";
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
  it("should throw an error for an unsuccessful request", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 403,
        json: () => Promise.resolve({ nyplAPI: { response: "success" } }),
      })
    ) as jest.Mock;

    await expect(
      apiPOSTCall(
        "https://api.repo.nypl.org/api/v2/items/local_image_id/105180",
        { uuid: ["uuid1", "uuid2"] }
      )
    ).rejects.toThrow("403: 3xx/4xx error");
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
      ).toStrictEqual({ nyplAPI: { response: "success" } });
    });
  });
});

describe("getItemsCountFromUUIDs()", () => {
  it("should throw an error with a bad request", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 403,
        json: () => Promise.resolve({ nyplAPI: { response: "success" } }),
      })
    ) as jest.Mock;

    const data = ["uuid1", "uuid2"];
    await expect(getItemsCountFromUUIDs(data)).rejects.toThrow(
      "403: 3xx/4xx error"
    );
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

describe("createAdobeAnalyticsPageName generates the correct Adobe Analytics page name for: ", () => {
  test("pages where a title is passed instead of a slug", () => {
    expect(
      createAdobeAnalyticsPageName("not-a-real-page", "not-a-real-slug")
    ).toBe("not-a-real-page|not-a-real-slug");
  });

  test("the home page", () => {
    expect(createAdobeAnalyticsPageName("home", "")).toBe("home");
    expect(createAdobeAnalyticsPageName("home")).toBe("home");
  });

  test("the about page", () => {
    expect(createAdobeAnalyticsPageName("about", "")).toBe("about");
    expect(createAdobeAnalyticsPageName("about")).toBe("about");
  });

  test("the all divisions page", () => {
    expect(createAdobeAnalyticsPageName("divisions", "")).toBe("divisions");
    expect(createAdobeAnalyticsPageName("divisions")).toBe("divisions");
  });

  test("the divisions landing pages", () => {
    expect(
      createAdobeAnalyticsPageName("divisions", "This Is A Test Slug")
    ).toBe("divisions|this-is-a-test-slug");
    expect(
      createAdobeAnalyticsPageName("divisions", "Billy Rose Theatre Division")
    ).toBe("divisions|billy-rose-theatre-division");
    expect(
      createAdobeAnalyticsPageName(
        "divisions",
        "Manuscripts and Archives Division"
      )
    ).toBe("divisions|manuscripts-and-archives-division");
    expect(
      createAdobeAnalyticsPageName(
        "divisions",
        "Carl H. Pforzheimer Collection of Shelley and His Circle"
      )
    ).toBe("divisions|carl-h-pforzheimer-collection-of-shelley-and-his-circle");
  });

  test("all collections page", () => {
    expect(createAdobeAnalyticsPageName("all-collections", "")).toBe(
      "all-collections"
    );
    expect(createAdobeAnalyticsPageName("all-collections")).toBe(
      "all-collections"
    );
  });

  test("the swim lane landing pages", () => {
    expect(
      createAdobeAnalyticsPageName("collection|lane", "This Is A Test Slug")
    ).toBe("collection|lane|this-is-a-test-slug");
  });

  test("the collections landing pages", () => {
    expect(
      createAdobeAnalyticsPageName("collection", "This Is A Test Slug")
    ).toBe("collection|this-is-a-test-slug");
  });

  test("the all items pages", () => {
    expect(createAdobeAnalyticsPageName("all-items", "")).toBe("all-items");
    expect(createAdobeAnalyticsPageName("all-items")).toBe("all-items");
  });

  test("the item landing pages", () => {
    expect(createAdobeAnalyticsPageName("items", "This Is A Test Slug")).toBe(
      "items|this-is-a-test-slug"
    );
  });

  test("the search pages", () => {
    expect(createAdobeAnalyticsPageName("search-results", "")).toBe(
      "search-results"
    );
    expect(createAdobeAnalyticsPageName("search-results")).toBe(
      "search-results"
    );
  });

  test("the error pages", () => {
    expect(createAdobeAnalyticsPageName("internal-server-error")).toBe(
      "internal-server-error"
    );
    expect(createAdobeAnalyticsPageName("page-not-found-error")).toBe(
      "page-not-found-error"
    );
  });
});
