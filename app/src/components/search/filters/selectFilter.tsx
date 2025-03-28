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
import {
  availableFilterDisplayName,
  SearchManager,
} from "@/src/utils/searchManager";
import {
  AvailableFilter,
  AvailableFilterOption,
} from "@/src/types/AvailableFilterType";

export interface SelectFilterProps {
  filter: AvailableFilter;
  searchManager: SearchManager;
}

export const availableFilterOptions = (
  options: AvailableFilterOption[],
  filterName: string
) => {
  return options.map((option, index) => (
    <Radio
      key={`${option.name}-${index}`}
      id={`${option.name}-${index}`}
      labelText={
        <Flex justifyContent="space-between" gap="s">
          <Box noOfLines={1}>
            {availableFilterDisplayName(option.name, filterName)}
          </Box>
          <span>{option.count}</span>
        </Flex>
      }
      value={option.name}
    />
  ));
};

const SelectFilterComponent = forwardRef<
  HTMLButtonElement,
  { filter: AvailableFilter; searchManager: SearchManager }
>((props, filterRef) => {
  const { filter, searchManager, ...rest } = props;
  const [userClickedOutside, setUserClickedOutside] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Sets selected to filter's current URL value on mount.
  const existingFilter = searchManager.filters.find(
    (f) => f.filter === filter.name
  );
  let selected = existingFilter
    ? filter.options.find((option) => option.name === existingFilter.value) ||
      null
    : null;

  // Manages current selection in state while user interacts with dropdown/modal.
  const [current, setCurrent] = useState<AvailableFilterOption | null>(
    selected
  );
  const [modalCurrent, setModalCurrent] =
    useState<AvailableFilterOption | null>(selected);

  const { push } = useRouter();
  const pathname = usePathname();
  const updateURL = async (queryString) => {
    push(`${pathname}?${queryString}`);
  };

  // Refs for programmatic focus.
  const accordionButtonRef: React.RefObject<HTMLButtonElement> =
    useRef<HTMLButtonElement>(null);
  const containerRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  const mergedRef = useMergeRefs(filterRef, accordionButtonRef);

  // Tells the dropdown to close if user focus leaves.
  const handleFocus = (e) => {
    const selectComponent = containerRef?.current;
    if (e.type === "mousedown" || e.key === "Tab" || e.key === "Enter") {
      const focusOutside =
        selectComponent && !selectComponent.contains(e.target);
      setUserClickedOutside(focusOutside!);
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      document.addEventListener("mousedown", handleFocus);
      document.addEventListener("keydown", handleFocus);
    }
    return () => {
      document.removeEventListener("mousedown", handleFocus);
      document.removeEventListener("keydown", handleFocus);
    };
  }, [isModalOpen]);

  // Displays selected first.
  const sortedOptions =
    selected && !isModalOpen
      ? [
          selected,
          ...filter.options.filter((option) => option.name !== selected?.name),
        ]
      : filter.options;

  const onChange = (newSelection: string) => {
    selected =
      filter.options.find((option) => option.name === newSelection) || null;
    setCurrent(selected);
    setModalCurrent(selected);
  };

  const accordionPanel = (
    <>
      <RadioGroup
        isFullWidth
        id={`${filter.name}-options`}
        labelText={`${filter.name} filter options`}
        showLabel={false}
        name={filter.name}
        onChange={onChange}
        defaultValue={selected?.name ?? ""}
      >
        {availableFilterOptions(sortedOptions.slice(0, 10), filter.name)}
      </RadioGroup>
      <Button
        id="apply"
        width="100%"
        marginBottom={sortedOptions.length > 10 ? "xs" : "0"}
        marginTop="s"
        isDisabled={!current}
        onClick={() => {
          accordionButtonRef.current?.focus();
          // Push the current filter selection to URL.
          updateURL(
            searchManager.handleAddFilter([
              {
                filter: filter.name,
                value: current?.name!,
              },
            ])
          );
          setUserClickedOutside(true);
        }}
      >
        Apply
      </Button>
      {sortedOptions.length > 10 && (
        <SelectFilterModal
          filter={filter}
          ref={accordionButtonRef}
          onOpen={() => {
            setModalCurrent(current);
            setIsModalOpen(true);
          }}
          onClose={(closeDropdown: boolean) => {
            setIsModalOpen(false);
            setUserClickedOutside(closeDropdown);
          }}
          selected={selected}
          current={current}
          modalCurrent={modalCurrent}
          setModalCurrent={setModalCurrent}
          searchManager={searchManager}
        />
      )}
    </>
  );

  // Reset dropdown's current value to filter selection when dropdown closes/opens.
  const handleAccordionChange = () => {
    setCurrent(
      existingFilter
        ? filter.options.find(
            (option) => option.name === existingFilter.value
          ) || null
        : null
    );
  };

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
        onChange={handleAccordionChange}
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
