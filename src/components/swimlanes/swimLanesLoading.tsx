import {
  SkeletonLoader,
  SimpleGrid,
  Box,
  Flex,
} from "@nypl/design-system-react-components";

const SwimLanesLoading = () => {
  return (
    <>
      <Box>
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
      <Box>
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
      <Box>
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
      <Box>
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

export default SwimLanesLoading;
