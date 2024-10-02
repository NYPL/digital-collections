"use client";
import { useParams } from "next/navigation";
import {
  Box,
  Heading,
  HorizontalRule,
  Link,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { slugToString } from "../../../utils/utils";
import React, { useEffect, useState } from "react";
import { CollectionsGrid } from "../../grids/collectionsGrid";
import { DC_URL } from "@/src/config/constants";
import { Lane as DCLane } from "../../lane/lane";
import LaneLoading from "../../lane/laneLoading";

export default function DivisionPage({ data }: any) {
  const params = useParams();
  const slug = params.slug as string;
  const title = slugToString(slug);
  const pageName = `divisions|${slug}`;
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
          maxWidth: "730px",
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
        <Link
          type="standalone"
          target="_blank"
          href={data.nyplLink}
          style={{ width: "fit-content" }}
        >
          <span> Contact info and more </span>
        </Link>
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "s" }} />
      {isLoaded ? (
        <DCLane
          records={data.items}
          seeMoreLink={`${DC_URL}/divisions`}
          laneName={data.name}
        />
      ) : (
        <LaneLoading withTitle={false} />
      )}
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      {isLoaded ? (
        <CollectionsGrid data={data} />
      ) : (
        <LaneLoading withTitle={false} />
      )}
    </PageLayout>
  );
}
