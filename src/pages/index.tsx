import CampaignHero from "../components/hero/campaignHero";
import { TemplateAppContainer } from "@nypl/design-system-react-components";
import data from "@/data/lanes";
import { getNumItems, featuredImageID } from "@/utils/utils";
import Header from "@/components/header/header";
import HomePageMainContent from "@/components/homePageMainContent/homePageMainContent";
import ExploreFurther from "@/components/exploreFurther/exploreFurther";

export default function Home(props: any) {
  return (
    <>
      {/**
       * * @TODO: Header will need to be pulled into a reusable Layout component (DC Facelift phase 2)
       * * Let this be @7emansell 's problem if possible **/}
      <p> Notification banner </p>
      <Header />
      <TemplateAppContainer
        breakout={<CampaignHero featuredImageID={props.featuredImageID} />}
        contentPrimary={
          <HomePageMainContent
            randomNumber={props.randomNumber}
            lanesWithNumItems={props.lanesWithNumItems}
          />
        }
      />
      <ExploreFurther />
    </>
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
  const randomNumber = Math.floor(Math.random() * 2);

  return {
    props: {
      randomNumber,
      lanesWithNumItems: updatedLanes,
      featuredImageID: featuredImageID(),
    },
  };
}
