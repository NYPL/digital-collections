import { render, screen } from "@testing-library/react";
import { mockCollectionCards } from "__tests__/__mocks__/data/mockCollectionCards";
import CollectionCard from "./collectionCard";

describe("Collection card component", () => {
  const mockProps = {
    slug: "test-slug",
    id: 1,
    isLargerThanLargeTablet: true,
    collection: mockCollectionCards[0],
    isLargerThanDesktop: true,
  };

  const mockPropsNoOnSite = {
    slug: "test-slug",
    id: 1,
    isLargerThanLargeTablet: true,
    collection: mockCollectionCards[4],
    isLargerThanDesktop: true,
  };

  it("renders the correct heading with the provided title", () => {
    render(<CollectionCard {...mockProps} />);
    const headingElement = screen.getByRole("heading", {
      name: /Posada Collection/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the badge when containsOnSiteMaterials is true", () => {
    render(<CollectionCard {...mockProps} />);
    const badgeElement = screen.getByText(/Contains on-site materials/i);
    expect(badgeElement).toBeInTheDocument();
  });

  it("does not render the badge when containsOnSiteMaterials is false", () => {
    render(<CollectionCard {...mockPropsNoOnSite} />);
    const badgeElement = screen.queryByText(/Contains on-site materials/i);
    expect(badgeElement).not.toBeInTheDocument();
  });

  it("renders the correct number of items", () => {
    render(<CollectionCard {...mockProps} />);
    const itemCountElement = screen.getByText(/34 items/i);
    expect(itemCountElement).toBeInTheDocument();
  });
});
