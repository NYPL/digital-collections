import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import CollectionStructure from "./collectionStructure";
import { mockCollectionChildrenResponse } from "__tests__/__mocks__/data/mockCollectionStructure";
import React from "react";

jest.mock("../../hooks/useScrollIntoViewIfNeeded", () => ({
  useScrollIntoViewIfNeeded: jest.fn(() => ({
    ref: { current: null },
    scrollIntoViewIfNeeded: jest.fn(),
  })),
}));

describe("CollectionStructure", () => {
  const mockHeadingRef = React.createRef<HTMLHeadingElement>();

  it("should render the collection structure with items", () => {
    render(
      <CollectionStructure
        data={mockCollectionChildrenResponse}
        ref={mockHeadingRef}
      />
    );
    mockCollectionChildrenResponse.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it("should toggle the visibility of children when an item is opened", async () => {
    render(
      <CollectionStructure
        data={mockCollectionChildrenResponse}
        ref={mockHeadingRef}
      />
    );

    const firstItemButton = screen.getByText(
      mockCollectionChildrenResponse[0].title
    );
    fireEvent.click(firstItemButton);

    const firstItemChildren = mockCollectionChildrenResponse[0].children;
    firstItemChildren?.forEach((child) => {
      expect(screen.getByText(child.title)).toBeInTheDocument();
    });
  });

  it("should fetch and display children", async () => {
    render(
      <CollectionStructure
        data={mockCollectionChildrenResponse}
        ref={mockHeadingRef}
      />
    );
    const firstItemButton = screen.getByText(
      mockCollectionChildrenResponse[0].title
    );
    fireEvent.click(firstItemButton);

    await waitFor(() => {
      const firstItemChildren = mockCollectionChildrenResponse[0].children;
      if (firstItemChildren) {
        firstItemChildren.forEach((child) => {
          expect(screen.getByText(child.title)).toBeInTheDocument();
        });
      }
    });
  });

  it("should handle toggling sibling visibility", async () => {
    render(
      <CollectionStructure
        data={mockCollectionChildrenResponse}
        ref={mockHeadingRef}
      />
    );

    const firstItemButton = screen.getByText(
      mockCollectionChildrenResponse[0].title
    );
    const secondItemButton = screen.getByText(
      mockCollectionChildrenResponse[1].title
    );

    fireEvent.click(firstItemButton);
    await waitFor(() => {
      expect(
        screen.getByText(
          mockCollectionChildrenResponse[0]?.children?.[0]?.title!
        )
      ).toBeVisible();
    });

    fireEvent.click(secondItemButton);
    await waitFor(() => {
      expect(
        screen.getByText(
          mockCollectionChildrenResponse[1]?.children?.[0]?.title!
        )
      ).toBeVisible();
      expect(
        screen.getByText(
          mockCollectionChildrenResponse[0]?.children?.[0]?.title!
        )
      ).not.toBeVisible();
    });
  });

  it("should display the plus/minus icon for items with children", () => {
    render(
      <CollectionStructure
        data={mockCollectionChildrenResponse}
        ref={mockHeadingRef}
      />
    );

    const firstItemButton = screen.getByRole("button", {
      name: `${mockCollectionChildrenResponse[0].title} ${mockCollectionChildrenResponse[0].itemCount}`,
    });

    expect(within(firstItemButton).getByTitle("plus icon")).toBeInTheDocument();

    fireEvent.click(firstItemButton);

    expect(
      within(firstItemButton).getByTitle("minus icon")
    ).toBeInTheDocument();
  });

  it("should display the correct number of items", () => {
    render(
      <CollectionStructure
        data={mockCollectionChildrenResponse}
        ref={mockHeadingRef}
      />
    );

    mockCollectionChildrenResponse.forEach((item) => {
      expect(screen.getByText(item.itemCount)).toBeInTheDocument();
    });
  });
});
