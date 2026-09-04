import { Logo, Link } from "@nypl/design-system-react-components";
import React from "react";
import { trackCTA } from "@/src/utils/ga4Utils";
import useBreakpoints from "@/src/hooks/useBreakpoints";

interface DCLogoProps {
  isMobile?: boolean;
}

const DCLogo = ({ isMobile = false }: DCLogoProps) => {
  const { isLargerThanLargeTablet } = useBreakpoints();

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
          {...(isLargerThanLargeTablet && {
            sizeBasedOn: "height",
            height: "50px",
          })}
        />
      )}
    </Link>
  );
};

export default DCLogo;
