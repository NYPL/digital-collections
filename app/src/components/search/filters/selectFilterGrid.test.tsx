import { render, screen, fireEvent } from "@testing-library/react";
import SelectFilterGrid from "./selectFilterGrid";
import { MutableRefObject } from "react";
import { GeneralSearchManager } from "@/src/utils/searchManager";
import {
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
} from "@/src/config/constants";
import { mockAvailableFilters } from "__tests__/__mocks__/data/mockAvailableFilters";

const mockFilterRefs: MutableRefObject<(HTMLButtonElement | null)[]> = {
  current: Array(mockAvailableFilters.length).fill(null),
};
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(),
}));

const manager = new GeneralSearchManager({
  initialPage: 1,
  initialSort: DEFAULT_SEARCH_SORT,
  initialFilters: [],
  initialKeywords: DEFAULT_SEARCH_TERM,
  initialAvailableFilters: mockAvailableFilters,
});

describe("SelectFilterGrid", () => {
  const component = (expanded: boolean) => {
    return (
      <SelectFilterGrid
        isExpanded={expanded}
        filterRefs={mockFilterRefs}
        searchManager={manager}
      />
    );
  };
  it("renders the correct number of filters when collapsed", () => {
    render(component(false));

    expect(screen.getByText("Collection")).toBeInTheDocument();
    expect(screen.getByText("Topic")).toBeInTheDocument();

    expect(screen.queryByText("Name")).not.toBeInTheDocument();
  });

  it("renders all filters when expanded", () => {
    render(component(true));

    mockAvailableFilters.forEach((filter) => {
      expect(screen.getByText(filter.name)).toBeInTheDocument();
    });
  });

  it("toggles filter expansion correctly", async () => {
    render(component(true));

    const collectionAccordionButton = screen.getByText("Collection");
    expect(collectionAccordionButton.parentElement).toHaveAttribute(
      "aria-expanded",
      "false"
    );

    fireEvent.click(collectionAccordionButton);
    expect(collectionAccordionButton.parentElement).toHaveAttribute(
      "aria-expanded",
      "true"
    );
  });

  it("collapses the previous filter when you click a new one", async () => {
    render(component(true));

    const collectionAccordionButton = screen.getByText("Collection");

    const genreAccordionButton = screen.getByText("Genre");

    expect(collectionAccordionButton.parentElement).toHaveAttribute(
      "aria-expanded",
      "false"
    );

    fireEvent.click(collectionAccordionButton);
    expect(collectionAccordionButton.parentElement).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    fireEvent.click(genreAccordionButton);

    expect(genreAccordionButton.parentElement).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    setTimeout(() => {
      expect(collectionAccordionButton.parentElement).toHaveAttribute(
        "aria-expanded",
        "false"
      );
    }, 10);
  });
});
