import React, { forwardRef, useState, useRef, useEffect } from "react";
import {
  Button,
  Heading,
  Accordion,
  Box,
  TextInputRefType,
} from "@nypl/design-system-react-components";
import { mockFacetFilter } from "__tests__/__mocks__/data/mockFacetFilter";
import SelectFilterGrid from "./selectFilterGrid";
import RightsFilter from "./rightsFilter";
import DateFilter from "./dateFilter";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { ToggleTip } from "../../toggleTip/toggleTip";

type FiltersProps = {
  headingText: string;
};

const Filters = ({ headingText }: FiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const filterRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dateFilterRef = useRef<TextInputRefType | null>(null);

  useEffect(() => {
    if (isExpanded) {
      if (filterRefs.current[4]) {
        filterRefs.current[4]?.focus();
      } else {
        dateFilterRef.current?.focus();
      }
    }
  }, [isExpanded]);

  const filterContent = (
    <>
      <SelectFilterGrid
        filters={[
          {
            name: "Topic",
            options: mockFacetFilter.options,
          },
          {
            name: "Genre",
            options: mockFacetFilter.options,
          },
          {
            name: "Format",
            options: mockFacetFilter.options,
          },
          {
            name: "Collection",
            options: mockFacetFilter.options,
          },
          {
            name: "Publishers",
            options: [{ name: "New York", count: 37 }],
          },
          { name: "Division", options: [{ name: "New York", count: 37 }] },
          { name: "Type", options: [{ name: "New York", count: 37 }] },
        ]}
        isExpanded={isExpanded}
        filterRefs={filterRefs}
      />
      {isExpanded && (
        <>
          <DateFilter ref={dateFilterRef} />
          <RightsFilter />
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
