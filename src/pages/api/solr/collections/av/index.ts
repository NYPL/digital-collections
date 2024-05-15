import { getAVCollections, solrCall } from "@/utils/solr";
import appConfig from "appConfig";
import type { NextApiRequest, NextApiResponse } from "next";
const collectionsFromSolr = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method } = request;
  if (method === "GET") {
    const res = await getAVCollections();
    // const res = await solrCall("?indent=true&q.op=OR&q=*%3A*");
    console.log("res", res);
    return response.status(200).json({ data: res });
  }
};

export default collectionsFromSolr;
// http://localhost:3000/api/solr/collections/av
