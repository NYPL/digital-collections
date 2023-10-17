import path from "path";
import { promises as fs } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { slug } = request.query;

  // Find the absolute path of the json directory for the lanes/[...slug].json file
  const lanesJsonDirectory = path.join(
    process.cwd(),
    "/src/data/lanes/" + slug
  );

  // Read the json data file data.json
  const fileContents = await fs.readFile(
    lanesJsonDirectory + "/data.json",
    "utf8"
  );

  const parsedData = JSON.parse(fileContents);
  const cleanedFileContents = JSON.stringify(parsedData);

  const { method } = request;
  if (method === "GET") {
    response.status(200).json(cleanedFileContents);
  }
}


// http://localhost:3000/api/lanes/:slug