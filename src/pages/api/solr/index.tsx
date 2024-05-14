import { solrCall } from "@/utils/utils";
import appConfig from "appConfig";
import type { NextApiRequest, NextApiResponse } from "next";
const solrCallHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method } = request;
  if (method === "GET") {
    const res = await solrCall("/select?indent=true&q.op=OR&q=*%3A*");
    console.log("res", res);
    return response.status(200).json({ data: res });
  }
};

export default solrCallHandler;
// http://localhost:3000/api/featuredItem
