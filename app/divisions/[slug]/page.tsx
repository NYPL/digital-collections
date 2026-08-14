import { Metadata } from "next";
import React from "react";
import DivisionPage from "../../src/components/pages/divisionPage/divisionPage";
import { slugToString } from "../../src/utils/utils";
import { CollectionsApi } from "../../src/utils/apiClients/apiClients";
import { Suspense } from "react";
import { redirect } from "next/navigation";

export type DivisionProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: number; perPage?: number }>;
};

export async function generateMetadata(
  props: DivisionProps
): Promise<Metadata> {
  const params = await props.params;
  const slug = slugToString(params.slug);
  return {
    title: `${slug} - NYPL Digital Collections`,
    openGraph: {
      title: `${slug} - NYPL Digital Collections`,
    },
  };
}

export default async function Division(props: DivisionProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const data = await CollectionsApi.getDivisionData({
    slug: params.slug,
    pageNum: searchParams.page,
    perPage: searchParams.perPage,
  });

  return (
    <Suspense>
      <DivisionPage data={data} />
    </Suspense>
  );
}
