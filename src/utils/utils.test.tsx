import { getAPIUri, apiCall } from "@/utils/utils";

describe.skip("getAPIUri()", () => {
  it("should not be undefined", async () => {
    const apiUriData = await getAPIUri("local_image_id", "105180");
    expect(apiUriData.apiUri).toBeDefined();
  });
});

describe.skip("apiCall()", () => {
  it("should not return undefined", async () => {
    expect(
      await apiCall(
        "https://api.repo.nypl.org/api/v2/items/local_image_id/105180"
      )
    ).toBeDefined();
    expect(
      await apiCall(
        "http://api.repo.nypl.org/api/v2/mods/6265a5c0-c5ef-012f-687c-58d385a7bc34"
      )
    ).toBeDefined();
  });
});

// TO DO:
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

import { adobeAnalyticsRouteToPageName } from "../utils/utils";
import {
  ADOBE_ANALYTICS_DC_PREFIX,
  ADOBE_ANALYTICS_PAGE_NAMES,
} from "../config/constants";

describe("appUtils", () => {
  describe("adobeAnalyticsRouteToPageName", () => {
    it("should return the appropriate page name for a given route", () => {
      expect(adobeAnalyticsRouteToPageName("/")).toBe(
        `${ADOBE_ANALYTICS_DC_PREFIX}${ADOBE_ANALYTICS_PAGE_NAMES.HOME}`
      );
      expect(adobeAnalyticsRouteToPageName("")).toBe(
        `${ADOBE_ANALYTICS_DC_PREFIX}${ADOBE_ANALYTICS_PAGE_NAMES.HOME}`
      );
    });
  });
});
