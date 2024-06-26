import { fireEvent, render, screen, within } from "@testing-library/react";
import SwimLanes from "./swimLanes";
import { props } from "../../../__tests__/data/homepageProps";

describe("Swim Lanes component renders with expected props", () => {
  it("renders the first row", () => {
    render(<SwimLanes {...props} />);
    const firstrow = screen.getByTestId("test-collections-1");
    expect(within(firstrow).getByText("Posada Collection")).toBeInTheDocument();
    expect(within(firstrow).getByText("34 items")).toBeInTheDocument();
    expect(within(firstrow).findAllByRole("img")).toBeVisible;
    expect(within(firstrow).getByText("MAVO")).toBeInTheDocument();
    expect(
      within(firstrow).getByText("Austin Hansen photograph collection")
    ).toBeInTheDocument();
    expect(
      within(firstrow).getByText("Arthur Alfonso Schomburg papers")
    ).toBeInTheDocument();
  });

  it("renders the second row", () => {
    render(<SwimLanes {...props} />);
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
      within(secondrow).getByText("Diana Davies photographs")
    ).toBeInTheDocument();
  });

  it("renders tooltips on >1024px width", async () => {
    render(<SwimLanes {...props} />);
    window.innerWidth = 1050;
    fireEvent(window, new Event("resize"));
    fireEvent.pointerOver(screen.getByText("MAVO"));
    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
  });
  it("does not render tooltips <1024px width", async () => {
    render(<SwimLanes {...props} />);
    window.innerWidth = 1000;
    fireEvent(window, new Event("resize"));
    fireEvent.pointerOver(screen.getByText("MAVO"));
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
