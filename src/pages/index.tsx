import CampaignHero from "../components/hero/campaignHero";
import { featuredImageID } from "../utils/utils";

export default function Home(props: any) {
  return <CampaignHero featuredImageID={props.featuredImageID} />;
}

export async function getServerSideProps() {
  return { props: { featuredImageID: featuredImageID() } };
}
