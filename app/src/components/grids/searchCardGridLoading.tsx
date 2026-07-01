import {
  SkeletonLoader,
  Box,
  SimpleGrid,
} from "@nypl/design-system-react-components";
import React from "react";
import useBreakpoints from "@/src/hooks/useBreakpoints";

type SearchCardGridLoadingProps = {
  id: number;
  viewMode: "grid" | "list";
  numColumns?: number;
  largeMobileColumns?: number;
};

export default function SearchCardGridLoading({
  id,
  viewMode,
  numColumns = 4,
  largeMobileColumns,
}: SearchCardGridLoadingProps) {
  const {
    isLargerThanLargeTablet,
    isLargerThanSmallTablet,
    isLargerThanLargeMobile,
  } = useBreakpoints();

  const getResponsiveColumns = () => {
    if (viewMode === "list") return 1;
    if (!isLargerThanLargeMobile) return 1;
    if (isLargerThanLargeMobile && !isLargerThanSmallTablet) {
      return largeMobileColumns ?? numColumns;
    }
    if (isLargerThanSmallTablet && !isLargerThanLargeTablet) return 2;
    return numColumns;
  };

  const responsiveColumns = getResponsiveColumns();
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
