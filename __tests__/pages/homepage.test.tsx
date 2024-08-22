import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { mockHomePageMainContent } from "__tests__/__mocks__/data/mockHomePageMainContent";
import HomePage from "@/src/components/pages/homePage/homePage";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe("Homepage Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<HomePage data={mockHomePageMainContent} />);
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
