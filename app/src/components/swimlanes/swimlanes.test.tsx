import { fireEvent, render, screen, within } from "@testing-library/react";
import SwimLanes from "./swimLanes";
import { mockSwimLanes } from "__tests__/__mocks__/data/mockSwimLanes";

describe("Swim Lanes component renders with expected props", () => {
  it("renders the first row", () => {
    render(<SwimLanes lanesWithNumItems={mockSwimLanes.lanesWithNumItems} />);
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
    render(<SwimLanes lanesWithNumItems={mockSwimLanes.lanesWithNumItems} />);
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
    render(<SwimLanes lanesWithNumItems={mockSwimLanes.lanesWithNumItems} />);
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
    render(<SwimLanes lanesWithNumItems={mockSwimLanes.lanesWithNumItems} />);
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
    render(<SwimLanes lanesWithNumItems={mockSwimLanes.lanesWithNumItems} />);
    fireEvent.pointerOver(screen.getAllByText("MAVO")[0]);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
