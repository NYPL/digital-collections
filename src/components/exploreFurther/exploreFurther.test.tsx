import { render, screen, within } from "@testing-library/react";
import ExploreFurther from "./exploreFurther";

describe("Explore Further component", () => {
  it("renders with expected links/images", () => {
    render(<ExploreFurther />);
    const component = screen.getByTestId("explore-further");
    expect(within(component).getByText("Explore further")).toBeInTheDocument();
    expect(within(component).getAllByRole("img")[0]).toHaveAttribute(
      "src",
      "/service-artehouse.jpg"
    );
    expect(within(component).getAllByRole("img")[4]).toHaveAttribute(
      "src",
      "/service-dpla.jpg"
    );
    expect(
      within(component).getByText("NYPL Digital Collections API")
    ).toHaveAttribute("href", "https://api.repo.nypl.org/");
    expect(
      within(component).getByText("NYPL Archives and Manuscripts")
    ).toHaveAttribute("href", "http://archives.nypl.org/");
  });
});
