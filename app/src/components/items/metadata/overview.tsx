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

const textLink = (href, text) => {
  return (
    <a
      style={{
        color: "unset",
        textDecorationLine: "underline",
        lineHeight: "150%",
        textUnderlinePosition: "from-font",
        textDecorationThickness: "1px",
      }}
      href={href}
    >
      {text}
    </a>
  );
};

const MetadataOverview = ({ item }) => {
  console.log("Item is: ", item);
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
          {/* Title */}
          <Text size="overline1" marginBottom="xs">
            title
          </Text>
          <Text marginBottom="m">{item.title}</Text>
          {/* Names */}
          <Text size="overline1" marginBottom="xs">
            Names
          </Text>
          <Text marginBottom="m">{}</Text>
          {/* Collection */}
          <Text size="overline1" marginBottom="xs">
            Collection
          </Text>
          <Text marginBottom="m">{}</Text>
          {/* Date/Origin */}
          <Text size="overline1" marginBottom="xs">
            Dates / Origin
          </Text>
          <Text marginBottom="m">
            Date created: {textLink("/search/index?year_begin=1800", "1800")}{" "}
            (approximate)
          </Text>
          {/* Table of Contents */}
          <Text size="overline1" marginBottom="xs">
            Table of Contents
          </Text>
          <Text marginBottom="m">{}</Text>
          {/* Library Locations */}
          <Text size="overline1" marginBottom="xs">
            Library Locations
          </Text>
          <Text marginBottom="m">
            {textLink(
              "/divisions/billy-rose-theatre-division",
              "Example division"
            )}
          </Text>
          {/* Subjects */}
          <Text size="overline1" marginBottom="xs">
            Subjects
          </Text>
          <Text marginBottom="m">{}</Text>
          {/* Genres */}
          <Text size="overline1" marginBottom="xs">
            Genres
          </Text>
          <Text marginBottom="m">{}</Text>
          {/* Notes */}
          <Text size="overline1" marginBottom="xs">
            Notes
          </Text>
          <Text marginBottom="m">{}</Text>
          {/* Physical Description */}
          <Text size="overline1" marginBottom="xs">
            Physical Description
          </Text>
          <Text marginBottom="m">{}</Text>
          {/* Abstract */}
          <Text size="overline1" marginBottom="xs">
            Abstract
          </Text>
          <Text marginBottom="m">{}</Text>
          {/* Types */}
          <Text size="overline1" marginBottom="xs">
            Types
          </Text>
          <Text marginBottom="m">{}</Text>
          {/* Languages */}
          <Text size="overline1" marginBottom="xs">
            Languages
          </Text>
          <Text marginBottom="m">{}</Text>
          {/* Identifiers */}
          <Text size="overline1" marginBottom="xs">
            Identifiers
          </Text>
          <Text marginBottom="m">{}</Text>
          {/* Access */}
          <Text size="overline1" marginBottom="xs">
            Access
          </Text>
          <Text marginBottom="m">{}</Text>
          {/* Rights */}
          <Text size="overline1" marginBottom="xs">
            Rights
          </Text>
          <Text marginBottom="m">{}</Text>
          <Text marginBottom="xs">
            This item is also available in Archives & Manuscripts
          </Text>
          <ButtonGroup marginBottom="m">
            <Button buttonType="secondary" id="finding-aid-btn">
              View Finding Aid
            </Button>
            <Button buttonType="secondary" id="catalog-btn">
              View Catalog
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
};

export default MetadataOverview;
