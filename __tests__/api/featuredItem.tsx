import CampaignHero from "../../app/src/components/featuredItem/campaignHero";
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mockHomePageMainContent } from "__tests__/__mocks__/data/mockHomePageMainContent";

it("renders the fallback image if the image returns an error", async () => {
  // const mockFeaturedItemData={
  //   featuredItem: mockHomePageMainContent.featuredItem,
  //   numberOfDigitizedItems: mockHomePageMainContent.numberOfDigitizedItems
  // }

  const mockFeaturedItemData = {
    featuredItem: {
      imageID: "1269908",
      backgroundImageSrc: "foobar.jpg", //bad image
      foregroundImageSrc: "foobar.jpg",
      uuid: "510d47e0-cb17-a3d9-e040-e00a18064a99",
      title: "Momoyogusa",
      href: "https://digitalcollections.nypl.org/items/510d47e0-cb17-a3d9-e040-e00a18064a99",
    },
    numberOfDigitizedItems: "876,067",
  };

  render(<CampaignHero featuredItemData={mockFeaturedItemData} />);

  await waitFor(async () => {
    fireEvent.error(screen.getByRole("img"));

    expect(
      screen.getByText("Watuppa, From water front, Brooklyn") //default fetured item title
    ).toBeInTheDocument();
  });
});

it("renders the selected chosen image if the image does NOT return an error", async () => {
  const mockFeaturedItemData = {
    featuredItem: {
      imageID: "1269908",
      backgroundImageSrc:
        "https://iiif.nypl.org/iiif/2/1269908/full/!1600,1600/0/default.jpg",
      foregroundImageSrc:
        "https://iiif.nypl.org/iiif/2/1269908/full/!900,900/0/default.jpg",
      uuid: "510d47e0-cb17-a3d9-e040-e00a18064a99",
      title: "Momoyogusa",
      href: "https://digitalcollections.nypl.org/items/510d47e0-cb17-a3d9-e040-e00a18064a99",
    },
    numberOfDigitizedItems: "876,067",
  };
  render(<CampaignHero featuredItemData={mockFeaturedItemData} />);

  await waitFor(async () => {
    expect(screen.getByText("Momoyogusa")).toBeInTheDocument();
  });
});
