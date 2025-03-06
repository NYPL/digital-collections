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

          {/* {
            item.metadata?.keys?.map((field, value)=>{
              if (value !== '' ) { 
                return (
                <>
                    <Text size="overline1" marginBottom="xs">
                      {metadataFieldToDisplay[field]}
                    </Text>
                    <Text marginBottom="m">
                      {value}
                    </Text>
                </>
              ) }
            })
          } */}

          <Text size="overline1" marginBottom="xs">
            Title
          </Text>
          <Text marginBottom="m">{item.metadata.title}</Text>

          <Text size="overline1" marginBottom="xs">
            Names
          </Text>
          <Text marginBottom="m">{item.metadata.names}</Text>

          <Text size="overline1" marginBottom="xs">
            Collection
          </Text>
          <Text marginBottom="m">{item.metadata.collection}</Text>

          <Text size="overline1" marginBottom="xs">
            Dates / Origin
          </Text>
          <Text marginBottom="m">{item.metadata.origin}</Text>

          <Text size="overline1" marginBottom="xs">
            Table of Contents
          </Text>
          <Text marginBottom="m">{item.metadata.tableOfContents}</Text>

          <Text size="overline1" marginBottom="xs">
            Library Locations
          </Text>
          <Text marginBottom="m">{item.metadata.locations}</Text>

          <Text size="overline1" marginBottom="xs">
            Subjects
          </Text>
          <Text marginBottom="m">{item.metadata.subjects}</Text>

          <Text size="overline1" marginBottom="xs">
            Genres
          </Text>
          <Text marginBottom="m">{item.metadata.genres}</Text>

          <Text size="overline1" marginBottom="xs">
            Notes
          </Text>
          <Text marginBottom="m">{item.metadata.notes}</Text>

          <Text size="overline1" marginBottom="xs">
            Physical Description
          </Text>
          <Text marginBottom="m">{item.metadata.physicalDescription}</Text>

          <Text size="overline1" marginBottom="xs">
            Abstract
          </Text>
          <Text marginBottom="m">{item.metadata.abstract}</Text>

          <Text size="overline1" marginBottom="xs">
            Types
          </Text>
          <Text marginBottom="m">{item.metadata.typeOfResource}</Text>

          <Text size="overline1" marginBottom="xs">
            Languages
          </Text>
          <Text marginBottom="m">{item.metadata.languages}</Text>

          <Text size="overline1" marginBottom="xs">
            Identifiers
          </Text>
          <Text marginBottom="m">{item.metadata.identifiers}</Text>

          <Text size="overline1" marginBottom="xs">
            Access
          </Text>
          <Text marginBottom="m">{item.metadata.access}</Text>

          <Text size="overline1" marginBottom="xs">
            Rights
          </Text>
          <Text marginBottom="m">{item.metadata.rights}</Text>
        </Flex>
      </Box>
    </>
  );
};

export default MetadataOverview;
