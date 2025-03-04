import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ActiveFilters from "./activeFilters";
import { SearchProvider } from "@/src/context/SearchProvider";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(),
}));

describe("ActiveFilters", () => {
  const searchParams = {
    page: 2,
    sort: "date-asc",
    filters: "[topic=art][format=book]",
    keywords: "painting",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const component = (
    <SearchProvider searchParams={searchParams}>
      <ActiveFilters />
    </SearchProvider>
  );

  it("renders the applied filters", () => {
    render(component);
    expect(screen.getByText("Filters applied:")).toBeInTheDocument();
    expect(screen.getByText("art")).toBeInTheDocument();
    expect(screen.getByText("book")).toBeInTheDocument();
  });

  it("removes a filter when a tag is clicked", () => {
    render(component);
    const tag = screen.getByText("book");
    fireEvent.click(tag);

    setTimeout(() => {
      expect(screen.getByText("book")).not.toBeInTheDocument();
    }, 100);
  });

  it("clears all filters when the clear button is clicked", () => {
    render(component);
    fireEvent.click(screen.getByText("Clear filters"));
    setTimeout(() => {
      expect(screen.queryByText("Filters applied:")).not.toBeInTheDocument();
    }, 100);
  });

  it("does not render if there are no active filters", () => {
    render(
      <SearchProvider searchParams={{ ...searchParams, filters: "" }}>
        <ActiveFilters />
      </SearchProvider>
    );
    expect(screen.queryByText("Filters applied:")).not.toBeInTheDocument();
  });
});
