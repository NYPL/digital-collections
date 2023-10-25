import CampaignHero from "../components/hero/campaignHero";
import featuredItemsData from "../data/featureditems.json";

export default function Home(props: any) {
  return <CampaignHero featuredItems={props.featuredItemsData.featuredItems} />;
}

export async function getServerSideProps() {
  return { props: { featuredItemsData } };
}
