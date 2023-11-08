import CampaignHero from "../components/hero/campaignHero";
import SwimLanes from "../components/swimlanes/swimLanes";
import { TemplateAppContainer } from "@nypl/design-system-react-components";
import data from "@/data/lanes";
import {
  getNumItems,
  featuredImageID,
  getAPIUri,
  apiCall,
} from "@/utils/utils";

export default function Home(props: any) {
  return (
    <TemplateAppContainer
      aboveHeader={<p> Notification banner </p>}
      header={<p> Header </p>}
      /**
       * @TODO: Correct spacing below hero/above swimlanes
       */
      breakout={<CampaignHero featuredItem={props.featuredItem} />}
      contentPrimary={<SwimLanes lanesWithNumItems={props.lanesWithNumItems} />}
      renderSkipNavigation={true}
    />
  );
}

export async function getServerSideProps() {
  const lanes = data.lanes;
  const flatCollections = [].concat(...lanes.map((lane) => lane.collections));
  const collectionsWithNumItems = await Promise.allSettled(
    flatCollections.map(async (collection) => {
      try {
        const numItems = await getNumItems(collection.uuid);
        return { ...collection, numItems };
      } catch (error) {
        return { ...collection, numItems: 0 };
      }
    })
  );
  const updatedLanes = lanes.map((lane) => {
    const updatedCollections = lane.collections.map(() => {
      const result = collectionsWithNumItems.shift();
      return result.status === "fulfilled"
        ? result.value
        : { ...result, value: {} };
    });
    return { ...lane, collections: updatedCollections };
  });

  const imageID = featuredImageID();
  const apiUri = await getAPIUri("local_image_id", imageID);
  const dataFromUri = await apiCall(apiUri.apiUri);
  const featuredItemObject = {
    imageID: imageID,
    uuid: apiUri.uuid,
    title: dataFromUri.mods.titleInfo.title,
    href: `https://digitalcollections.nypl.org/items/${apiUri.uuid}`,
  };
  return {
    props: {
      lanesWithNumItems: updatedLanes,
      featuredItem: featuredItemObject,
    },
  };
}
