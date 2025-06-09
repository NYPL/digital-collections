import { Metadata } from "next";
import React from "react";
import DivisionPage from "../../src/components/pages/divisionPage/divisionPage";
import { slugToString } from "../../src/utils/utils";
import { RepoApi } from "../../src/utils/apiClients/apiClients";
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
  const data = await RepoApi.getDivisionData({
    slug: params.slug,
    pageNum: searchParams.page,
  });
  // Repo API returns 404s within the data.
  if (data?.headers?.code === "404") {
    redirect("/404");
  }

  return (
    <Suspense>
      <DivisionPage data={data} />
    </Suspense>
  );
}
