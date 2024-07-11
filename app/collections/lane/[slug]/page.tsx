import React from "react";
import { Metadata } from "next";
import PageLayout from "../../../../src/components/pageLayout/pageLayout";

type LaneProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: LaneProps): Promise<Metadata> {
  const slug = params.slug;
  return {
    title: `${slug} - NYPL Digital Collections`,
  };
}

export default function Lane({ params }: LaneProps) {
  return (
    <PageLayout
      activePage="lane"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Collections", url: "/collections" },
        {
          text: `${params.slug} Lane`,
          url: `/collections/lane/${params.slug}`,
        },
      ]}
    >
      <h2> {params.slug} Lane </h2>
      <br />
    </PageLayout>
  );
}
