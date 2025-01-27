"use client";
import {
  Box,
  Text,
  Heading,
  Flex,
  HorizontalRule,
  TagSet,
  ButtonGroup,
  Button,
  Link,
} from "@nypl/design-system-react-components";
import React from "react";
import Filters from "../../search/filters";

const CollectionPage = ({ slug, data }) => {
  return (
    <Box id="mainContent">
      <Box
        sx={{
          background: "ui.bg.default",
          padding: "l",
          marginBottom: "m",
        }}
      >
        <Box
          maxWidth="1280px"
          mx="auto"
          sx={{ paddingLeft: { base: 0, xl: "s" } }}
        >
          <Heading
            size="heading2"
            sx={{
              maxWidth: "1250px",
              marginBottom: "m",
            }}
          >
            {slug}
          </Heading>
          <Filters isCollection={true} />
        </Box>
      </Box>
      <Box
        maxWidth="1280px"
        mx="auto"
        sx={{ paddingLeft: { base: 0, xl: "s" } }}
      >
        <HorizontalRule />
        <Flex alignContent="center" gap="xs">
          <Text size="subtitle2" sx={{ margin: 0, fontWeight: 400 }}>
            Filters applied:
          </Text>
          <TagSet
            isDismissible
            id="search-filter-tags"
            onClick={() => {}}
            tagSetData={[
              { id: "audio", label: "Audio" },
              { id: "video", label: "Video" },
            ]}
            type="filter"
          />
        </Flex>
        <HorizontalRule />
        <Flex marginTop="l" flexDir="column">
          <Heading size="heading6">Collection data</Heading>
          <Text>This collection is also available:</Text>
          <ButtonGroup marginBottom="l">
            <Button buttonType="secondary" id="finding-aid-btn">
              View Finding Aid
            </Button>
            <Button buttonType="secondary" id="catalog-btn">
              View Catalog
            </Button>
          </ButtonGroup>
          <Text size="overline1">Dates / Origin</Text>
          <Text>
            Date created: <Link href="/search/index?year_begin=1800">1800</Link>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default CollectionPage;
