import {
  Flex,
  HorizontalRule,
  TagSet,
  Text,
} from "@nypl/design-system-react-components";

const ActiveFilters = () => {
  return (
    <>
      <Flex alignContent="center" alignItems="center" gap="xs">
        <Text size="subtitle2" sx={{ margin: 0, fontWeight: 400 }}>
          Filters applied:
        </Text>
        <TagSet
          isDismissible
          id="search-filter-tags"
          onClick={() => {}}
          tagSetData={[
            { id: "format", label: "Audio" },
            { id: "genre", label: "New York" },
          ]}
          type="filter"
        />
      </Flex>
      <HorizontalRule />
    </>
  );
};

export default ActiveFilters;
