"use client";
import {
  Box,
  Heading,
  HorizontalRule,
} from "@nypl/design-system-react-components";
import { useParams } from "next/navigation";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { slugToString } from "../../../utils/utils";
import { mockCollectionCards } from "__tests__/__mocks__/data/mockCollectionCards";
import { CollectionsGrid } from "../../grids/collectionsGrid";
import React, { useEffect, useRef, useState } from "react";
import PageLayout from "../../pageLayout/pageLayout";
import CollectionLanesLoading from "../../lanes/collectionLanes/collectionLanesLoading";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import { useTooltipOffset } from "@/src/hooks/useTooltipOffset";

export default function CollectionLanePage() {
  const params = useParams();
  const slug = params.slug as string;
  const title = slugToString(slug);
  const [isLoaded, setIsLoaded] = useState(false);
  const pageName = `collections|lane|${slug}`;
  const { isLargerThanLargeTablet } = useBreakpoints();
  const cardRef = useRef<HTMLDivElement>(null);
  const tooltipOffset = useTooltipOffset(cardRef);
  console.log("mock collection cards are: ", mockCollectionCards);

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
        <>
          <CollectionsGrid collections={mockCollectionCards} />
        </>
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
