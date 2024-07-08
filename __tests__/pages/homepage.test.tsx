import { render } from "@testing-library/react";
import Home from "../../app/page";
import { axe } from "jest-axe";
import { props } from "../data/homepageProps";
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe("Homepage Accessibility", () => {
  (global as any).fetch = jest.fn(() =>
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve({}),
    })
  ) as jest.Mock;
  it("passes axe accessibility test", async () => {
    const { container } = render(<Home {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
