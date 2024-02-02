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
import ExploreFurther from "@/components/exploreFurther/exploreFurther";
import appConfig from "appConfig";
import { imageURL } from "@/utils/utils";
import NotificationBanner from "@/components/notificationBanner/notificationBanner";
import logger from "logger";
import { useEffect, useState } from "react";

export default function Home(props: any = {}) {
  console.log("props", props);
  // const [homepagedata, setHomepagedata] = useState<any>({});
  // const [heroData, setheroData] = useState<any>({});
  // console.log("home");
  // const imageID = featuredImageID();

  // useEffect(() => {
  //   console.log("useffect swimlanes");
  //   const fetchData = async () => {
  //     const response = await fetch("/api/homepagedata");
  //     const data = await response.json();
  //     console.log(data);
  //     setHomepagedata(data);
  //   };
  //   const fetchHeroData = async () => {
  //     console.log("imageID", imageID);
  //     const response = await fetch(`/api/featuredHero?imageID=${imageID}`);
  //     const data = await response.json();
  //     console.log(data);
  //     setheroData(data);
  //   };
  //   fetchHeroData();
  //   fetchData();
  // }, []);

  return (
    <>
      {/**
       * * @TODO: Header will need to be pulled into a reusable Layout component (DC Facelift phase 2)
       * * Let this be @7emansell 's problem if possible **/}
      <NotificationBanner />
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
      <ExploreFurther />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const lanes = data.lanes;
  const randomNumber = Math.floor(Math.random() * 2);
  //   const flatCollections = [].concat(...lanes.map((lane) => lane.collections));
  //   const collectionsWithNumItems = await Promise.allSettled(
  //     flatCollections.map(async (collection) => {
  //       try {
  //         const numItems = await getNumItems(collection.uuid);
  //         return { ...collection, numItems };
  //       } catch (error) {
  //         return { ...collection, numItems: 0 };
  //       }
  //     })
  //   );
  //   const updatedLanes = lanes.map((lane) => {
  //     const updatedCollections = lane.collections.map(() => {
  //       const result = collectionsWithNumItems.shift();
  //       return result.status === "fulfilled"
  //         ? result.value
  //         : { ...result, value: {} };
  //     });
  //     return { ...lane, collections: updatedCollections };
  //   });

  //   //pass query param to featuredImageID function to check if it is legit
  //   logger.info("Generating featured image id");
  const imageID = context.query.imageID
    ? featuredImageID(context.query.imageID)
    : featuredImageID();

  //   console.log("Timer 1: Calls getItemDataFromImageID and getNumDigitizedItems");
  //   console.time("timer1");
  const dataFromUri = await getItemDataFromImageID(imageID);
  const numDigitizedItems = await getNumDigitizedItems();
  console.timeEnd("timer1");

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
      lanesWithNumItems: lanes,
      featuredItem: featuredItemObject,
      numberOfDigitizedItems: numDigitizedItems,
    },
  };
}
