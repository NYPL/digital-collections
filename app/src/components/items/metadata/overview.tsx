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

const MetadataOverview = ({ item }) => {
  // console.log("manifest is: ", manifest);
  console.log("Item metadata is: ", item.metadata);
  console.log("typeof item.metadata is: ", typeof item.metadata);
  return (
    <>
      <Box
        maxWidth="1280px"
        mx="auto"
        sx={{
          paddingLeft: { base: "m", xl: "s" },
          paddingRight: { base: "m", xl: "s" },
        }}
      >
        <Flex marginTop="m" marginBottom="m" flexDir="column">
          <Heading size="heading6" marginBottom="xs">
            Item metadata
          </Heading>

          {Object.keys(item.metadata)?.map((field, index) => {
            const value = item.metadata[field];
            if (value !== "") {
              return (
                <>
                  <Text key={index} size="overline1" marginBottom="xs">
                    {metadataFieldToDisplay[field]}
                  </Text>
                  <Text key={index} marginBottom="m">
                    {value}
                  </Text>
                </>
              );
            }
          })}
        </Flex>
      </Box>
    </>
  );
};

export default MetadataOverview;
