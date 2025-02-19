import SearchPage from "@/src/components/pages/searchPage/searchPage";
import { SearchProvider } from "@/src/context/SearchProvider";
import { render } from "@testing-library/react";
import { mockItems } from "__tests__/__mocks__/data/mockItems";
import { axe } from "jest-axe";
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: jest.fn(),
}));

describe.skip("Search page accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <SearchProvider>
        <SearchPage data={mockItems} />
      </SearchProvider>
    );
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
