import {
  SkeletonLoader,
  Box,
  SimpleGrid,
} from "@nypl/design-system-react-components";
import React from "react";

export default function SearchCardGridLoading({ id }) {
  return (
    <Box data-testid="cardgrid-skeleton-loader-1" key={id} marginBottom="l">
      <SimpleGrid columns={1} width="30%">
        <SkeletonLoader
          imageAspectRatio="landscape"
          layout="row"
          contentSize={2}
        />
        <SkeletonLoader
          imageAspectRatio="landscape"
          layout="row"
          contentSize={2}
        />
        <SkeletonLoader
          imageAspectRatio="landscape"
          layout="row"
          contentSize={2}
        />
        <SkeletonLoader
          imageAspectRatio="landscape"
          layout="row"
          contentSize={2}
        />
      </SimpleGrid>
    </Box>
  );
}
