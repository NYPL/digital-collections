import {
  getNumDigitizedItems,
  getFeaturedImage,
  imageURL,
} from "../../../utils/utils";
import appConfig from "appConfig";
import { NextResponse, NextRequest } from "next/server";
export const fetchCache = "force-no-store";

export const GET = async (request: NextRequest, response: NextResponse) => {
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
  const newResponse = NextResponse.json(
    {
      featuredItem: featuredItemObject,
      numberOfDigitizedItems: numDigitizedItems,
    },
    { status: 200 }
  );

  newResponse.headers.set("Cache-Control", "no-store");
  return newResponse;
};
