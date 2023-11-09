import {
  Heading,
  VStack,
  HStack,
  Logo,
  Link,
} from "@nypl/design-system-react-components";
import React from "react";
import appConfig from "appConfig";

const DCLogo = () => {
  return (
    <Link
      isUnderlined={false}
      aria-label={"Digital Collections Homepage"}
      href={`${appConfig.DC_URL}`}
    >
      <HStack>
        <Logo
          pt="2"
          pb="2"
          name="nyplLionBlack"
          size="xxsmall"
          aria-label="NYPL Lion Logo"
          sx={{
            display: { sm: "block", md: "none", lg: "none" },
          }}
        />
        <Logo
          name="digitalCollectionsBlack"
          aria-label="NYPL Digital Collections Logo"
          sx={{
            display: { sm: "none", md: "none", lg: "block" },
          }}
        />
        {/* <VStack
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
              color: "var(--nypl-colors-ui-gray-dark)",
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
              fontSize: "4xl",
            }}
          >
            DIGITAL COLLECTIONS
          </Heading>
        </VStack> */}
      </HStack>
    </Link>
  );
};

export default DCLogo;
