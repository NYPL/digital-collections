import { render, screen, fireEvent } from "@testing-library/react";
import SelectFilterGrid from "./selectFilterGrid";
import { MutableRefObject } from "react";
import { GeneralSearchManager } from "@/src/utils/searchManager/searchManager";
import {
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
} from "@/src/config/constants";
import { mockAvailableFilters } from "__tests__/__mocks__/data/mockAvailableFilters";
import { mockSearchResponse } from "__tests__/__mocks__/data/collectionsApi/mockSearchResponse";

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
  defaultSort: DEFAULT_SEARCH_SORT,
  initialKeywords: DEFAULT_SEARCH_TERM,
  initialAvailableFilters: mockSearchResponse.availableFilters,
});

describe("SelectFilterGrid", () => {
  const component = (expanded: boolean) => {
    return <SelectFilterGrid isExpanded={expanded} searchManager={manager} />;
  };
  it("renders the correct number of filters when collapsed", () => {
    render(component(false));

    expect(screen.getByText("Collection")).toBeInTheDocument();
    expect(screen.getByText("Topic")).toBeInTheDocument();

    expect(screen.queryByText("Type")).not.toBeInTheDocument();
  });

  it("renders all filters when expanded", () => {
    render(component(true));

    mockAvailableFilters.forEach((filter) => {
      expect(screen.getByText(filter.name)).toBeInTheDocument();
    });
  });

  it("toggles filter expansion correctly", async () => {
    render(component(true));

    const collectionAccordionButton = screen.getByRole("button", {
      name: /collection/i,
    });
    expect(collectionAccordionButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(collectionAccordionButton);
    expect(collectionAccordionButton).toHaveAttribute("aria-expanded", "true");
  });

  it("collapses the previous filter when you click a new one", async () => {
    render(component(true));

    const collectionAccordionButton = screen.getByRole("button", {
      name: /collection/i,
    });

    const genreAccordionButton = screen.getByRole("button", {
      name: /genre/i,
    });

    expect(collectionAccordionButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(collectionAccordionButton);
    expect(collectionAccordionButton).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(genreAccordionButton);

    expect(genreAccordionButton).toHaveAttribute("aria-expanded", "true");

    setTimeout(() => {
      expect(collectionAccordionButton).toHaveAttribute(
        "aria-expanded",
        "false"
      );
    }, 10);
  });
});
