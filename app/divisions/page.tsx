import React from "react";
import { Metadata } from "next";
import DivisionsPage from "../src/components/pages/divisionsPage/divisionsPage";
import { RepoAPICall } from "@/src/utils/utils";

export const metadata: Metadata = {
  title: "Divisions - NYPL Digital Collections",
};

export default async function Divisions() {
  const data = await RepoAPICall(`${process.env.API_URL}/api/v2/divisions`);
  return <DivisionsPage data={data.nyplAPI.response} />;
}
