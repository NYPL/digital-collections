import { chakra, ChakraComponent, useMergeRefs } from "@chakra-ui/react";
import {
  Box,
  RadioGroup,
  Radio,
  Flex,
  Button,
} from "@nypl/design-system-react-components";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import SelectFilterModal from "./selectFilterModal";
import FilterAccordion from "./filterAccordion";
import { usePathname, useRouter } from "next/navigation";
import { SearchManager } from "@/src/utils/searchManager";

export type FilterOption = {
  name: string;
  count: number;
};

export type FilterCategory = {
  name: string;
  options: FilterOption[];
};

export interface SelectFilterProps {
  filter: FilterCategory;
  searchManager: SearchManager;
}

export const radioFilterOptions = (options: FilterOption[]) => {
  return options.map((option, index) => (
    <Radio
      key={`${option.name}-${index}`}
      id={`${option.name}-${index}`}
      labelText={
        <Flex justifyContent="space-between">
          <span>{option.name}</span>
          <span>{option.count}</span>
        </Flex>
      }
      value={option.name}
    />
  ));
};

const SelectFilterComponent = forwardRef<
  HTMLButtonElement,
  { filter: FilterCategory; searchManager: SearchManager }
>((props, filterRef) => {
  const { filter, searchManager, ...rest } = props;
  const [userClickedOutside, setUserClickedOutside] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplyDisabled, setIsApplyDisabled] = useState(true);

  const existingFilter = searchManager.filters.find(
    (f) => f.filter === filter.name
  );
  // Derive `current` directly from `existingFilter` and filter options
  let current = existingFilter
    ? filter.options.find((option) => option.name === existingFilter.value) ||
      null
    : null;

  useEffect(() => {
    setIsApplyDisabled(current === null);
  }, [current]);

  const { push } = useRouter();
  const pathname = usePathname();
  const updateURL = async (queryString) => {
    push(`${pathname}?${queryString}`);
  };

  // Create a ref to hold a reference to the accordion button, enabling us
  // to programmatically focus it.
  const accordionButtonRef: React.RefObject<HTMLButtonElement> =
    useRef<HTMLButtonElement>(null);
  const containerRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  const mergedRef = useMergeRefs(filterRef, accordionButtonRef);

  // Tells the accordion to close if open when user clicks or tabs outside of the container
  const handleFocusOutside = (e) => {
    const selectComponent = containerRef?.current;
    if (e.type === "mousedown" || e.key === "Tab" || e.key === "Enter") {
      const focusOutside =
        selectComponent && !selectComponent.contains(e.target);
      setUserClickedOutside(focusOutside!);
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      document.addEventListener("mousedown", handleFocusOutside);
      document.addEventListener("keydown", handleFocusOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleFocusOutside);
      document.removeEventListener("keydown", handleFocusOutside);
    };
  }, [isModalOpen]);

  const onChange = (newSelection: string) => {
    // Update `current` directly when selection changes
    current =
      filter.options.find((option) => option.name === newSelection) || null;
  };

  const sortedOptions = filter.options;

  const accordionPanel = (
    <>
      <RadioGroup
        isFullWidth
        id={`${filter.name}-options`}
        labelText={`${filter.name} filter options`}
        showLabel={false}
        name={filter.name}
        onChange={onChange}
        defaultValue={current?.name ?? ""}
      >
        {radioFilterOptions(sortedOptions.slice(0, 10))}
      </RadioGroup>
      <Button
        id="apply"
        width="100%"
        marginBottom={sortedOptions.length > 10 ? "xs" : "0"}
        marginTop="s"
        isDisabled={isApplyDisabled}
        onClick={() => {
          accordionButtonRef.current?.focus();
          updateURL(
            searchManager.handleAddFilter({
              filter: filter.name,
              value: current?.name!,
            })
          );
          setUserClickedOutside(true);
        }}
      >
        Apply
      </Button>
    </>
  );

  return (
    <Box {...rest} ref={containerRef}>
      <FilterAccordion
        accordionData={[
          {
            accordionType: "default",
            buttonInteractionRef: mergedRef,
            label: filter.name,
            panel: accordionPanel,
            ariaLabel: `Select ${filter.name}`,
          },
        ]}
        id={`select-${filter.name}`}
        userClickedOutside={userClickedOutside}
      />
    </Box>
  );
});

SelectFilterComponent.displayName = "SelectFilterComponent";

export const SelectFilter: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<SelectFilterProps> &
      React.RefAttributes<HTMLButtonElement>
  >,
  React.PropsWithChildren<SelectFilterProps>
> = chakra(SelectFilterComponent, { shouldForwardProp: () => true });

export default SelectFilter;
