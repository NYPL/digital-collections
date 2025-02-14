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
            { id: "audio", label: "Audio" },
            { id: "video", label: "Video" },
          ]}
          type="filter"
        />
      </Flex>
      <HorizontalRule />
    </>
  );
};

export default ActiveFilters;
