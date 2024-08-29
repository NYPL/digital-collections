import {
  SkeletonLoader,
  SimpleGrid,
  Box,
  Flex,
} from "@nypl/design-system-react-components";
import React from "react";

const CollectionLanesLoading = () => {
  return (
    <>
      <Box data-testid="collectionlane-skeleton-loader-1">
        <Flex>
          <SkeletonLoader contentSize={0} showImage={false} headingSize={1} />
        </Flex>
        <SimpleGrid columns={4}>
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
        </SimpleGrid>
      </Box>
      <Box data-testid="collectionlane-skeleton-loader-2">
        <Flex>
          <SkeletonLoader contentSize={0} showImage={false} headingSize={1} />
        </Flex>
        <SimpleGrid columns={4}>
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
        </SimpleGrid>
      </Box>
      <Box data-testid="collectionlane-skeleton-loader-3">
        <Flex>
          <SkeletonLoader contentSize={0} showImage={false} headingSize={1} />
        </Flex>
        <SimpleGrid columns={4}>
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
        </SimpleGrid>
      </Box>
      <Box data-testid="collectionlane-skeleton-loader-4">
        <Flex>
          <SkeletonLoader contentSize={0} showImage={false} headingSize={1} />
        </Flex>
        <SimpleGrid columns={4}>
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
          <SkeletonLoader imageAspectRatio="landscape" contentSize={1} />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default CollectionLanesLoading;
