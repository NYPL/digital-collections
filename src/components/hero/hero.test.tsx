import CampaignHero from "@/components/hero/campaignHero";
import { render, screen } from "@testing-library/react";

describe("Campaign Hero", () => {
  it("renders the Campaign Hero", () => {
    render(<CampaignHero />);
    const header = screen.getByRole("heading", {
      name: "Explore 863,848 items digitized from The New York Public Library's collections.",
    });
    expect(header).toBeInTheDocument();
  });
});
