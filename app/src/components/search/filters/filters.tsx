import React, { useState } from "react";
import {
  Button,
  Text,
  Flex,
  Heading,
} from "@nypl/design-system-react-components";

import SelectFilterGrid from "./selectFilterGrid";
import RightsFilter from "./rightsFilter";
import DateFilter from "./dateFilter";

type FiltersProps = {
  headingText: string;
  headingRef: React.RefObject<HTMLHeadingElement> | null;
};

const Filters = ({ headingText, headingRef }: FiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Heading size="heading4">{headingText}</Heading>
      <SelectFilterGrid
        headingRef={headingRef}
        filters={[
          {
            name: "Topic",
            options: [
              { name: "New York", count: 37 },
              { name: "New Jersey", count: 8 },
              { name: "Long Island", count: 12 },
            ],
          },
          {
            name: "Genre",
            options: [
              { name: "New York", count: 37 },
              { name: "New Jersey", count: 8 },
              { name: "Long Island", count: 12 },
            ],
          },
          {
            name: "Format",
            options: [
              { name: "New York", count: 37 },
              { name: "New Jersey", count: 8 },
              { name: "Long Island", count: 12 },
            ],
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
};

export default Filters;
