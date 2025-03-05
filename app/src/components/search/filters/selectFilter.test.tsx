import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SelectFilter, { FilterCategory } from "./selectFilter";
import { useRouter } from "next/navigation";
import { SearchProvider } from "@/src/context/SearchProvider";

const mockFacetFilter: FilterCategory = {
  name: "Publishers",
  options: [
    { name: "Publisher 1", count: 10 },
    { name: "Publisher 2", count: 20 },
    { name: "Publisher 3", count: 30 },
  ],
};

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(),
}));

describe("SelectFilter", () => {
  let component = (
    <SearchProvider>
      <SelectFilter filter={mockFacetFilter} />
    </SearchProvider>
  );
  it("renders the filter category name", () => {
    render(component);
    expect(screen.getByText("Publishers")).toBeInTheDocument();
  });

  it("renders a radio button for each filter option", () => {
    render(component);
    fireEvent.click(screen.getByText("Publishers"));
    mockFacetFilter.options.forEach((option) => {
      expect(screen.getByText(option.name)).toBeInTheDocument();
      expect(screen.getByText(option.count.toString())).toBeInTheDocument();
    });
  });

  it("shows modal link for the filter", () => {
    render(component);
    fireEvent.click(screen.getByText("Publishers"));
    expect(screen.getByText("View all publishers")).toBeInTheDocument();
  });

  it("should select an option and update accordingly", async () => {
    render(component);
    fireEvent.click(screen.getByText("Publishers"));

    const radio1 = screen.getAllByRole("radio")[0];

    fireEvent.click(radio1);

    await waitFor(() => {
      expect(radio1).toBeChecked();
    });
  });

  it("should abort previous selection when selecting a new option", async () => {
    jest.useFakeTimers();
    render(component);
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
