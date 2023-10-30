import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeading,
  Flex,
  Heading,
  Hero,
  HorizontalRule,
  Link as DSLink,
  SimpleGrid,
  Spacer,
  Text,
} from "@nypl/design-system-react-components";
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
            <Heading id={`row-heading-${lane.slug}`} level="h3">
              {lane.title}
            </Heading>
            <Spacer />
            <DSLink
              href={lane.collections[0].url}
              id={`row-see-more-${lane.slug}`}
              type="standalone"
            >
              See more
            </DSLink>
          </Flex>
          <HorizontalRule mt="0" />
          {lane.collections.length > 0 && (
            <SimpleGrid columns={4} id={`grid-${key}`}>
              {lane.collections.map((collection, index) => (
                <Card
                  key={index}
                  id={`card-${key}-${index}`}
                  imageProps={{
                    alt: collection.title,
                    aspectRatio: "twoByOne",
                    src: collection.image_id,
                  }}
                >
                  <CardHeading
                    id={`row-card-heading-${key}-${index}`}
                    level="h4"
                    url={collection.url}
                    style={{ maxHeight: "4em", overflow: "hidden" }}
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
