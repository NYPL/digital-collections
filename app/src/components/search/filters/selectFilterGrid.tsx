import { forwardRef } from "react";
import { Grid } from "@chakra-ui/react";
import SelectFilter, { FilterCategory } from "./selectFilter";

type SelectFilterGridProps = {
  filters: FilterCategory[];
  isExpanded: boolean;
};

const SelectFilterGrid = forwardRef<HTMLHeadingElement, SelectFilterGridProps>(
  ({ filters, isExpanded }, headingRef) => {
    return (
      <Grid
        templateColumns="repeat(4, 1fr)"
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
