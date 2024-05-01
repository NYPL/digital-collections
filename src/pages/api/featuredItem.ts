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
      // I don't necessarily like that the default item values live in two files.
      // My first approach was to put this in getFeaturedImage(), might try this approach again.
      defaultItem: {
        uuid: "510d47d9-4f93-a3d9-e040-e00a18064a99",
        title: "Watuppa, From water front, Brooklyn",
        imageID: 482815,
        imageSrc: "/482815.jpg",
        href: `${
          appConfig.DC_URL[appConfig.environment]
        }/items/510d47d9-4f93-a3d9-e040-e00a18064a99`,
      },
    });
  }
};

export default featuredItemDataHandler;
// http://localhost:3000/api/featuredItem
