import React, { forwardRef, useState } from "react";
import { Button, Heading } from "@nypl/design-system-react-components";

import SelectFilterGrid from "./selectFilterGrid";
import RightsFilter from "./rightsFilter";
import DateFilter from "./dateFilter";
import { mockFacetFilter } from "__tests__/__mocks__/data/mockFacetFilter";

type FiltersProps = {
  headingText: string;
};

const Filters = forwardRef<HTMLHeadingElement, FiltersProps>(
  ({ headingText }, headingRef) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <>
        <Heading size="heading4">{headingText}</Heading>
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
              options: [
                { name: "New York", count: 37 },
                { name: "New Jersey", count: 8 },
                { name: "Long Island", count: 12 },
              ],
            },
            { name: "Publishers", options: [{ name: "New York", count: 37 }] },
            { name: "Division", options: [{ name: "New York", count: 37 }] },
            { name: "Type", options: [{ name: "New York", count: 37 }] },
          ]}
          isExpanded={isExpanded}
        />
        {isExpanded && (
          <>
            <DateFilter />
            <RightsFilter />
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
  }
);

Filters.displayName = "Filters";

export default Filters;
