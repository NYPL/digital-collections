import CampaignHero from "@/components/hero/campaignHero";
import { render, screen } from "@testing-library/react";
import { props } from "../../../__tests__/data/homepageProps";
describe("Campaign Hero", () => {
  it("renders the Campaign Hero", () => {
    render(
      <CampaignHero
        featuredItem={props.featuredItem}
        numberOfDigitizedItems="863,848"
      />
    );
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Explore 863,848 items digitized from The New York Public Library's collections."
    );
  });
});
