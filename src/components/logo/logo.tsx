import {
  Heading,
  VStack,
  HStack,
  Logo,
} from "@nypl/design-system-react-components";
import React from "react";

const DCLogo = () => {
  return (
    <>
      <HStack>
        <Logo
          pt="2"
          pb="2"
          name="nyplLionBlack"
          size="xxsmall"
          aria-label="NYPL Lion Logo"
        />
        <VStack align="left">
          <Heading level="h3" mb="0" mt="0" size="heading6">
            THE NEW YORK PUBLIC LIBRARY
          </Heading>
          <Heading level="h4" mt="0" size="heading4">
            DIGITAL COLLECTIONS
          </Heading>
        </VStack>
      </HStack>
    </>
  );
};

export default DCLogo;
