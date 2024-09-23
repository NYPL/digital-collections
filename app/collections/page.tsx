import React from "react";
import { Metadata } from "next";
import { CollectionsPage } from "../src/components/pages/collectionsPage/collectionsPage";
import { getCollections } from "@/src/utils/api";

export const metadata: Metadata = {
  title: "Collections - NYPL Digital Collections",
};

export default async function Collections() {
  const initialData = await getCollections();
  console.log(`initial data is: ${initialData.response}`);

  return <CollectionsPage data={{ initialData }} />;
}
