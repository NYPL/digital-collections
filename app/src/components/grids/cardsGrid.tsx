"use client";

import React, { useRef } from "react";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import ItemDataType from "@/src/types/ItemDataType";
import { isCollectionType } from "@/src/utils/utils";
import { CollectionCardModel } from "../../models/collectionCard";
import { ItemCardModel } from "@/src/models/itemCard";
import { SimpleGrid as DCSimpleGrid } from "../simpleGrid/simpleGrid";
import { Card as DCCard } from "../card/card";
import { useTooltipOffset } from "@/src/hooks/useTooltipOffset";

interface CardsGridProps {
  records: CollectionDataType[] | ItemDataType[];
}

export const CardsGrid = ({ records }: CardsGridProps) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  console.log("typeof record", typeof records);
  // const sanitizedRecords = typeof records === "object" ? [records] : records;

  const isCollections = isCollectionType(records);
  const cardRef = useRef<HTMLDivElement>(null);
  const tooltipOffset = useTooltipOffset(cardRef);
  // const sanitizedRecords = typeof records === "object" ? [records] : records;
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
              record={itemCardModel}
              isLargerThanLargeTablet={isLargerThanLargeTablet}
            />
          );
        }
      })}
    </DCSimpleGrid>
  );
};
