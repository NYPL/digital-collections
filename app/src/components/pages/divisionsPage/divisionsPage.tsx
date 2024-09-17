"use client";
import {
  Box,
  Heading,
  HorizontalRule,
  Text,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import React, { useEffect, useState } from "react";
import CollectionLanes from "../../collectionLanes/collectionLanes";
import { DC_URL } from "@/src/config/constants";
import CollectionLanesLoading from "../../collectionLanes/collectionLanesLoading";

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
      {data.divisions.length > 0 ? (
        <>
          <Box
            sx={{
              maxWidth: "715px",
              "> hgroup > p": {
                fontWeight: "400 !important",
              },
            }}
          >
            <Heading level="h1" text="Divisions" subtitle={data?.summary} />
          </Box>
          <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
          {isLoaded ? (
            <CollectionLanes
              lanesWithNumItems={data.divisions}
              seeMoreLink={`${DC_URL}/divisions`}
            />
          ) : (
            <>
              <CollectionLanesLoading />,
              <CollectionLanesLoading />,
              <CollectionLanesLoading />
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
