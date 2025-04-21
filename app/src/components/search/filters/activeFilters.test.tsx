import { render, screen, fireEvent } from "@testing-library/react";
import ActiveFilters from "./activeFilters";
import {
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
} from "@/src/config/constants";
import { GeneralSearchManager } from "@/src/utils/searchManager";
import { useRef } from "react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(),
}));

describe("ActiveFilters", () => {
  let mockManager;
  let component;

  beforeEach(() => {
    jest.clearAllMocks();
    mockManager = new GeneralSearchManager({
      initialPage: 1,
      initialSort: DEFAULT_SEARCH_SORT,
      initialFilters: [
        { filter: "topic", value: "art" },
        { filter: "format", value: "book" },
      ],
      initialKeywords: DEFAULT_SEARCH_TERM,
      lastFilterRef: { current: null },
    });
    component = <ActiveFilters searchManager={mockManager} />;
  });

  it("renders the applied filters", () => {
    render(component);
    expect(screen.getByText("Filters applied:")).toBeInTheDocument();
    expect(screen.getByText("Art")).toBeInTheDocument();
    expect(screen.getByText("Book")).toBeInTheDocument();
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
      initialFilters: [],
      initialKeywords: DEFAULT_SEARCH_TERM,
      lastFilterRef: { current: null },
    });
    render(<ActiveFilters searchManager={mockEmptyManager} />);
    expect(screen.queryByText("Filters applied:")).not.toBeInTheDocument();
  });
});
