import React from "react";
import PageLayout from "@/src/components/pageLayout/pageLayout";
import MapViewer from "@/src/components/allMaps/map";

export default async function MapsByDecadePage() {
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Maps", url: "/maps" },
        {
          text: `By Decade`,
          url: `/maps/decade`,
        },
      ]}
    >
      <MapViewer />
    </PageLayout>
  );
}
