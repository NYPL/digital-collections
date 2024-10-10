import { fireEvent, render, screen, within } from "@testing-library/react";
import { mockCollections } from "__tests__/__mocks__/data/mockCollections";
import { mockItems } from "__tests__/__mocks__/data/mockItems";
import { DC_URL } from "@/src/config/constants";
import { CardsGrid } from "./cardsGrid";
import { Card } from "@nypl/design-system-react-components";

describe("Collections CardsGrid component", () => {
  it("renders the correct collection data", async () => {
    render(<CardsGrid records={mockCollections} />);
    const firstCard = screen.getByTestId("card-posada-collection-0");
    const badgeElement = screen.getByText(/Contains on-site materials/i);
    const link = screen.getByRole("link");
    expect(
      within(firstCard).getByText("Posada Collection")
    ).toBeInTheDocument();
    expect(within(firstCard).getByText("34 items")).toBeInTheDocument();
    expect(within(firstCard).findAllByRole("img")).toBeVisible;
    expect(link).toHaveAttribute(
      "href",
      expect.stringContaining("/collections/posada-collection#/?tab=navigation")
    );
    expect(badgeElement).toBeInTheDocument();
  });
});

describe("Item CardsGrid component", () => {
  it("renders the correct item data", async () => {
    render(<CardsGrid records={mockItems} />);
    const firstCard = screen.getByTestId(
      "card-sarah-myers-blackwell-sitting-in-a-tree-0"
    );
    const link = screen.getByRole("link");

    expect(
      within(firstCard).getByText("Sarah Myers Blackwell sitting in a tree")
    ).toBeInTheDocument();
    expect(within(firstCard).findAllByRole("img")).toBeVisible;
    expect(link).toHaveAttribute(
      "href",
      expect.stringContaining("/items/50370c90-cabb-013c-da64-0242ac110002")
    );
  });
});
