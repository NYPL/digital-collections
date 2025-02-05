import { useState } from "react";
import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  useColorMode,
} from "@chakra-ui/react";
import {
  Icon,
  IconColors,
  Link,
  Radio,
  Flex,
  Box,
  RadioGroup,
} from "@nypl/design-system-react-components";

export type FilterOption = {
  name: string;
  count: number;
};

export type FilterCategory = {
  facet: string;
  options: FilterOption[];
};

type SelectFilterProps = {
  filter: FilterCategory;
  isOpen: boolean;
  onToggle: () => void;
};

const getIcon = (isExpanded: boolean, iconColor: IconColors) => {
  const iconRotation = isExpanded ? "rotate180" : "rotate0";
  return (
    <Icon
      name="arrow"
      size="small"
      color={iconColor}
      iconRotation={iconRotation}
    />
  );
};

const SelectFilter = ({ filter, isOpen, onToggle }: SelectFilterProps) => {
  const isDarkMode = useColorMode().colorMode === "dark";
  const radioLabel = (option: FilterOption) => {
    return (
      <Flex justifyContent="space-between">
        <span>{option.name}</span>
        <span>{option.count}</span>
      </Flex>
    );
  };

  const facetFilterOptions = (options: FilterOption[]) => {
    return options.map((option, index) => (
      <Radio
        key={`${option.name}-${index}`}
        name={option.name}
        id={`${option.name}-${index}`}
        labelText={radioLabel(option)}
        value={`${index}`}
      />
    ));
  };

  const modalLink = (facet: string) => {
    return (
      <Link
        sx={{ fontSize: "14px", color: "ui.link" }}
        isUnderlined={false}
        href={"add-filter"}
      >{`View all ${facet.toLowerCase()}s`}</Link>
    );
  };

  const onChange = (selected: string) => {
    console.log(`selected: ${selected}`);
  };

  return (
    <ChakraAccordion allowToggle index={isOpen ? 0 : -1} onChange={onToggle}>
      <AccordionItem sx={{ bg: "ui.white" }}>
        {({ isExpanded }) => (
          <>
            <AccordionButton
              sx={{
                fontWeight: "400",
                bg: "ui.white",
                _expanded: { bg: "ui.bg.active" },
              }}
            >
              <Box as="span" flex="1" textAlign="start">
                {filter.facet}
              </Box>
              {getIcon(
                isExpanded,
                isDarkMode ? "dark.ui.typography.heading" : "ui.black"
              )}
            </AccordionButton>
            {isExpanded && (
              <AccordionPanel>
                <>
                  <RadioGroup
                    isFullWidth
                    id={`${filter.facet}-options`}
                    labelText={`${filter.facet} filter options`}
                    showLabel={false}
                    name={filter.facet}
                    onChange={onChange}
                    sx={{ marginBottom: "s" }}
                  >
                    {facetFilterOptions(filter.options)}
                  </RadioGroup>
                  {modalLink(filter.facet)}
                </>
              </AccordionPanel>
            )}
          </>
        )}
      </AccordionItem>
    </ChakraAccordion>
  );
};

export default SelectFilter;
