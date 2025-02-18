import { chakra, ChakraComponent } from "@chakra-ui/react";
import {
  Box,
  Button,
  RadioGroup,
  Radio,
  Flex,
} from "@nypl/design-system-react-components";
import React, {
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
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

const SelectFilterComponent = forwardRef<
  HTMLHeadingElement,
  React.PropsWithChildren<SelectFilterProps>
>((props, headingRef) => {
  const { filter, ...rest } = props;
  const [userClickedOutside, setUserClickedOutside] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // Create a ref to hold a reference to the accordion button, enabling us
  // to programmatically focus it.
  const accordionButtonRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const containerRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  // Tells the accordion to close if open when user clicks or tabs outside of the container
  const handleFocusOutside = (e) => {
    if (e.type === "mousedown") {
      const multiSelect = containerRef.current;
      const clickOutside = multiSelect && !multiSelect.contains(e.target);
      setUserClickedOutside(clickOutside!);
    } else if (e.key === "Tab" || e.key === "Enter") {
      const selectComponent = containerRef.current;
      const tabOutside = selectComponent && !selectComponent.contains(e.target);
      setUserClickedOutside(tabOutside!);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleFocusOutside);
    document.addEventListener("keydown", handleFocusOutside);

    return () => {
      document.removeEventListener("mousedown", handleFocusOutside);
      document.removeEventListener("keydown", handleFocusOutside);
    };
  }, []);

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

  const modalButton = (filter: FilterCategory) => {
    return (
      <Button
        buttonType="link"
        id="modal-button"
        padding="0"
      >{`View all ${filter.name.toLowerCase()}${
        filter.name === "Publishers" ? `` : `s`
      }`}</Button>
    );
  };

  const onChange = (newSelection: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      console.log(`selected: ${newSelection}`);
      setUserClickedOutside(true);
      (
        headingRef as MutableRefObject<HTMLHeadingElement | null>
      )?.current?.focus();
    }, 600);

    setTimeoutId(newTimeoutId);
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
        sx={{ marginBottom: "s" }}
        defaultValue={undefined}
      >
        {radioFilterOptions(filter)}
      </RadioGroup>
      {modalButton(filter)}
    </>
  );

  return (
    <Box {...rest} ref={containerRef}>
      <FilterAccordion
        accordionData={[
          {
            accordionType: "default",
            buttonInteractionRef: accordionButtonRef,
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
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<SelectFilterProps>
> = chakra(SelectFilterComponent, { shouldForwardProp: () => true });

export default SelectFilter;
