"use client";
import {
  Box,
  Text,
  Heading,
  Flex,
  ButtonGroup,
  Button,
  Link,
  Icon,
  Pagination,
} from "@nypl/design-system-react-components";
import React, { useRef } from "react";
import Filters from "../../search/filters/filters";
import { CardsGrid } from "../../grids/cardsGrid";
import { displayResults } from "@/src/utils/utils";
import { CARDS_PER_PAGE } from "@/src/config/constants";
import ActiveFilters from "../../search/filters/activeFilters";
import DCSearchBar from "../../search/dcSearchBar";

const CollectionPage = ({ slug, data }) => {
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
          <Filters headingText="Refine your results" ref={headingRef} />
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
            Date created:{" "}
            <Link hasVisitedState={false} href="/search/index?year_begin=1800">
              1800
            </Link>{" "}
            (approximate)
          </Text>
          <Text size="overline1" marginBottom="xs">
            Library Locations
          </Text>
          <Text marginBottom="m">
            <Link
              hasVisitedState={false}
              href="/divisions/billy-rose-theatre-division"
            >
              Example division
            </Link>
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
              <Heading sx={{ marginBottom: "xs" }} size="heading8">
                Search this collection:
              </Heading>
              <DCSearchBar
                id="search-collection"
                labelText="Search this collection by item title"
                maxWrapperWidth="100%"
                textInputProps={{
                  id: "collection-search-text",
                  isClearable: true,
                  isClearableCallback: () => {},
                  labelText: "Search this collection by item title",
                  name: "q",
                  placeholder: "Search this collection by item title",
                  defaultValue: "",
                  onChange: (e) => {},
                }}
                onSubmit={() => {}}
              />
            </Flex>
            <Heading
              marginTop="xl"
              ref={headingRef}
              size="heading5"
              tabIndex={-1}
            >{`Displaying ${displayResults(data.numResults, CARDS_PER_PAGE, 1)}
                                results`}</Heading>
            <CardsGrid records={data} />
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
