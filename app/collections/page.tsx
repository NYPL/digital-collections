import React from "react";
import { Metadata } from "next";
import PageLayout from "app/components/pageLayout/pageLayout";

export const metadata: Metadata = {
  title: "Collections - NYPL Digital Collections",
};

export default function Collections() {
  return (
    <PageLayout
      activePage="collections"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Collections", url: "/collections" },
      ]}
    >
      <h2> All Collections </h2>
      <br />
    </PageLayout>
  );
}
