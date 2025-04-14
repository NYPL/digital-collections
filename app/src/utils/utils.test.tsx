import {
  slugToString,
  stringToSlug,
  createAdobeAnalyticsPageName,
  displayResults,
  getCollectionFilterFromUUID,
  filterStringToCollectionApiFilterString,
  getHighestRankedHighlight,
  replaceEmWithMark,
  getTitleWithHighlights,
} from "./utils";
import { AvailableFilterOption } from "../types/AvailableFilterType";

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

describe("getCollectionFilterFromUUID", () => {
  const availableCollections: AvailableFilterOption[] = [
    {
      name: "Print Collection portrait file||16ad5350-c52e-012f-aecf-58d385a7bc34",
      count: 96377,
      selected: false,
    },
    {
      name: "Billy Rose Theatre Collection photograph file||2589a880-c52c-012f-2cb4-58d385a7bc34",
      count: 71066,
      selected: false,
    },
    {
      name: "Martha Swope photographs||0146e060-c530-012f-1e6f-58d385a7bc34",
      count: 53115,
      selected: false,
    },
    {
      name: "Cigarette cards||b50ab6f0-c52b-012f-5986-58d385a7bc34",
      count: 50939,
      selected: false,
    },
    {
      name: "Robert N. Dennis collection of stereoscopic views||5261fd50-c52e-012f-85ec-58d385a7bc34",
      count: 43135,
      selected: false,
    },
  ];
  test("returns the correct filter if there is a match", () => {
    expect(
      getCollectionFilterFromUUID(
        "16ad5350-c52e-012f-aecf-58d385a7bc34",
        availableCollections
      )
    ).toStrictEqual({
      name: "Print Collection portrait file||16ad5350-c52e-012f-aecf-58d385a7bc34",
      count: 96377,
      selected: false,
    } as AvailableFilterOption);
  });

  test("returns and empty filter if there is no match", () => {
    expect(
      getCollectionFilterFromUUID(
        "16ad5350-c52e-012f-aecf-58d385a7bc35",
        availableCollections
      )
    ).toStrictEqual(null);
  });
});

describe("filterStringToCollectionApiFilterString", () => {
  test("generates the correct filter syntax for a single filter", () => {
    expect(
      filterStringToCollectionApiFilterString("[Name=Swope, Martha]")
    ).toBe("name=Swope, Martha");
    expect(
      filterStringToCollectionApiFilterString(
        "[Collection=Print Collection portrait file||16ad5350-c52e-012f-aecf-58d385a7bc34]"
      )
    ).toBe(
      "collection=Print Collection portrait file||16ad5350-c52e-012f-aecf-58d385a7bc34"
    );
  });

  test("generates the correct filter syntax for multiple filter", () => {
    expect(
      filterStringToCollectionApiFilterString(
        "[name=Swope, Martha][collection=Print Collection portrait file||16ad5350-c52e-012f-aecf-58d385a7bc34]"
      )
    ).toBe(
      "name=Swope, Martha&collection=Print Collection portrait file||16ad5350-c52e-012f-aecf-58d385a7bc34"
    );
  });

  test("generates the correct filter syntax for no filters", () => {
    expect(filterStringToCollectionApiFilterString("")).toBe("");
  });
});

describe("getHighestRankedHighlight", () => {
  const mockHighlights = [
    { field: "abstract", text: "Something" },
    { field: "note", text: "Note text" },
    { field: "topic", text: "Topic text" },
  ];

  it("returns the highest-ranked highlight based on priority", () => {
    const result = getHighestRankedHighlight(mockHighlights);
    // topic comes before note and abstract
    expect(result).toEqual({ field: "topic", text: "Topic text" });
  });

  it("returns null if no highlight matches the ranking list", () => {
    const highlights = [{ field: "random", text: "text" }];
    expect(getHighestRankedHighlight(highlights)).toBeNull();
  });
});

describe("replaceEmWithMark", () => {
  it("replaces <em> tags with <mark> tags", () => {
    const input = "This is <em>important</em> text.";
    const output = "This is <mark>important</mark> text.";
    expect(replaceEmWithMark(input)).toBe(output);
  });

  it("replaces multiple <em> tags", () => {
    const input = "<em>First</em> and <em>second</em>";
    const output = "<mark>First</mark> and <mark>second</mark>";
    expect(replaceEmWithMark(input)).toBe(output);
  });

  it("returns original string if there are no <em> tags", () => {
    const input = "No highlights here";
    expect(replaceEmWithMark(input)).toBe(input);
  });
});

describe("getTitleWithHighlights", () => {
  it("returns marked-up highlight if title field exists", () => {
    const highlights = [{ field: "Title", text: "The <em>Great</em> Gatsby" }];
    const title = "The Great Gatsby";
    const result = getTitleWithHighlights(highlights, title);
    expect(result).toBe("The <mark>Great</mark> Gatsby");
  });

  it("returns original title if no title highlight exists", () => {
    const highlights = [{ field: "Topic", text: "Not a title" }];
    const title = "Original Title";
    expect(getTitleWithHighlights(highlights, title)).toBe(title);
  });
});
