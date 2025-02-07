import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SelectFilter, { FilterCategory } from "./selectFilter";

const mockFacetFilter: FilterCategory = {
  name: "Publishers",
  options: [
    { name: "Publisher 1", count: 10 },
    { name: "Publisher 2", count: 20 },
    { name: "Publisher 3", count: 30 },
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
  it("should select an option and update state", async () => {
    render(
      <SelectFilter
        filter={mockFacetFilter}
        isOpen={true}
        onToggle={jest.fn()}
      />
    );

    const radio1 = screen.getAllByRole("radio")[0];

    fireEvent.click(radio1);

    await waitFor(() => {
      expect(radio1).toBeChecked();
    });
  });

  it("should abort previous selection when selecting a new option", async () => {
    jest.useFakeTimers();
    render(
      <SelectFilter
        filter={mockFacetFilter}
        isOpen={true}
        onToggle={jest.fn()}
      />
    );

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
