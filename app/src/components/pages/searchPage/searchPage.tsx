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
} from "@nypl/design-system-react-components";
import React from "react";
import { CARDS_PER_PAGE } from "@/src/config/constants";
import { displayResults, totalNumPages } from "@/src/utils/utils";
import Filters from "../../search/filters";
import { useSearchContext } from "@/src/context/SearchProvider";
import { usePathname, useRouter } from "next/navigation";

const SearchPage = ({ data }) => {
  const { searchManager } = useSearchContext();
  const totalPages = totalNumPages(data.numResults, CARDS_PER_PAGE);
  const { push } = useRouter();
  const pathname = usePathname();
  const updateURL = async (queryString) => {
    push(`${pathname}?${queryString}`);
  };
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
            {`Displaying ${displayResults(
              data.numResults,
              CARDS_PER_PAGE,
              searchManager.page
            )}
                    results for "${searchManager.keywords}"`}
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
        <Heading
          tabIndex={-1}
          marginTop="xl"
          size="heading5"
        >{`Displaying ${displayResults(
          data.numResults,
          CARDS_PER_PAGE,
          searchManager.page
        )}
                    results`}</Heading>

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
              initialPage={searchManager.page}
              currentPage={searchManager.page}
              pageCount={totalPages}
              onPageChange={(newPage) => {
                updateURL(searchManager.handlePageChange(newPage));
              }}
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
