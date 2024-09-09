import { Metadata } from "next";
import React from "react";
import DivisionPage from "../../src/components/pages/divisionPage/divisionPage";
import { slugToString } from "../../src/utils/utils";
import { getDivisionData } from "../../src/utils/api";
import { Suspense } from "react";

export type DivisionProps = {
  params: { slug: string };
  searchParams: { page: string };
};

export async function generateMetadata({
  params,
}: DivisionProps): Promise<Metadata> {
  const slug = slugToString(params.slug);
  return {
    title: `${slug} - NYPL Digital Collections`,
  };
}

export default async function Division({ params, searchParams }) {
  const data = await getDivisionData(params.slug, searchParams.page);
  const currentPage = Number(searchParams.page) || 1;

  return (
    // <Suspense>
    <DivisionPage data={data} currentPage={currentPage} />
    // </Suspense>
  );
}
