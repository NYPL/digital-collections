import CampaignHero from "../components/hero/campaignHero";
import SwimLanes from "../components/swimlanes/swimLanes";
import { TemplateAppContainer } from "@nypl/design-system-react-components";
import data from "@/data/lanes";

export default function Home({ lanesWithNumItems }) {
  return (
    <TemplateAppContainer
      aboveHeader={<p> Notification banner </p>}
      header={<p> Header </p>}
      breakout={<CampaignHero />}
      contentPrimary={<SwimLanes lanesWithNumItems={lanesWithNumItems} />}
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
          const apiUrl = `/api/getNumItems/?uuid=${collection.uuid}`;
          try {
            const response = await fetch(apiUrl);
            if (response.status === 200) {
              const { numItems } = await response.json();
              console.log(numItems);
              return { ...collection, numItems };
            } else {
              return { ...collection, numItems: 0 };
            }
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
    },
  };
}
