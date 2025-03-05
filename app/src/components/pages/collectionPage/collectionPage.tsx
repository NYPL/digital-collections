"use client";
import {
  Box,
  Text,
  Heading,
  Flex,
  ButtonGroup,
  Button,
  Link,
  SearchBar,
  Icon,
  Pagination,
} from "@nypl/design-system-react-components";
import React, { useRef } from "react";
import Filters from "../../search/filters/filters";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { displayResults, totalNumPages } from "@/src/utils/utils";
import {
  CARDS_PER_PAGE,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
  SEARCH_SORT_LABELS,
} from "@/src/config/constants";
import SearchCardsGrid from "../../grids/searchCardsGrid";
import {
  GeneralSearchManager,
  stringToFilter,
} from "@/src/utils/searchManager";
import { usePathname, useRouter } from "next/navigation";
import SortMenu from "../../sortMenu/sortMenu";
import ActiveFilters from "../../search/filters/activeFilters";

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

const CollectionPage = ({ slug, data, searchParams }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const searchManager = new GeneralSearchManager({
    initialPage: Number(searchParams?.page) || DEFAULT_PAGE_NUM,
    initialSort: searchParams?.sort || DEFAULT_SEARCH_SORT,
    initialFilters: stringToFilter(searchParams?.filters),
    initialKeywords: searchParams?.keywords || DEFAULT_SEARCH_TERM,
  });
  const totalPages = totalNumPages(data.numResults, CARDS_PER_PAGE);
  const { push } = useRouter();
  const pathname = usePathname();

  const updateURL = async (queryString) => {
    push(`${pathname}?${queryString}`);
    headingRef.current?.focus();
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
            level="h1"
            size="heading2"
            sx={{
              maxWidth: "1250px",
              marginBottom: "m",
            }}
          >
            {slug}
          </Heading>
          <Filters headingText="Search this collection" ref={headingRef} />
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
        <ActiveFilters />
        <Flex marginTop="m" marginBottom="m" flexDir="column">
          <Heading size="heading6" marginBottom="xs">
            Collection data
          </Heading>
          <Text marginBottom="xs">
            This collection is also available in Archives & Manuscripts
          </Text>
          <ButtonGroup marginBottom="m">
            <Button buttonType="secondary" id="finding-aid-btn">
              View Finding Aid
            </Button>
            <Button buttonType="secondary" id="catalog-btn">
              View Catalog
            </Button>
          </ButtonGroup>
          <Text size="overline1" marginBottom="xs">
            Dates / Origin
          </Text>
          <Text marginBottom="m">
            Date created: {textLink("/search/index?year_begin=1800", "1800")}{" "}
            (approximate)
          </Text>
          <Text size="overline1" marginBottom="xs">
            Library Locations
          </Text>
          <Text marginBottom="m">
            {textLink(
              "/divisions/billy-rose-theatre-division",
              "Example division"
            )}
          </Text>
          <Link hasVisitedState={false} isUnderlined={false}>
            See more collection data
          </Link>
        </Flex>
        <Flex
          gap="xxl"
          sx={{
            flexDir: { base: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              background: "ui.bg.default",
              padding: "l",
              height: "400px",
              minWidth: "300px",
              justifyItems: "center",
            }}
          >
            <Heading size="heading6">Collection structure</Heading>
          </Box>
          <Box width="100%">
            <Flex
              flexDir="column"
              sx={{
                background: "ui.bg.default",
                paddingTop: "s",
                paddingBottom: "s",
                paddingLeft: "m",
                paddingRight: "m",
                marginBottom: "l",
              }}
            >
              <SearchBar
                headingText={
                  <Heading
                    sx={{ marginBottom: "xs", fontSize: "16px !important" }}
                    size="heading6"
                  >
                    Search this collection:
                  </Heading>
                }
                id="searchbar"
                invalidText="Could not find the item"
                labelText="Search this collection by item title"
                onSubmit={() => {}}
                textInputProps={{
                  labelText: "Search this collection by item title",
                  name: "textInputName",
                  placeholder: "Search this collection by item title",
                }}
                sx={{
                  width: "fill",
                  flexFlow: "row nowrap",
                  button: {
                    borderRadius: "0px 2px 2px 0px",
                    "> svg": {
                      width: "14px",
                      height: "14px",
                    },
                    paddingTop: "xs",
                    paddingBottom: "xs",
                    paddingLeft: "s !important",
                    paddingRight: "s !important",
                    "> span": {
                      display: "block !important",
                    },
                  },
                  [`@media screen and (max-width: ${headerBreakpoints.lgMobile}px)`]:
                    {
                      button: {
                        padding: "xs !important",
                        gap: 0,
                        "> span": {
                          display: "none !important",
                        },
                        "> svg": {
                          width: "18px",
                          height: "18px",
                        },
                      },
                    },
                }}
              />
            </Flex>
            <Flex
              marginTop="xl"
              marginBottom="s"
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading
                size="heading5"
                ref={headingRef}
                tabIndex={-1}
                margin="0"
              >{`Displaying ${displayResults(
                data.numResults,
                CARDS_PER_PAGE,
                1
              )}
                                results`}</Heading>
              <SortMenu
                options={SEARCH_SORT_LABELS}
                searchManager={searchManager}
                updateURL={updateURL}
              />
            </Flex>
            <SearchCardsGrid keywords={data.keyword} results={data.results} />
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

              <Pagination
                id="pagination-id"
                initialPage={1}
                currentPage={1}
                pageCount={10}
                sx={{
                  justifyContent: "flex-end",
                  gap: "s",
                }}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CollectionPage;
