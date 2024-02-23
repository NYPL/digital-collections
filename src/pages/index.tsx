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
    console.log("from index.tsx");
    console.log("appConfig is: ", appConfig);
    console.log("appConfig.environment", appConfig.environment);
    console.log(
      "appConfig.DC_URL is: ",
      appConfig.DC_URL[appConfig.environment]
    );
    console.log(
      "appConfig.adobeEmbedUrl: ",
      appConfig.adobeEmbedUrl[appConfig.environment]
    );
    console.log("DC_URL CONSTANT is: ", DC_URL);
    console.log("ADOBE_EMBED_URL CONSTANT IS: ", ADOBE_EMBED_URL);
    console.log("useffect swimlanes");
    const isFeaturedItemLoading = setIsFeaturedItemLoading(true);
    const isSwimLaneLoading = setIsSwimLaneLoading(true);
    console.log("isFeaturedItemLoading  IS: ", isFeaturedItemLoading);
    console.log("isSwimLaneLoading IS: ", isSwimLaneLoading);
    const fetchData = async () => {
      const response = await fetch("/api/homepageData");
      const data = await response.json();
      const isSwimLaneLoading = setIsSwimLaneLoading(false);
      console.log("isSwimLaneLoading IS: ", isSwimLaneLoading);
      console.log(data);
      setHomepageData(data);
    };

    const fetchHeroData = async () => {
      console.log("imageID", imageID);
      const response = await fetch(`/api/featuredHero?imageID=${imageID}`);
      const data = await response.json();
      const isFeaturedItemLoading = setIsFeaturedItemLoading(false);
      console.log("isFeaturedItemLoading  IS: ", isFeaturedItemLoading);

      console.log(data);
      setHeroData(data);
    };

    fetchHeroData();
    fetchData();
  }, []);

  console.log("Home props envVars", props.envVars);

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
          //   <SkeletonLoader
          //   // featuredItem={heroData.featuredItem}
          //   // numberOfDigitizedItems={heroData.numberOfDigitizedItems}
          //   />
          // ) : (
          //   <CampaignHero
          //     featuredItem={heroData.featuredItem}
          //     numberOfDigitizedItems={heroData.numberOfDigitizedItems}
          //   />
          // )
          heroData?.featuredItem ? (
            <CampaignHero
              featuredItem={heroData.featuredItem}
              numberOfDigitizedItems={heroData.numberOfDigitizedItems}
            />
          ) : (
            <SkeletonLoader
            // featuredItem={heroData.featuredItem}
            // numberOfDigitizedItems={heroData.numberOfDigitizedItems}
            />
          )
        }
        contentPrimary={
          // isSwimLaneLoading ? (
          //   <SkeletonLoader
          //   // featuredItem={heroData.featuredItem}
          //   // numberOfDigitizedItems={heroData.numberOfDigitizedItems}
          //   />
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
            <SimpleGrid columns={4}>
              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />

              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />

              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />

              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />

              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />
              <SkeletonLoader imageAspectRatio="landscape" isBordered />
            </SimpleGrid>
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
