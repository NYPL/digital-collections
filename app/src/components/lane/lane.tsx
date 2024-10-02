"use client";
import React, { useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link,
  Icon,
} from "@nypl/design-system-react-components";
import { Card as DCCard } from "../card/card";
import { SimpleGrid as DCSimpleGrid } from "../simpleGrid/simpleGrid";
import { DC_URL } from "@/src/config/constants";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { titleToDCParam } from "@/src/utils/utils";
import { ItemCardModel } from "@/src/models/itemCard";
import { CollectionCardModel } from "@/src/models/collectionCard";
import CollectionDataType from "@/src/types/CollectionDataType";
import ItemDataType from "@/src/types/ItemDataType";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import { useTooltipOffset } from "@/src/hooks/useTooltipOffset";

interface LaneProps {
  seeMoreLink: string;
  records: CollectionDataType[] | ItemDataType[];
  laneName: string;
  laneSlug?: string;
}

function isCollectionType(
  records: CollectionDataType[] | ItemDataType[]
): records is CollectionDataType[] {
  return "numberOfDigitizedItems" in records[0];
}

export const Lane = ({
  records,
  seeMoreLink,
  laneName,
  laneSlug,
}: LaneProps) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  const cardRef = useRef<HTMLDivElement>(null);
  const tooltipOffset = useTooltipOffset(cardRef);
  const isCollections = isCollectionType(records);

  const laneContents = isCollections
    ? {
        heading: laneName,
        headingId: `row-heading-${laneSlug}`,
        seeMoreLinkId: `row-see-more-${laneSlug}`,
        seeMoreLinkHref: `${seeMoreLink}/${laneSlug}`,
        seeMoreAriaLabel: `See more ${laneName}`,
        seeMoreLinkMobileId: `row-see-more-${laneSlug}-mobile`,
      }
    : {
        heading: `Items in the ${laneName}`,
        headingId: `row-heading-${laneName}`,
        seeMoreLinkId: `row-see-more-items-${laneName}`,
        seeMoreLinkHref: `${DC_URL}/search/index?filters[divisionFullname_mtxt_s][]=${titleToDCParam(
          laneName
        )}`,
        seeMoreAriaLabel: `See more items in ${laneName}`,
        seeMoreLinkMobileId: `row-see-more-items-${laneName}-mobile`,
      };

  const lane = (
    <Box
      sx={{ ":first-child": { marginTop: "1rem" } }}
      data-testid={laneSlug}
      mt="xxl"
    >
      <Flex alignItems="baseline">
        <Heading
          id={laneContents.headingId}
          sx={{
            [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
              {
                width: "90%",
              },
          }}
          level="h2"
          size="heading3"
        >
          {laneContents.heading}
        </Heading>
        <Spacer />
        <Link
          id={laneContents.seeMoreLinkId}
          href={laneContents.seeMoreLinkHref}
          aria-label={laneContents.seeMoreAriaLabel}
          hasVisitedState
          isUnderlined={false}
          __css={{
            paddingLeft: "l",
            marginBottom: "s",
            whiteSpace: "nowrap",
            justifyContent: "flex-end",
            display: "none",
            " > svg": {
              fill: "ui.link.primary",
            },
            [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
              {
                display: "inline",
              },
            color: "ui.link.primary",
            fontWeight: "medium",
            alignSelf: "end",
            _hover: {
              textDecoration: "underline 1px dotted !important",
              textUnderlineOffset: "2px",
              "> svg": { fill: "ui.link.secondary" },
            },
            _visited: { "> svg": { fill: "ui.link.tertiary" } },
          }}
        >
          See more <Icon iconRotation="rotate270" size="xsmall" name="arrow" />
        </Link>
      </Flex>
      <DCSimpleGrid>
        {records.map((record, index) => {
          if (isCollections) {
            const collectionCardModel = new CollectionCardModel(record);
            return (
              <DCCard
                key={index}
                slug={laneSlug}
                id={`${index}`}
                record={collectionCardModel}
                isLargerThanLargeTablet={isLargerThanLargeTablet}
                ref={cardRef}
                tooltipOffset={tooltipOffset}
              />
            );
          } else {
            const itemCardModel = new ItemCardModel(record);
            return (
              <DCCard
                key={`item-${index}-${record.title}`}
                id={`item-${index}-${record.title}`}
                record={itemCardModel}
                isLargerThanLargeTablet={isLargerThanLargeTablet}
                tooltipOffset={tooltipOffset}
                ref={cardRef}
              />
            );
          }
        })}
      </DCSimpleGrid>
      <Link
        id={laneContents.seeMoreLinkMobileId}
        href={laneContents.seeMoreLinkHref}
        aria-label={laneContents.seeMoreAriaLabel}
        className="smlink"
        hasVisitedState
        __css={{
          display: "flex",
          [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]: {
            display: "none",
          },
          fontWeight: "medium",
          justifyContent: "flex-end",
          marginTop: "s",
          alignItems: "center",
          "& svg": {
            marginTop: "1px",
          },
        }}
      >
        See more
      </Link>
    </Box>
  );
  return lane;
};

export default Lane;
