import CampaignHero from "@/components/hero/campaignHero";
import { render, screen } from "@testing-library/react";
import { imageURL } from "@/utils/utils";
describe("Campaign Hero", () => {
  const featuredItem = {
    imageID: "5273165",
    imageSrc: imageURL("5273165"),
    uuid: "3a2cced0-12ca-0133-7a6d-58d385a7bbd0",
    title: "Latona Giving Birth to Apollo and Diana on the Island of Delos",
    href: `https://qa-digitalcollections.nypl.org/items/3a2cced0-12ca-0133-7a6d-58d385a7bbd0`,
  };
  it("renders the Campaign Hero", () => {
    render(
      <CampaignHero
        featuredItem={featuredItem}
        numberOfDigitizedItems="863,848"
      />
    );
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Explore 863,848 items digitized from The New York Public Library's collections."
    );
  });
});
