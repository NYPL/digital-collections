import React from "react";
import PageLayout from "app/components/pageLayout/pageLayout";
import { Metadata, ResolvingMetadata } from "next";

type DivisionProps = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: DivisionProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  return {
    title: `${slug} - NYPL Digital Collections`,
  };
}

export default function Division({ params }: DivisionProps) {
  return (
    <PageLayout
      activePage="division"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Divisions", url: "/divisions" },
        { text: `${params.slug} Division`, url: `/divisions/${params.slug}` },
      ]}
    >
      <h2> {params.slug} Division </h2>
      <br />
    </PageLayout>
  );
}
