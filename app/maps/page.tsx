import React from "react";
import { Metadata } from "next";
import PageLayout from "@/src/components/pageLayout/pageLayout";
import AllMapsList from "@/src/components/allMaps/list";
import allMapsData from "../src/data/maps/allmaps";

export default async function MapsPage() {
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Maps", url: "/maps" },
        // { text: "Item", url: `/items/` },
      ]}
    >
      {/* <AllMapsViewer data={allMapsData} uuid={} /> */}
      <AllMapsList data={allMapsData} />
      `1`
    </PageLayout>
  );
}
