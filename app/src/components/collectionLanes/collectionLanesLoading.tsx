import { useNumColumns } from "@/src/hooks/useNumColumns";
import {
  SkeletonLoader,
  SimpleGrid,
  Box,
  Flex,
} from "@nypl/design-system-react-components";
import React from "react";

export default function Loading({ withTitle = true }) {
  return (
    <Box data-testid="collectionlane-skeleton-loader-1">
      {withTitle && (
        <Flex>
          <SkeletonLoader contentSize={0} showImage={false} headingSize={1} />
        </Flex>
      )}
      <SimpleGrid>
        <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
        <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
        <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
      </SimpleGrid>
    </Box>
  );
}
