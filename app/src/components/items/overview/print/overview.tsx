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

const PrintOverview = ({ item, imageID }) => {
  console.log("imageID is: ", imageID);
  return (
    <>
      <Flex
        marginTop="sm"
        direction="row"
        // gap={}
        // marginBottom="m"
      >
        <Box w="50%">
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
        <Box w="50%">
          <Heading size="heading6" marginBottom="xs">
            Image ID
          </Heading>
          <Text id={"image-id"} aria-label={`Image ID`}>
            {imageID}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default PrintOverview;
