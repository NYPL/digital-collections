import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { CollectionPage } from "../../src/components/pages/collectionPage/collectionPage";
import { slugToString } from "@/src/utils/utils";

type CollectionProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: CollectionProps): Promise<Metadata> {
  // console.log("params are: ", params)
  const slug = params.slug; //  TODO: this needs to support both a slug or a uuid. we will need to update this later to check if slug is a uuid and then get the slugified title of the collection
  const title = slugToString(slug);
  return {
    title: `${title} - NYPL Digital Collections`,
  };
}

export default function Collection({ params }: CollectionProps) {
  // console.log("params in collection: ", params)
  // const pageName = `collections|${params.slug}`; // TODO: make sure this is the slugified title
  return (
    // <PageLayout
    //   activePage="lane"
    //   breadcrumbs={[
    //     { text: "Home", url: "/" },
    //     { text: "Collections", url: "/collections" },
    //     {
    //       text: `${params.slug}`,
    //       url: `/collections/${params.slug}`,
    //     },
    //   ]}
    //   adobeAnalyticsPageName={pageName}
    // ></PageLayout>
    <CollectionPage params={params} />
  );
}
