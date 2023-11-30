import { HStack, Logo, Link } from "@nypl/design-system-react-components";
import React from "react";
import appConfig from "appConfig";

const DCLogo = () => {
  return (
    <Link
      isUnderlined={false}
      aria-label={"Digital Collections Homepage"}
      href={`/`}
    >
      <HStack>
        <Logo
          name="nyplLionBlack"
          sizeBasedOn="height"
          height="40px"
          sx={{
            display: { sm: "block", md: "none" },
          }}
        />
        <Logo
          name="digitalCollectionsBlack"
          sizeBasedOn="height"
          height="50px"
          sx={{
            display: { sm: "none", md: "block" },
          }}
        />
      </HStack>
    </Link>
  );
};

export default DCLogo;
