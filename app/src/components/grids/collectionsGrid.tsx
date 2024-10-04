"use client";

import React from "react";
import { CollectionCardModel } from "../../models/collectionCard";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import { SimpleGrid as DCSimpleGrid } from "../simpleGrid/simpleGrid";
import { Card as DCCard } from "../card/card";

export const CollectionsGrid = ({ collections }: any) => {
  const { isLargerThanLargeTablet } = useBreakpoints();

  return (
    <DCSimpleGrid>
      {collections?.map((collection: CollectionDataType, index) => {
        const collectionModel = new CollectionCardModel(collection);
        return (
          <DCCard
            key={index}
            id={index}
            slug={collectionModel.title}
            record={collectionModel}
            isLargerThanLargeTablet={isLargerThanLargeTablet}
          />
        );
      })}
    </DCSimpleGrid>
  );
};
