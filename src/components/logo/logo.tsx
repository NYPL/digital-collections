import { Logo, Link } from "@nypl/design-system-react-components";
import React from "react";
import appConfig from "appConfig";

const DCLogo = ({ isMobile }) => {
  return (
    <Link
      isUnderlined={false}
      aria-label={"Digital Collections Homepage"}
      href={`${appConfig.DC_URL}`}
    >
      {isMobile ? (
        <Logo
          name="nyplLionBlack"
          sizeBasedOn="height"
          height="40px"
          sx={{
            display: { sm: "inline", md: "none" },
          }}
        />
      ) : (
        <Logo
          name="digitalCollectionsBlack"
          sizeBasedOn="height"
          height="50px"
          sx={{
            display: { sm: "none", md: "inline" },
          }}
        />
      )}
    </Link>
  );
};

export default DCLogo;
