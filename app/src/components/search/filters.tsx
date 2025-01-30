import React, { useState } from "react";
import {
  Button,
  Text,
  Flex,
  Grid,
  Heading,
  Icon,
  MultiSelect,
  Radio,
  RadioGroup,
  TextInput,
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
];

const exampleMultiSelect = (name: string) => {
  return (
    <MultiSelect
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

const Filters = ({ headingText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Heading size="heading4">{headingText}</Heading>
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
