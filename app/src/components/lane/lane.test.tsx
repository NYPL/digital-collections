import { fireEvent, render, screen, within } from "@testing-library/react";
import { mockCollectionLanes } from "__tests__/__mocks__/data/mockCollectionLanes";
import { Lane as DCLane } from "./lane";

describe("Lanes component renders with expected collection props", () => {
  it("renders the first row", () => {
    render(
      <>
        {mockCollectionLanes.lanesWithNumItems.map((lane, key) => (
          <DCLane
            key={key}
            seeMoreLink={`/collections/lane`}
            records={lane.collections}
            laneName={lane.name}
            laneSlug={lane.slug}
          />
        ))}
      </>
    );
    const firstrow = screen.getByTestId("test-collections-1");
    expect(within(firstrow).getByText("Posada Collection")).toBeInTheDocument();
    expect(within(firstrow).getByText("34 items")).toBeInTheDocument();
    expect(within(firstrow).findAllByRole("img")).toBeVisible;
    expect(within(firstrow).getByText("MAVO")).toBeInTheDocument();
    expect(
      within(firstrow).getByText("Austin Hansen photograph collection")
    ).toBeInTheDocument();
    expect(
      within(firstrow).getByText(/Arthur Alfonso Schomburg papers/)
    ).toBeInTheDocument();
  });

  it("renders the second row", () => {
    render(
      <>
        {mockCollectionLanes.lanesWithNumItems.map((lane, key) => (
          <DCLane
            key={key}
            seeMoreLink={`/collections/lane`}
            records={lane.collections}
            laneName={lane.name}
            laneSlug={lane.slug}
          />
        ))}
      </>
    );
    const secondrow = screen.getByTestId("test-collections-2");
    expect(
      within(secondrow).getByText("Friedman-Abeles photographs")
    ).toBeInTheDocument();
    expect(within(secondrow).getByText("35 items")).toBeInTheDocument();
    expect(within(secondrow).findAllByRole("img")).toBeVisible;
    expect(
      within(secondrow).getByText("Farm Security Administration Photographs")
    ).toBeInTheDocument();
    expect(
      within(secondrow).getByText("Changing New York")
    ).toBeInTheDocument();
    expect(
      within(secondrow).getByText(
        "The Black Experience in Children's Books: Selections from Augusta Baker's Bibliographies"
      )
    ).toBeInTheDocument();
  });

  it("renders tooltips on >1024px width", async () => {
    render(
      <>
        {mockCollectionLanes.lanesWithNumItems.map((lane, key) => (
          <DCLane
            key={key}
            seeMoreLink={`/collections/lane`}
            records={lane.collections}
            laneName={lane.name}
            laneSlug={lane.slug}
          />
        ))}
      </>
    );
    window.innerWidth = 1050;
    fireEvent(window, new Event("resize"));
    fireEvent.pointerOver(
      screen.getAllByText(
        "The Black Experience in Children's Books: Selections from Augusta Baker's Bibliographies"
      )[0]
    );
    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
  });
  it("does not render tooltips <1024px width", async () => {
    render(
      <>
        {mockCollectionLanes.lanesWithNumItems.map((lane, key) => (
          <DCLane
            key={key}
            seeMoreLink={`/collections/lane`}
            records={lane.collections}
            laneName={lane.name}
            laneSlug={lane.slug}
          />
        ))}
      </>
    );
    window.innerWidth = 1000;
    fireEvent(window, new Event("resize"));
    fireEvent.pointerOver(
      screen.getAllByText(
        "The Black Experience in Children's Books: Selections from Augusta Baker's Bibliographies"
      )[0]
    );
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
  it("does not render tooltips on non-truncated titles", async () => {
    render(
      <>
        {mockCollectionLanes.lanesWithNumItems.map((lane, key) => (
          <DCLane
            key={key}
            seeMoreLink={`/collections/lane`}
            records={lane.collections}
            laneName={lane.name}
            laneSlug={lane.slug}
          />
        ))}
      </>
    );
    fireEvent.pointerOver(screen.getAllByText("MAVO")[0]);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
