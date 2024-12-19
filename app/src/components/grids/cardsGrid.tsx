"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import ItemDataType from "@/src/types/ItemDataType";
import { isCollectionType } from "@/src/utils/utils";
import { CollectionCardModel } from "../../models/collectionCard";
import { ItemCardModel } from "@/src/models/itemCard";
import { SimpleGrid as DCSimpleGrid } from "../simpleGrid/simpleGrid";
import { Card as DCCard } from "../card/card";
import { useTooltipOffset } from "@/src/hooks/useTooltipOffset";
import { useCardImageHeight } from "@/src/hooks/useCardImageHeight";
import LaneLoading from "../lane/laneLoading";

interface CardsGridProps {
  records: CollectionDataType[] | ItemDataType[];
}

export const CardsGrid = forwardRef<HTMLDivElement, CardsGridProps>(
  ({ records }, ref?) => {
    const { isLargerThanLargeTablet } = useBreakpoints();
    const isCollections = isCollectionType(records);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const tooltipOffset = useTooltipOffset(cardRef);
    const imageHeight = useCardImageHeight(cardRef);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsLoaded(true);
    }, []);

    return isLoaded ? (
      <DCSimpleGrid ref={ref}>
        {records?.map((record, index) => {
          if (isCollections) {
            const collectionCardModel = new CollectionCardModel(record);
            return (
              <DCCard
                key={index}
                id={index}
                ref={cardRef}
                tooltipOffset={tooltipOffset}
                imageHeight={imageHeight}
                record={collectionCardModel}
                isLargerThanLargeTablet={isLargerThanLargeTablet}
              />
            );
          } else {
            const itemCardModel = new ItemCardModel(record);
            return (
              <DCCard
                key={index}
                id={index}
                ref={cardRef}
                tooltipOffset={tooltipOffset}
                imageHeight={imageHeight}
                record={itemCardModel}
                isLargerThanLargeTablet={isLargerThanLargeTablet}
              />
            );
          }
        })}
      </DCSimpleGrid>
    ) : (
      <>
        {Array(Math.ceil(records.length / 4))
          .fill(null)
          .map((_, index) => (
            <LaneLoading
              id={`lane-loading-${index}`}
              key={`lane-loading-${index}`}
              withTitle={false}
            />
          ))}
      </>
    );
  }
);

CardsGrid.displayName = "CardsGrid";
