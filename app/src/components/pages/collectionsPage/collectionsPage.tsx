"use client";
import PageLayout from "../../pageLayout/pageLayout";
import React from "react";
import SearchResults from "../../search/results";

export const CollectionsPage = () => {
  return (
    <PageLayout
      activePage="collections"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
      ]}
    >
      <SearchResults />
    </PageLayout>
  );
};
