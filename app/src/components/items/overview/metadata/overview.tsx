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
  Icon,
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
  dateCreated: "Date Created",
  dateIssued: "Date Issued",
};

// Helper function to parse anchor tag from HTML string
// annoyingly redundant
const parseHtmlString = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const anchor = doc.querySelector("a");
  return {
    href: anchor?.getAttribute("href"),
    text: anchor?.textContent,
  };
};

// Designs use DS Link component but I wonder if we can get away with not using them for the
// Items page since the manifests are returning the links
const StructuredCollectionsList = (rawCollections) => {
  return (
    <>
      {rawCollections.map((htmlString, index) => {
        console.log("htmlString is: ", htmlString);
        const { href, text } = parseHtmlString(htmlString);
        return (
          <span key={index} style={{ paddingLeft: `${(index - 1) * 1.5}rem` }}>
            {index !== 0 && (
              <Icon name="navigationSubdirectoryArrowRight" size="large" />
            )}
            {parse(htmlString)}
            {/* TODO: keeping this in here if we need to use the DS Link component */}
            {/* <Link href={href}>
              {text}
            </Link> */}
            <br></br>
          </span>
        );
      })}
    </>
  );
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
          if (value !== "" && metadataFieldToDisplay[field] !== "") {
            if (field === "collection") {
              const collections = value.split("<br>");
              console.log("collections are: ", collections);
              return (
                <>
                  <Text key={index} size="overline1" marginBottom="xs">
                    {metadataFieldToDisplay[field]}
                  </Text>
                  <Text key={index} marginBottom="m">
                    {StructuredCollectionsList(collections)}
                  </Text>
                </>
              );
            } else {
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
          }
        })}
      </Box>
    </>
  );
};

export default MetadataOverview;
