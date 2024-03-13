import { render, screen } from "@testing-library/react";
import HomePageMainContent from "./homePageMainContent";

describe("homePageMainContent", () => {
  it("renders the SkeletonLoader", () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(),
      })
    ) as jest.Mock;

    const { container } = render(<HomePageMainContent />);

    expect(screen.getByTestId("swimlane-skeleton-loader-1")).toBeTruthy();
    expect(screen.getByTestId("swimlane-skeleton-loader-2")).toBeTruthy();
    expect(screen.getByTestId("swimlane-skeleton-loader-3")).toBeTruthy();
    expect(screen.getByTestId("swimlane-skeleton-loader-4")).toBeTruthy();
  });
});
