import { render, screen } from "@testing-library/react";
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

  it("renders the expected text content", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Notification banner")).toBeInTheDocument();
    expect(getByText("Header")).toBeInTheDocument();
    expect(getByText("First swim lane")).toBeInTheDocument();
    expect(getByText("Featured Content")).toBeInTheDocument();
    expect(getByText("Rest of swim lanes")).toBeInTheDocument();
    expect(getByText("Explore further links")).toBeInTheDocument();
    expect(getByText("Footer")).toBeInTheDocument();
  });
});
