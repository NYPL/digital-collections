import {
  getNumDigitizedItems,
  getFeaturedImage,
  imageURL,
} from "@/utils/utils";
import appConfig from "appConfig";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (request: NextApiRequest, response: NextResponse) => {
  console.log("featuredItem ROUTE");
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

  return NextResponse.json(
    {
      featuredItem: featuredItemObject,
      numberOfDigitizedItems: numDigitizedItems,
    },
    { status: 200 }
  );
};
