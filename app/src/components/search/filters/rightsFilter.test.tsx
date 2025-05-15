import { render, screen, fireEvent } from "@testing-library/react";
import RightsFilter from "./rightsFilter";
import { useRouter, usePathname } from "next/navigation";
import { SearchManager } from "@/src/utils/searchManager";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({ push: mockPush });
(usePathname as jest.Mock).mockReturnValue("/search");

const mockManager = {
  filters: [],
  handleAddFilter: jest.fn(() => "filters=rights=publicDomain"),
  lastFilterRef: { current: null },
  setLastFilter: () => {
    return;
  },
};

describe("RightsFilter", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all radio options", () => {
    render(
      <RightsFilter searchManager={mockManager as unknown as SearchManager} />
    );

    expect(screen.getByLabelText("Public domain")).toBeInTheDocument();
    expect(screen.getByLabelText("Available online")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Contains on-site materials")
    ).toBeInTheDocument();
  });

  it("selects an option and updates the URL", () => {
    render(
      <RightsFilter searchManager={mockManager as unknown as SearchManager} />
    );

    const radio = screen.getByLabelText("Public domain");
    fireEvent.click(radio);

    expect(mockManager.handleAddFilter).toHaveBeenCalledWith([
      { filter: "rights", value: "publicDomain" },
    ]);

    expect(mockPush).toHaveBeenCalledWith(
      "/search?filters=rights=publicDomain"
    );
  });

  it("renders a selected radio if rights filter is already applied", () => {
    const preselectedManager = {
      ...mockManager,
      filters: [{ filter: "rights", value: "availableOnline" }],
    };

    render(
      <RightsFilter
        searchManager={preselectedManager as unknown as SearchManager}
      />
    );

    const radio = screen.getByLabelText("Available online") as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });
});
