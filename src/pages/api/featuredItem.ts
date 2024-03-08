import {
  featuredImageID,
  getItemDataFromImageID,
  getNumDigitizedItems,
  getFeaturedImage,
  imageURL,
} from "@/utils/utils";
import appConfig from "appConfig";
import type { NextApiRequest, NextApiResponse } from "next";

const featuredItemDataHandler = async (
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

    const dataFromUri = await getFeaturedImage();
    const numDigitizedItems = await getNumDigitizedItems();

    const featuredItemObject = {
      imageID: dataFromUri.imageID,
      imageSrc: imageURL(dataFromUri.imageID),
      smallImageSrc: imageURL(dataFromUri.imageID, "full", "!800,800", "0"),
      uuid: dataFromUri.uuid,
      title: dataFromUri.title,
      href: `${appConfig.DC_URL[appConfig.environment]}/items/${
        dataFromUri.uuid
      }`,
    };

    return response.status(200).json({
      featuredItem: featuredItemObject,
      numberOfDigitizedItems: numDigitizedItems,
    });
  }
};

export default featuredItemDataHandler;
// http://localhost:3000/api/featuredItem
