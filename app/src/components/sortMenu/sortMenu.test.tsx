import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SortMenu from "./sortMenu";
import {
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
} from "@/src/config/constants";
import { GeneralSearchManager } from "@/src/utils/searchManager";

describe("SortMenu", () => {
  const updateURL = jest.fn();
  const options = {
    relevance: "Relevance",
    date: "Date",
  };
  let manager: GeneralSearchManager;

  beforeEach(() => {
    jest.clearAllMocks();
    manager = new GeneralSearchManager({
      initialPage: 1,
      initialSort: DEFAULT_SEARCH_SORT,
      initialFilters: [],
      initialKeywords: DEFAULT_SEARCH_TERM,
      lastFilterRef: { current: null },
    });
  });

  it("renders with correct initial sort label", () => {
    render(
      <SortMenu
        updateURL={updateURL}
        searchManager={manager}
        options={options}
        setFiltersExpanded={() => {
          console.log("expanded");
        }}
      />
    );
    expect(screen.getByText("Sort by: Relevance")).toBeInTheDocument();
  });

  it("displays menu options on open", async () => {
    render(
      <SortMenu
        updateURL={updateURL}
        searchManager={manager}
        options={options}
        setFiltersExpanded={() => {
          console.log("expanded");
        }}
      />
    );
    expect(screen.getByText("Date")).not.toBeVisible();
    fireEvent.click(screen.getByText("Sort by: Relevance"));
    await waitFor(() => {
      expect(screen.getByText("Relevance")).toBeVisible();
      expect(screen.getByText("Date")).toBeVisible();
    });
  });

  it("calls updateURL with the correct query string when an option is selected", async () => {
    render(
      <SortMenu
        updateURL={updateURL}
        searchManager={manager}
        options={options}
        setFiltersExpanded={() => {
          console.log("expanded");
        }}
      />
    );

    fireEvent.click(screen.getByText("Date"));
    expect(updateURL).toHaveBeenCalledWith("sort=date");
  });
});
