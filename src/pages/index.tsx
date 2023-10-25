import CampaignHero from "../components/hero/campaignHero";
import {
  SkipNavigation,
  Template,
  TemplateAboveHeader,
  TemplateBreakout,
  TemplateContent,
  TemplateFooter,
  TemplateHeader,
} from "@nypl/design-system-react-components";

export default function Home() {
  return (
    <>
      <SkipNavigation />
      <Template>
        <TemplateBreakout>
          <TemplateAboveHeader>
            <p> Notification banner </p>
          </TemplateAboveHeader>
          <TemplateHeader>
            <p> Header </p>
          </TemplateHeader>
          <CampaignHero />
        </TemplateBreakout>
        <TemplateContent>
          <p>First swim lane</p>
          <p>Featured Content</p>
          <p>Rest of swim lanes</p>
          <p>Explore further links</p>
        </TemplateContent>
        <TemplateFooter>
          <p> Footer </p>
        </TemplateFooter>
      </Template>
    </>
  );
}
