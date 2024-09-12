import {
  SkeletonLoader,
  Box,
  Flex,
} from "@nypl/design-system-react-components";
import React from "react";
import DCSimpleGrid from "../dcSimpleGrid/dcSimpleGrid";

export default function SwimLanesLoading({ withTitle = true }) {
  return (
    <Box data-testid="swimlane-skeleton-loader-1">
      {withTitle && (
        <Flex>
          <SkeletonLoader contentSize={0} showImage={false} headingSize={1} />
        </Flex>
      )}
      <DCSimpleGrid>
        <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
        <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
        <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
        <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
      </DCSimpleGrid>
    </Box>
  );
}
