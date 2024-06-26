import React from "react";
import { Metadata } from "next";
import PageLayout from "app/components/pageLayout/pageLayout";

export const metadata: Metadata = {
  title: "Divisions - NYPL Digital Collections",
};

export default function Divisions() {
  return (
    <PageLayout
      activePage="divisions"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Divisions", url: "/divisions" },
      ]}
    >
      <h2> All Divisions </h2>
      <br />
    </PageLayout>
  );
}
