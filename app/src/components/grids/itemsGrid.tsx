"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Heading, Pagination } from "@nypl/design-system-react-components";
import CollectionCard from "../cards/collectionCard";
import { CollectionCardModel } from "../../models/collectionCard";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import React, { useRef, useState } from "react";
import { totalNumPages } from "../../utils/utils";
import DCSimpleGrid from "../dcSimpleGrid/dcSimpleGrid";
import ItemCard from "../cards/itemCard";
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
          <ItemCard
            key={index}
            id={index}
            item={itemModel}
            isLargerThanLargeTablet={isLargerThanLargeTablet}
          />
        );
      })}
    </DCSimpleGrid>
  );
};
