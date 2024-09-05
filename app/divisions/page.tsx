import React from "react";
import { Metadata } from "next";
import DivisionsPage from "../src/components/pages/divisionsPage/divisionsPage";
import { RepoAPICall } from "@/src/utils/api";
import logger from "logger";

export const metadata: Metadata = {
  title: "Divisions - NYPL Digital Collections",
};

export default async function Divisions() {
  let data;
  try {
    data = await RepoAPICall(`${process.env.API_URL}/api/v2/divisions`);
  } catch (error) {
    logger.error("Failed to fetch divisions data", error);
  }

  return <DivisionsPage data={data?.nyplAPI?.response || null} />;
}
