import CampaignHero from "../components/hero/campaignHero";
import {
  TemplateAppContainer,
  SkeletonLoader,
  SkeletonLoaderImageRatios,
  SimpleGrid,
} from "@nypl/design-system-react-components";
import data from "@/data/lanes";
import {
  getNumItems,
  getNumDigitizedItems,
  featuredImageID,
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
import { ADOBE_EMBED_URL, DC_URL } from "../config/constants";
import SwimLanesLoading from "@/components/swimlanes/swimLanesLoading";
import CampaignHeroLoading from "@/components/hero/campaignHeroLoading";

export default function Home(props: any = {}) {
  console.log("props", props);
  const [homepageData, setHomepageData] = useState<any>({});
  const [heroData, setHeroData] = useState<any>({});
  const [isFeaturedItemLoading, setIsFeaturedItemLoading] = useState(false);
  const [isSwimLaneLoading, setIsSwimLaneLoading] = useState(false);

  console.log("home");
  const imageID = featuredImageID();

  useEffect(() => {
    // Track page view events to Adobe Analytics
    // console.log("from index.tsx");
    // console.log("appConfig is: ", appConfig);
    // console.log("appConfig.environment", appConfig.environment);
    // console.log(
    //   "appConfig.DC_URL is: ",
    //   appConfig.DC_URL[appConfig.environment]
    // );
    // console.log(
    //   "appConfig.adobeEmbedUrl: ",
    //   appConfig.adobeEmbedUrl[appConfig.environment]
    // );
    // console.log("DC_URL CONSTANT is: ", DC_URL);
    // console.log("ADOBE_EMBED_URL CONSTANT IS: ", ADOBE_EMBED_URL);

    console.log("useffect swimlanes");
    setIsFeaturedItemLoading(true);
    setIsSwimLaneLoading(true);
    console.log(
      "isFeaturedItemLoading before FETCH IS: ",
      isFeaturedItemLoading
    );
    console.log("isSwimLaneLoading before FETCH IS: ", isSwimLaneLoading);

    const fetchData = async () => {
      const response = await fetch("/api/homepagedata");
      const data = await response.json();
      console.log(data);
      setHomepageData(data);
      setIsSwimLaneLoading(false);
    };

    const fetchHeroData = async () => {
      console.log("imageID", imageID);
      const response = await fetch(`/api/featuredHero?imageID=${imageID}`);
      const data = await response.json();
      console.log(data);
      setHeroData(data);
      setIsFeaturedItemLoading(false);
    };
    console.log("fetching hero data");
    fetchHeroData();
    console.log("fetching swim lane data");
    fetchData();
  }, []);

  // console.log("Home props envVars", props.envVars);

  return (
    <>
      {/**
       * * @TODO: Header will need to be pulled into a reusable Layout component (DC Facelift phase 2)
       * * Let this be @7emansell 's problem if possible **/}
      <NotificationBanner />
      <Header />
      <TemplateAppContainer
        breakout={
          // isFeaturedItemLoading ? (
          //   <SkeletonLoader showContent={false} showHeading={false} />
          // ) : (
          //   <CampaignHero
          //     featuredItem={heroData.featuredItem}
          //     numberOfDigitizedItems={heroData.numberOfDigitizedItems}
          //   />
          // )

          // using the heroData?.featuredItem? to conditionally render the skeleton loader because using isFeaturedItemLoading does not insure that the data is returned, so I get errors.
          heroData?.featuredItem ? (
            <CampaignHero
              featuredItem={heroData.featuredItem}
              numberOfDigitizedItems={heroData.numberOfDigitizedItems}
            />
          ) : (
            <CampaignHeroLoading />
          )
        }
        contentPrimary={
          // isSwimLaneLoading ? (
          // <SwimLanesLoading />
          // ) : (
          //   <HomePageMainContent
          //     randomNumber={homepageData.randomNumber}
          //     lanesWithNumItems={homepageData.lanesWithNumItems}
          //   />
          // )

          homepageData?.lanesWithNumItems ? (
            <HomePageMainContent
              randomNumber={homepageData.randomNumber}
              lanesWithNumItems={homepageData.lanesWithNumItems}
            />
          ) : (
            <SwimLanesLoading />
          )
        }
      />
      <ExploreFurther />
    </>
  );
}

export async function getServerSideProps(context: any) {
  // const lanes = data.lanes;
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
  // const imageID = context.query.imageID
  //   ? featuredImageID(context.query.imageID)
  //   : featuredImageID();

  // //   console.log("Timer 1: Calls getItemDataFromImageID and getNumDigitizedItems");
  // //   console.time("timer1");
  // const dataFromUri = await getItemDataFromImageID(imageID);
  // const numDigitizedItems = await getNumDigitizedItems();
  // console.timeEnd("timer1");

  // const featuredItemObject = {
  //   imageID: imageID,
  //   imageSrc: imageURL(imageID),
  //   uuid: dataFromUri.uuid,
  //   title: dataFromUri.title,
  //   href: `${DC_URL}/items/${dataFromUri.uuid}`,
  // };

  return {
    props: {
      randomNumber,
      // lanesWithNumItems: lanes,
      // featuredItem: featuredItemObject,
      // numberOfDigitizedItems: numDigitizedItems,
    },
  };
}
