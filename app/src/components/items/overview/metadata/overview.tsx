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
import { Fragment, useEffect, useState } from "react";
import parse from "html-react-parser";
import { metadataFieldToDisplay } from "@/src/utils/metadata/filterRenderableMetadata";

interface MetadataOverviewProps {
  metadata: Record<string, string>;
}

// Designs use DS Link component but I wonder if we can get away with not using them for the
// Items page since the manifests are returning the links
const StructuredCollectionsList = ({
  rawCollections,
}: {
  rawCollections: string[];
}) => {
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const getCurrentDirection = () => {
      const htmlDir = document.documentElement.getAttribute("dir");
      const bodyDir = document.body?.getAttribute("dir");

      if (htmlDir === "rtl" || bodyDir === "rtl") {
        return "rtl";
      }

      const htmlComputedDir = getComputedStyle(
        document.documentElement
      ).direction;
      const bodyComputedDir = document.body
        ? getComputedStyle(document.body).direction
        : "";

      return htmlComputedDir || bodyComputedDir || "ltr";
    };

    const updateDirection = () => {
      setIsRTL(getCurrentDirection() === "rtl");
    };

    updateDirection();

    const observer = new MutationObserver(updateDirection);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir", "class", "style"],
    });

    if (document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["dir", "class", "style"],
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {rawCollections.map((htmlString, index) => {
        if (!htmlString.trim()) {
          return null;
        }

        const key = `metadata-collection-${index}`;
        return (
          <Box
            key={key}
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              marginInlineStart: index === 0 ? "0" : `${index * 1.5}rem`,
              overflowWrap: "anywhere",
            }}
          >
            {index !== 0 && (
              <Icon
                name={
                  isRTL
                    ? "navigationSubdirectoryArrowLeft"
                    : "navigationSubdirectoryArrowRight"
                }
                size="small"
                sx={{ marginInlineEnd: "xxs" }}
              />
            )}
            {parse(htmlString)}
          </Box>
        );
      })}
    </>
  );
};

const MetadataOverview = ({ metadata }: MetadataOverviewProps) => {
  const metadataValueSx = {
    textAlign: "start" as const,
    overflowWrap: "anywhere" as const,
  };

  const splitCollections = (value: string): string[] => {
    return value
      .split(/<br\b[^>]*>/gi)
      .map((entry) => entry.trim())
      .filter(Boolean);
  };

  return (
    <>
      <Box>
        <Heading size="heading6" marginBottom="xs">
          Item data
        </Heading>
        {Object.entries(metadata).map(([field, value]) => {
          if (field === "collection") {
            const collections = splitCollections(value);
            return (
              <Fragment key="metadata-collection">
                <Text size="overline1" marginBottom="xs">
                  {metadataFieldToDisplay[field]}
                </Text>
                <Box
                  as="div"
                  className="notranslate"
                  marginBottom="m"
                  sx={metadataValueSx}
                >
                  <StructuredCollectionsList rawCollections={collections} />
                </Box>
              </Fragment>
            );
          }
          return (
            <Fragment key={`metadata-${field}`}>
              <Text size="overline1" marginBottom="xs">
                {metadataFieldToDisplay[field]}
              </Text>
              <Text
                className="notranslate"
                marginBottom="m"
                sx={metadataValueSx}
              >
                {parse(value)}
              </Text>
            </Fragment>
          );
        })}
      </Box>
    </>
  );
};

export default MetadataOverview;
