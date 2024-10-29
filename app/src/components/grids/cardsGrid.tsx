"use client";

import React, { forwardRef, useEffect, useRef } from "react";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import ItemDataType from "@/src/types/ItemDataType";
import { isCollectionType } from "@/src/utils/utils";
import { CollectionCardModel } from "../../models/collectionCard";
import { ItemCardModel } from "@/src/models/itemCard";
import { SimpleGrid as DCSimpleGrid } from "../simpleGrid/simpleGrid";
import { Card as DCCard } from "../card/card";
import { useTooltipOffset } from "@/src/hooks/useTooltipOffset";
import { Heading } from "@nypl/design-system-react-components";
import { useMergeRefs } from "@chakra-ui/react";
import { useCardImageHeight } from "@/src/hooks/useCardImageHeight";

interface CardsGridProps {
  records: CollectionDataType[] | ItemDataType[];
}

export const CardsGrid = forwardRef<HTMLDivElement, CardsGridProps>(
  ({ records }, ref) => {
    const { isLargerThanLargeTablet } = useBreakpoints();
    const isCollections = isCollectionType(records);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const refs = useMergeRefs(cardRef, ref);
    const tooltipOffset = useTooltipOffset(cardRef);
    const imageHeight = useCardImageHeight(cardRef);
    console.log("first record", records[0]);
    console.log("last record", records[records.length - 1]);

    useEffect(() => {
      if (cardRef.current) {
        console.log("cardRef.current", cardRef.current);
      }
    }, [cardRef]);
    return (
      <DCSimpleGrid>
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
    );
  }
);

CardsGrid.displayName = "CardsGrid";
