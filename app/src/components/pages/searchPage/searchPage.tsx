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
  Menu,
} from "@nypl/design-system-react-components";
import React from "react";
import { CARDS_PER_PAGE, SEARCH_SORT_LABELS } from "@/src/config/constants";
import { displayResults } from "@/src/utils/utils";
import Filters from "../../search/filters";
import SearchCardsGrid from "../../grids/searchCardsGrid";
import { mockSearchResponse } from "__tests__/__mocks__/data/mockSearchResponse";

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
                    results for "example"`}
          </Heading>
          <Filters headingText="Refine your search" />
        </Box>
      </Box>
      <Box
        maxWidth="1280px"
        mx="auto"
        sx={{
          paddingLeft: { base: "m", xl: "s" },
          paddingRight: { base: "m", xl: "s" },
        }}
      >
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
        <Flex
          marginTop="xl"
          marginBottom="s"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            size="heading5"
            tabIndex={-1}
            margin="0"
          >{`Displaying ${displayResults(data.numResults, CARDS_PER_PAGE, 1)}
                                        results`}</Heading>
          <Menu
            showLabel
            selectedItem={"relevance"}
            labelText={`Sort by: ${SEARCH_SORT_LABELS["relevance"]}`}
            listItemsData={Object.entries(SEARCH_SORT_LABELS).map(
              ([id, label]) => ({
                id,
                label,
                onClick: () => {},
                type: "action",
              })
            )}
          />
        </Flex>
        <SearchCardsGrid
          keywords={["example"]}
          results={mockSearchResponse.results}
        />
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
            <Icon name="arrow" iconRotation="rotate180" size="xsmall" />
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
