import CollectionPage from "@/src/components/pages/collectionPage/collectionPage";
import { SearchProvider } from "@/src/context/SearchProvider";
import { CollectionModel } from "@/src/models/collection";
import { render } from "@testing-library/react";
import { mockCollectionResponse } from "__tests__/__mocks__/data/collectionsApi/mockCollectionResponse";
import { mockSearchResponse } from "__tests__/__mocks__/data/collectionsApi/mockSearchResponse";

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
    q: "flower",
    sort: "title-asc",
    page: 1,
    filters: "",
  };
  const mockMetadata = new CollectionModel(mockCollectionResponse);
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <SearchProvider>
        <CollectionPage
          searchParams={searchParams}
          searchResults={mockSearchResponse}
          collectionData={mockMetadata}
        />
      </SearchProvider>
    );
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
