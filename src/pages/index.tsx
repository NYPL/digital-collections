import CampaignHero from "../components/hero/campaignHero";
import { featuredImageID } from "../utils/utils";
import {
  SkipNavigation,
  TemplateAppContainer,
} from "@nypl/design-system-react-components";

export default function Home(props: any) {
  return (
    <TemplateAppContainer
      aboveHeader={<p> Notification banner </p>}
      header={<p> Header </p>}
      breakout={<CampaignHero featuredImageID={props.featuredImageID} />}
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

export async function getServerSideProps() {
  return { props: { featuredImageID: featuredImageID() } };
}
