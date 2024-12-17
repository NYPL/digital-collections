import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { mockCollectionsResponse } from "__tests__/__mocks__/data/mockApiResponses";
import { CollectionsPage } from "@/src/components/pages/collectionsPage/collectionsPage";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe.skip("Collections page Accessibility", () => {
  const searchParams = {
    collection_keywords: "flower",
    sort: "title-asc",
    page: "2",
  };
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <CollectionsPage
        data={mockCollectionsResponse}
        params={searchParams}
        renderCollections={true}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
