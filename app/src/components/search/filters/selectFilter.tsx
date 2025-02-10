import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import {
  Icon,
  Link,
  Radio,
  Flex,
  Box,
  RadioGroup,
} from "@nypl/design-system-react-components";
import { useState } from "react";

export type FilterOption = {
  name: string;
  count: number;
};

export type FilterCategory = {
  name: string;
  options: FilterOption[];
};

type SelectFilterProps = {
  filter: FilterCategory;
  isOpen: boolean;
  onToggle: () => void;
};

const SelectFilter = ({ filter, isOpen, onToggle }: SelectFilterProps) => {
  const [controller, setController] = useState<AbortController | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const getIcon = (isExpanded: boolean) => {
    const iconRotation = isExpanded ? "rotate180" : "rotate0";
    return (
      <Icon
        name="arrow"
        size="small"
        color="ui.black"
        iconRotation={iconRotation}
      />
    );
  };

  const modalLink = (facet: string) => {
    return (
      <Link
        sx={{ fontSize: "14px", color: "ui.link" }}
        isUnderlined={false}
        href={"add-filter"}
      >{`View all ${facet.toLowerCase()}${
        facet === "Publishers" ? `` : `s`
      }`}</Link>
    );
  };

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const onChange = (newSelection: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      setSelected(newSelection);
      console.log(`selected: ${newSelection}`);
    }, 400);

    setTimeoutId(newTimeoutId);
  };

  const radioLabel = (option: FilterOption) => {
    return (
      <Flex justifyContent="space-between">
        <span>{option.name}</span>
        <span>{option.count}</span>
      </Flex>
    );
  };

  const radioFilterOptions = (filter: FilterCategory) => {
    return filter.options.map((option, index) => (
      <Radio
        key={`${option.name}-${index}`}
        name={filter.name}
        id={`${option.name}-${index}`}
        labelText={radioLabel(option)}
        value={option.name}
      />
    ));
  };

  return (
    <ChakraAccordion allowToggle index={isOpen ? 0 : -1} onChange={onToggle}>
      <AccordionItem sx={{ bg: "ui.white" }}>
        {({ isExpanded }) => (
          <>
            <AccordionButton
              sx={{
                fontWeight: "light",
                fontSize: "desktop.body.body2",
                bg: "ui.white",
                _expanded: { bg: "ui.bg.active" },
              }}
            >
              <Box as="span" flex="1" textAlign="start">
                {filter.name}
              </Box>
              {getIcon(isExpanded)}
            </AccordionButton>
            {isExpanded && (
              <AccordionPanel>
                <>
                  <RadioGroup
                    isFullWidth
                    id={`${filter.name}-options`}
                    labelText={`${filter.name} filter options`}
                    showLabel={false}
                    name={filter.name}
                    onChange={onChange}
                    sx={{ marginBottom: "s" }}
                    defaultValue={selected ?? undefined}
                  >
                    {radioFilterOptions(filter)}
                  </RadioGroup>
                  {modalLink(filter.name)}
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
