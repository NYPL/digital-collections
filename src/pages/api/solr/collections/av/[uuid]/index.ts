import { isCollectionAV, solrCall } from "@/utils/solr";
import appConfig from "appConfig";
import type { NextApiRequest, NextApiResponse } from "next";
const avCollectionCheck = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method, query } = request;
  if (method === "GET") {
    const uuid = query.uuid as string;
    const res = await isCollectionAV(uuid, "abc");
    // const res = await solrCall("?indent=true&q.op=OR&q=*%3A*");
    console.log("res", res);
    return response.status(200).json({ data: res });
  }
};

export default avCollectionCheck;
// http://localhost:3000/api/solr/av/:uuid
