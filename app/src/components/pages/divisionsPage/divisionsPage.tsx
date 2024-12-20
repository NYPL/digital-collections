"use client";
import {
  Box,
  Heading,
  HorizontalRule,
  Text,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import React, { useEffect, useState } from "react";
import { Lane as DCLane } from "../../lane/lane";
import LaneLoading from "../../lane/laneLoading";
import LaneDataType from "@/src/types/Lane";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";

interface DivisionsProps {
  summary: string;
  divisions: LaneDataType[];
}

export default function DivisionsPage({ summary, divisions }: DivisionsProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    if ((window as any).newrelic) {
      (window as any).newrelic.log("test log from divisions page", {
        level: "error",
      });
    }
  }, []);
  return (
    <PageLayout
      activePage="divisions"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Divisions", url: "/divisions" },
      ]}
      adobeAnalyticsPageName={createAdobeAnalyticsPageName("divisions")}
    >
      {divisions && divisions.length > 0 ? (
        <>
          <Box
            sx={{
              maxWidth: "730px",
              "> hgroup > p": {
                fontWeight: "400 !important",
              },
            }}
          >
            <Heading level="h1" text="Divisions" subtitle={summary} />
          </Box>
          <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "s" }} />
          {isLoaded ? (
            divisions.map((division, key) => (
              <DCLane
                key={key}
                records={division.collections}
                seeMoreLink={`/divisions`}
                laneName={division.name}
                laneSlug={division.slug}
              />
            ))
          ) : (
            <>
              {[...Array(36)].map((_, index) => (
                <LaneLoading id={index} key={index} />
              ))}
            </>
          )}
        </>
      ) : (
        <>
          <Heading level="h1" text="Divisions" />
          <Text sx={{ mt: "s" }}>There was an error accessing this page.</Text>
        </>
      )}
    </PageLayout>
  );
}
