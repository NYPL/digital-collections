import { render, screen, within } from "@testing-library/react";
import { props } from "../../../__tests__/data/swimlaneProps";
import appConfig from "appConfig";
import HomePageMainContent from "./homePageMainContent";

describe("homePageMainContent", () => {
  it("renders the SkeletonLoader", () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ props }),
      })
    ) as jest.Mock;

    const { container } = render(<HomePageMainContent />);

    expect(container.classList.contains("chakra-skeleton"));
  });
});
