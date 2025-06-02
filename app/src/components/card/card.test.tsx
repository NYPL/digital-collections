import { render, screen } from "@testing-library/react";
import { mockCollections } from "__tests__/__mocks__/data/mockCollections";
import { Card as DCCard } from "./card";
import { ItemCardModel } from "@/src/models/itemCard";
import { mockItems } from "__tests__/__mocks__/data/mockItems";
import { CollectionCardModel } from "@/src/models/collectionCard";

describe("Collection DCCard component", () => {
  const mockCollectionProps = {
    cardOffset: [0, -130],
    imageHeight: 144,
    slug: "test-slug",
    id: "1",
    isLargerThanLargeTablet: true,
    record: new CollectionCardModel(mockCollections[0]),
  };

  const mockCollectionPropsNoOnSite = {
    cardOffset: [0, -130],
    imageHeight: 144,
    slug: "test-slug",
    id: "1",
    isLargerThanLargeTablet: true,
    record: new CollectionCardModel(mockCollections[4]),
  };

  it("renders the correct heading with the provided title", () => {
    render(<DCCard {...mockCollectionProps} />);
    const headingElement = screen.getByRole("heading", {
      name: /Posada Collection/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the badge when containsOnSiteMaterials is true", () => {
    render(<DCCard {...mockCollectionProps} />);
    const card = new CollectionCardModel(mockCollections[0]);
    const badgeElement = screen.getByText(/Contains on-site materials/i);
    expect(badgeElement).toBeInTheDocument();
  });

  it("does not render the badge when containsOnSiteMaterials is false", () => {
    render(<DCCard {...mockCollectionPropsNoOnSite} />);
    const badgeElement = screen.queryByText(/Contains on-site materials/i);
    expect(badgeElement).not.toBeInTheDocument();
  });

  it("renders the correct number of items", () => {
    render(<DCCard {...mockCollectionPropsNoOnSite} />);
    const itemCountElement = screen.getByText(/35 items/i);
    expect(itemCountElement).toBeInTheDocument();
  });

  it("wraps card in the correct link", () => {
    render(<DCCard {...mockCollectionProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      expect.stringContaining(
        "/collections/60932400-20f2-0138-8583-05c43d44877"
      )
    );
  });
});

describe("Item DCCard component", () => {
  const mockItemProps = {
    cardOffset: [0, -130],
    imageHeight: 144,
    id: "1",
    isLargerThanLargeTablet: true,
    record: new ItemCardModel(mockItems[0]),
  };

  it("renders the correct heading with the provided title", () => {
    render(<DCCard {...mockItemProps} />);
    const headingElement = screen.getByRole("heading", {
      name: /Sarah Myers Blackwell sitting in a tree/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("wraps card in the correct link", () => {
    render(<DCCard {...mockItemProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      expect.stringContaining("/items/50370c90-cabb-013c-da64-0242ac110002")
    );
  });
});
