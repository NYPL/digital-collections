import itemsData from "@/data/featureditems.json";
import data from "@/data/lanes";
import {
  featuredImageID,
  getItemDataFromImageID,
  getNumDigitizedItems,
  getNumItems,
  imageURL,
} from "@/utils/utils";
import appConfig from "appConfig";
import type { NextApiRequest, NextApiResponse } from "next";

const itemsDataHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method } = request;
  if (method === "GET") {
    //pass query param to featuredImageID function to check if it is legit
    // logger.info("Generating featured image id");

    const imageID = (request.query.imageID as string)
      ? featuredImageID(request.query.imageID as string)
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

    return response.status(200).json({
      featuredItem: featuredItemObject,
      numberOfDigitizedItems: numDigitizedItems,
    });
  }
};
export default itemsDataHandler;
// http://localhost:3000/api/featuredItems
