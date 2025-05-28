import { Grid } from "@chakra-ui/react";
import SelectFilter from "./selectFilter";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { SearchManager } from "@/src/utils/searchManager/searchManager";

type SelectFilterGridProps = {
  isExpanded: boolean;
  searchManager: SearchManager;
};

const SelectFilterGrid = ({
  isExpanded,
  searchManager,
}: SelectFilterGridProps) => {
  const filtersWithOptions = searchManager.availableFilters.filter(
    (filter) => filter.options.length > 0
  );
  const expandedFilters = isExpanded
    ? filtersWithOptions
    : filtersWithOptions.slice(0, 4);

  return (
    <Grid
      sx={{
        gridTemplateColumns: "repeat(1, 1fr)",
        [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]: {
          gridTemplateColumns: "repeat(4, 1fr)",
        },
      }}
      gap="s"
      marginBottom="s"
      width="full"
    >
      {expandedFilters.map((filter) => (
        <SelectFilter
          key={filter.name}
          filter={filter}
          searchManager={searchManager}
        />
      ))}
    </Grid>
  );
};
SelectFilterGrid.displayName = "SelectFilterGrid";

export default SelectFilterGrid;
