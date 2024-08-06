"use client";
import PageLayout from "../../pageLayout/pageLayout";
import React from "react";
import useBreakpoints from "../../../hooks/useBreakpoints";
import { useNumColumns } from "../../../hooks/useNumColumns";
import { useParams } from "next/navigation";
import { slugToString } from "../../../utils/utils";

export default function DivisionPage() {
  const params = useParams();
  const { isLargerThanLargeTablet } = useBreakpoints();
  const slug = params.slug as string;
  const title = slugToString(slug);
  const numColumns = useNumColumns();
  return (
    <PageLayout
      activePage="division"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Divisions", url: "/divisions" },
        { text: `${title}`, url: `/divisions/${slug}` },
      ]}
    ></PageLayout>
  );
}
