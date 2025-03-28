import { Grid } from "@chakra-ui/react";
import SelectFilter from "./selectFilter";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { SearchManager } from "@/src/utils/searchManager";

type SelectFilterGridProps = {
  isExpanded: boolean;
  filterRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  searchManager: SearchManager;
};

const SelectFilterGrid = ({
  isExpanded,
  filterRefs,
  searchManager,
}: SelectFilterGridProps) => {
  const expandedFilters = isExpanded
    ? searchManager.availableFilters
    : searchManager.availableFilters.slice(0, 4);

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
      {expandedFilters.map((filter, index) => (
        <SelectFilter
          key={filter.name}
          filter={filter}
          ref={(el) => {
            filterRefs.current[index] = el;
          }}
          searchManager={searchManager}
        />
      ))}
    </Grid>
  );
};
SelectFilterGrid.displayName = "SelectFilterGrid";

export default SelectFilterGrid;
