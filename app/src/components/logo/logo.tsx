import { Logo, Link } from "@nypl/design-system-react-components";
import React from "react";
import { trackCTA } from "@/src/utils/ga4Utils";

interface DCLogoProps {
  isMobile?: boolean;
}

const DCLogo = ({ isMobile = false }: DCLogoProps) => {
  return (
    <Link
      isUnderlined={false}
      aria-label={"Digital Collections Homepage"}
      href={`/`}
      onClick={() => trackCTA("Logo", "/", "Digital Collections - Logo")}
      sx={{ fontSize: "0px" }}
    >
      {isMobile ? (
        <Logo name="nyplLionBlack" sizeBasedOn="height" height="40px" />
      ) : (
        <Logo
          name="digitalCollectionsBlack"
          id="nypl-lion-logo"
          size="large"
          sx={{
            "@media screen and (min-width: 1024px)": {
              height: "50px",
            },
          }}
        />
      )}
    </Link>
  );
};

export default DCLogo;
