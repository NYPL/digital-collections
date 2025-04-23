import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
  ButtonGroup,
  TagSet,
  HorizontalRule,
} from "@nypl/design-system-react-components";
import parse from "html-react-parser";

const metadataFieldToDisplay = {
  title: "Title",
  collection: "Collection",
  names: "Names",
  origin: "Date / Origin",
  tableOfContents: "Table Of Contents",
  locations: "Library Location",
  subjects: "Subjects",
  genres: "Genres",
  notes: "Notes",
  physicalDescription: "Physical Description",
  abstract: "Abstract",
  languages: "Languages",
  link: "Link",
  identifiers: "Identifiers",
  access: "Access",
  rights: "Rights",
  typeOfResource: "Type Of Resource",
};

const ExternalLinksOverview = ({ item }) => {
  return (
    <>
      <Box
        marginTop="m"
        // marginBottom="m"
      >
        <Heading size="heading6" marginBottom="xs">
          View this item elsewhere
        </Heading>
        <Link
          href={"/"}
          id={"finding-aid-btn"}
          isUnderlined={false}
          target="_blank"
          aria-label={`view finding aid`}
          type="buttonSecondary"
          marginRight="xs"
        >
          View Finding Aid
        </Link>
        <Link
          href={"/"}
          id={"catalog-btn"}
          isUnderlined={false}
          target="_blank"
          aria-label={`view in catalog`}
          type="buttonSecondary"
        >
          View Catalog
        </Link>
      </Box>
    </>
  );
};

export default ExternalLinksOverview;
