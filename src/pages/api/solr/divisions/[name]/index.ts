import { getCollectionCountForDivision, solrCall } from "@/utils/solr";
import appConfig from "appConfig";
import type { NextApiRequest, NextApiResponse } from "next";
const getCollectionCount = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method, query } = request;
  if (method === "GET") {
    const name = query.name as string;
    const res = await getCollectionCountForDivision(name);
    // const res = await solrCall("?indent=true&q.op=OR&q=*%3A*");
    console.log("res", res);
    return response.status(200).json({ data: res });
  }
};

export default getCollectionCount;
// http://localhost:3000/api/solr/divisions/:name
