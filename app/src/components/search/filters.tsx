import React, { useState } from "react";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Grid,
  Heading,
  Icon,
  MultiSelect,
  Tooltip,
} from "@nypl/design-system-react-components";

const exampleFacetCategories = [
  "Topic",
  "Name",
  "Place",
  "Collection",
  "Genre",
  "Publishers",
  "Division",
  "Type",
  "Date Range",
];

const exampleMultiSelect = (name: string) => {
  return (
    <MultiSelect
      sx={{ width: "-webkit-fill-available" }}
      id={`${name}-select`}
      buttonText={name}
      selectedItems={{}}
      items={[
        {
          id: name,
          name: name,
        },
        {
          id: `${name}1`,
          name: `${name}1`,
        },
        {
          id: `${name}2`,
          name: `${name}2`,
        },
        {
          id: `${name}3`,
          name: `${name}3`,
        },
      ]}
      onChange={() => {}}
    />
  );
};

const Filters = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Heading size="heading4">Refine your search</Heading>
      <Grid
        templateColumns="repeat(4, 1fr)"
        marginBottom="m"
        width="fill"
        sx={{ gap: "m" }}
      >
        {isExpanded
          ? exampleFacetCategories.map((filter) => exampleMultiSelect(filter))
          : exampleFacetCategories
              .slice(0, 4)
              .map((filter) => exampleMultiSelect(filter))}
      </Grid>
      {isExpanded && (
        <>
          <Heading size="heading4">Show only:</Heading>
          <CheckboxGroup
            name="show-only-filters"
            id="show-only-filters"
            labelText="Show Only"
            showLabel={false}
            layout="row"
            marginBottom="m"
          >
            <Checkbox id="pd-checkbox" labelText="Public domain" />
            <Checkbox id="online-checkbox" labelText="Available online" />
            <Checkbox
              id="onsite-checkbox"
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
            />
          </CheckboxGroup>
        </>
      )}
      <Button
        id={"see-more-filters"}
        buttonType="secondary"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Less filter options" : "See all filter options"}
      </Button>
    </>
  );
};

export default Filters;
