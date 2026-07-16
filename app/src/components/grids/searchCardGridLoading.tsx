import {
  SkeletonLoader,
  Box,
  SimpleGrid,
} from "@nypl/design-system-react-components";
import React from "react";

type SearchCardGridLoadingProps = {
  id: number;
  viewMode: "grid" | "list";
  numColumns?: number;
};

export default function SearchCardGridLoading({
  id,
  viewMode,
  numColumns = 4,
}: SearchCardGridLoadingProps) {
  const responsiveColumns = viewMode === "list" ? 1 : numColumns;
  const loaderCount = viewMode === "grid" ? 12 : 4;

  return (
    <Box
      data-testid="cardgrid-skeleton-loader-1"
      key={id}
      marginBottom="l"
      width="100%"
    >
      <SimpleGrid
        columns={responsiveColumns}
        width={viewMode === "list" ? "60%" : "100%"}
      >
        {[...Array(loaderCount)].map((_, index) => (
          <SkeletonLoader
            key={`search-card-grid-loading-${id}-${index}`}
            imageAspectRatio="landscape"
            layout={viewMode === "grid" ? "column" : "row"}
            contentSize={viewMode === "grid" ? 1 : 2}
            data-testid="search-card-skeleton-loader"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
