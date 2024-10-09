"use client";

import useBreakpoints from "../../hooks/useBreakpoints";
import React from "react";
import { SimpleGrid as DCSimpleGrid } from "../simpleGrid/simpleGrid";
import { Card as DCCard } from "../card/card";
import ItemCardDataType from "@/src/types/ItemCardDataType";
import { ItemCardModel } from "@/src/models/itemCard";

export const ItemsGrid = ({ items }: any) => {
  console.log("items are: ", items);
  const { isLargerThanLargeTablet } = useBreakpoints();

  return (
    <DCSimpleGrid>
      {items?.map((item: ItemCardDataType, index) => {
        const itemModel = new ItemCardModel(item);
        return (
          <DCCard
            key={index}
            id={index}
            record={itemModel}
            isLargerThanLargeTablet={isLargerThanLargeTablet}
          />
        );
      })}
    </DCSimpleGrid>
  );
};
