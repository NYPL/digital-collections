import PageLayout from "@/src/components/pageLayout/pageLayout";
import OSD from "@/src/components/osd/osd";
import React from "react";

export default async function ItemPage() {
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Items", url: "/items" },
      ]}
    >
      <OSD />
    </PageLayout>
  );
}
