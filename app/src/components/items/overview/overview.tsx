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
import ManifestOverview from "./manifest/overview";

const ItemOverview = ({ item }) => {
  return (
    <>
      <ChakraSimpleGrid
        marginTop="m"
        sx={{
          [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]: {
            gridTemplateColumns: `repeat(1, minmax(0, 1fr))`,
          },
          [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]: {
            gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
          },
        }}
      >
        <ExternalLinksOverview
          catalogLink={item.catalogLink}
          archivesLink={item.archivesLink}
        />
        {item.isImage ? (
          <PrintOverview imageIDs={item.imageIDs} />
        ) : (
          <ManifestOverview manifestURL={item.manifestURL} />
        )}
      </ChakraSimpleGrid>
      <HorizontalRule marginTop="xs" marginBottom="m" />
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
        <MetadataOverview metadata={item.renderableMetadata} />
        <CitationsOverview citationData={item.citationData} />
      </ChakraSimpleGrid>
    </>
  );
};

export default ItemOverview;
