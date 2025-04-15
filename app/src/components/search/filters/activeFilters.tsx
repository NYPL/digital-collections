import { Filter } from "@/src/types/FilterType";
import {
  Flex,
  HorizontalRule,
  TagSet,
  Text,
} from "@nypl/design-system-react-components";
import {
  availableFilterDisplayName,
  type SearchManager,
} from "@/src/utils/searchManager";
import { usePathname, useRouter } from "next/navigation";
import { capitalize } from "@/src/utils/utils";

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

  const getRightsFilterLabel = (value: string) => {
    const rightsLabels: Record<string, string> = {
      publicDomain: "Public domain",
      onSiteMaterial: "Contains on-site materials",
      availableOnline: "Available online",
    };

    return rightsLabels[value] || value;
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
            label:
              filter.filter === "rights"
                ? getRightsFilterLabel(filter.value)
                : availableFilterDisplayName(filter.value, filter.filter),
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
