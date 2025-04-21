import React, { useRef, useEffect } from "react";
import {
  Button,
  Heading,
  Accordion,
  Box,
  TextInputRefType,
} from "@nypl/design-system-react-components";
import SelectFilterGrid from "./selectFilterGrid";
import RightsFilter from "./rightsFilter";
import DateFilter from "./dateFilter";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { SearchManager } from "@/src/utils/searchManager";

type FiltersProps = {
  headingText: string;
  searchManager: SearchManager;
  filtersExpanded: boolean;
  setFiltersExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const Filters = ({
  headingText,
  searchManager,
  filtersExpanded,
  setFiltersExpanded,
}: FiltersProps) => {
  const dateFilterRef = useRef<TextInputRefType | null>(null);
  const secondRowFilter = 4;
  useEffect(() => {
    if (filtersExpanded) {
      // If there are 4> dropdown filters visible, focus the 4th.
      if (searchManager.availableFilters[secondRowFilter].options.length > 0) {
        const button = document.querySelector(
          `button[aria-label="Select ${searchManager.availableFilters[secondRowFilter].name}"]`
        );
        if (button) {
          (button as HTMLButtonElement).focus();
        }
      } else {
        dateFilterRef.current?.focus();
      }
    }
  }, [filtersExpanded]);

  const filterContent = (
    <>
      <SelectFilterGrid
        isExpanded={filtersExpanded}
        searchManager={searchManager}
        key={searchManager.filters.length}
      />
      {filtersExpanded && (
        <>
          <DateFilter
            searchManager={searchManager}
            // Remounts when filters are cleared from active filter panel.
            key={searchManager.filters.length + 1}
            ref={dateFilterRef}
          />
          <RightsFilter
            searchManager={searchManager}
            // Remounts when filters are cleared from active filter panel.
            key={searchManager.filters.length + 2}
          />
        </>
      )}
      <Button
        id="see-more-filters"
        buttonType="secondary"
        onClick={() => {
          setFiltersExpanded((prev) => !prev);
        }}
      >
        {filtersExpanded ? "Less filter options" : "See all filter options"}
      </Button>
    </>
  );

  return (
    <>
      <Box
        sx={{
          display: "block",
          [`@media (max-width: ${headerBreakpoints.lgMobile}px)`]: {
            display: "none",
          },
        }}
      >
        <Heading size="heading4">{headingText}</Heading>
        {filterContent}
      </Box>

      <Box
        sx={{
          display: "block",
          [`@media (min-width: ${headerBreakpoints.lgMobile}px)`]: {
            display: "none",
          },
        }}
      >
        <Accordion
          accordionData={[{ label: headingText, panel: filterContent }]}
          sx={{
            button: { _expanded: { bg: "ui.bg.active" } },
            bg: "ui.white",
          }}
        />
      </Box>
    </>
  );
};

Filters.displayName = "Filters";

export default Filters;
