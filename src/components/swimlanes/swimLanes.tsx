import {
  Box,
  Card,
  CardContent,
  CardHeading,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
  Link,
} from "@nypl/design-system-react-components";
import styles from "./Swimlanes.module.css";
import React from "react";
import { imageURL } from "@/utils/utils";
import appConfig from "appConfig";

const SwimLanes = ({ lanesWithNumItems }) => {
  return (
    <>
      {lanesWithNumItems.map((lane, key) => (
        <Box data-testid={lane.slug} key={lane.rank} mb="l">
          <Flex alignItems="baseline">
            <Heading id={`row-heading-${lane.slug}`} level="h2" size="heading3">
              {lane.title}
            </Heading>
            <Spacer />
            <Link
              id={`row-see-more-${lane.slug}`}
              type="standalone"
              href={`${appConfig.DC_URL}collections/lane/${lane.slug}`}
              aria-label={`See more ${lane.title.toLowerCase()}`}
            >
              See more
            </Link>
          </Flex>
          {lane.collections && lane.collections.length > 0 && (
            <SimpleGrid columns={4} id={`grid-${key}`}>
              {lane.collections.map((collection, index) => (
                <Card
                  key={index}
                  id={`card-${key}-${index}`}
                  imageProps={{
                    alt: "",
                    aspectRatio: "twoByOne",
                    src: imageURL(collection.image_id, "full", "288,", "0"),
                  }}
                >
                  <CardHeading
                    id={`row-card-heading-${key}-${index}`}
                    level="h3"
                    size="heading4"
                    className={styles.collectiontitle}
                    url={collection.url}
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      lineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      boxOrient: "vertical",
                      overflow: "clip",
                    }}
                  >
                    {collection.title}
                  </CardHeading>
                  <CardContent>
                    <Text size="subtitle2">{collection.numItems} items</Text>
                  </CardContent>
                </Card>
              ))}
            </SimpleGrid>
          )}
        </Box>
      ))}
    </>
  );
};

export default SwimLanes;
