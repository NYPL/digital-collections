import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ViewingOptionsMenu from "./viewingOptionsMenu";
import {
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
} from "@/src/config/constants";
import { GeneralSearchManager } from "@/src/utils/searchManager/searchManager";

describe("ViewingOptionsMenu", () => {
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
      defaultSort: DEFAULT_SEARCH_SORT,
      initialFilters: [],
      initialKeywords: DEFAULT_SEARCH_TERM,
      lastFilterRef: { current: null },
    });
  });

  it("renders with correct initial sort label", () => {
    render(
      <ViewingOptionsMenu
        updateURL={updateURL}
        sort={manager.sort}
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
      <ViewingOptionsMenu
        updateURL={updateURL}
        sort={manager.sort}
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
      <ViewingOptionsMenu
        updateURL={updateURL}
        searchManager={manager}
        sort={manager.sort}
        options={options}
        setFiltersExpanded={() => {
          console.log("expanded");
        }}
      />
    );

    fireEvent.click(screen.getByText("Date"));
    expect(updateURL).toHaveBeenCalledWith("sort=date&perPage=48");
  });

  it("shows a results-per-page menu and updates query when selected", async () => {
    render(
      <ViewingOptionsMenu
        updateURL={updateURL}
        searchManager={manager}
        sort={manager.sort}
        options={options}
        perPageOptions={[48, 96]}
      />
    );

    expect(screen.getByText("Results per page: 48")).toBeInTheDocument();
    fireEvent.click(screen.getByText("96"));
    expect(updateURL).toHaveBeenCalledWith("perPage=96");
  });

  it("notifies future view mode before navigation", () => {
    const onViewModeChangeStart = jest.fn();

    render(
      <ViewingOptionsMenu
        updateURL={updateURL}
        searchManager={manager}
        sort={manager.sort}
        options={options}
        onViewModeChangeStart={onViewModeChangeStart}
      />
    );

    fireEvent.click(screen.getByLabelText("list view"));

    expect(onViewModeChangeStart).toHaveBeenCalledWith("list");
    expect(updateURL).toHaveBeenCalledWith(
      expect.stringContaining("viewMode=list")
    );
  });
});
