import React from "react";
import { render } from "@testing-library/react";
import { DEFAULT_PAGE_NUM, DEFAULT_SEARCH_TERM } from "../config/constants";
import { useSearchContext, SearchProvider } from "./SearchProvider";

const TestComponent = () => {
  const { searchManager } = useSearchContext();
  return (
    <div>
      <span>{searchManager.page}</span>
      <span>{searchManager.keywords}</span>
    </div>
  );
};

describe("SearchProvider", () => {
  it("should initialize SearchManager with default values", () => {
    render(
      <SearchProvider searchParams={{}}>
        <TestComponent />
      </SearchProvider>
    );

    expect(document.body.textContent).toContain(String(DEFAULT_PAGE_NUM));
    expect(document.body.textContent).toContain(String(DEFAULT_SEARCH_TERM));
  });

  it("should initialize SearchManager with given search params", () => {
    const searchParams = {
      page: 2,
      sort: "date-asc",
      filters: "[topic=art]",
      q: "painting",
    };

    render(
      <SearchProvider searchParams={searchParams}>
        <TestComponent />
      </SearchProvider>
    );
    expect(document.body.textContent).toContain("2");
    expect(document.body.textContent).toContain("painting");
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
