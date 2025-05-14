import { render, screen, fireEvent } from "@testing-library/react";
import SelectFilter from "./selectFilter";
import { GeneralSearchManager } from "@/src/utils/searchManager";
import {
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
} from "@/src/config/constants";
import { useRouter } from "next/navigation";
import { AvailableFilter } from "@/src/types/AvailableFilterType";

const mockAvailableFilter: AvailableFilter = {
  name: "Publisher",
  options: [
    { name: "Publisher 1", count: 10, selected: false },
    { name: "Publisher 2", count: 20, selected: false },
    { name: "Publisher 3", count: 30, selected: false },
    { name: "Publisher 4", count: 40, selected: false },
    { name: "Publisher 5", count: 50, selected: false },
    { name: "Publisher 6", count: 60, selected: false },
    { name: "Publisher 7", count: 70, selected: false },
    { name: "Publisher 8", count: 80, selected: false },
    { name: "Publisher 9", count: 90, selected: false },
    { name: "Publisher 10", count: 100, selected: false },
    { name: "Publisher 11", count: 110, selected: false },
  ],
};

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(),
}));

let mockManager = new GeneralSearchManager({
  initialPage: 1,
  initialSort: DEFAULT_SEARCH_SORT,
  initialFilters: [],
  initialKeywords: DEFAULT_SEARCH_TERM,
  lastFilterRef: { current: null },
});

let mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

let component = (
  <SelectFilter filter={mockAvailableFilter} searchManager={mockManager} />
);

describe("SelectFilterComponent", () => {
  it("renders the component", () => {
    render(component);
    const accordionButton = screen.getByRole("button", { name: /Publisher/i });
    fireEvent.click(accordionButton);
    expect(screen.getByText("Publisher 1")).toBeInTheDocument();
    expect(screen.getByText("Publisher 2")).toBeInTheDocument();
  });

  it("opens and closes the accordion", () => {
    render(component);
    const accordionButton = screen.getByRole("button", { name: /Publisher/i });

    expect(screen.queryByText("Apply")).not.toBeInTheDocument();

    fireEvent.click(accordionButton);

    expect(screen.getByText("Apply")).toBeInTheDocument();

    fireEvent.click(accordionButton);

    expect(screen.queryByText("Apply")).not.toBeInTheDocument();
  });

  it("updates the selection and enables the apply button when a radio option is selected", () => {
    render(component);

    fireEvent.click(screen.getByRole("button", { name: /Publisher/i }));
    expect(screen.getByText("Apply")).toBeDisabled();

    const firstRadio = screen.getByRole("radio", { name: "Publisher 1 10" });
    fireEvent.click(firstRadio);

    expect(firstRadio).toBeChecked();
    expect(screen.getByText("Apply")).not.toBeDisabled();
  });

  it("allows user to apply, then clear selected filter", async () => {
    render(component);

    fireEvent.click(screen.getByRole("button", { name: /Publisher/i }));
    expect(screen.getByText("Apply")).toBeDisabled();

    const firstRadio = screen.getByRole("radio", { name: "Publisher 1 10" });
    fireEvent.click(firstRadio);

    expect(firstRadio).toBeChecked();
    expect(screen.getByText("Apply")).not.toBeDisabled();
    fireEvent.click(screen.getByRole("button", { name: /Apply/i }));

    setTimeout(() => {
      expect(screen.getByText("Publisher: Publisher 1")).toBeInTheDocument();
      fireEvent.click(
        screen.getByRole("button", { name: /Select publisher/i })
      );
      expect(
        screen.getByRole("button", { name: /Clear filter/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /Clear filter/i })
      ).toBeEnabled();
    }, 2000);
  });

  it("opens modal with view more button", () => {
    render(component);

    const accordionButton = screen.getByRole("button", { name: /Publisher/i });
    fireEvent.click(accordionButton);

    const viewMoreButton = screen.getByText("View all publishers");
    fireEvent.click(viewMoreButton);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
