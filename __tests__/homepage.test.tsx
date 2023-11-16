import { render } from "@testing-library/react";
import Home from "../src/pages/index";
import { axe } from "jest-axe";
import { props } from "./data/homepageProps";
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe("Homepage Accessibility", () => {
  it("passes axe accessibility test", async () => {
    window.ResizeObserver = ResizeObserver;
    const { container } = render(<Home {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
