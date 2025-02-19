import CollectionPage from "@/src/components/pages/collectionPage/collectionPage";
import { render } from "@testing-library/react";
import { mockItems } from "__tests__/__mocks__/data/mockItems";

import { axe } from "jest-axe";
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe.skip("Collection page accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <CollectionPage slug="Example collection" data={mockItems} />
    );
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
