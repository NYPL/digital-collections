import {
  SkeletonLoader,
  Box,
  Flex,
} from "@nypl/design-system-react-components";
import React from "react";
import { SimpleGrid as DCSimpleGrid } from "../simpleGrid/simpleGrid";

export default function LaneLoading({ withTitle = true }) {
  return (
    <Box
      data-testid="collectionlane-skeleton-loader-1"
      sx={{ marginBottom: "l" }}
    >
      {withTitle && (
        <Flex>
          <SkeletonLoader contentSize={0} showImage={false} headingSize={1} />
        </Flex>
      )}
      <DCSimpleGrid marginTop="s">
        <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
        <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
        <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
        <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
      </DCSimpleGrid>
    </Box>
  );
}
