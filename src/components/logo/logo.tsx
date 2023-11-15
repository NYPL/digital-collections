import {
  Heading,
  VStack,
  HStack,
  Logo,
  Link,
  Box,
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
          name="nyplLionBlack"
          sizeBasedOn="height"
          height="40px"
          aria-label="NYPL Lion Logo"
          sx={{
            display: { sm: "block", md: "none", lg: "none" },
          }}
        />
        <Logo
          name="digitalCollectionsBlack"
          aria-label="NYPL Digital Collections Logo"
          sizeBasedOn="height"
          height="64px"
          sx={{
            display: { sm: "none", md: "block", lg: "block" },
          }}
        />
      </HStack>
    </Link>
  );
};

export default DCLogo;
