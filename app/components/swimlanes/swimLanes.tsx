"use client";
import React from "react";
import {
  Box,
  Card,
  CardHeading,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
  Link,
  CardContent,
  Tooltip,
} from "@nypl/design-system-react-components";
import styles from "./Swimlanes.module.css";
import { DC_URL } from "../../config/constants";
import useBreakpoints from "../../hooks/useBreakpoints";
import CollectionCard from "../cards/collectionCard";
import type { CollectionCardData } from "../../types/CollectionCard";
import { CollectionCardModel } from "../../models/collectionCard";

const SwimLanes = ({ numColumns, lanesWithNumItems }) => {
  const { isLargerThanLargeTablet } = useBreakpoints();

  return lanesWithNumItems.map((lane, key) => (
    <Box className={styles.lane} data-testid={lane.slug} mt="xxl" key={key}>
      <Flex alignItems="baseline">
        <Heading id={`row-heading-${lane.slug}`} level="h2" size="heading3">
          {lane.title}
        </Heading>
        <Spacer />
        <Link
          id={`row-see-more-${lane.slug}`}
          type="standalone"
          href={`${DC_URL}/collections/lane/${lane.slug}`}
          aria-label={`See more ${lane.title.toLowerCase()}`}
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
        <SimpleGrid
          columns={numColumns}
          id={`grid-${lane.slug}`}
          sx={{
            gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
          }}
        >
          {lane.collections.map((collection: CollectionCardData, index) => {
            const c = new CollectionCardModel(collection); // can remove this and the line above after referencing the CollectionCardModel in the Lane model after it's created
            return (
              <CollectionCard
                key={index}
                slug={lane.slug}
                index={index}
                collection={c} //rename to collection after Lane model is created
                isLargerThanLargeTablet={isLargerThanLargeTablet}
              />
            );
          })}
        </SimpleGrid>
      )}
      <Link
        id={`row-see-more-${lane.slug}-mobile`}
        type="standalone"
        href={`${DC_URL}/collections/lane/${lane.slug}`}
        aria-label={`See more ${lane.title.toLowerCase()}`}
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
};

export default SwimLanes;
