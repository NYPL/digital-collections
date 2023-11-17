import { render, screen, waitFor, within } from "@testing-library/react";
import FeaturedContentComponent from "./featuredContent";

describe("Featured Content component renders with expected props", () => {
  it("renders Digital Collections store content", async () => {
    render(<FeaturedContentComponent testRandomNumber={0} />);
    const component = screen.getByTestId("featured-content-0");
    await waitFor(() => {
      expect(
        within(component).getByText("Spotlight on the Public Domain")
      ).toBeInTheDocument();
      expect(within(component).getByRole("img")).toHaveAttribute(
        "src",
        "/pd_banner.png"
      );
      expect(within(component).getByRole("img")).toHaveAttribute(
        "alt",
        "Public Domain banner"
      );

      const button = within(component).getByRole("button");
      const link = button.parentElement;
      expect(link).toHaveAttribute("href", "https://publicdomain.nypl.org");
    });
  });

  it("renders Digital Collections store content", async () => {
    render(<FeaturedContentComponent testRandomNumber={1} />);
    const component = screen.getByTestId("featured-content-1");
    await waitFor(() => {
      expect(
        within(component).getByText("Digital Collections Print Store")
      ).toBeInTheDocument();
      expect(within(component).getByRole("img")).toHaveAttribute(
        "src",
        "/service-artehouse.jpg"
      );
      expect(within(component).getByRole("img")).toHaveAttribute(
        "alt",
        "Service Artehouse banner"
      );

      const button = within(component).getByRole("button");
      const link = button.parentElement;
      expect(link).toHaveAttribute(
        "href",
        "https://nypl.artehouse.com/perl/home.pl"
      );
    });
  });
});
