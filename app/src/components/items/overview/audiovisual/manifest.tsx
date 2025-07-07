import { SimpleGrid as ChakraSimpleGrid } from "@chakra-ui/react";
import { Box, Heading, Link } from "@nypl/design-system-react-components";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import React from "react";

const AVMaterialManifest = ({ manifestURL }) => {
  return (
    <>
      <ChakraSimpleGrid
        sx={{
          [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]: {
            gridTemplateColumns: `repeat(1, minmax(0, 1fr))`,
          },
          [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]: {
            gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
          },
        }}
      >
        <Box marginBottom="m">
          <Heading size="heading6" marginBottom="xs">
            View IIIF Manifest
          </Heading>
          <Link
            href={manifestURL}
            id={"iiif-manifest-btn"}
            isUnderlined={false}
            target="_blank"
            aria-label={`view IIIF manifest`}
            type="buttonSecondary"
          >
            Link to Item Manifest
          </Link>
        </Box>
      </ChakraSimpleGrid>
    </>
  );
};

export default AVMaterialManifest;
