import React from "react";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import CollectionStructure from "./collectionStructure";
import {
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
} from "@/src/config/constants";
import { GeneralSearchManager } from "@/src/utils/searchManager/searchManager";

const mockSearchManager = new GeneralSearchManager({
  initialPage: 1,
  initialSort: DEFAULT_SEARCH_SORT,
  defaultSort: DEFAULT_SEARCH_SORT,
  initialFilters: [],
  initialKeywords: DEFAULT_SEARCH_TERM,
  lastFilterRef: { current: null },
});

const mockUpdateURL = jest.fn().mockResolvedValue(undefined);

describe("Collection structure", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation((url) => {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            children: [
              {
                title: "Item 1",
                uuid: "uuid-1",
                itemCount: "5",
                hasSubContainers: false,
              },
              {
                title: "Item 2",
                uuid: "uuid-2",
                itemCount: "3",
                hasSubContainers: true,
              },
            ],
          }),
      });
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders loader while loading", async () => {
    render(
      <CollectionStructure
        uuid="root-uuid"
        searchManager={mockSearchManager}
        updateURL={mockUpdateURL}
      />
    );
    await waitFor(() =>
      expect(
        screen.queryByTestId("loading-collection-structure")
      ).toBeInTheDocument()
    );
  });

  it("renders tree after loading", async () => {
    render(
      <CollectionStructure
        uuid="root-uuid"
        searchManager={mockSearchManager}
        updateURL={mockUpdateURL}
      />
    );
    await waitFor(() => expect(screen.getByText("Item 1")).toBeInTheDocument());
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("doesn't render when no children exist", async () => {
    global.fetch = jest.fn().mockImplementation((url) => {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            children: [],
          }),
      });
    });
    const { container } = render(
      <CollectionStructure
        uuid="root-uuid"
        searchManager={mockSearchManager}
        updateURL={mockUpdateURL}
      />
    );
    await waitFor(() => {
      expect(container).toBeEmptyDOMElement();
    });
  });

  it("fetches children on click", async () => {
    const fetchSpy = jest.spyOn(global, "fetch");

    render(
      <CollectionStructure
        uuid="root-uuid"
        searchManager={mockSearchManager}
        updateURL={mockUpdateURL}
      />
    );

    await waitFor(() => screen.getByText("Item 1"));

    await act(async () => {
      fireEvent.click(screen.getByText("Item 1"));
    });

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith(
        "/api/collectionchildren/uuid-1?page=1"
      );
    });
  });
});
