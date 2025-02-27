import { Grid } from "@chakra-ui/react";
import SelectFilter, { FilterCategory } from "./selectFilter";
import { headerBreakpoints } from "@/src/utils/breakpoints";

type SelectFilterGridProps = {
  filters: FilterCategory[];
  isExpanded: boolean;
  filterRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
};

const SelectFilterGrid = ({
  filters,
  isExpanded,
  filterRefs,
}: SelectFilterGridProps) => {
  const visibleFilters = isExpanded ? filters : filters.slice(0, 4);

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
      {visibleFilters.map((filter, index) => (
        <SelectFilter
          key={filter.name}
          filter={filter}
          ref={(el) => {
            filterRefs.current[index] = el;
          }}
        />
      ))}
    </Grid>
  );
};
SelectFilterGrid.displayName = "SelectFilterGrid";

export default SelectFilterGrid;
