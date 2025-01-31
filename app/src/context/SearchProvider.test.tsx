import React from "react";
import { render } from "@testing-library/react";
import {
  DEFAULT_PAGE_NUM,
  DEFAULT_SORT,
  DEFAULT_SEARCH_TERM,
} from "../config/constants";
import { SearchManagerFactory } from "../utils/searchManager";
import { useSearchContext, SearchProvider } from "./SearchProvider";

jest.mock("../utils/searchManager", () => ({
  SearchManagerFactory: {
    createSearchManager: jest.fn().mockReturnValue({
      page: DEFAULT_PAGE_NUM,
      sort: DEFAULT_SORT,
      filters: [],
      keywords: DEFAULT_SEARCH_TERM,
    }),
  },
}));

const TestComponent = () => {
  const { searchManager } = useSearchContext();
  return <div>{searchManager.page}</div>;
};

describe("SearchProvider", () => {
  it("should initialize SearchManager with default values", () => {
    render(
      <SearchProvider searchParams={{}}>
        <TestComponent />
      </SearchProvider>
    );

    expect(SearchManagerFactory.createSearchManager).toHaveBeenCalledWith({
      initialPage: DEFAULT_PAGE_NUM,
      initialSort: DEFAULT_SORT,
      initialFilters: [],
      initialKeywords: DEFAULT_SEARCH_TERM,
      isCollectionSearch: false,
    });
  });

  it("should initialize SearchManager with given search params", () => {
    const searchParams = {
      page: 2,
      sort: "date-asc",
      filters: "[topic=art]",
      keywords: "painting",
    };

    render(
      <SearchProvider searchParams={searchParams}>
        <TestComponent />
      </SearchProvider>
    );

    expect(SearchManagerFactory.createSearchManager).toHaveBeenCalledWith({
      initialPage: 2,
      initialSort: "date-asc",
      initialFilters: [{ filter: "topic", value: "art" }],
      initialKeywords: "painting",
      isCollectionSearch: false,
    });
  });

  it("should throw an error if used outside SearchProvider", () => {
    const TestComponent = () => {
      useSearchContext();
      return null;
    };

    expect(() => render(<TestComponent />)).toThrow(
      "useSearchContext must be inside SearchProvider"
    );
  });
});
