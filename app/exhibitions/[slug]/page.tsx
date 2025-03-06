import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "../../src/utils/utils";
import ExhibitionViewer from "../../src/components/exhibitions/exhibitionViewer";

type ItemProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: ItemProps): Promise<Metadata> {
  return {
    title: `${params.slug} - NYPL Digital Collections`, //should be item title
    openGraph: {
      title: `${params.slug} - NYPL Digital Collections`,
    },
  };
}

export default async function Exhibitions({ params }: ItemProps) {
  const manifestURL =
    params.slug === "exhibit"
      ? "https://www.exhibit.so/exhibits/ZdQduGmrysoAk17TFaMN?screen=a05BUDjrCGnlFyA90laU"
      : "https://storiiies.cogapp.com/viewer/68205/A-new-correct-map-of-the-trading-part-of-the-West-Indies";
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Items", url: "/items" },
        {
          text: `${params.slug}`,
          url: `/items/${params.slug}`,
        },
      ]}
      adobeAnalyticsPageName={createAdobeAnalyticsPageName(
        "items",
        params.slug
      )}
    >
      <ExhibitionViewer
        manifestURL={manifestURL}
        slug={params.slug}
        // "https://storiiies.cogapp.com/viewer/68205/A-new-correct-map-of-the-trading-part-of-the-West-Indies"
      />
    </PageLayout>
  );
}
