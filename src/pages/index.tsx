import CampaignHero from "../components/hero/campaignHero";
import SwimLanes from "../components/swimlanes/swimLanes";
import { TemplateAppContainer } from "@nypl/design-system-react-components";
import data from "@/data/lanes";
import { getNumItems, featuredImageID } from "@/utils/utils";

export default function Home(props: any) {
  return (
    <TemplateAppContainer
      aboveHeader={<p> Notification banner </p>}
      header={<p> Header </p>}
      breakout={<CampaignHero featuredImageID={props.featuredImageID} />}
      contentPrimary={<SwimLanes lanesWithNumItems={props.lanesWithNumItems} />}
      renderSkipNavigation={true}
    />
  );
}

export async function getServerSideProps() {
  const lanes = data.lanes;
  const lanesWithNumItems = await Promise.all(
    lanes.map(async (lane) => {
      const updatedCollections = await Promise.all(
        lane.collections.map(async (collection) => {
          try {
            const numItems = await getNumItems(collection.uuid);
            return { ...collection, numItems };
          } catch (error) {
            return { ...collection, numItems: 0 };
          }
        })
      );

      return { ...lane, collections: updatedCollections };
    })
  );

  return {
    props: {
      lanesWithNumItems,
      featuredImageID: featuredImageID(),
    },
  };
}
