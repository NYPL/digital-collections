import { Filter } from "@/src/types/FilterType";
import {
  Flex,
  HorizontalRule,
  TagSet,
  Text,
} from "@nypl/design-system-react-components";
import { useRouter, usePathname } from "next/navigation";
import type { SearchManager } from "@/src/utils/searchManager";

type ActiveFilterProps = {
  searchManager: SearchManager;
};

const ActiveFilters = ({ searchManager }: ActiveFilterProps) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const updateURL = async (queryString) => {
    push(`${pathname}?${queryString}`);
  };

  const handleOnClick = (tag) => {
    if (tag.id === "clear-filters") {
      updateURL(searchManager.clearAllFilters());
    } else {
      const filterToRemove = searchManager.filters.find(
        (filter) => filter.filter === tag.id
      );
      if (filterToRemove) {
        updateURL(searchManager.handleRemoveFilter(filterToRemove));
      }
    }
  };

  return searchManager.filters.length > 0 ? (
    <>
      <Flex alignContent="center" alignItems="center" gap="xs" flexDir="row">
        <Text size="subtitle2" sx={{ margin: 0, fontWeight: 400 }}>
          Filters applied:
        </Text>
        <TagSet
          isDismissible
          id="search-filter-tags"
          onClick={handleOnClick}
          tagSetData={searchManager.filters.map((filter: Filter) => ({
            id: filter.filter,
            label: filter.value,
          }))}
          type="filter"
          sx={{ flexWrap: "unset" }}
        />
      </Flex>
      <HorizontalRule />
    </>
  ) : null;
};

export default ActiveFilters;
