import About from "@/pages/about";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe("About page accessibility", () => {
  it("passes axe accessibility test", async () => {
    window.ResizeObserver = ResizeObserver;
    const { container } = render(<About />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
