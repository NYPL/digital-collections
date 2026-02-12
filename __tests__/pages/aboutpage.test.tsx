import { render } from "@testing-library/react";
import About from "app/about/page";
import { axe } from "jest-axe";
import { useSearchParams } from "next/navigation";
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

beforeEach(() => {
  (useSearchParams as jest.Mock).mockImplementation(() => ({
    get: (value) => null,
  }));
});

describe("About page accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<About />);
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
