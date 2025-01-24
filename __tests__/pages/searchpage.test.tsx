import SearchPage from "@/src/components/pages/searchPage/searchPage";
import { render } from "@testing-library/react";
import { mockItems } from "__tests__/__mocks__/data/mockItems";

import { axe } from "jest-axe";
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe("Search page accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<SearchPage data={mockItems} />);
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
