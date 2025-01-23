import { render, screen, waitFor, within } from "@testing-library/react";
import React from "react";
import FeaturedContentComponent from "./featuredContent";

describe("Featured Content component renders with expected props", () => {
  it("renders public domain content", async () => {
    render(<FeaturedContentComponent randomNumber={0} />);
    const component = screen.getByTestId("featured-content-0");
    await waitFor(() => {
      expect(
        within(component).getByText("Spotlight on the public domain")
      ).toBeInTheDocument();
      expect(within(component).getByRole("img")).toHaveAttribute(
        "src",
        "/pd_banner.png"
      );

      const button = within(component).getByTestId("featured-learn-more");
      expect(button).toHaveAttribute(
        "href",
        "https://www.nypl.org/research/resources/public-domain-collections"
      );
    });
  });

  it("renders Digital Collections store content", async () => {
    render(<FeaturedContentComponent randomNumber={1} />);
    const component = screen.getByTestId("featured-content-1");
    await waitFor(() => {
      expect(
        within(component).getByText("Digital Collections print store")
      ).toBeInTheDocument();
      expect(within(component).getByRole("img")).toHaveAttribute(
        "src",
        "/service-artehouse.jpg"
      );

      const button = within(component).getByTestId("featured-visit-store");
      expect(button).toHaveAttribute(
        "href",
        "https://nypl.artehouse.com/perl/home.pl"
      );
    });
  });
});
