import {
  DEFAULT_COLLECTION_SORT,
  DEFAULT_SEARCH_TERM,
  DEFAULT_SORT,
} from "../config/constants";
import { Filter } from "../types/FilterType";
import { GeneralSearchManager, CollectionSearchManager } from "./searchManager";

describe("SearchManager", () => {
  describe("GeneralSearchManager individual params", () => {
    let manager: GeneralSearchManager;

    beforeEach(() => {
      manager = new GeneralSearchManager({
        initialPage: 1,
        initialSort: DEFAULT_SORT,
        initialFilters: [],
        initialKeywords: DEFAULT_SEARCH_TERM,
      });
    });

    it("should handle search submit wth no keywords", () => {
      const result = manager.handleSearchSubmit();
      expect(result).toBe("");
    });

    it("should handle page change", () => {
      const result = manager.handlePageChange(2);
      expect(result).toBe("page=2");
    });

    it("should handle sort change", () => {
      const result = manager.handleSortChange("date-asc");
      expect(result).toBe("sort=date-asc");
    });

    it("should handle adding a filter", () => {
      const filter: Filter = { filter: "topic", value: "art" };
      const result = manager.handleAddFilter(filter);
      expect(result).toBe("filters=%5Btopic%3Dart%5D");
    });

    it("should handle removing a filter", () => {
      const filter: Filter = { filter: "topic", value: "art" };
      const result = manager.handleRemoveFilter(filter);
      expect(result).toBe("");
    });
  });

  describe("GeneralSearchManager combined params", () => {
    let manager: GeneralSearchManager;

    manager = new GeneralSearchManager({
      initialPage: 1,
      initialSort: DEFAULT_SORT,
      initialFilters: [],
      initialKeywords: "test",
    });

    it("should handle search submit wth no keywords", () => {
      const result = manager.handleSearchSubmit();
      expect(result).toBe("keywords=test");
    });

    it("should handle sort change", () => {
      const result = manager.handleSortChange("date-asc");
      expect(result).toBe("keywords=test&sort=date-asc");
    });

    it("should handle page change", () => {
      const result = manager.handlePageChange(2);
      expect(result).toBe("keywords=test&sort=date-asc&page=2");
    });

    it("should handle adding filters", () => {
      const filter1: Filter = { filter: "topic", value: "art" };
      const result1 = manager.handleAddFilter(filter1);
      expect(result1).toBe(
        "keywords=test&sort=date-asc&page=2&filters=%5Btopic%3Dart%5D"
      );

      const filter2: Filter = { filter: "genre", value: "music" };
      const result2 = manager.handleAddFilter(filter2);
      expect(result2).toBe(
        "keywords=test&sort=date-asc&page=2&filters=%5Btopic%3Dart%5D%5Bgenre%3Dmusic%5D"
      );
    });

    it("should handle clearing all filters", () => {
      const result = manager.clearAllFilters();
      expect(result).toBe("keywords=test&sort=date-asc");
    });
  });

  describe("CollectionSearchManager individual params", () => {
    let manager: CollectionSearchManager;

    beforeEach(() => {
      manager = new CollectionSearchManager({
        initialPage: 1,
        initialSort: DEFAULT_COLLECTION_SORT,
        initialFilters: [],
        initialKeywords: DEFAULT_SEARCH_TERM,
      });
    });

    it("should handle search submit", () => {
      const result = manager.handleSearchSubmit();
      expect(result).toBe("");
    });

    it("should handle page change", () => {
      const result = manager.handlePageChange(2);
      expect(result).toBe("page=2");
    });

    it("should handle sort change", () => {
      const result = manager.handleSortChange("date-asc");
      expect(result).toBe("sort=date-asc");
    });
  });

  describe("CollectionSearchManager combined params", () => {
    let manager: CollectionSearchManager;

    manager = new CollectionSearchManager({
      initialPage: 1,
      initialSort: DEFAULT_COLLECTION_SORT,
      initialFilters: [],
      initialKeywords: "test",
    });

    it("should handle search submit", () => {
      const result = manager.handleSearchSubmit();
      expect(result).toBe("collection_keywords=test");
    });

    it("should handle sort change", () => {
      const result = manager.handleSortChange("title-asc");
      expect(result).toBe("collection_keywords=test&sort=title-asc");
    });

    it("should handle page change", () => {
      const result = manager.handlePageChange(2);
      expect(result).toBe("collection_keywords=test&sort=title-asc&page=2");
    });
  });
});
