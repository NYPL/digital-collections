import CollectionPage from "@/src/components/pages/collectionPage/collectionPage";
import { render } from "@testing-library/react";
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
      <CollectionPage
        searchParams={searchParams}
        slug="Example collection"
        data={mockItems}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
