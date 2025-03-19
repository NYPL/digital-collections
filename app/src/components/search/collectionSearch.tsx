import { headerBreakpoints } from "@/src/utils/breakpoints";
import {
  Button,
  Flex,
  Heading,
  Icon,
} from "@nypl/design-system-react-components";
import DCSearchBar from "./dcSearchBar";
import { useState } from "react";

export const CollectionSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex
      flexDir="column"
      sx={{
        background: "ui.bg.default",
        paddingTop: "m",
        paddingBottom: "m",
        [`@media (min-width:  ${headerBreakpoints.lgMobile}px)`]: {
          paddingTop: "s",
          paddingBottom: "s",
        },
        paddingLeft: "m",
        paddingRight: "m",
        marginBottom: "l",
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        sx={{
          marginBottom: isExpanded ? "s" : "0",
          [`@media (min-width:  ${headerBreakpoints.lgMobile}px)`]: {
            marginBottom: "xs",
          },
        }}
      >
        <Heading size="heading8" marginBottom="0">
          Search this collection
        </Heading>
        <Button
          id={isExpanded ? "close-search" : "open-search"}
          buttonType="text"
          aria-label={isExpanded ? "Close search" : "Open search"}
          sx={{
            display: "flex",
            [`@media (min-width:  ${headerBreakpoints.lgMobile}px)`]: {
              display: "none",
            },
            padding: "0 !important",
            minWidth: "unset",
            minHeight: "unset",
            height: "unset",
            _hover: { background: "unset", color: "unset" },
          }}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {" "}
          <Icon
            name={isExpanded ? "close" : "search"}
            size="medium"
            color="ui.black"
          />
        </Button>
      </Flex>
      <Flex
        sx={{
          display: isExpanded ? "block" : "none",
          [`@media (min-width:  ${headerBreakpoints.lgMobile}px)`]: {
            display: "block",
          },
        }}
      >
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
          sx={{
            display: isExpanded ? "block" : "none",
            [`@media (min-width:  ${headerBreakpoints.lgMobile}px)`]: {
              display: "block",
            },
          }}
        />
      </Flex>
    </Flex>
  );
};
