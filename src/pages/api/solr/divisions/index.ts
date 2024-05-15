import { getDivisions, solrCall } from "@/utils/solr";
import appConfig from "appConfig";
import type { NextApiRequest, NextApiResponse } from "next";
const divisionsFromSolr = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method } = request;
  if (method === "GET") {
    const res = await getDivisions();
    //facet_fields{"divisionFullname_mtxt_s"} = ["divisionTitle", collectionCount, "divisionTitle", collectionCount]
    console.log("res", res);
    return response.status(200).json({ data: res });
  }
};

export default divisionsFromSolr;
// http://localhost:3000/api/solr/divisions
