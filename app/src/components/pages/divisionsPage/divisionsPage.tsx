"use client";
import {
  Box,
  Heading,
  HorizontalRule,
  Text,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import React, { useEffect, useState } from "react";
import { DC_URL } from "@/src/config/constants";
import Lane from "../../lane/lane";
import LaneLoading from "../../lane/laneLoading";

export default function DivisionsPage({ data }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <PageLayout
      activePage="divisions"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Divisions", url: "/divisions" },
      ]}
      adobeAnalyticsPageName="divisions"
    >
      {data?.divisions && data.divisions.length > 0 ? (
        <>
          <Box
            sx={{
              maxWidth: "730px",
              "> hgroup > p": {
                fontWeight: "400 !important",
              },
            }}
          >
            <Heading level="h1" text="Divisions" subtitle={data?.summary} />
          </Box>
          <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
          {isLoaded ? (
            data.divisions.map((division, key) => (
              <Lane
                key={key}
                records={division.collections}
                seeMoreLink={`${DC_URL}/divisions`}
                laneName={division.name}
                laneSlug={division.slug}
              />
            ))
          ) : (
            <>
              {[...Array(36)].map((_, index) => (
                <LaneLoading key={index} />
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
