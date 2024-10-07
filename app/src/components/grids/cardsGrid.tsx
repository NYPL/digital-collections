"use client";

import React from "react";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import { CollectionCardModel } from "../../models/collectionCard";
import ItemDataType from "@/src/types/ItemDataType";
import ItemCardDataType from "@/src/types/ItemCardDataType";
import { ItemCardModel } from "@/src/models/itemCard";
import { SimpleGrid as DCSimpleGrid } from "../simpleGrid/simpleGrid";
import { Card as DCCard } from "../card/card";

interface CardsGridProps {
  records: CollectionDataType[] | ItemDataType[];
}

function isCollectionType(
  records: CollectionDataType[] | ItemDataType[]
): records is CollectionDataType[] {
  return "numberOfDigitizedItems" in records[0];
}

export const CardsGrid = ({ records }: CardsGridProps) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  const isCollections = isCollectionType(records);

  return (
    <DCSimpleGrid>
      {records?.map((record, index) => {
        if (isCollections) {
          const collectionCardModel = new CollectionCardModel(record);
          return (
            <DCCard
              key={index}
              id={index}
              slug={collectionCardModel.title}
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
              record={itemCardModel}
              isLargerThanLargeTablet={isLargerThanLargeTablet}
            />
          );
        }
      })}
    </DCSimpleGrid>
  );
};
