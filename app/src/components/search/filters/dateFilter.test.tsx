import { render, screen, fireEvent } from "@testing-library/react";
import DateFilter from "./dateFilter";
import { useRouter, usePathname } from "next/navigation";
import { SearchManager } from "@/src/utils/searchManager";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

let mockPush = jest.fn();

(useRouter as jest.Mock).mockReturnValue({ push: mockPush });
(usePathname as jest.Mock).mockReturnValue("/search");

const mockManager = {
  filters: [],
  handleAddFilter: jest.fn(() => "filters=[dateStart=1900][dateEnd=2000]"),
  handleRemoveFilter: jest.fn(() => "filters="),
  lastFilterRef: { current: null },
  setLastFilter: () => {
    return;
  },
};

let component = (
  <DateFilter searchManager={mockManager as unknown as SearchManager} />
);

describe("DateFilter", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders both input fields and button", () => {
    render(component);

    expect(screen.getByLabelText("Start year")).toBeInTheDocument();
    expect(screen.getByLabelText("End year")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Apply dates/i })
    ).toBeInTheDocument();
  });

  it("enables button only for valid input", () => {
    render(component);

    const button = screen.getByRole("button", { name: /Apply dates/i });

    // Initially enabled
    expect(button).toBeEnabled();

    const startInput = screen.getByLabelText("Start year");
    const endInput = screen.getByLabelText("End year");

    fireEvent.change(startInput, { target: { value: "1900" } });
    fireEvent.change(endInput, { target: { value: "2000" } });

    expect(button).not.toBeDisabled();
  });

  it("disables button for invalid year input", () => {
    render(component);

    const startInput = screen.getByLabelText("Start year");
    const endInput = screen.getByLabelText("End year");

    fireEvent.change(startInput, { target: { value: "abcd" } });
    fireEvent.change(endInput, { target: { value: "-100" } });

    const button = screen.getByRole("button", { name: /Apply dates/i });
    expect(button).toBeDisabled();
  });

  it("updates URL when clicking apply", () => {
    render(component);

    const startInput = screen.getByLabelText("Start year");
    const endInput = screen.getByLabelText("End year");
    const button = screen.getByRole("button", { name: /Apply dates/i });

    fireEvent.change(startInput, { target: { value: "1900" } });
    fireEvent.change(endInput, { target: { value: "2000" } });

    fireEvent.click(button);

    expect(mockManager.handleAddFilter).toHaveBeenCalledWith([
      { filter: "dateStart", value: "1900" },
      { filter: "dateEnd", value: "2000" },
    ]);

    expect(mockPush).toHaveBeenCalledWith(
      "/search?filters=[dateStart=1900][dateEnd=2000]"
    );
  });

  it("clears filters when both inputs are empty", () => {
    const managerWithFilters = {
      ...mockManager,
      filters: [
        { filter: "dateStart", value: "1900" },
        { filter: "dateEnd", value: "2000" },
      ],
      handleRemoveFilter: jest.fn(() => "filters="),
    };

    render(
      <DateFilter
        searchManager={managerWithFilters as unknown as SearchManager}
      />
    );

    const startInput = screen.getByLabelText("Start year");
    const endInput = screen.getByLabelText("End year");

    fireEvent.change(startInput, { target: { value: "" } });
    fireEvent.change(endInput, { target: { value: "" } });

    const button = screen.getByRole("button", { name: /Apply dates/i });

    fireEvent.click(button);

    expect(managerWithFilters.handleRemoveFilter).toHaveBeenCalledWith([
      { filter: "dateStart", value: "" },
      { filter: "dateEnd", value: "" },
    ]);

    expect(mockPush).toHaveBeenCalledWith("/search?filters=");
  });
});
