import { render, screen, fireEvent } from "@testing-library/react";
import SelectFilter, { FilterCategory } from "./selectFilter";

const mockFacetFilter: FilterCategory = {
  name: "Publishers",
  options: [
    { name: "Publisher 1", count: 10 },
    { name: "Publisher 2", count: 20 },
  ],
};

describe("SelectFilter", () => {
  it("renders the filter category name", () => {
    render(
      <SelectFilter
        filter={mockFacetFilter}
        isOpen={false}
        onToggle={jest.fn()}
      />
    );
    expect(screen.getByText("Publishers")).toBeInTheDocument();
  });

  it("renders a radio button for each filter option", () => {
    render(
      <SelectFilter
        filter={mockFacetFilter}
        isOpen={true}
        onToggle={jest.fn()}
      />
    );
    mockFacetFilter.options.forEach((option) => {
      expect(screen.getByText(option.name)).toBeInTheDocument();
      expect(screen.getByText(option.count.toString())).toBeInTheDocument();
    });
  });

  it("shows modal link for the filter", () => {
    render(
      <SelectFilter
        filter={mockFacetFilter}
        isOpen={true}
        onToggle={jest.fn()}
      />
    );
    expect(screen.getByText("View all publishers")).toBeInTheDocument();
  });

  it("calls the onToggle function when accordion button is clicked", () => {
    const onToggleMock = jest.fn();
    render(
      <SelectFilter
        filter={mockFacetFilter}
        isOpen={false}
        onToggle={onToggleMock}
      />
    );
    fireEvent.click(screen.getByText("Publishers"));
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });

  it.todo("handles selection");
});
