import { useState } from "react";
import { Grid } from "@chakra-ui/react";
import SelectFilter, { FilterCategory } from "./selectFilter";

type SelectFilterGridProps = {
  filters: FilterCategory[];
  isExpanded: boolean;
};

const SelectFilterGrid = ({ filters, isExpanded }: SelectFilterGridProps) => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const handleToggle = (facet: string) => {
    setOpenFilter((prev) => (prev === facet ? null : facet));
  };

  return (
    <Grid
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
