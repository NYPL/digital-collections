import React from "react";
import { Metadata } from "next";
import DivisionsPage from "../src/components/pages/divisionsPage/divisionsPage";
import { RepoAPICall } from "@/src/utils/utils";

export const metadata: Metadata = {
  title: "Divisions - NYPL Digital Collections",
};

export default async function Divisions() {
  const apiUrl = `${process.env.API_URL}/api/v2/divisions`;
  const data = await RepoAPICall(apiUrl);
  console.log(data);
  return <DivisionsPage data={data} />;
}
