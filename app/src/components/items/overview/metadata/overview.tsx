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
import { Fragment } from "react";
import parse from "html-react-parser";
import { metadataFieldToDisplay } from "@/src/utils/metadata/filterRenderableMetadata";

// Designs use DS Link component but I wonder if we can get away with not using them for the
// Items page since the manifests are returning the links
const StructuredCollectionsList = (rawCollections) => {
  return (
    <>
      {rawCollections.map((htmlString, index) => {
        const key = `metadata-collection-${index}`;
        return (
          <span key={key} style={{ paddingLeft: `${(index - 1) * 1.5}rem` }}>
            {index !== 0 && (
              <Icon name="navigationSubdirectoryArrowRight" size="large" />
            )}
            {parse(htmlString)}
            <br></br>
          </span>
        );
      })}
    </>
  );
};

const AVMaterialManifest = ({ metadata }) => {
  const typedMetadata = metadata as Record<string, string>;

  return (
    <>
      <Box>
        <Heading size="heading6" marginBottom="xs">
          Item data
        </Heading>
        {Object.entries(typedMetadata).map(([field, value]) => {
          if (field === "collection") {
            const collections = value.split("<br>");
            return (
              <Fragment key="metadata-collection">
                <Text size="overline1" marginBottom="xs">
                  {metadataFieldToDisplay[field]}
                </Text>
                <Text marginBottom="m">
                  {StructuredCollectionsList(collections)}
                </Text>
              </Fragment>
            );
          }
          return (
            <Fragment key={`metadata-${field}`}>
              <Text size="overline1" marginBottom="xs">
                {metadataFieldToDisplay[field]}
              </Text>
              <Text marginBottom="m">{parse(value)}</Text>
            </Fragment>
          );
        })}
      </Box>
    </>
  );
};

export default AVMaterialManifest;
