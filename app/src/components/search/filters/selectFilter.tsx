import { chakra, ChakraComponent, useMergeRefs } from "@chakra-ui/react";
import {
  Box,
  RadioGroup,
  Radio,
  Flex,
  Button,
  Tooltip,
  Icon,
} from "@nypl/design-system-react-components";
import React, { useEffect, useRef, useState } from "react";
import SelectFilterModal from "./selectFilterModal";
import FilterAccordion from "./filterAccordion";
import { usePathname, useRouter } from "next/navigation";
import {
  filterDisplayName,
  SearchManager,
} from "@/src/utils/searchManager/searchManager";
import {
  AvailableFilter,
  AvailableFilterOption,
} from "@/src/types/AvailableFilterType";
import { capitalize } from "@/src/utils/utils";

export interface SelectFilterProps {
  filter: AvailableFilter;
  searchManager: SearchManager;
}

export const availableFilterOptions = (
  options: AvailableFilterOption[],
  filterName: string
) => {
  const truncationLimit = 80;

  return options.map((option, index) => {
    const displayName = filterDisplayName(option.name, filterName);
    const isTruncated = option.name.length > truncationLimit;

    const label = (
      <Flex justifyContent="space-between" gap="s">
        {isTruncated ? (
          <Tooltip content={displayName}>
            <Box noOfLines={2}>{displayName}</Box>
          </Tooltip>
        ) : (
          <Box noOfLines={2}>{displayName}</Box>
        )}
        <span>{option.count}</span>
      </Flex>
    );

    return (
      <Radio
        key={`${option.name}-${index}`}
        id={`${option.name}-${index}`}
        labelText={label}
        value={option.name}
      />
    );
  });
};

const SelectFilterComponent = ({
  filter,
  searchManager,
}: SelectFilterProps) => {
  const [userClickedOutside, setUserClickedOutside] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sets selected to filter's current URL value on mount.
  let selected = filter
    ? filter.options.find((option) => !!option.selected) || null
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
          // If an option is selected, don't display any others.
          //...filter.options.filter((option) => option.name !== selected?.name),
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
          searchManager.setLastFilter(`accordion-button-select-${filter.name}`);
          // Push the current filter selection to URL.
          if (filter.name === "collection") {
            const [collectionTitle, collectionUuid] =
              current?.name!.split("||") ?? [];
            updateURL(
              searchManager.handleAddFilter([
                {
                  filter: filter.name,
                  value: collectionUuid,
                },
              ])
            );
          } else {
            updateURL(
              searchManager.handleAddFilter([
                {
                  filter: filter.name,
                  value: current?.name!,
                },
              ])
            );
          }

          setUserClickedOutside(true);
        }}
      >
        Apply
      </Button>
      {selected && (
        <Button
          id="clear-filter"
          buttonType="secondary"
          width="100%"
          marginBottom={sortedOptions.length > 10 ? "xs" : "0"}
          marginTop="xs"
          onClick={() => {
            accordionButtonRef.current?.focus();
            searchManager.setLastFilter(
              `accordion-button-select-${filter.name}`
            );
            updateURL(
              searchManager.handleRemoveFilter([
                {
                  filter: filter.name,
                  value: "any",
                },
              ])
            );

            setUserClickedOutside(true);
          }}
        >
          Clear filter
        </Button>
      )}
      {sortedOptions.length > 10 && (
        <SelectFilterModal
          filter={filter}
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
      filter
        ? filter.options.find((option) => option.selected === true) || null
        : null
    );
  };

  return (
    <Box ref={containerRef}>
      <FilterAccordion
        accordionItem={{
          buttonInteractionRef: accordionButtonRef,
          label: (
            <Box noOfLines={1}>
              {`${capitalize(filter.name)}${
                selected ? `: ${capitalize(selected.name)}` : ``
              }`}
            </Box>
          ),
          panel: accordionPanel,
          ariaLabel: `Select ${filter.name}`,
        }}
        id={`select-${filter.name}`}
        userClickedOutside={userClickedOutside}
        onChange={handleAccordionChange}
      />
    </Box>
  );
};

SelectFilterComponent.displayName = "SelectFilterComponent";

export const SelectFilter: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<SelectFilterProps> &
      React.RefAttributes<HTMLButtonElement>
  >,
  React.PropsWithChildren<SelectFilterProps>
> = chakra(SelectFilterComponent, { shouldForwardProp: () => true });

export default SelectFilter;
