import { useState, useRef, forwardRef } from "react";
import { Grid } from "@chakra-ui/react";
import SelectFilter, { FilterCategory } from "./selectFilter";
import { useCloseDropDown } from "@nypl/design-system-react-components";

type SelectFilterGridProps = {
  filters: FilterCategory[];
  isExpanded: boolean;
};

const SelectFilterGrid = forwardRef<HTMLHeadingElement, SelectFilterGridProps>(
  ({ filters, isExpanded }, headingRef) => {
    const [openFilter, setOpenFilter] = useState<string | null>(null);
    const gridRef = useRef<HTMLDivElement | null>(null);

    useCloseDropDown(() => setOpenFilter(null), gridRef);

    const handleOpenFilter = (filterName: string) => {
      setOpenFilter((prev) => (prev === filterName ? prev : filterName));
    };

    const handleCloseFilter = () => {
      setOpenFilter(null);
    };

    return (
      <Grid
        ref={gridRef}
        templateColumns="repeat(4, 1fr)"
        gap="m"
        marginBottom="m"
        width="full"
      >
        {(isExpanded ? filters : filters.slice(0, 4)).map((filter) => (
          <SelectFilter
            ref={headingRef}
            key={filter.name}
            filter={filter}
            isOpen={openFilter === filter.name}
            onToggle={() => handleOpenFilter(filter.name)}
            handleCloseFilter={handleCloseFilter}
          />
        ))}
      </Grid>
    );
  }
);

SelectFilterGrid.displayName = "SelectFilterGrid";

export default SelectFilterGrid;
