import {
  featuredImageID,
  getItemDataFromImageID,
  getNumDigitizedItems,
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

    const dataFromUri = await getItemDataFromImageID(imageID);
    const numDigitizedItems = await getNumDigitizedItems();

    const featuredItemObject = {
      imageID: imageID,
      imageSrc: imageURL(imageID),
      uuid: dataFromUri.uuid,
      title: dataFromUri.title,
      href: `${appConfig.DC_URL[appConfig.environment]}/items/${
        dataFromUri.uuid
      }`,
    };

    // 24 hour cache
    response.setHeader("Cache-Control", "s-maxage=86400");

    return response.status(200).json({
      featuredItem: featuredItemObject,
      numberOfDigitizedItems: numDigitizedItems,
    });
  }
};

export default featuredItemDataHandler;
// http://localhost:3000/api/featuredItem
