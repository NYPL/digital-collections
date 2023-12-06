import { Logo, Link } from "@nypl/design-system-react-components";
import React from "react";
import { DCLogoProps } from "@/types/DCLogoProps";

const DCLogo = ({ isMobile = false }: DCLogoProps) => {
  return (
    <Link
      isUnderlined={false}
      aria-label={"Digital Collections Homepage"}
      href={`/`}
    >
      {isMobile ? (
        <Logo name="nyplLionBlack" sizeBasedOn="height" height="40px" />
      ) : (
        <Logo
          name="digitalCollectionsBlack"
          sizeBasedOn="height"
          height="50px"
        />
      )}
    </Link>
  );
};

export default DCLogo;
