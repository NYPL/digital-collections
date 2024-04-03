import About from "@/pages/about";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";

describe("About page accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<About />);
    expect(await axe(container)).toHaveNoViolations();
  }, 15000);
});
