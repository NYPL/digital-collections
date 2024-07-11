import { Heading } from "@nypl/design-system-react-components";
import React from "react";

interface CampaignHeroHeadingProps {
  numberOfDigitizedItems: string;
}

const CampaignHeroHeading = ({
  numberOfDigitizedItems,
}: CampaignHeroHeadingProps) => {
  return (
    <Heading level="h1" id="campaign-hero" size="heading2">
      <>
        Explore {numberOfDigitizedItems} items digitized from The New York
        Public Library&apos;s collections.
      </>
    </Heading>
  );
};

export default CampaignHeroHeading;

//863,848
