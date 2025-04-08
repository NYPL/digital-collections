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

const MetadataOverview = ({ metadata }) => {
  return (
    <>
      <Box>
        {/* <Flex marginTop="m" marginBottom="m" flexDir="column"> */}
        <Heading size="heading6" marginBottom="xs">
          Item data
        </Heading>

        {Object.keys(metadata)?.map((field, index) => {
          const value = metadata[field];
          if (value !== "") {
            return (
              <>
                <Text key={index} size="overline1" marginBottom="xs">
                  {metadataFieldToDisplay[field]}
                </Text>
                <Text key={index} marginBottom="m">
                  {parse(value)}
                </Text>
              </>
            );
          }
        })}
        {/* </Flex> */}
      </Box>
    </>
  );
};

export default MetadataOverview;
