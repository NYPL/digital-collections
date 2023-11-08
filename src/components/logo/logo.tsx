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
        <VStack
          align="left"
          sx={{
            display: { sm: "none", md: "none", lg: "block" },
          }}
        >
          <Heading
            level="h3"
            mb="0"
            mt="0"
            size="heading6"
            sx={{
              color: "#504E49",
              fontWeight: "700",
              lineHeight: 0.8,
              fontSize: "xl",
              letterSpacing: "1.75px",
            }}
          >
            THE NEW YORK PUBLIC LIBRARY
          </Heading>
          <Heading
            level="h4"
            mt="0"
            mb="0"
            size="heading4"
            sx={{
              fontWeight: "700",
              lineHeight: 0.8,
              m: "0px",
              fontSize: "4xl",
            }}
          >
            DIGITAL COLLECTIONS
          </Heading>
        </VStack>
      </HStack>
    </>
  );
};

export default DCLogo;
