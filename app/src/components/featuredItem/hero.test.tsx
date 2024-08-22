import CampaignHero from "./campaignHero";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { mockHomePageMainContent } from "../../../../__tests__/__mocks__/data/mockHomePageMainContent";
import { imageURL } from "@/src/utils/utils";

const mockFeaturedItemData = {
  featuredItem: mockHomePageMainContent.featuredItem,
  numberOfDigitizedItems: mockHomePageMainContent.numberOfDigitizedItems,
};

describe("Campaign Hero", () => {
  it("renders the Campaign Hero", async () => {
    render(<CampaignHero featuredItemData={mockFeaturedItemData} />);
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent(
        "Explore 863,848 items digitized from The New York Public Library's collections."
      );
    });
  });
});
