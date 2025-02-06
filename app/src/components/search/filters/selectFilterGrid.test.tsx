import { render, screen, fireEvent } from "@testing-library/react";
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

  it("toggles filter expansion correctly", () => {
    render(<SelectFilterGrid filters={mockFilters} isExpanded={true} />);

    const collectionAccordion = screen.getByText("Collection");
    expect(screen.queryByText("View all collections")).not.toBeInTheDocument();

    fireEvent.click(collectionAccordion);
    expect(screen.getByText("View all collections")).toBeInTheDocument();

    fireEvent.click(collectionAccordion);
    expect(screen.queryByText("View all collections")).not.toBeInTheDocument();
  });

  it("collapses the previous filter when you click a new one", () => {
    render(<SelectFilterGrid filters={mockFilters} isExpanded={true} />);

    const collectionAccordion = screen.getByText("Collection");
    const formatAccordion = screen.getByText("Format");

    fireEvent.click(collectionAccordion);
    expect(screen.getByText("View all collections")).toBeInTheDocument();

    fireEvent.click(formatAccordion);
    expect(screen.getByText("View all formats")).toBeInTheDocument();
    expect(screen.queryByText("View all collections")).not.toBeInTheDocument();
  });
});
