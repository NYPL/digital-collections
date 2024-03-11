import { render, screen, waitFor, within } from "@testing-library/react";
import HomePageMainContent from "./homePageMainContent";
import { props as homepageData } from "../../../__tests__/data/homepageProps";

describe("homePageMainContent", () => {
  it("renders the SkeletonLoader", () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(),
      })
    ) as jest.Mock;

    render(<HomePageMainContent />);

    expect(screen.getByTestId("swimlane-skeleton-loader-1")).toBeTruthy();
    expect(screen.getByTestId("swimlane-skeleton-loader-2")).toBeTruthy();
    expect(screen.getByTestId("swimlane-skeleton-loader-3")).toBeTruthy();
    expect(screen.getByTestId("swimlane-skeleton-loader-4")).toBeTruthy();
  });

  it("renders the Campaign Hero", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            randomNumber: 1,
            lanesWithNumItems: homepageData.lanesWithNumItems,
          }),
      })
    ) as jest.Mock;

    render(<HomePageMainContent />);
    await waitFor(() => {
      const firstrow = screen.getByTestId("test-collections-1");
      expect(
        within(firstrow).getByText("Posada Collection")
      ).toBeInTheDocument();
      expect(within(firstrow).getByText("34 items")).toBeInTheDocument();

      const secondrow = screen.getByTestId("test-collections-2");
      expect(
        within(secondrow).getByText("Friedman-Abeles photographs")
      ).toBeInTheDocument();
      expect(within(secondrow).getByText("35 items")).toBeInTheDocument();
    });
  });
});
