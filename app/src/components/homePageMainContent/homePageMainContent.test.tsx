import { render, screen, waitFor, within } from "@testing-library/react";
import HomePageMainContent from "./homePageMainContent";
import React from "react";
import { mockHomePageMainContent } from "../../../../__tests__/__mocks__/data/mockHomePageMainContent";

describe("homePageMainContent", () => {
  it("renders the Campaign Hero", async () => {
    render(<HomePageMainContent data={mockHomePageMainContent} />);

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
