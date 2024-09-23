"use client";
import {
  Box,
  Heading,
  HorizontalRule,
} from "@nypl/design-system-react-components";
import { useParams } from "next/navigation";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { slugToString } from "../../../utils/utils";
import { mockCollections } from "../../../../../__tests__/__mocks__/data/mockCollections";
import React from "react";
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
