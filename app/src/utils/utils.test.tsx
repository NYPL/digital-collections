import {
  slugToString,
  stringToSlug,
  createAdobeAnalyticsPageName,
  displayResults,
  createQueryStringFromObject,
  createCollectionsQueryStringFromObject,
} from "./utils";
import {
  DEFAULT_PAGE_NUM,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_SEARCH_TERM,
} from "@/src/config/constants";

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

describe("displayResults", () => {
  test("displays correct result range for first page with enough results", () => {
    expect(displayResults(100, 10, 1)).toBe("1-10 of 100");
  });

  test("displays correct result range for middle page", () => {
    expect(displayResults(100, 10, 5)).toBe("41-50 of 100");
  });

  test("displays correct result range for last page when there are fewer results than perPage", () => {
    expect(displayResults(45, 10, 5)).toBe("41-45 of 45");
  });

  test("displays correct result range when numFound is less than perPage", () => {
    expect(displayResults(8, 10, 1)).toBe("1-8 of 8");
  });

  test("displays correct result range for the last page when it's the same as perPage", () => {
    expect(displayResults(50, 10, 5)).toBe("41-50 of 50");
  });

  test("displays correct range when perPage is greater than numFound", () => {
    expect(displayResults(5, 10, 1)).toBe("1-5 of 5");
  });
});

describe("createQueryStringFromObject generates the correct query string: ", () => {
  test("when the values are all empty", () => {
    expect(createQueryStringFromObject({})).toBe("");
  });
  test("when there are multiple values", () => {
    expect(
      createQueryStringFromObject({
        dog: "cat",
        help: "me",
        this_is: "aTest",
      })
    ).toBe("dog=cat&help=me&this_is=aTest");
  });
});

describe("createCollectionsQueryStringFromObject generates the correct query string: ", () => {
  test("when the values are all empty or all defaults", () => {
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: "",
        sort: "",
        page: "",
      })
    ).toBe("");
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: DEFAULT_SEARCH_TERM,
        sort: DEFAULT_COLLECTION_SORT,
        page: DEFAULT_PAGE_NUM,
      })
    ).toBe("");
  });

  test("when the values are all set to a non-default value", () => {
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: "cat",
        sort: "title-desc",
        page: "2",
      })
    ).toBe("collection_keyword=cat&sort=title-desc&page=2");
  });

  test("collection_keyword search values are set correctly", () => {
    // empty sort and page num, not default keyword
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: "cat",
        sort: "",
        page: "",
      })
    ).toBe("collection_keyword=cat");

    // default sort and page num, not default keyword
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: "cat",
        sort: DEFAULT_COLLECTION_SORT,
        page: DEFAULT_PAGE_NUM,
      })
    ).toBe("collection_keyword=cat");

    // default keyword, page num and sort are not default
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: DEFAULT_SEARCH_TERM,
        sort: "title-desc",
        page: "2",
      })
    ).toBe("sort=title-desc&page=2");
  });

  test("sort values are set correctly", () => {
    // sort
    // only sort, keyword is default and page is empty
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: DEFAULT_SEARCH_TERM,
        sort: "title-desc",
        page: "",
      })
    ).toBe("sort=title-desc");

    // default keyword and page num, not default sort
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: DEFAULT_SEARCH_TERM,
        sort: "title-desc",
        page: DEFAULT_PAGE_NUM,
      })
    ).toBe("sort=title-desc");

    // default sort, not default page or keyword
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: "cat",
        sort: DEFAULT_COLLECTION_SORT,
        page: "2",
      })
    ).toBe("collection_keyword=cat&page=2");
  });

  test("page num values are set correctly: ", () => {
    // default keyword and sort, not default page num
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: DEFAULT_SEARCH_TERM,
        sort: DEFAULT_COLLECTION_SORT,
        page: "2",
      })
    ).toBe("page=2");

    // default keyword and sort, not default page num. page num is integer.
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: DEFAULT_SEARCH_TERM,
        sort: DEFAULT_COLLECTION_SORT,
        page: 2,
      })
    ).toBe("page=2");

    // only page num, sort and collection_keyword are empty
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: DEFAULT_SEARCH_TERM,
        sort: "",
        page: "2",
      })
    ).toBe("page=2");

    // default page num, key word and sort are not default
    expect(
      createCollectionsQueryStringFromObject({
        collection_keyword: "cat",
        sort: "title-desc",
        page: "1",
      })
    ).toBe("collection_keyword=cat&sort=title-desc");
  });
});
