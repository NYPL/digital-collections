import { forwardRef } from "react";
import { Grid } from "@chakra-ui/react";
import SelectFilter, { FilterCategory } from "./selectFilter";
import { headerBreakpoints } from "@/src/utils/breakpoints";

type SelectFilterGridProps = {
  filters: FilterCategory[];
  isExpanded: boolean;
};

const SelectFilterGrid = forwardRef<HTMLHeadingElement, SelectFilterGridProps>(
  ({ filters, isExpanded }, headingRef) => {
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
        gap="m"
        marginBottom="m"
        width="full"
      >
        {(isExpanded ? filters : filters.slice(0, 4)).map((filter) => (
          <SelectFilter ref={headingRef} key={filter.name} filter={filter} />
        ))}
      </Grid>
    );
  }
);

SelectFilterGrid.displayName = "SelectFilterGrid";

export default SelectFilterGrid;
