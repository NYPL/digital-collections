import { useState, useRef } from "react";
import { Grid } from "@chakra-ui/react";
import SelectFilter, { FilterCategory } from "./selectFilter";
import { useCloseDropDown } from "@nypl/design-system-react-components";

type SelectFilterGridProps = {
  filters: FilterCategory[];
  isExpanded: boolean;
};

const SelectFilterGrid = ({ filters, isExpanded }: SelectFilterGridProps) => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useCloseDropDown(() => setOpenFilter(null), gridRef);

  const handleToggle = (filterName: string) => {
    setOpenFilter((prev) => (prev === filterName ? null : filterName));
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
          key={filter.name}
          filter={filter}
          isOpen={openFilter === filter.name}
          onToggle={() => handleToggle(filter.name)}
        />
      ))}
    </Grid>
  );
};

export default SelectFilterGrid;
