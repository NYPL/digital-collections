import { Metadata } from "next";
import React from "react";
import DivisionPage from "../../src/components/pages/divisionPage/divisionPage";
import { slugToString } from "../../src/utils/utils";
import { CollectionsApi } from "../../src/utils/apiClients/apiClients";
import { Suspense } from "react";
import { redirect } from "next/navigation";

export type DivisionProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: number }>;
};

export async function generateMetadata({
  params,
}: DivisionProps): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = slugToString(rawSlug);
  return {
    title: `${slug} - NYPL Digital Collections`,
    openGraph: {
      title: `${slug} - NYPL Digital Collections`,
    },
  };
}

export default async function Division({
  params,
  searchParams,
}: DivisionProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const data = await CollectionsApi.getDivisionData({
    slug,
    pageNum: resolvedSearchParams.page,
  });

  return (
    <Suspense>
      <DivisionPage data={data} />
    </Suspense>
  );
}
