import About from "../../src/app/about/page";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";

describe("About page accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<About />);
    expect(await axe(container)).toHaveNoViolations();
  }, 15000);
});
