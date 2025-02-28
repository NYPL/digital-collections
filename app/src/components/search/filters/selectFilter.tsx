import { chakra, ChakraComponent, useMergeRefs } from "@chakra-ui/react";
import {
  Box,
  RadioGroup,
  Radio,
  Flex,
  Button,
} from "@nypl/design-system-react-components";
import React, {
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import SelectFilterModal from "./selectFilterModal";
import FilterAccordion from "./filterAccordion";

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
  { filter: FilterCategory }
>((props, filterRef) => {
  const { filter, ...rest } = props;
  const [userClickedOutside, setUserClickedOutside] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<FilterOption | null>(null);
  const [modalSelected, setModalSelected] = useState<FilterOption | null>(
    selected
  );

  // Create a ref to hold a reference to the accordion button, enabling us
  // to programmatically focus it.
  const accordionButtonRef: React.RefObject<HTMLButtonElement> =
    useRef<HTMLButtonElement>(null);
  const containerRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

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
    if (!isModalOpen) {
      // if (timeoutId) {
      //   clearTimeout(timeoutId);
      // }
      // const newTimeoutId = setTimeout(() => {
      console.log(`selected: ${newSelection}`);
      setSelected(
        filter.options.find((option) => option.name === newSelection) || null
      );
      // }, 600);

      //setTimeoutId(newTimeoutId);
    }
  };

  const sortedOptions =
    // selected && !isModalOpen
    //   ? [
    //       selected,
    //       ...filter.options.filter((option) => option.name !== selected.name),
    //     ]
    //   :
    filter.options;

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
        {radioFilterOptions(sortedOptions.slice(0, 10))}
      </RadioGroup>
      <Button
        id="apply"
        width="100%"
        marginBottom={sortedOptions.length > 10 ? "s" : "0"}
        marginTop="s"
        isDisabled={!selected}
        onClick={() => {
          setUserClickedOutside(true);
        }}
      >
        Apply
      </Button>
      {sortedOptions.length > 10 && (
        <SelectFilterModal
          filter={filter}
          onOpen={() => {
            console.log(modalSelected);
            setIsModalOpen(true);
          }}
          onClose={(closeFilter: boolean) => {
            setIsModalOpen(false);
            setUserClickedOutside(closeFilter);
          }}
          selected={selected}
          setSelected={setSelected}
          modalSelected={modalSelected}
          setModalSelected={setModalSelected}
        />
      )}
    </>
  );

  const mergedRef = useMergeRefs(filterRef, accordionButtonRef);
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
