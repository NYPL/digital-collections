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

  it("renders SkipNavigation", () => {
    const { getByText } = render(<Home />);
    expect(getByText("SkipNavigation")).toBeInTheDocument();
  });

  it("renders Template", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Template")).toBeInTheDocument();
  });

  it("renders TemplateBreakout", () => {
    const { getByText } = render(<Home />);
    expect(getByText("TemplateBreakout")).toBeInTheDocument();
  });

  it("renders TemplateAboveHeader", () => {
    const { getByText } = render(<Home />);
    expect(getByText("TemplateAboveHeader")).toBeInTheDocument();
  });

  it("renders TemplateHeader", () => {
    const { getByText } = render(<Home />);
    expect(getByText("TemplateHeader")).toBeInTheDocument();
  });

  it("renders CampaignHero", () => {
    const { getByText } = render(<Home />);
    expect(getByText("CampaignHero")).toBeInTheDocument();
  });

  it("renders TemplateContent", () => {
    const { getByText } = render(<Home />);
    expect(getByText("TemplateContent")).toBeInTheDocument();
  });

  it("renders TemplateFooter", () => {
    const { getByText } = render(<Home />);
    expect(getByText("TemplateFooter")).toBeInTheDocument();
  });

  it("renders the expected text content", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Notification banner")).toBeInTheDocument();
    expect(getByText("Header")).toBeInTheDocument();
    expect(getByText("First swim lane")).toBeInTheDocument();
    expect(getByText("Featured Content")).toBeInTheDocument();
    expect(getByText("Rest of swim lanes")).toBeInTheDocument();
    expect(getByText("Explore further and links")).toBeInTheDocument();
    expect(getByText("Footer")).toBeInTheDocument();
  });
});
