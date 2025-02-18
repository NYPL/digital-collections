import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SelectFilterModal from "./selectFilterModal";
import type { FilterCategory } from "./selectFilter";
import { useState } from "react";

jest.mock("@chakra-ui/react", () => {
  const actual = jest.requireActual("@chakra-ui/react");
  return {
    ...actual,
    useDisclosure: jest.fn(() => {
      const [isOpen, setIsOpen] = useState(false);
      return {
        isOpen,
        onOpen: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
      };
    }),
  };
});

describe("SelectFilterModal", () => {
  const mockOnOpen = jest.fn();
  const mockOnClose = jest.fn();
  const mockSetSelected = jest.fn();

  const mockFilter: FilterCategory = {
    name: "Genre",
    options: [
      { name: "Fiction", count: 10 },
      { name: "Non-Fiction", count: 20 },
      { name: "Mystery", count: 30 },
    ],
  };

  it("renders modal button", () => {
    render(
      <SelectFilterModal
        filter={mockFilter}
        onOpen={mockOnOpen}
        onClose={mockOnClose}
        selected={null}
        setSelected={mockSetSelected}
      />
    );

    expect(screen.getByText("View all genres")).toBeInTheDocument();
  });

  it("opens modal on button click", async () => {
    render(
      <SelectFilterModal
        filter={mockFilter}
        onOpen={mockOnOpen}
        onClose={mockOnClose}
        selected={null}
        setSelected={mockSetSelected}
      />
    );

    const button = screen.getByText("View all genres");
    fireEvent.click(button);

    expect(mockOnOpen).toHaveBeenCalled();
  });

  it("filters options based on search input", async () => {
    render(
      <SelectFilterModal
        filter={mockFilter}
        onOpen={mockOnOpen}
        onClose={mockOnClose}
        selected={null}
        setSelected={mockSetSelected}
      />
    );

    fireEvent.click(screen.getByText("View all genres"));
    const searchInput = screen.getByPlaceholderText("Search genres");

    fireEvent.change(searchInput, {
      target: { value: "Mystery" },
    });

    await waitFor(() => {
      expect(
        screen.queryByRole("radio", { name: "Mystery 30" })
      ).toBeInTheDocument();
      expect(
        screen.queryByRole("radio", { name: "Fiction 10" })
      ).not.toBeInTheDocument();
    });
  });

  it("selects an option when clicked", async () => {
    render(
      <SelectFilterModal
        filter={mockFilter}
        onOpen={mockOnOpen}
        onClose={mockOnClose}
        selected={null}
        setSelected={mockSetSelected}
      />
    );

    fireEvent.click(screen.getByText("View all genres"));

    await waitFor(() => {
      const option = screen.getByRole("radio", { name: "Fiction 10" });
      fireEvent.click(option);
      expect(mockSetSelected).toHaveBeenCalledWith({
        name: "Fiction",
        count: 10,
      });
    });
  });

  it("clears search and displays all possible results", async () => {
    render(
      <SelectFilterModal
        filter={mockFilter}
        onOpen={mockOnOpen}
        onClose={mockOnClose}
        selected={null}
        setSelected={mockSetSelected}
      />
    );

    fireEvent.click(screen.getByText("View all genres"));
    const searchInput = screen.getByPlaceholderText("Search genres");
    fireEvent.change(searchInput, {
      target: { value: "Mystery" },
    });

    await waitFor(() => {
      expect(
        screen.queryByRole("radio", { name: "Mystery 30" })
      ).toBeInTheDocument();
      expect(
        screen.queryByRole("radio", { name: "Fiction 10" })
      ).not.toBeInTheDocument();
    });

    const clearButton = screen.getByRole("button", {
      name: "Clear Genre search",
    });

    fireEvent.click(clearButton);
    expect(screen.getByRole("textbox")).toHaveValue("");
    expect(clearButton).not.toBeInTheDocument();
    await waitFor(() => {
      expect(
        screen.queryByRole("radio", { name: "Mystery 30" })
      ).toBeInTheDocument();
      expect(
        screen.queryByRole("radio", { name: "Fiction 10" })
      ).toBeInTheDocument();
      expect(
        screen.queryByRole("radio", { name: "Non-Fiction 20" })
      ).toBeInTheDocument();
    });
  });

  it("closes modal when clicking close button", async () => {
    render(
      <SelectFilterModal
        filter={mockFilter}
        onOpen={mockOnOpen}
        onClose={mockOnClose}
        selected={null}
        setSelected={mockSetSelected}
      />
    );
    fireEvent.click(screen.getByText("View all genres"));

    await waitFor(() => {
      const closeButton = screen.getByRole("button", { name: "Close" });
      fireEvent.click(closeButton);
      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
