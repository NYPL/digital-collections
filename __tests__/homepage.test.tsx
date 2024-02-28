import { render } from "@testing-library/react";
import Home from "../src/pages/index";
import { axe } from "jest-axe";
import { props } from "./data/homepageProps";
import logger from "./__mocks__/logger";
import { DSProvider } from "@nypl/design-system-react-components";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe("Homepage Accessibility", () => {
  it("passes axe accessibility test", async () => {
    window.ResizeObserver = ResizeObserver;
    const { container } = render(
      <DSProvider>
        <Home {...props} />
      </DSProvider>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
