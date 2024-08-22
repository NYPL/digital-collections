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
    // (global as any).fetch = jest.fn(() =>
    //   Promise.resolve({
    //     status: 200,
    //     json: () =>
    //       Promise.resolve({
    //         featuredItem: {
    //           imageID: "5273165",
    //           imageSrc: imageURL("5273165"),
    //           uuid: "3a2cced0-12ca-0133-7a6d-58d385a7bbd0",
    //           title:
    //             "Latona Giving Birth to Apollo and Diana on the Island of Delos",
    //           href: `https://qa-digitalcollections.nypl.org/items/3a2cced0-12ca-0133-7a6d-58d385a7bbd0`,
    //         },
    //         numberOfDigitizedItems: "863,848",
    //       }),
    //   })
    // ) as jest.Mock;

    render(<CampaignHero featuredItemData={mockFeaturedItemData} />);

    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent(
        "Explore 863,848 items digitized from The New York Public Library's collections."
      );
    });
  });
});
