import { headerBreakpoints } from "@/src/utils/breakpoints";
import { Flex, Heading } from "@nypl/design-system-react-components";
import DCSearchBar from "./dcSearchBar";

export const CollectionSearch = () => {
  return (
    <Flex
      flexDir="column"
      sx={{
        background: "ui.bg.default",
        paddingTop: "s",
        paddingBottom: "s",
        paddingLeft: "m",
        paddingRight: "m",
        marginBottom: "l",
        display: "none",
        [`@media (min-width:  ${headerBreakpoints.lgMobile}px)`]: {
          display: "flex",
        },
      }}
    >
      <Heading size="heading8" marginBottom="xs">
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
  );
};
