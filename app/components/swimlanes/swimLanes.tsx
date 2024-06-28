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
import { imageURL } from "../../utils/utils";
import { DC_URL } from "../../config/constants";
import useBreakpoints from "../../hooks/useBreakpoints";

export type CollectionItem = {
  uuid: string;
  title: string;
  image_id: string;
  url: string;
  numItems: number;
};

export interface SwimLanesProps {
  lanesWithNumItems: {
    slug: string;
    title: string;
    rank: number;
    collections: CollectionItem[];
  }[];
}

const SwimLanes = ({ lanesWithNumItems }: SwimLanesProps) => {
  const { isLargerThanLargeTablet } = useBreakpoints();
  const lanes = lanesWithNumItems.map((lane, key) => (
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
        <SimpleGrid columns={4} id={`grid-${lane.slug}`}>
          {lane.collections.map((collection, index) => (
            <Card
              key={index}
              id={`card-${lane.slug}-${index}`}
              imageProps={{
                alt: "",
                id: `image-${lane.slug}-${index}`,
                isLazy: true,
                aspectRatio: "twoByOne",
                src: imageURL(collection.image_id, "full", "288,", "0"),
                // TODO: *IF* we want to use the Nextjs Image component, this
                // is how we would do it. It's suppose to be better for
                // performance but it's not visibly noticeable.
                // component: (
                //   <Image
                //     src={imageURL(collection.image_id, "full", "288,", "0")}
                //     alt=""
                //     width={100}
                //     height={100}
                //     objectFit="cover"
                //   />
                // ),
              }}
            >
              <CardHeading
                id={`row-card-heading-${lane.slug}-${index}`}
                level="h3"
                size="heading5"
                className={styles.collectiontitle}
                url={collection.url}
                noOfLines={3}
              >
                {isLargerThanLargeTablet ? (
                  <Tooltip content={collection.title}>
                    <Text sx={{ marginBottom: "0" }}>{collection.title}</Text>
                  </Tooltip>
                ) : (
                  collection.title
                )}
              </CardHeading>
              <CardContent>
                <Text
                  id={`item-count-${lane.slug}-${index}`}
                  size="subtitle2"
                  fontWeight="medium"
                  __css={{
                    display: "none",
                    [`@media screen and (min-width: 600px)`]: {
                      display: "inline",
                    },
                  }}
                >
                  {" "}
                  {`${collection.numItems || 0} items`}{" "}
                </Text>
              </CardContent>
            </Card>
          ))}
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
  return <>{lanes}</>;
};

export default SwimLanes;
