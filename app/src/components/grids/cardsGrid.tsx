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
import { stringToSlug } from "@/src/utils/utils";

interface CardsGridProps {
  records: CollectionDataType[] | ItemDataType[];
}

export const CardsGrid = ({ records }: CardsGridProps) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  const isCollections = isCollectionType(records);
  const cardRef = useRef<HTMLDivElement>(null);
  const tooltipOffset = useTooltipOffset(cardRef);

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
              slug={stringToSlug(collectionCardModel.title)}
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
              slug={stringToSlug(itemCardModel.title)}
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
