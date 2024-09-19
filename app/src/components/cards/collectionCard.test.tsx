import { render, screen } from "@testing-library/react";
import { mockCollectionCards } from "__tests__/__mocks__/data/mockCollectionCards";
import DCCard from "./DCCard";
import { useRef } from "react";

describe("Collection DCCard component", () => {
  const mockProps = {
    cardRef: useRef<HTMLDivElement>(null),
    cardOffset: [0, -130],
    slug: "test-slug",
    id: 1,
    isLargerThanLargeTablet: true,
    record: mockCollectionCards[0],
  };

  const mockPropsNoOnSite = {
    cardRef: useRef(null),
    cardOffset: [0, -130],
    slug: "test-slug",
    id: 1,
    isLargerThanLargeTablet: true,
    record: mockCollectionCards[4],
  };

  it("renders the correct heading with the provided title", () => {
    render(<DCCard {...mockProps} />);
    const headingElement = screen.getByRole("heading", {
      name: /Posada Collection/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the badge when containsOnSiteMaterials is true", () => {
    render(<DCCard {...mockProps} />);
    const badgeElement = screen.getByText(/Contains on-site materials/i);
    expect(badgeElement).toBeInTheDocument();
  });

  it("does not render the badge when containsOnSiteMaterials is false", () => {
    render(<DCCard {...mockPropsNoOnSite} />);
    const badgeElement = screen.queryByText(/Contains on-site materials/i);
    expect(badgeElement).not.toBeInTheDocument();
  });

  it("renders the correct number of items", () => {
    render(<DCCard {...mockProps} />);
    const itemCountElement = screen.getByText(/34 items/i);
    expect(itemCountElement).toBeInTheDocument();
  });
});

describe("Item DCCard component", () => {
  it.todo("renders the correct heading with the provided title", () => {});
});
