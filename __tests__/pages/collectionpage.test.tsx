import CollectionPage from "@/src/components/pages/collectionPage/collectionPage";
import { SearchProvider } from "@/src/context/SearchProvider";
import { render } from "@testing-library/react";
import { mockCollectionResponse } from "__tests__/__mocks__/data/collectionsApi/mockCollectionResponse";
import { mockSearchResponse } from "__tests__/__mocks__/data/collectionsApi/mockSearchResponse";
import { mockCollectionChildrenResponse } from "__tests__/__mocks__/data/mockCollectionStructure";
import { mockItems } from "__tests__/__mocks__/data/mockItems";

import { axe } from "jest-axe";
import { useRouter } from "next/navigation";
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

beforeEach(() => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    pathname: "/collections/hello",
  }));
});

describe("Collection page accessibility", () => {
  const searchParams = {
    keywords: "flower",
    sort: "title-asc",
    page: "2",
  };
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <SearchProvider>
        <CollectionPage
          searchParams={searchParams}
          slug="Example collection"
          searchResults={mockSearchResponse}
          collectionData={mockCollectionResponse}
          collectionChildren={mockCollectionChildrenResponse}
        />
      </SearchProvider>
    );
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
