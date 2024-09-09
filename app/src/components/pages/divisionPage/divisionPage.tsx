"use client";
import { useParams, useSearchParams } from "next/navigation";
import {
  Box,
  Heading,
  HorizontalRule,
  Link,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { slugToString } from "../../../utils/utils";
import React from "react";
import { ItemLane } from "../../lanes/itemLane/itemLane";
import { CollectionsTable } from "../../tables/collectionTable";
import { useState } from "react";

export default function DivisionPage({ data }: any) {
  const params = useParams();
  const queryParams = useSearchParams();
  const slug = params.slug as string;
  const title = slugToString(slug);
  const pageName = `divisions|${slug}`;

  const updateCollections = () => {};

  return (
    <PageLayout
      activePage="division"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Divisions", url: "/divisions" },
        { text: `${title}`, url: `/divisions/${slug}` },
      ]}
      adobeAnalyticsPageName={pageName}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "> hgroup": {
            marginBottom: 0,
          },
          [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
            maxWidth: "715px",
          },
          "> hgroup > p": {
            fontWeight: "400 !important",
          },
          "> a > span": {
            fontWeight: "500",
          },
          gap: "m",
        }}
      >
        <Heading level="h1" text={title} subtitle={data.summary} />
        <Link type="standalone" target="_blank" href={data.nyplLink}>
          <span> Contact info and more </span>
        </Link>
      </Box>

      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <ItemLane data={data} />

      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <CollectionsTable data={data} updateCollections={updateCollections} />
    </PageLayout>
  );
}
