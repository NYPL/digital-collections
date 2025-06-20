import {
  chakra,
  SimpleGrid as ChakraSimpleGrid,
  ChakraComponent,
} from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
  ButtonGroup,
  TagSet,
  HorizontalRule,
} from "@nypl/design-system-react-components";
import parse from "html-react-parser";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import React, { forwardRef } from "react";
import { useCanvasContext } from "../../../../context/CanvasProvider";

const PrintOverview = ({ imageIDs }) => {
  const { currentCanvasIndex } = useCanvasContext();
  const imageID = imageIDs[currentCanvasIndex];
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
            Purchase this print
          </Heading>
          <Link
            href={`https://archivea.studio/?id=${imageID}`}
            id={"print-btn"}
            isUnderlined={false}
            target="_blank"
            aria-label={`order print`}
            type="buttonSecondary"
          >
            Order Print
          </Link>
        </Box>
        <Box>
          <Heading size="heading6" marginBottom="xs">
            Image ID
          </Heading>
          <Text id={"image-id"} aria-label={`Image ID`}>
            {imageID}
          </Text>
        </Box>
      </ChakraSimpleGrid>
    </>
  );
};

export default PrintOverview;
