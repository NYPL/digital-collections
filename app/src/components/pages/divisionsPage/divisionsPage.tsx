"use client";
import {
  Box,
  Heading,
  HorizontalRule,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import React from "react";
import { useNumColumns } from "../../../hooks/useNumColumns";
import { headerBreakpoints } from "../../../utils/breakpoints";
import CollectionLanes from "../../collectionLanes/collectionLanes";

export default function DivisionsPage({ data }) {
  const numColumns = useNumColumns();
  return (
    <PageLayout
      activePage="divisions"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Divisions", url: "/divisions" },
      ]}
    >
      <Box
        sx={{
          [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
            maxWidth: "715px",
          },
          "> hgroup > p": {
            fontWeight: "400 !important",
          },
        }}
      >
        <Heading level="h1" text="Divisions" subtitle={data?.data?.summary} />
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <CollectionLanes
        numColumns={numColumns}
        lanesWithNumItems={data?.data?.divisions}
        isSwimLane={false}
      />
    </PageLayout>
  );
}
