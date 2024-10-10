import React from "react";
import { Metadata } from "next";
import { CollectionsPage } from "../src/components/pages/collectionsPage/collectionsPage";
import { mockCollectionCards } from "__tests__/__mocks__/data/mockCollectionCards";

export const metadata: Metadata = {
  title: "Collections - NYPL Digital Collections",
};

export default async function Collections() {
  return <CollectionsPage data={mockCollectionCards} />;
}
