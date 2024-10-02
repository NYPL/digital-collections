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
import React, { useEffect, useRef, useState } from "react";
import PageLayout from "../../pageLayout/pageLayout";
import { SimpleGrid as DCSimpleGrid } from "../../simpleGrid/simpleGrid";
import { CollectionCardModel } from "@/src/models/collectionCard";
import CollectionDataType from "@/src/types/CollectionDataType";
import { Card as DCCard } from "../../card/card";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import { useTooltipOffset } from "@/src/hooks/useTooltipOffset";
import LaneLoading from "../../lane/laneLoading";

export default function CollectionLanePage() {
  const params = useParams();
  const slug = params.slug as string;
  const title = slugToString(slug);
  const [isLoaded, setIsLoaded] = useState(false);
  const pageName = `collections|lane|${slug}`;
  const { isLargerThanLargeTablet } = useBreakpoints();
  const cardRef = useRef<HTMLDivElement>(null);
  const tooltipOffset = useTooltipOffset(cardRef);

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
        <DCSimpleGrid>
          {mockCollections?.map((collection: CollectionDataType, index) => {
            const collectionModel = new CollectionCardModel(collection);
            return (
              <DCCard
                key={index}
                ref={cardRef}
                tooltipOffset={tooltipOffset}
                id={`${index}`}
                slug={collectionModel.title}
                record={collectionModel}
                isLargerThanLargeTablet={isLargerThanLargeTablet}
              />
            );
          })}
        </DCSimpleGrid>
      ) : (
        <>
          <LaneLoading withTitle={false} />,
          <LaneLoading withTitle={false} />,
          <LaneLoading withTitle={false} />,
        </>
      )}
    </PageLayout>
  );
}
