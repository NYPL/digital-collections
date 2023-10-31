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
import React from "react";
import data from "@/data/lanes";

const SwimLanes = () => {
  const { lanes } = data;
  return (
    <>
      {lanes.map((lane, key) => (
        <Box
          data-testid={`${lane.slug}`}
          key={lane.rank}
          mb="var(--nypl-space-l)"
        >
          <Flex alignItems="baseline">
            <Heading id={`row-heading-${lane.slug}`} level="h2" size="h3">
              {lane.title}
            </Heading>
            <Spacer />
            <Link
              id={`row-see-more-${lane.slug}`}
              type="standalone"
              href={"https://digitalcollections.nypl.org/search/index?"}
              aria-label="See more digitized materials"
            >
              See more
            </Link>
          </Flex>
          {lane.collections.length > 0 && (
            <SimpleGrid columns={4} id={`grid-${key}`}>
              {lane.collections.map((collection, index) => (
                <Card
                  key={index}
                  id={`card-${key}-${index}`}
                  imageProps={{
                    alt: collection.title,
                    aspectRatio: "twoByOne",
                    src: `https://iiif.nypl.org/iiif/2/${collection.image_id}/full/288,/0/default.jpg`,
                  }}
                >
                  <CardHeading
                    id={`row-card-heading-${key}-${index}`}
                    level="h3"
                    size="h4"
                    url={collection.url}
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {collection.title}
                  </CardHeading>
                  <CardContent>
                    <Text size="tag"># of items</Text>
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
