import { headerBreakpoints } from "@/src/utils/breakpoints";
import { Flex, Heading } from "@nypl/design-system-react-components";
import DCSearchBar from "./dcSearchBar";

import type { SearchManager } from "@/src/utils/searchManager";
import { usePathname, useRouter } from "next/navigation";

type CollectionSearchProps = {
  searchManager: SearchManager;
};

export const CollectionSearch = ({ searchManager }: CollectionSearchProps) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const updateURL = async (queryString) => {
    push(`${pathname}?${queryString}`, { scroll: false });
  };

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
          marginBottom: "xs",
        }}
      >
        <Heading size="heading8" marginBottom="0">
          Search this collection
        </Heading>
      </Flex>
      <Flex
        sx={{
          display: "block",
        }}
      >
        <DCSearchBar
          id="search-collection"
          labelText="Search this collection by item title"
          maxWrapperWidth="100%"
          textInputProps={{
            id: "collection-search-text",
            isClearable: true,
            isClearableCallback: () => searchManager.handleKeywordChange(""),
            labelText: "Search this collection by item title",
            name: "q",
            placeholder: "Search this collection by item title",
            defaultValue: searchManager.keywords || "",
            onChange: (e) =>
              searchManager.handleKeywordChange(
                (e.target as HTMLInputElement).value
              ),
          }}
          onSubmit={() => {
            searchManager.handleRemoveFilter([
              { filter: "subcollection", value: "null" },
            ]);
            searchManager.setLastFilter(null);
            updateURL(searchManager.handleSearchSubmit("relevance"));
          }}
          sx={{
            display: "block",
          }}
        />
      </Flex>
    </Flex>
  );
};
