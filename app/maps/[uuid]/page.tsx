import PageLayout from "@/src/components/pageLayout/pageLayout";
import AllMapsViewer from "@/src/components/allMaps/viewer";
import React from "react";

export default async function MapsPage() {
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Items", url: "/items" },
      ]}
    >
      <AllMapsViewer />
    </PageLayout>
  );
}
