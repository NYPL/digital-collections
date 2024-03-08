import {
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

    const dataFromUri = await getFeaturedImage();
    const numDigitizedItems = await getNumDigitizedItems();

    const featuredItemObject = {
      imageID: dataFromUri.imageID,
      backgroundImageSrc: imageURL(
        dataFromUri.imageID,
        "full",
        "!900,900",
        "0"
      ),
      foregroundImageSrc: imageURL(
        dataFromUri.imageID,
        "full",
        "!1100,1100",
        "0"
      ),
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
