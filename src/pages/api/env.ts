import itemsData from "@/data/featureditems.json";
import type { NextApiRequest, NextApiResponse } from "next";

const envHandler = (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request;
  if (method === "GET") {
    return response.status(200).json({
      APP_ENV: process.env.APP_ENV,
      ADOBE_EMBED_URL: process.env.ADOBE_EMBED_URL,
      DC_URL: process.env.DC_URL,
    });
  }
};
export default envHandler;
