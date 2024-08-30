import data from "../../src/data/lanes";
import {
  getDivisionsFromAPI,
  getItemsCountFromUUIDs,
} from "../../src/utils/utils";
import type { LaneDataType } from "../../src/types/Lane";
import { ENV_KEY } from "../../src/types/EnvironmentType";
import {
  getNumDigitizedItems,
  getFeaturedImage,
  imageURL,
} from "../utils/utils";
import appConfig from "../../../appConfig";

export const getHomePageData = async () => {
  const randomNumber = Math.floor(Math.random() * 2);
  const lanes: LaneDataType[] = data.lanes as unknown as LaneDataType[];

  // Get all the UUIDs from the collections
  const allCollectionUUIDs: string[] = lanes.reduce((acc, lane) => {
    return acc.concat(lane.collections.map((collection) => collection.uuid));
  }, [] as string[]);
  const uuidtoItemCountMap = await getItemsCountFromUUIDs(allCollectionUUIDs);

  // Update the collections for each lane with the number of items
  const updatedLanes = lanes.map((lane) => {
    const updatedCollections = lane.collections.map((collection) => {
      return {
        ...collection,
        numItems: uuidtoItemCountMap[collection.uuid] || "0",
      };
    });
    return { ...lane, collections: updatedCollections };
  });

  const newResponse = { randomNumber, lanesWithNumItems: updatedLanes };
  return newResponse;
};

export const getFeaturedItemData = async () => {
  const featuredImageData = await getFeaturedImage();
  const numDigitizedItems = await getNumDigitizedItems();

  const featuredItemObject = {
    imageID: featuredImageData.imageID,
    backgroundImageSrc: imageURL(
      featuredImageData.imageID,
      "full",
      "!1600,1600",
      "0"
    ),
    foregroundImageSrc: imageURL(
      featuredImageData.imageID,
      "full",
      "!900,900",
      "0"
    ),
    uuid: featuredImageData.uuid,
    title: featuredImageData.title,
    href: `${appConfig.DC_URL[appConfig.environment as ENV_KEY]}/items/${
      featuredImageData.uuid
    }`,
  };
  const newResponse = {
    featuredItem: featuredItemObject,
    numberOfDigitizedItems: numDigitizedItems,
  };
  return newResponse;
};
