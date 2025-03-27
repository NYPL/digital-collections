import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "../../src/utils/utils";
import ExhibitionViewer from "../../src/components/exhibitions/exhibitionViewer";
import { slugToString } from "../../src/utils/utils";
import { redirect } from "next/navigation";

const knownDigitalExhibitions = {
  "A-new-correct-map-of-the-trading-part-of-the-West-Indies":
    "https://storiiies.cogapp.com/viewer/68205/A-new-correct-map-of-the-trading-part-of-the-West-Indies",
  exhibit:
    "https://www.exhibit.so/exhibits/ZdQduGmrysoAk17TFaMN?screen=a05BUDjrCGnlFyA90laU",
};

type ItemProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: ItemProps): Promise<Metadata> {
  return {
    title: `${slugToString(params.slug)} - NYPL Digital Collections`, //should be item title
    openGraph: {
      title: `${slugToString(params.slug)} - NYPL Digital Collections`,
    },
  };
}

export default async function Exhibitions({ params }: ItemProps) {
  const manifestURL = knownDigitalExhibitions[params.slug];
  // params.slug === "exhibit"
  //   ? "https://www.exhibit.so/exhibits/ZdQduGmrysoAk17TFaMN?screen=a05BUDjrCGnlFyA90laU"
  //   : "https://storiiies.cogapp.com/viewer/68205/A-new-correct-map-of-the-trading-part-of-the-West-Indies";
  if (!manifestURL) {
    redirect("/404");
  }
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        // { text: "All Items", url: "/items" },
        {
          text: `${slugToString(params.slug)}`,
          url: `/exhibitions/${params.slug}`,
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
