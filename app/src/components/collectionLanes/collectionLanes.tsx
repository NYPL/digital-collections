"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Link,
} from "@nypl/design-system-react-components";
import styles from "./Collectionlanes.module.css";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionCard from "../cards/collectionCard";
import CollectionDataType from "../../types/CollectionDataType";
import { CollectionCardModel } from "../../models/collectionCard";
import DCSimpleGrid from "../dcSimpleGrid/dcSimpleGrid";

const CollectionLanes = ({ lanesWithNumItems, seeMoreLink }) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  const lanes = lanesWithNumItems?.map((lane, key) => (
    <Box className={styles.lane} data-testid={lane.slug} mt="xxl" key={key}>
      <Flex alignItems="baseline">
        <Heading id={`row-heading-${lane.slug}`} level="h2" size="heading3">
          {lane.name}
        </Heading>
        <Spacer />
        <Link
          id={`row-see-more-${lane.slug}`}
          type="standalone"
          href={`${seeMoreLink}/${lane.slug}`}
          aria-label={`See more ${lane.name}`}
          hasVisitedState
          __css={{
            display: { sm: "none", md: "inline" },
            color: "ui.primary.link",
            fontWeight: "500 !important",
            alignItems: "center",
            _hover: { textDecoration: "underline 1px dotted !important" },
          }}
        >
          See more
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
          display: { sm: "flex", md: "none" },
          fontWeight: "regular",
          justifyContent: "flex-end",
          marginTop: "s",
          alignItems: "center", //idk why this doesn't work
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
