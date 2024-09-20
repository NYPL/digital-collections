"use client";
import {
  Box,
  Heading,
  HorizontalRule,
  SimpleGrid,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";

import { useParams } from "next/navigation";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { slugToString } from "../../../utils/utils";
import DCCard from "../../dcCard/DCCard";
import { CollectionCardModel } from "../../../models/collectionCard";
import useBreakpoints from "../../../hooks/useBreakpoints";
import CollectionDataType from "../../../types/CollectionDataType";
import { mockCollections } from "../../../../../__tests__/__mocks__/data/mockCollections";
import React from "react";
import DCSimpleGrid from "../../dcSimpleGrid/dcSimpleGrid";
import { CollectionsGrid } from "../../grids/collectionsGrid";

export default function CollectionLanePage() {
  const params = useParams();
  const slug = params.slug as string;
  const title = slugToString(slug);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
            maxWidth: "715px",
          },
          gap: "m",
        }}
      >
        <Heading sx={{ marginBottom: 0 }} level="h1" text={title} />
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <CollectionsGrid data={mockCollections} />
    </>
  );
}
