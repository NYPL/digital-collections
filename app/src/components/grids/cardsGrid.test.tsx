import { render, screen, within } from "@testing-library/react";
import { mockCollections } from "__tests__/__mocks__/data/mockCollections";
import { mockItems } from "__tests__/__mocks__/data/mockItems";
import { CardsGrid } from "./cardsGrid";

describe("Collections CardsGrid component", () => {
  it("renders the correct collection data", async () => {
    render(<CardsGrid records={mockCollections} />);
    const headingElement = screen.getByRole("heading", {
      name: /Posada Collection/i,
    });
    const itemCountElement = screen.getByText(/35 items/i);
    expect(headingElement).toBeInTheDocument();
    expect(itemCountElement).toBeInTheDocument();
  });
});

describe("Item CardsGrid component", () => {
  it("renders the correct item data", async () => {
    render(<CardsGrid records={mockItems} />);
    const headingElement = screen.getByRole("heading", {
      name: /Sarah Myers Blackwell sitting in a tree/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
