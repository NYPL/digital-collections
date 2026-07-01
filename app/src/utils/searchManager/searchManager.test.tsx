import {
  DEFAULT_COLLECTION_SORT,
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
} from "@/src/config/constants";
import {
  GeneralSearchManager,
  CollectionSearchManager,
  filterToString,
  stringToFilter,
} from "./searchManager";
import { Filter } from "@/src/types/FilterType";

describe("SearchManager", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("GeneralSearchManager individual params", () => {
    let manager: GeneralSearchManager;

    beforeEach(() => {
      manager = new GeneralSearchManager({
        initialPage: 1,
        initialSort: DEFAULT_SEARCH_SORT,
        defaultSort: DEFAULT_SEARCH_SORT,
        initialFilters: [],
        initialKeywords: DEFAULT_SEARCH_TERM,
      });
    });

    it("should handle search submit with no keywords", () => {
      manager.handlePerPageChange(96);
      const result = manager.handleSearchSubmit();
      expect(result).toBe("perPage=96");
    });

    it("should handle page change", () => {
      const result = manager.handlePageChange(2);
      expect(result).toBe("page=2&perPage=48");
    });

    it("should handle per-page change", () => {
      const result = manager.handlePerPageChange(96);
      expect(result).toBe("perPage=96");
    });

    it("should handle sort change", () => {
      const result = manager.handleSortChange("date-asc");
      expect(result).toBe("sort=date-asc&perPage=48");
    });

    it("should handle adding a filter", () => {
      const filter: Filter = { filter: "topic", value: "art" };
      const result = manager.handleAddFilter(filter);
      expect(result).toBe("perPage=48&filters=%5Btopic%3Dart%5D");
    });

    it("should handle removing a filter", () => {
      const filter: Filter = { filter: "topic", value: "art" };
      const result = manager.handleRemoveFilter(filter);
      expect(result).toBe("perPage=48");
    });
  });

  describe("GeneralSearchManager combined params", () => {
    let manager: GeneralSearchManager;

    beforeEach(() => {
      manager = new GeneralSearchManager({
        initialPage: 1,
        initialSort: DEFAULT_SEARCH_SORT,
        defaultSort: DEFAULT_SEARCH_SORT,
        initialFilters: [],
        initialKeywords: "test",
      });
    });

    it("should handle search submit with no keywords (dropping q param)", () => {
      manager.handlePerPageChange(96);
      manager.handleKeywordChange("");
      const result = manager.handleSearchSubmit();
      expect(result).toBe("perPage=96");
    });

    it("should handle adding a keyword", () => {
      manager.handlePerPageChange(96);
      manager.handleKeywordChange("test");
      const result = manager.handleSearchSubmit();
      expect(result).toBe("q=test&perPage=96");
    });

    it("should handle sort change", () => {
      const result = manager.handleSortChange("date-asc");
      expect(result).toBe("q=test&sort=date-asc&perPage=48");
    });

    it("should drop sort=relevance if selected", () => {
      const result = manager.handleSortChange("relevance");
      expect(result).toBe("q=test&perPage=48");
    });

    it("should handle page change", () => {
      const result = manager.handlePageChange(2);
      expect(result).toBe("q=test&page=2&perPage=48");
    });

    it("should handle per-page change", () => {
      const result = manager.handlePerPageChange(96);
      expect(result).toBe("q=test&perPage=96");
    });

    it("should handle adding filters", () => {
      const filter1: Filter = { filter: "topic", value: "art" };
      const result1 = manager.handleAddFilter(filter1);
      expect(result1).toBe("q=test&perPage=48&filters=%5Btopic%3Dart%5D");

      const filter2: Filter = { filter: "genre", value: "music" };
      const result2 = manager.handleAddFilter(filter2);
      expect(result2).toBe(
        "q=test&perPage=48&filters=%5Btopic%3Dart%5D%5Bgenre%3Dmusic%5D"
      );
    });

    it("should handle removing a filter", () => {
      manager.handleAddFilter({ filter: "topic", value: "art" });
      manager.handleAddFilter({ filter: "genre", value: "music" });
      const filter1: Filter = { filter: "genre", value: "music" };
      const result1 = manager.handleRemoveFilter(filter1);
      expect(result1).toBe("q=test&perPage=48&filters=%5Btopic%3Dart%5D");
    });

    it("should handle clearing all filters (dropping filters param)", () => {
      const result = manager.clearAllFilters();
      expect(result).toBe("q=test&perPage=48");
    });
  });

  describe("CollectionSearchManager individual params", () => {
    let manager: CollectionSearchManager;

    beforeEach(() => {
      manager = new CollectionSearchManager({
        initialPage: 1,
        initialSort: DEFAULT_COLLECTION_SORT,
        defaultSort: "relevance",
        initialFilters: [],
        initialKeywords: DEFAULT_SEARCH_TERM,
      });
    });

    it("should handle search submit", () => {
      manager.handlePerPageChange(96);
      const result = manager.handleSearchSubmit();
      expect(result).toBe("perPage=96");
    });

    it("should handle page change", () => {
      const result = manager.handlePageChange(2);
      expect(result).toBe("page=2&perPage=48");
    });

    it("should handle per-page change", () => {
      const result = manager.handlePerPageChange(96);
      expect(result).toBe("perPage=96");
    });

    it("should handle sort change", () => {
      const result = manager.handleSortChange("date-asc");
      expect(result).toBe("sort=date-asc&perPage=48");
    });
  });

  describe("CollectionSearchManager combined params", () => {
    let manager: CollectionSearchManager;

    beforeEach(() => {
      manager = new CollectionSearchManager({
        initialPage: 1,
        initialSort: DEFAULT_COLLECTION_SORT,
        defaultSort: "relevance",
        initialFilters: [],
        initialKeywords: "test",
      });
    });

    it("should handle search submit", () => {
      manager.handlePerPageChange(96);
      const result = manager.handleSearchSubmit();
      expect(result).toBe("q=test&perPage=96");
    });

    it("should handle sort change", () => {
      const result = manager.handleSortChange("title-asc");
      expect(result).toBe("q=test&sort=title-asc&perPage=48");
    });

    it("should handle page change", () => {
      manager.handleSortChange("title-asc");
      const result = manager.handlePageChange(2);
      expect(result).toBe("q=test&sort=title-asc&page=2&perPage=48");
    });

    it("should handle per-page change", () => {
      manager.handleSortChange("title-asc");
      const result = manager.handlePerPageChange(96);
      expect(result).toBe("q=test&sort=title-asc&perPage=96");
    });
  });

  describe("stringToFilter", () => {
    it("should return an empty array for null input", () => {
      expect(stringToFilter(null)).toEqual([]);
    });

    it("should return an empty array for an empty string", () => {
      expect(stringToFilter("")).toEqual([]);
    });

    it("should handle a single filter correctly", () => {
      expect(stringToFilter("[rights=pd]")).toEqual([
        { filter: "rights", value: "pd" },
      ]);
    });

    it("should handle multiple filters correctly", () => {
      expect(stringToFilter("[rights=pd][topic=music]")).toEqual([
        { filter: "rights", value: "pd" },
        { filter: "topic", value: "music" },
      ]);
    });

    it("should handle filters with spaces", () => {
      expect(stringToFilter("[format=Long Is land]")).toEqual([
        { filter: "format", value: "Long Is land" },
      ]);
    });
  });

  describe("filterToString", () => {
    it("should return an empty string for an empty array", () => {
      expect(filterToString([])).toBe("");
    });

    it("should convert a single filter to a string", () => {
      expect(filterToString([{ filter: "rights", value: "pd" }])).toBe(
        "[rights=pd]"
      );
    });

    it("should convert multiple filters to a string", () => {
      expect(
        filterToString([
          { filter: "rights", value: "pd" },
          { filter: "topic", value: "music" },
        ])
      ).toBe("[rights=pd][topic=music]");
    });

    it("should handle filters with spaces", () => {
      expect(
        filterToString([{ filter: "format", value: "Long Is land" }])
      ).toBe("[format=Long Is land]");
    });
  });
});
