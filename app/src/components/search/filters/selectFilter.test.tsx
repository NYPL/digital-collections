import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SelectFilter, { FilterCategory } from "./selectFilter";

const mockFacetFilter: FilterCategory = {
  name: "Publishers",
  options: [
    { name: "Publisher 1", count: 10 },
    { name: "Publisher 2", count: 20 },
    { name: "Publisher 3", count: 30 },
    { name: "Publisher 4", count: 40 },
    { name: "Publisher 5", count: 50 },
    { name: "Publisher 6", count: 60 },
    { name: "Publisher 7", count: 70 },
    { name: "Publisher 8", count: 80 },
    { name: "Publisher 9", count: 90 },
    { name: "Publisher 10", count: 100 },
    { name: "Publisher 11", count: 110 },
  ],
};

describe("SelectFilter", () => {
  it("renders the filter category name", () => {
    render(<SelectFilter filter={mockFacetFilter} />);
    expect(screen.getByText("Publishers")).toBeInTheDocument();
  });

  it("renders a radio button for first 10 filter options", () => {
    render(<SelectFilter filter={mockFacetFilter} />);
    fireEvent.click(screen.getByText("Publishers"));
    mockFacetFilter.options.slice(0, 10).forEach((option) => {
      expect(screen.getByText(option.name)).toBeInTheDocument();
      expect(screen.getByText(option.count.toString())).toBeInTheDocument();
    });
  });

  it("shows modal link for the filter", () => {
    render(<SelectFilter filter={mockFacetFilter} />);
    fireEvent.click(screen.getByText("Publishers"));
    expect(screen.getByText("View all publishers")).toBeInTheDocument();
  });

  it("should select an option and update accordingly", async () => {
    render(<SelectFilter filter={mockFacetFilter} />);
    fireEvent.click(screen.getByText("Publishers"));

    const radio1 = screen.getAllByRole("radio")[0];

    fireEvent.click(radio1);

    await waitFor(() => {
      expect(radio1).toBeChecked();
    });
  });

  it("should abort previous selection when selecting a new option", async () => {
    jest.useFakeTimers();
    render(<SelectFilter filter={mockFacetFilter} />);
    fireEvent.click(screen.getByText("Publishers"));

    const radio1 = screen.getAllByRole("radio")[0];
    const radio3 = screen.getAllByRole("radio")[2];

    fireEvent.click(radio1);
    fireEvent.click(radio3);
    jest.advanceTimersByTime(400);

    await waitFor(() => {
      expect(radio3).toBeChecked();
      expect(radio1).not.toBeChecked();
    });
    jest.useRealTimers();
  });
});
