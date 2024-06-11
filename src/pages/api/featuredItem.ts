import { imageURL } from "@/utils/iiif";
import { getNumDigitizedItems, getFeaturedImage } from "@/utils/utils";
import appConfig from "appConfig";
import type { NextApiRequest, NextApiResponse } from "next";

const featuredItemDataHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method } = request;
  if (method === "GET") {
    //pass query param to featuredImageID function to check if it is legit

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
      href: `${appConfig.DC_URL[appConfig.environment]}/items/${
        featuredImageData.uuid
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
