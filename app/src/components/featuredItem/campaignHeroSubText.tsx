import useBreakpoints from "../../hooks/useBreakpoints";
import {
  Link as DSLink,
  HorizontalRule,
  Text,
  Box,
  Tooltip,
} from "@nypl/design-system-react-components";
import React from "react";
import { CampaignHeroSubtextProps } from "../../types/props/CampaignHeroProps";

const CampaignHeroSubText = ({ featuredItem }: CampaignHeroSubtextProps) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  const featuredItemLink = (
    <DSLink hasVisitedState={false} href={featuredItem.href}>
      {featuredItem.title}{" "}
    </DSLink>
  );
  return (
    <>
      <Text>
        This site is a living database with new materials added every day,
        featuring prints, photographs, maps, manuscripts, streaming video, and
        more.
      </Text>
      <Text sx={{ marginRight: "s" }}>
        Our collections include some content that may be harmful or difficult
        to&nbsp;view.{" "}
        <DSLink
          hasVisitedState={false}
          href="/about#nypl_harmful_content_statement"
          aria-label="Learn more about harmful content"
          id="learn-more-hc-link"
        >
          Learn more
        </DSLink>
      </Text>
      <HorizontalRule />
      <Box>
        <Text
          mb="0px"
          noOfLines={2}
          __css={{
            ":focus-within": { overflow: "visible" },
          }}
        >
          Featured Image:{" "}
          {isLargerThanLargeTablet ? (
            <Tooltip content={featuredItem.title}>{featuredItemLink}</Tooltip>
          ) : (
            featuredItemLink
          )}
        </Text>
      </Box>
    </>
  );
};

export default CampaignHeroSubText;
