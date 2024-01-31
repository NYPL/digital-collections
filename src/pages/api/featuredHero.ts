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
    // const imageID = request.query.imageID as string;
    // // ? featuredImageID(request.query.imageID as string)
    // // : featuredImageID();

    // console.log(
    //   "Timer 1: Calls getItemDataFromImageID and getNumDigitizedItems"
    // );
    // console.time("timer1");
    // const dataFromUri = await getItemDataFromImageID(imageID);
    // const numDigitizedItems = await getNumDigitizedItems();
    // console.timeEnd("timer1");

    // const featuredItemObject = {
    //   imageID: imageID,
    //   imageSrc: imageURL(imageID),
    //   uuid: dataFromUri.uuid,
    //   title: dataFromUri.title,
    //   href: `${appConfig.DC_URL}/items/${dataFromUri.uuid}`,
    // };

    // return response.status(200).json({
    //   featuredItem: featuredItemObject,
    //   numberOfDigitizedItems: numDigitizedItems,
    // });
    return response.status(200).json({
      featuredItem: {
        href: "https://qa-digitalcollections.nypl.org/items/3b2a61a0-c6cf-012f-b70d-58d385a7bc34",
        imageID: "433221",
        imageSrc:
          "https://iiif.nypl.org/iiif/2/433221/full/!1600,1600/0/default.jpg",
        title: "An oasis in the Badlands",
        uuid: "3b2a61a0-c6cf-012f-b70d-58d385a7bc34",
      },
      numberOfDigitizedItems: "863,848",
    });
  }
};
export default itemsDataHandler;

// http://localhost:3000/api/featuredItems
