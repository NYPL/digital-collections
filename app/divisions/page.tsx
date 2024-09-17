import React from "react";
import { Metadata } from "next";
import DivisionsPage from "../src/components/pages/divisionsPage/divisionsPage";
import logger from "logger";
import { RepoAPICall } from "../src/utils/api";

export const metadata: Metadata = {
  title: "Divisions - NYPL Digital Collections",
};

export default async function Divisions() {
  let data;
  try {
    data = await RepoAPICall(`${process.env.API_URL}/api/v2/divisions`);
    console.log(
      `api URL for divisions page is ${process.env.API_URL}/api/v2/divisions`
    );
    console.log("data in divisions page is: ", data);
  } catch (error) {
    logger.error("Failed to fetch divisions data", error);
  }
  return <DivisionsPage data={data?.nyplAPI?.response || null} />;
}
