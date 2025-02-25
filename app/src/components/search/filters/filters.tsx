import React, { forwardRef, useState } from "react";
import {
  Button,
  Heading,
  Accordion,
  Box,
  Banner,
} from "@nypl/design-system-react-components";
import { mockFacetFilter } from "__tests__/__mocks__/data/mockFacetFilter";
import SelectFilterGrid from "./selectFilterGrid";
import RightsFilter from "./rightsFilter";
import DateFilter from "./dateFilter";
import { headerBreakpoints } from "@/src/utils/breakpoints";

type FiltersProps = {
  headingText: string;
};

const Filters = forwardRef<HTMLHeadingElement, FiltersProps>(
  ({ headingText }, headingRef) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const filterContent = (
      <>
        <SelectFilterGrid
          ref={headingRef}
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
        />
        {isExpanded && (
          <>
            <DateFilter ref={headingRef} />
            <RightsFilter ref={headingRef} />
          </>
        )}
        <Button
          id={"see-more-filters"}
          buttonType="secondary"
          onClick={() => setIsExpanded((prev) => !prev)}
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
            sx={{ button: { _expanded: { bg: "ui.bg.active" } } }}
          />
        </Box>
      </>
    );
  }
);

Filters.displayName = "Filters";

export default Filters;
