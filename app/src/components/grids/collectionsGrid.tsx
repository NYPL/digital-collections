"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Heading, Pagination } from "@nypl/design-system-react-components";
import { CollectionCardModel } from "../../models/collectionCard";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionDataType from "../../types/CollectionDataType";
import React, { useRef, useState } from "react";
import { totalNumPages } from "../../utils/utils";
import DCSimpleGrid from "../dcSimpleGrid/dcSimpleGrid";
import DCCard from "../dcCard/DCCard";
import { useTooltipOffset } from "@/src/hooks/useTooltipOffset";

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
