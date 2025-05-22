import { render, screen, fireEvent } from "@testing-library/react";
import ActiveFilters from "./activeFilters";
import {
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
} from "@/src/config/constants";
import { GeneralSearchManager } from "@/src/utils/searchManager";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(),
}));

describe("ActiveFilters", () => {
  let mockManager;
  let component;
  let allFilters;

  beforeEach(() => {
    jest.clearAllMocks();
    mockManager = new GeneralSearchManager({
      initialPage: 1,
      initialSort: DEFAULT_SEARCH_SORT,
      defaultSort: DEFAULT_SEARCH_SORT,
      initialFilters: [
        { filter: "topic", value: "art" },
        { filter: "form", value: "book" },
        { filter: "rights", value: "onSiteMaterial" },
        { filter: "collection", value: "f08b1ce0-c6bf-012f-d3f7-58d385a7bc34" },
      ],
      initialKeywords: DEFAULT_SEARCH_TERM,
      lastFilterRef: { current: null },
    });
    allFilters = {
      topic: [
        { name: "art", count: 647, selected: true },
        { name: "english", count: 647, selected: false },
      ],
      format: [
        { name: "book", count: 11, selected: true },
        { name: "letter", count: 6, selected: false },
        { name: "telegram", count: 6, selected: false },
      ],
      collection: [
        {
          name: "Correspondence||f08b1ce0-c6bf-012f-d3f7-58d385a7bc34",
          count: 647,
          selected: true,
        },
        {
          name: "Outgoing Correspondence||9b8967b0-f449-012f-60fa-58d385a7b928",
          count: 647,
          selected: false,
        },
      ],
    };
    component = (
      <ActiveFilters searchManager={mockManager} allFilters={allFilters} />
    );
  });

  it("renders the applied filters with expected labels", () => {
    render(component);
    expect(screen.getByText("Filters applied:")).toBeInTheDocument();
    expect(screen.getByText("Art")).toBeInTheDocument();
    expect(screen.getByText("Book")).toBeInTheDocument();
    expect(screen.getByText("Contains on-site materials")).toBeInTheDocument();
    expect(screen.getByText("Correspondence")).toBeInTheDocument();
  });

  it("removes a filter when a tag is clicked", () => {
    render(component);
    const tag = screen.getByText("Book");
    fireEvent.click(tag);

    setTimeout(() => {
      expect(screen.getByText("Book")).not.toBeInTheDocument();
    }, 100);
  });

  it("clears all filters when the clear button is clicked", () => {
    render(component);
    fireEvent.click(screen.getByText("Clear filters"));
    setTimeout(() => {
      expect(screen.queryByText("Filters applied:")).not.toBeInTheDocument();
    }, 200);
  });

  it("does not render if there are no active filters", () => {
    const mockEmptyManager = new GeneralSearchManager({
      initialPage: 1,
      initialSort: DEFAULT_SEARCH_SORT,
      defaultSort: DEFAULT_SEARCH_SORT,
      initialFilters: [],
      initialKeywords: DEFAULT_SEARCH_TERM,
      lastFilterRef: { current: null },
    });
    render(<ActiveFilters searchManager={mockEmptyManager} allFilters={{}} />);
    expect(screen.queryByText("Filters applied:")).not.toBeInTheDocument();
  });
});
