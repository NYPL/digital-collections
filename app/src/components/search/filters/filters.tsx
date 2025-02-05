import React, { useState } from "react";
import {
  Button,
  Text,
  Flex,
  Heading,
  Icon,
  Radio,
  RadioGroup,
  TextInput,
  Tooltip,
} from "@nypl/design-system-react-components";

import SelectFilterGrid from "./selectGrid";

const Filters = ({ headingText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Heading size="heading4">{headingText}</Heading>
      <SelectFilterGrid
        filters={[
          {
            facet: "Topic",
            options: [
              { name: "New York", count: 37 },
              { name: "New Jersey", count: 8 },
              { name: "Long Island", count: 12 },
            ],
          },
          { facet: "Genre", options: [{ name: "New York", count: 37 }] },
          { facet: "Format", options: [{ name: "New York", count: 8 }] },
          { facet: "Collection", options: [{ name: "New York", count: 37 }] },
          { facet: "Publishers", options: [{ name: "New York", count: 37 }] },
          { facet: "Division", options: [{ name: "New York", count: 37 }] },
          { facet: "Type", options: [{ name: "New York", count: 37 }] },
        ]}
        isExpanded={isExpanded}
      />
      {isExpanded && (
        <>
          <Heading size="heading6">Date range:</Heading>
          <Flex gap="s" alignItems="center" marginBottom="m">
            <TextInput
              width="100px"
              id="dateStart"
              labelText="Start year"
              placeholder="Start year"
              showLabel={false}
            />
            <Text sx={{ marginBottom: "0" }}> to </Text>
            <TextInput
              width="100px"
              id="dateStart"
              labelText="End year"
              showLabel={false}
              placeholder="End year"
            />
            <Button id="date-filter-btn">Apply dates</Button>
          </Flex>
          <Heading size="heading6">Show only:</Heading>
          <RadioGroup
            name="show-only-filters"
            id="show-only-filters"
            labelText="Show Only"
            showLabel={false}
            layout="row"
            marginBottom="m"
          >
            <Radio
              id="pd-checkbox"
              labelText="Public domain"
              value="pd-radio"
            />
            <Radio
              id="online-radio"
              labelText="Available online"
              value="online-radio"
            />
            <Radio
              id="onsite-radio"
              labelText={
                <Tooltip content="Somethin about on-site materials...missing copy">
                  <span>
                    Contains on-site materials{" "}
                    <Icon
                      size="medium"
                      name="errorOutline"
                      iconRotation="rotate180"
                    />
                  </span>
                </Tooltip>
              }
              value="onsite-radio"
            />
          </RadioGroup>
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
