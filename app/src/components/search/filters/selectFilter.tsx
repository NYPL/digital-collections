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

const SelectFilter = ({ filter, isOpen, onToggle }: SelectFilterProps) => {
  const radioLabel = (option: FilterOption) => {
    return (
      <Flex justifyContent="space-between">
        <span>{option.name}</span>
        <span>{option.count}</span>
      </Flex>
    );
  };

  const radioFilterOptions = (options: FilterOption[]) => {
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
      >{`View all ${facet.toLowerCase()}${
        facet === "Publishers" ? `` : `s`
      }`}</Link>
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
                  >
                    {radioFilterOptions(filter.options)}
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
