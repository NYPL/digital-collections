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
import React, { useRef } from "react";
import { CARDS_PER_PAGE, SEARCH_SORT_LABELS } from "@/src/config/constants";
import { displayResults, totalNumPages } from "@/src/utils/utils";
import Filters from "../../search/filters/filters";
import { useSearchContext } from "@/src/context/SearchProvider";
import { usePathname, useRouter } from "next/navigation";
import SearchCardsGrid from "../../grids/searchCardsGrid";
import { headerBreakpoints } from "@/src/utils/breakpoints";

const SearchPage = ({ data }) => {
  const { searchManager } = useSearchContext();
  const totalPages = totalNumPages(data.numResults, CARDS_PER_PAGE);
  const { push } = useRouter();
  const pathname = usePathname();
  const updateURL = async (queryString) => {
    push(`${pathname}?${queryString}`);
  };
  const headingRef = useRef<HTMLHeadingElement>(null);

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
          sx={{
            paddingLeft: 0,
            [`@media screen and (min-width: ${headerBreakpoints.desktop}px)`]: {
              paddingLeft: "s",
            },
          }}
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
          <Filters headingText="Refine your search" ref={headingRef} />
        </Box>
      </Box>
      <Box
        maxWidth="1280px"
        mx="auto"
        sx={{
          paddingLeft: "m",
          paddingRight: "m",
          [`@media screen and (min-width: ${headerBreakpoints.desktop}px)`]: {
            paddingLeft: "s",
            paddingRight: "s",
          },
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
          sx={{
            [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]:
              {
                flexDir: "row",
                marginBottom: "s",
                alignItems: "center",
              },
            justifyContent: "space-between",
            flexDir: "column",
            marginBottom: "l",
            marginTop: "l",
            gap: "m",
            alignItems: "flex-start",
          }}
        >
          <Heading
            size="heading5"
            tabIndex={-1}
            ref={headingRef}
            margin="0"
          >{`Displaying ${displayResults(
            data.numResults,
            CARDS_PER_PAGE,
            searchManager.page
          )}
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
        <SearchCardsGrid keywords={data.keyword} results={data.results} />
        <Flex
          paddingLeft="s"
          paddingRight="s"
          marginTop="xxl"
          marginBottom="xxl"
          sx={{
            "> a": {
              marginTop: "xl",
              justifyContent: "end",
            },
            [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]:
              {
                "> a": {
                  marginTop: "0",
                },
                flexDir: "row",
              },
            flexDir: "column-reverse",
          }}
        >
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
          </Link>{" "}
          <Pagination
            id="pagination-id"
            initialPage={searchManager.page}
            currentPage={searchManager.page}
            pageCount={10}
            onPageChange={(newPage) => {
              updateURL(searchManager.handlePageChange(newPage));
            }}
            sx={{
              justifyContent: "center",
              [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]:
                {
                  justifyContent: "flex-end",
                },
            }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default SearchPage;
