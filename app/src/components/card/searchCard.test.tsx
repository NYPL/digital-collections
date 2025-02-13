import { render, screen } from "@testing-library/react";
import { SearchCard } from "./searchCard";
import { mockSearchCards } from "__tests__/__mocks__/data/mockSearchCards";

const collectionResultData = mockSearchCards[0];
const itemResultData = mockSearchCards[3];

describe("Search card displaying collection result", () => {
  it("renders the correct heading with the provided title", () => {
    render(<SearchCard result={collectionResultData} keywords={""} />);
    const headingElement = screen.getByRole("heading", {
      name: collectionResultData.title,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the badge when containsOnSiteMaterial is true", () => {
    render(<SearchCard result={collectionResultData} keywords={""} />);
    const badgeElement = screen.getByText(/Contains on-site materials/i);
    expect(badgeElement).toBeInTheDocument();
  });

  it("wraps card in the correct link", () => {
    render(<SearchCard result={collectionResultData} keywords={""} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      expect.stringContaining("/collections/posada-collection#/?tab=navigation")
    );
  });

  it("renders the correct content type tag", () => {
    render(<SearchCard result={collectionResultData} keywords={""} />);
    const tagElement = screen.getByText("Collection");
    expect(tagElement).toBeInTheDocument();
  });
});

describe("Search card displaying item result", () => {
  it("renders the correct heading with the provided title", () => {
    render(<SearchCard result={itemResultData} keywords={""} />);
    const headingElement = screen.getByRole("heading", {
      name: itemResultData.title,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("wraps card in the correct link", () => {
    render(<SearchCard result={itemResultData} keywords={""} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      expect.stringContaining("items/12563fb0-63a2-013b-bd44-0242ac110003")
    );
  });

  it("renders the badge when containsOnSiteMaterial is true", () => {
    render(<SearchCard result={itemResultData} keywords={""} />);
    const badgeElement = screen.getByText(/Available onsite only/i);
    expect(badgeElement).toBeInTheDocument();
  });

  it("renders the correct content type tag", () => {
    render(<SearchCard result={itemResultData} keywords={""} />);
    const tagElement = screen.getByText("Multiple images");
    expect(tagElement).toBeInTheDocument();
  });
});

describe("Search card displaying highlighted text for keywords", () => {
  it("renders the correct card with the provided title", () => {
    render(<SearchCard result={itemResultData} keywords={"example in"} />);
    const headingElement = screen.getByRole("heading", {
      name: itemResultData.title,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("displays text with highlight field in card", () => {
    render(<SearchCard result={itemResultData} keywords={"example in"} />);
    const descriptionElement = screen.getByText(
      `${itemResultData.highlights[0].field}:`
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it("highlights the correct words", () => {
    // Highlight is {field: "Title", text: "Reading in example room"}
    render(<SearchCard result={itemResultData} keywords={"example in"} />);
    const highlightedElement = screen.getByText("example");
    const styles = getComputedStyle(highlightedElement);
    expect(styles.backgroundColor).toBe("rgba(249, 224, 142, 0.7)");

    const highlightedElement2 = screen.getByText("in");
    const styles2 = getComputedStyle(highlightedElement2);
    expect(styles2.backgroundColor).toBe("rgba(249, 224, 142, 0.7)");

    const nonHighlightedElement = screen.getByText("Reading");
    const nonStyles = getComputedStyle(nonHighlightedElement);
    expect(nonStyles.backgroundColor).not.toBe("rgba(249, 224, 142, 0.7)");
  });
});
