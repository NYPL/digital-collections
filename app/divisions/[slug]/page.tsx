import { Metadata } from "next";
import React from "react";
import DivisionPage from "src/components/pages/divisionPage/divisionPage";

export type DivisionProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: DivisionProps): Promise<Metadata> {
  function slugToString(slug) {
    let str = slug.replace(/[-]/g, " ");
    str = str.replace(/\b\w/g, (char) => char.toUpperCase());
    return str;
  }

  const slug = slugToString(params.slug);
  return {
    title: `${slug} - NYPL Digital Collections`,
  };
}

export default function Division() {
  return <DivisionPage />;
}
