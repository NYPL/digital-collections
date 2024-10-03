"use client";

import { CollectionCardModel } from "../../models/collectionCard";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import React from "react";
import DCSimpleGrid from "../dcSimpleGrid/dcSimpleGrid";
import DCCard from "../dcCard/DCCard";

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
