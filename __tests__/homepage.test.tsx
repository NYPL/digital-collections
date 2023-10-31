import { render, screen, within } from "@testing-library/react";
import Home from "../src/pages/index";
import { axe } from "jest-axe";

describe("Homepage Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Home />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Home", () => {
  it("renders the Campaign Hero", () => {
    render(<Home />);
    const header = screen.getByRole("heading", {
      name: "Explore 863,848 items digitized from The New York Public Library's collections.",
    });
    expect(header).toBeInTheDocument();
  });

  it("renders the Recently Digitized Items row", () => {
    render(<Home />);
    const recentlydigitizeditems = screen.getByTestId(
      "recently-digitized-collections"
    );
    expect(
      within(recentlydigitizeditems).getAllByText(/See more/)[0]
    ).toHaveAttribute(
      "href",
      "https://digitalcollections.nypl.org/search/index?"
    );

    expect(
      within(recentlydigitizeditems).getByText("Posada Collection")
    ).toBeInTheDocument();
    expect(
      within(recentlydigitizeditems).getByText("MAVO")
    ).toBeInTheDocument();
    expect(
      within(recentlydigitizeditems).getByText(
        "Austin Hansen photograph collection"
      )
    ).toBeInTheDocument();
    expect(
      within(recentlydigitizeditems).getByText(
        "Arthur Alfonso Schomburg papers"
      )
    ).toBeInTheDocument();
  });

  it("renders the Photographs row", () => {
    render(<Home />);
    const photographs = screen.getByTestId("photographs");
    expect(within(photographs).getAllByText(/See more/)[0]).toHaveAttribute(
      "href",
      "https://digitalcollections.nypl.org/search/index?"
    );
    expect(
      within(photographs).getByText("Friedman-Abeles photographs")
    ).toBeInTheDocument();
    expect(
      within(photographs).getByText("Farm Security Administration Photographs")
    ).toBeInTheDocument();
    expect(
      within(photographs).getByText("Changing New York")
    ).toBeInTheDocument();
    expect(
      within(photographs).getByText("Diana Davies photographs")
    ).toBeInTheDocument();
  });

  it("renders the Fliers and Ephemera row", () => {
    render(<Home />);
    const fliers = screen.getByTestId("fliers-and-ephemera");
    expect(within(fliers).getAllByText(/See more/)[0]).toHaveAttribute(
      "href",
      "https://digitalcollections.nypl.org/search/index?"
    );
    expect(
      within(fliers).getByText("ACT UP New York records")
    ).toBeInTheDocument();
    expect(
      within(fliers).getByText("Wallach Division Picture Collection")
    ).toBeInTheDocument();
    expect(
      within(fliers).getByText(
        "Michael Cummings African American Art Event Ephemera Collection"
      )
    ).toBeInTheDocument();
    expect(
      within(fliers).getByText("Arthur Russell papers")
    ).toBeInTheDocument();
  });
});
