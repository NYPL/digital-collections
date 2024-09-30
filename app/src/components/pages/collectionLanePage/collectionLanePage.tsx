"use client";
import {
  Box,
  Heading,
  HorizontalRule,
} from "@nypl/design-system-react-components";
import { useParams } from "next/navigation";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { slugToString } from "../../../utils/utils";
import { mockCollections } from "../../../../../__tests__/__mocks__/data/mockCollections";
import React, { useEffect, useState } from "react";
import PageLayout from "../../pageLayout/pageLayout";
import { CollectionsGrid } from "../../grids/collectionsGrid";
import CollectionLanesLoading from "../../lanes/collectionLanes/collectionLanesLoading";

export default function CollectionLanePage() {
  const params = useParams();
  const slug = params.slug as string;
  const title = slugToString(slug);
  const [isLoaded, setIsLoaded] = useState(false);
  const pageName = `collections|lane|${slug}`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <PageLayout
      activePage="swimlane"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
        { text: `${title}`, url: `/collections/lane/${slug}` },
      ]}
      adobeAnalyticsPageName={pageName}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
            maxWidth: "715px",
          },
          gap: "m",
        }}
      >
        <Heading sx={{ marginBottom: 0 }} level="h1" text={title} />
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      {isLoaded ? (
        <CollectionsGrid data={mockCollections} />
      ) : (
        <>
          <CollectionLanesLoading withTitle={false} />,
          <CollectionLanesLoading withTitle={false} />,
          <CollectionLanesLoading withTitle={false} />,
        </>
      )}
    </PageLayout>
  );
}
