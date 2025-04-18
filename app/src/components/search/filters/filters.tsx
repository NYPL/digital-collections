import React, { useState, useRef, useEffect } from "react";
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
};

const Filters = ({ headingText, searchManager }: FiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const filterRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dateFilterRef = useRef<TextInputRefType | null>(null);
  const secondRowFilter = 4;
  useEffect(() => {
    if (isExpanded) {
      if (filterRefs.current[secondRowFilter]) {
        filterRefs.current[secondRowFilter]?.focus();
      } else {
        dateFilterRef.current?.focus();
      }
    }
  }, [isExpanded]);

  const filterContent = (
    <>
      <SelectFilterGrid
        isExpanded={isExpanded}
        filterRefs={filterRefs}
        searchManager={searchManager}
        key={searchManager.filters.length}
      />
      {isExpanded && (
        <>
          <DateFilter
            searchManager={searchManager}
            // Remounts when filters are cleared from active filter panel.
            key={searchManager.filters.length + 1}
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
          setIsExpanded((prev) => !prev);
        }}
      >
        {isExpanded ? "Less filter options" : "See all filter options"}
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
