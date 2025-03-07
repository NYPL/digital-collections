import {
  Flex,
  Heading,
  ButtonGroup,
  Button,
  Link,
  Text,
} from "@nypl/design-system-react-components";

const CollectionMetadata = ({ data }) => {
  return (
    <Flex marginTop="m" marginBottom="m" flexDir="column">
      <Heading size="heading6" marginBottom="xs">
        Collection data
      </Heading>
      <Text marginBottom="xs">
        This collection is also available in Archives & Manuscripts
      </Text>
      <ButtonGroup marginBottom="m">
        <Button buttonType="secondary" id="finding-aid-btn">
          View Finding Aid
        </Button>
        <Button buttonType="secondary" id="catalog-btn">
          View Catalog
        </Button>
      </ButtonGroup>
      <Text size="overline1" marginBottom="xs">
        Dates / Origin
      </Text>
      <Text marginBottom="m">
        Date created:{" "}
        <Link hasVisitedState={false} href="/search/index?year_begin=1800">
          1800
        </Link>{" "}
        (approximate)
      </Text>
      <Text size="overline1" marginBottom="xs">
        Library Locations
      </Text>
      <Text marginBottom="m">
        <Link
          hasVisitedState={false}
          href="/divisions/billy-rose-theatre-division"
        >
          Example division
        </Link>
      </Text>
      <Link hasVisitedState={false} isUnderlined={false}>
        See more collection data
      </Link>
    </Flex>
  );
};

export default CollectionMetadata;
