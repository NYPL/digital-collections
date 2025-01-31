import { render, screen } from "@testing-library/react";
import { SearchCard } from "./searchCard";
import { mockSearchCards } from "__tests__/__mocks__/data/mockSearchCards";

const collectionResultData = mockSearchCards[0];
const itemResultData = mockSearchCards[3];

describe("Search card displaying collection result", () => {
  it("renders the correct heading with the provided title", () => {
    render(<SearchCard result={collectionResultData} keywords={[]} />);
    const headingElement = screen.getByRole("heading", {
      name: collectionResultData.title,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the badge when containsOnSiteMaterial is true", () => {
    render(<SearchCard result={collectionResultData} keywords={[]} />);
    const badgeElement = screen.getByText(/Contains on-site materials/i);
    expect(badgeElement).toBeInTheDocument();
  });

  it("wraps card in the correct link", () => {
    render(<SearchCard result={collectionResultData} keywords={[]} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      expect.stringContaining("/collections/posada-collection#/?tab=navigation")
    );
  });

  it("renders the correct content type tag", () => {
    render(<SearchCard result={collectionResultData} keywords={[]} />);
    const tagElement = screen.getByText("Collection");
    expect(tagElement).toBeInTheDocument();
  });
});

describe("Search card displaying item result", () => {
  it("renders the correct heading with the provided title", () => {
    render(<SearchCard result={itemResultData} keywords={[]} />);
    const headingElement = screen.getByRole("heading", {
      name: itemResultData.title,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("wraps card in the correct link", () => {
    render(<SearchCard result={itemResultData} keywords={[]} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      expect.stringContaining("items/12563fb0-63a2-013b-bd44-0242ac110003")
    );
  });

  it("renders the badge when containsOnSiteMaterial is true", () => {
    render(<SearchCard result={itemResultData} keywords={[]} />);
    const badgeElement = screen.getByText(/Available onsite only/i);
    expect(badgeElement).toBeInTheDocument();
  });

  it("renders the correct content type tag", () => {
    render(<SearchCard result={itemResultData} keywords={[]} />);
    const tagElement = screen.getByText("Multiple images");
    expect(tagElement).toBeInTheDocument();
  });
});
