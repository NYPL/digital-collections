import MetadataOverview from "./metadata/overview";

import {
  chakra,
  SimpleGrid as ChakraSimpleGrid,
  ChakraComponent,
} from "@chakra-ui/react";
import { HorizontalRule } from "@nypl/design-system-react-components";
import React, { forwardRef } from "react";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import ExternalLinksOverview from "./external/overview";
import PrintOverview from "./print/overview";
import CitationsOverview from "./citations/overview";

const ItemOverview = ({ item, canvasIndex }) => {
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
        <ExternalLinksOverview item={item} />
        {/* TODO: fix the order print button*/}
        {item.isImage && (
          <PrintOverview item={item} imageID={item.imageIDs[canvasIndex]} />
        )}
      </ChakraSimpleGrid>
      <HorizontalRule marginTop="l" marginBottom="l" />
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
        <MetadataOverview metadata={item.metadata} />
        <CitationsOverview item={item} />
      </ChakraSimpleGrid>
    </>
  );
};

export default ItemOverview;
