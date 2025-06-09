import { Filter } from "@/src/types/FilterType";
import {
  Flex,
  HorizontalRule,
  TagSet,
  Text,
} from "@nypl/design-system-react-components";
import {
  filterDisplayName,
  type SearchManager,
} from "@/src/utils/searchManager/searchManager";
import { usePathname, useRouter } from "next/navigation";
import { capitalize } from "@/src/utils/utils";
import { AvailableFilterOption } from "@/src/types/AvailableFilterType";

type ActiveFilterProps = {
  searchManager: SearchManager;
  allFilters: Record<string, AvailableFilterOption[]>;
};

const ActiveFilters = ({ searchManager, allFilters }: ActiveFilterProps) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const updateURL = async (queryString, focusIndicator) => {
    searchManager.setLastFilter(focusIndicator);
    push(`${pathname}?${queryString}`);
  };
  const availableFilters = Object.entries(allFilters).map(([key, options]) => ({
    name: key,
    options,
  }));

  const handleOnClick = (tag) => {
    if (tag.id === "clear-filters") {
      updateURL(searchManager.clearAllFilters(), "refine-search-heading");
    } else {
      const filterToRemove = searchManager.filters.find(
        (filter) => filter.filter === tag.id
      );
      if (filterToRemove) {
        const focus =
          searchManager.filters.length >= 2
            ? `filters-applied`
            : `refine-search-heading`;
        updateURL(searchManager.handleRemoveFilter(filterToRemove), focus);
      }
    }
  };

  const getRightsFilterLabel = (value: string) => {
    const rightsLabels: Record<string, string> = {
      publicDomain: "Public domain",
      onSiteMaterial: "Contains on-site materials",
      availableOnline: "Available online",
    };

    return rightsLabels[value] || value;
  };

  const getCollectionFilterLabel = (
    filterName: string,
    filterValue: string
  ) => {
    const collectionFilter = availableFilters.find(
      (filter) => filter.name === filterName
    );
    const selectedCollection = collectionFilter?.options.find(
      (option) => option.selected === true
    );
    if (selectedCollection?.name) {
      return filterDisplayName(selectedCollection.name, filterName);
    } else return filterValue;
  };

  const getFilterLabel = (filter: Filter): string => {
    if (filter.filter === "rights") {
      return getRightsFilterLabel(filter.value);
    } else if (
      filter.filter === "collection" ||
      filter.filter === "subcollection"
    ) {
      return getCollectionFilterLabel(filter.filter, filter.value);
    } else {
      return capitalize(filter.value);
    }
  };
  return searchManager.filters.length > 0 ? (
    <>
      <Flex alignItems="flex-start" flexWrap="wrap" gap="xs" width="100%">
        <Text
          size="subtitle2"
          // @ts-ignore
          tabIndex={-1}
          id="filters-applied"
          sx={{ margin: 0, fontWeight: 400 }}
        >
          Filters applied:
        </Text>
        <TagSet
          isDismissible
          id="search-filter-tags"
          onClick={handleOnClick}
          tagSetData={searchManager.filters.map((filter: Filter) => ({
            id: filter.filter,
            label: getFilterLabel(filter),
          }))}
          type="filter"
          sx={{ flexWrap: "wrap" }}
        />
      </Flex>
      <HorizontalRule />
    </>
  ) : null;
};

export default ActiveFilters;
