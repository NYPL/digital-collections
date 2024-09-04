"use client";
import PageLayout from "../../pageLayout/pageLayout";
import React from "react";
import { slugToString } from "@/src/utils/utils";

export const CollectionPage = (params) => {
  const slug = params.params.slug;
  const pageName = `collections|${slug}`; // TODO: make sure this is the slugified title

  return (
    <PageLayout
      activePage="lane"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
        {
          text: `${slugToString(slug)}`,
          url: `/collections/${slug}`,
        },
      ]}
      adobeAnalyticsPageName={pageName}
    ></PageLayout>
  );
};
