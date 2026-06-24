import { render, screen, waitFor, within } from "@testing-library/react";
import React from "react";
import FeaturedContentComponent from "./featuredContent";

describe("Featured Content component renders with expected props", () => {
  it("renders 250 Years of the United States content", async () => {
    render(<FeaturedContentComponent randomNumber={0} />);
    const component = screen.getByTestId("featured-content-2");
    await waitFor(() => {
      expect(
        within(component).getByText(
          "250 Years of the United States at The New York Public Library"
        )
      ).toBeInTheDocument();
      expect(within(component).getByRole("img")).toHaveAttribute(
        "src",
        "/250years.png"
      );

      const button = within(component).getByTestId(
        "featured-learn-more-250-years"
      );
      expect(button).toHaveAttribute(
        "href",
        "https://www.nypl.org/spotlight/250-years-united-states"
      );
    });
  });
});
