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
  SearchBar,
} from "@nypl/design-system-react-components";
import React from "react";
import Filters from "../../search/filters";
import { headerBreakpoints } from "@/src/utils/breakpoints";

const textLink = (href, text) => {
  return (
    <a
      style={{
        color: "unset",
        textDecorationLine: "underline",
        lineHeight: "150%",
        textUnderlinePosition: "from-font",
      }}
      href={href}
    >
      {text}
    </a>
  );
};

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
        <Flex marginTop="l" marginBottom="l" flexDir="column">
          <Heading size="heading6" marginBottom="s">
            Collection data
          </Heading>
          <Text marginBottom="s">
            This collection is also available in Archives & Manuscripts
          </Text>
          <ButtonGroup marginBottom="l">
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
          <Text>
            Date created: {textLink("/search/index?year_begin=1800", "1800")}
          </Text>
          <Text size="overline1" marginBottom="xs">
            Library Locations
          </Text>
          <Text>
            {textLink(
              "/divisions/billy-rose-theatre-division",
              "Example division"
            )}
          </Text>
          <Link hasVisitedState={false} isUnderlined={false}>
            See more collection data
          </Link>
        </Flex>
        <Flex gap="xxxl">
          <Box
            sx={{
              background: "ui.bg.default",
              padding: "l",
              height: "400px",
            }}
          >
            <Heading size="heading6">Collection structure</Heading>
          </Box>
          <Flex>
            <Box
              sx={{
                background: "ui.bg.default",
                padding: "l",
                height: "109px",
                width: "934px",
              }}
            >
              <SearchBar
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
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default CollectionPage;
