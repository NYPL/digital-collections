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
    });
  });

  it("renders with correct initial sort label", () => {
    render(
      <SortMenu
        updateURL={updateURL}
        searchManager={manager}
        options={options}
      />
    );
    expect(screen.getByText("Sort by: Relevance")).toBeInTheDocument();
  });

  it("displays menu options", () => {
    render(
      <SortMenu
        updateURL={updateURL}
        searchManager={manager}
        options={options}
      />
    );
    expect(screen.getByText("Relevance")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
  });

  it("calls updateURL with the correct query string when an option is selected", async () => {
    render(
      <SortMenu
        updateURL={updateURL}
        searchManager={manager}
        options={options}
      />
    );

    fireEvent.click(screen.getByText("Date"));
    expect(updateURL).toHaveBeenCalledWith("sort=date");
  });
});
