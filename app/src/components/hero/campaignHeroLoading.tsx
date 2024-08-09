import { headerBreakpoints } from "../../utils/breakpoints";
import { SkeletonLoader } from "@nypl/design-system-react-components";
import React from "react";

const CampaignHeroLoading = () => {
  return (
    <SkeletonLoader
      sx={{
        "> div": {
          [`@media screen and (min-width: ${headerBreakpoints.lgMobile})`]: {
            maxHeight: "500px",
          },
        },
      }}
      data-testid="hero-skeleton-loader"
      imageAspectRatio="landscape"
      showContent={false}
      showHeading={false}
      showButton={false}
    />
  );
};

export default CampaignHeroLoading;
