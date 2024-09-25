"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link,
  Icon,
} from "@nypl/design-system-react-components";
import styles from "./Collectionlanes.module.css";
import { DC_URL } from "../../../config/constants";
import useBreakpoints from "../../../hooks/useBreakpoints";
import CollectionCard from "../../cards/collectionCard";
import CollectionDataType from "../../../types/CollectionDataType";
import { CollectionCardModel } from "../../../models/collectionCard";
import DCSimpleGrid from "../../dcSimpleGrid/dcSimpleGrid";
import { headerBreakpoints } from "@/src/utils/breakpoints";

const CollectionLanes = ({ lanesWithNumItems, seeMoreLink }) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  const lanes = lanesWithNumItems?.map((lane, key) => (
    <Box className={styles.lane} data-testid={lane.slug} mt="xxl" key={key}>
      <Flex alignItems="baseline">
        <Heading
          id={`row-heading-${lane.slug}`}
          sx={{
            [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
              {
                width: "90%",
              },
          }}
          level="h2"
          size="heading3"
        >
          {lane.name}
        </Heading>
        <Spacer />
        <Link
          id={`row-see-more-${lane.slug}`}
          href={`${seeMoreLink}/${lane.slug}`}
          aria-label={`See more ${lane.name}`}
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
      {lane.collections && lane.collections.length > 0 && (
        <DCSimpleGrid id={`grid-${lane.slug}`}>
          {lane.collections.map((collection: CollectionDataType, index) => {
            const c = new CollectionCardModel(collection);
            return (
              <CollectionCard
                key={index}
                slug={lane.slug}
                id={index}
                collection={c}
                isLargerThanLargeTablet={isLargerThanLargeTablet}
              />
            );
          })}
        </DCSimpleGrid>
      )}
      <Link
        id={`row-see-more-${lane.slug}-mobile`}
        type="standalone"
        href={`${seeMoreLink}/${lane.slug}`}
        aria-label={`See more ${lane.name}`}
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
  ));
  return <>{lanes}</>;
};

export default CollectionLanes;
