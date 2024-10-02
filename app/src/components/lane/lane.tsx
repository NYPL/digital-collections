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
import styles from "./lane.module.css";
import { useTooltipOffset } from "@/src/hooks/useTooltipOffset";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import { CollectionCardModel } from "@/src/models/collectionCard";
import { Card as DCCard } from "../card/card";
import { SimpleGrid as DCSimpleGrid } from "../simpleGrid/simpleGrid";
import CollectionCardDataType from "@/src/types/CollectionCardDataType";
import ItemCardDataType from "@/src/types/ItemCardDataType";
import { titleToDCParam } from "@/src/utils/utils";
import { DC_URL } from "@/src/config/constants";
import { ItemCardModel } from "@/src/models/itemCard";

interface LaneProps {
  seeMoreLink: string;
  records: CollectionCardDataType[] | ItemCardDataType[];
  laneName: string;
  laneSlug?: string;
}

function isCollectionType(
  records: CollectionCardDataType[] | ItemCardDataType[]
): records is CollectionCardDataType[] {
  return "numberOfDigitizedItems" in records[0];
}

const Lane = ({ records, seeMoreLink, laneName, laneSlug }: LaneProps) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  const cardRef = useRef<HTMLDivElement>(null);
  const tooltipOffset = useTooltipOffset(cardRef);
  const isCollections = isCollectionType(records);

  const lane = (
    <Box className={styles.lane} data-testid={laneSlug} mt="xxl">
      <Flex alignItems="baseline">
        <Heading
          id={`row-heading-${laneSlug}`}
          sx={{
            [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
              {
                width: "90%",
              },
          }}
          level="h2"
          size="heading3"
        >
          {isCollections ? laneName : `Items in the ${laneName}`}
        </Heading>
        <Spacer />
        <Link
          id={
            isCollections
              ? `row-see-more-${laneSlug}`
              : `row-see-more-items-${laneName}`
          }
          href={
            isCollections
              ? `${seeMoreLink}/${laneSlug}`
              : `${DC_URL}/search/index?filters[divisionFullname_mtxt_s][]=${titleToDCParam(
                  laneName
                )}`
          }
          aria-label={`See more ${laneName}`}
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
      {isCollections ? (
        <DCSimpleGrid id={`grid-${laneSlug}`}>
          {records.map((collection, index) => {
            const c = new CollectionCardModel(collection);
            return (
              <DCCard
                key={index}
                slug={laneSlug}
                id={`${index}`}
                record={c}
                isLargerThanLargeTablet={isLargerThanLargeTablet}
                ref={cardRef}
                tooltipOffset={tooltipOffset}
              />
            );
          })}
        </DCSimpleGrid>
      ) : (
        <DCSimpleGrid>
          {records.map((item, index) => {
            const itemModel = new ItemCardModel(item);
            return (
              <DCCard
                key={index}
                id={`item-${index}-${item.title}`}
                record={itemModel}
                isLargerThanLargeTablet={isLargerThanLargeTablet}
                tooltipOffset={tooltipOffset}
                ref={cardRef}
              />
            );
          })}
        </DCSimpleGrid>
      )}
      <Link
        id={
          isCollections
            ? `row-see-more-${laneSlug}-mobile`
            : `row-see-more-items-mobile-${laneName}`
        }
        type="standalone"
        href={
          isCollections
            ? `${seeMoreLink}/${laneSlug}`
            : `${DC_URL}/search/index?filters[divisionFullname_mtxt_s][]=${titleToDCParam(
                laneName
              )}`
        }
        aria-label={
          isCollections
            ? `See more ${laneName}`
            : `See more items in ${laneName}`
        }
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
  return <>{lane}</>;
};

export default Lane;
