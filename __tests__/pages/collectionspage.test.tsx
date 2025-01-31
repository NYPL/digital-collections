import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { mockCollectionsResponse } from "__tests__/__mocks__/data/api/mockCollectionsResponse";
import { CollectionsPage } from "@/src/components/pages/collectionsPage/collectionsPage";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

beforeEach(() => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    pathname: "/collections",
  }));
});

describe("All collections page accessibility", () => {
  const searchParams = {
    collection_keywords: "flower",
    sort: "title-asc",
    page: "2",
  };
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <CollectionsPage
        data={mockCollectionsResponse}
        collectionSearchParams={searchParams}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
