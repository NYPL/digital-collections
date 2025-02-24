import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SelectFilterGrid from "./selectFilterGrid";
import { FilterCategory } from "./selectFilter";

const mockFilters: FilterCategory[] = [
  { name: "Collection", options: [{ name: "Collection 1", count: 10 }] },
  { name: "Format", options: [{ name: "Format 1", count: 5 }] },
  { name: "Publishers", options: [{ name: "Publisher 1", count: 20 }] },
  { name: "Type", options: [{ name: "Type 1", count: 15 }] },
  { name: "Genre", options: [{ name: "Genre 1", count: 30 }] },
];

describe("SelectFilterGrid", () => {
  it("renders the correct number of filters when collapsed", () => {
    render(<SelectFilterGrid filters={mockFilters} isExpanded={false} />);

    expect(screen.getByText("Collection")).toBeInTheDocument();
    expect(screen.getByText("Format")).toBeInTheDocument();
    expect(screen.getByText("Publishers")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();

    expect(screen.queryByText("Genre")).not.toBeInTheDocument();
  });

  it("renders all filters when expanded", () => {
    render(<SelectFilterGrid filters={mockFilters} isExpanded={true} />);

    mockFilters.forEach((filter) => {
      expect(screen.getByText(filter.name)).toBeInTheDocument();
    });
  });

  it("toggles filter expansion correctly", async () => {
    render(<SelectFilterGrid filters={mockFilters} isExpanded={true} />);

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
    render(<SelectFilterGrid filters={mockFilters} isExpanded={true} />);

    const collectionAccordionButton = screen.getByText("Collection");

    const formatAccordionButton = screen.getByText("Format");

    expect(collectionAccordionButton.parentElement).toHaveAttribute(
      "aria-expanded",
      "false"
    );

    fireEvent.click(collectionAccordionButton);
    expect(collectionAccordionButton.parentElement).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    fireEvent.click(formatAccordionButton);

    expect(formatAccordionButton.parentElement).toHaveAttribute(
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
