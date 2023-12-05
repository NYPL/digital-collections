import CampaignHero from "../components/hero/campaignHero";
import { TemplateAppContainer } from "@nypl/design-system-react-components";
import data from "@/data/lanes";
import {
  getNumItems,
  getNumDigitizedItems,
  featuredImageID,
  getAPIUri,
  apiCall,
  getItemDataFromImageID,
} from "@/utils/utils";
import Header from "@/components/header/header";
import HomePageMainContent from "@/components/homePageMainContent/homePageMainContent";
import appConfig from "appConfig";
import { imageURL } from "@/utils/utils";

export default function Home(props: any) {
  return (
    <>
      {/**
       * * @TODO: Header will need to be pulled into a reusable Layout component (DC Facelift phase 2)
       * * Let this be @7emansell 's problem if possible **/}
      <p> Notification banner </p>
      <Header />
      <TemplateAppContainer
        breakout={
          <CampaignHero
            featuredItem={props.featuredItem}
            numberOfDigitizedItems={props.numberOfDigitizedItems}
          />
        }
        contentPrimary={
          <HomePageMainContent
            randomNumber={props.randomNumber}
            lanesWithNumItems={props.lanesWithNumItems}
          />
        }
      />
    </>
  );
}

export async function getServerSideProps(context: any) {
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

  //pass query param to featuredImageID function to check if it is legit
  const imageID = context.query.imageID
    ? featuredImageID(context.query.imageID)
    : featuredImageID();

  const dataFromUri = await getItemDataFromImageID(imageID);
  const numDigitizedItems = await getNumDigitizedItems();
  const featuredItemObject = {
    imageID: imageID,
    imageSrc: imageURL(imageID),
    uuid: dataFromUri.uuid,
    title: dataFromUri.title,
    href: `${appConfig.DC_URL}/items/${dataFromUri.uuid}`,
  };

  return {
    props: {
      randomNumber,
      lanesWithNumItems: updatedLanes,
      featuredItem: featuredItemObject,
      numberOfDigitizedItems: numDigitizedItems,
    },
  };
}
