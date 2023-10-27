import CampaignHero from "../components/hero/campaignHero";
import {
  SkipNavigation,
  TemplateAppContainer,
} from "@nypl/design-system-react-components";

export default function Home() {
  return (
    <TemplateAppContainer
      aboveHeader={<p> Notification banner </p>}
      header={<p> Header </p>}
      breakout={<CampaignHero />}
      contentPrimary={
        <>
          <p>First swim lane</p>
          <p>Featured Content</p>
          <p>Rest of swim lanes</p>
          <p>Explore further links</p>
        </>
      }
      renderSkipNavigation={true}
    />
  );
}
