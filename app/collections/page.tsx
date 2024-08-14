import React from "react";
import { Metadata } from "next";
import { CollectionsPage } from "../src/components/pages/collectionsPage/collectionsPage";

export const metadata: Metadata = {
  title: "Collections - NYPL Digital Collections",
};

export default function Collections() {
  return <CollectionsPage />;
}
