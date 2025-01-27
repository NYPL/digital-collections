"use client";
import {
  Box,
  Text,
  Pagination,
  Heading,
  Flex,
  HorizontalRule,
  TagSet,
  Link,
  Icon,
  VStack,
} from "@nypl/design-system-react-components";
import React from "react";
import { CARDS_PER_PAGE } from "@/src/config/constants";
import { displayResults } from "@/src/utils/utils";
import Filters from "../../search/filters";
import { mockCollectionCards } from "__tests__/__mocks__/data/mockCollectionCards";
import Card from "@/src/components/card/card";

const exampleResultProps = {
  cardOffset: [0, -130],
  imageHeight: 144,
  slug: "test-slug",
  id: "1",
  isLargerThanLargeTablet: true,
  record: mockCollectionCards[0],
};

const SearchPage = ({ data }) => {
  const totalPages = 10;
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
            {`Displaying ${displayResults(data.numResults, CARDS_PER_PAGE, 1)}
                    results for "keyword"`}
          </Heading>
          <Filters />
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
        <Heading marginTop="xl" size="heading5">{`Displaying ${displayResults(
          data.numResults,
          CARDS_PER_PAGE,
          1
        )}
                    results`}</Heading>

        <VStack marginTop="l" width="400px">
          <Card {...exampleResultProps} />
          <Card {...exampleResultProps} />
          <Card {...exampleResultProps} />
          <Card {...exampleResultProps} />
        </VStack>
        <Flex marginTop="xxl" marginBottom="xxl" alignContent="center">
          <Link
            minWidth="100px"
            isUnderlined={false}
            hasVisitedState={false}
            gap="xxs"
            type="action"
            href="#"
          >
            Back to top{"  "}
            <Icon
              name="arrow"
              sx={{ "> svg": { fill: "ui.link" } }}
              iconRotation="rotate180"
              size="xsmall"
            />
          </Link>
          {totalPages > 1 && (
            <Pagination
              id="pagination-id"
              initialPage={1}
              currentPage={1}
              pageCount={totalPages}
              sx={{
                justifyContent: "flex-end",
                gap: "s",
              }}
            />
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default SearchPage;
