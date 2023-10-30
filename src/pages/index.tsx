import CampaignHero from "../components/hero/campaignHero";
import SwimLanes from "../components/swimlanes/swimLanes";
import { TemplateAppContainer } from "@nypl/design-system-react-components";

export default function Home() {
  return (
    <TemplateAppContainer
      aboveHeader={<p> Notification banner </p>}
      header={<p> Header </p>}
      breakout={<CampaignHero />}
      contentPrimary={<SwimLanes />}
      renderSkipNavigation={true}
    />
  );
}
