import { fireEvent, render, screen, within } from "@testing-library/react";
import ExploreFurther from "./exploreFurther";

describe("Explore Further component", () => {
  it("renders with expected links/images", () => {
    render(<ExploreFurther />);
    const component = screen.getByTestId("explore-further");
    expect(within(component).getByText("Explore further")).toBeInTheDocument();
    expect(
      within(component).getByText("NYPL Digital Collections API")
    ).toHaveAttribute("href", "https://api.repo.nypl.org/");
    expect(
      within(component).getByText("NYPL Archives and Manuscripts")
    ).toHaveAttribute("href", "http://archives.nypl.org/");
  });

  it("should show the lazyloading images on scroll", async () => {
    render(<ExploreFurther />);
    fireEvent.scroll(window, { target: { scrollY: 1500 } });
    expect(await screen.findByTestId("test-id-0")).toBeVisible();
    expect(await screen.findByTestId("test-id-1")).toBeVisible();
    expect(await screen.findByTestId("test-id-2")).toBeVisible();
  });
});
