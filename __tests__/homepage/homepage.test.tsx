import { render } from "@testing-library/react";
import Home from "../../src/pages/index";
import { axe } from "jest-axe";
import { props } from "../data/homepageProps";

describe("Homepage Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Home {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
