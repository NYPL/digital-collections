import { Metadata } from "next";
import React from "react";
import DivisionPage from "../../src/components/pages/divisionPage/divisionPage";
import { slugToString } from "../../src/utils/utils";
import { CollectionsApi } from "../../src/utils/apiClients/apiClients";
import { Suspense } from "react";
import { redirect } from "next/navigation";

export type DivisionProps = {
  params: { slug: string };
  searchParams: { page: number };
};

export async function generateMetadata({
  params,
}: DivisionProps): Promise<Metadata> {
  const slug = slugToString(params.slug);
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
  const data = await CollectionsApi.getDivisionData({
    slug: params.slug,
    pageNum: searchParams.page,
  });

  return (
    <Suspense>
      <DivisionPage data={data} />
    </Suspense>
  );
}
