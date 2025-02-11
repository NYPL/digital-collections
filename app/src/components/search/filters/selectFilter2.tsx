import {
  chakra,
  ChakraComponent,
  filter,
  Flex,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import {
  CheckboxGroup,
  Box,
  Accordion,
  RadioGroup,
  Radio,
} from "@nypl/design-system-react-components";
import React, {
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { FilterCategory, FilterOption } from "./selectFilter";

export const multiSelectWidthsArray = ["fitContent", "full"] as const;
export type MultiSelectWidths = (typeof multiSelectWidthsArray)[number];
export const multiSelectListOverflowArray = ["scroll", "expand"] as const;
export type MultiSelectListOverflowTypes =
  (typeof multiSelectListOverflowArray)[number];

export interface SelectFilter2Props {
  filter;
  selectedItem?;
}

/**
 * The MultiSelect component is a customizable form input that supports multiple
 * configurations, including search functionality, checkbox options, and
 * hierarchical structure, with a parent checkbox toggling all children and
 * dynamic styling through Chakra UI.
 */
const SelectFilter2Component = forwardRef<
  HTMLHeadingElement,
  React.PropsWithChildren<SelectFilter2Props>
>((props, headingRef) => {
  const { filter, selectedItem = "", ...rest } = props;

  const [userClickedOutside, setUserClickedOutside] = useState<boolean>(false);

  // Create a ref to hold a reference to the accordian button, enabling us
  // to programmatically focus it.
  const accordionButtonRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const containerRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  // Tells `Accordion` to close if open when user clicks outside of the container
  const handleClickOutside = (e) => {
    if (e.type === "mousedown") {
      const multiSelect = containerRef.current;
      if (multiSelect && !multiSelect.contains(e.target)) {
        setUserClickedOutside(true);
      } else {
        setUserClickedOutside(false);
      }
    }
  };

  // Tells `Accordion` to close if open when user tabs outside of the container
  const handleTabOutside = (e) => {
    if (e.key === "Tab") {
      const multiSelect = containerRef.current;

      // setTimeout delays the check until after the focus change has occurred
      setTimeout(() => {
        if (multiSelect && !multiSelect.contains(document.activeElement)) {
          setUserClickedOutside(true);
        } else {
          setUserClickedOutside(false);
        }
      }, 0);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleTabOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleTabOutside);
    };
  }, []);

  //   const getItemLabelText = (item): string | JSX.Element => {
  //     return item.itemCount ? (
  //       <Flex gap="s" justify="space-between">
  //         <Box>{item.name}</Box>
  //         <Box>{item.itemCount}</Box>
  //       </Flex>
  //     ) : (
  //       item.name
  //     );
  //   };

  const radioLabel = (option: FilterOption) => {
    return (
      <Flex justifyContent="space-between">
        <span>{option.name}</span>
        <span>{option.count}</span>
      </Flex>
    );
  };

  //   const getMultiSelectCheckboxItem = (item): JSX.Element[] => {
  //     return (
  //       <Checkbox
  //         id={item.id}
  //         labelText={getItemLabelText(item)}
  //         name={item.name}
  //         isDisabled={item.isDisabled}
  //         onChange={onChange}
  //         key={item.id}
  //       />
  //     );
  //   };

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

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const onChange = (newSelection: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      //setSelected(newSelection);
      console.log(`selected: ${newSelection}`);
      setUserClickedOutside(true);
      (
        headingRef as MutableRefObject<HTMLHeadingElement | null>
      )?.current?.focus();
    }, 600);

    setTimeoutId(newTimeoutId);
  };

  const accordionPanel = (
    <Box>
      <>
        <RadioGroup
          isFullWidth
          id={`${filter.name}-options`}
          labelText={`${filter.name} filter options`}
          showLabel={false}
          name={filter.name}
          onChange={onChange}
          sx={{ marginBottom: "s" }}
          defaultValue={selectedItem ?? undefined}
        >
          {radioFilterOptions(filter)}
        </RadioGroup>
      </>
    </Box>
  );

  return (
    <Box
      {...rest}
      ref={containerRef}
      onClick={() => setUserClickedOutside(false)}
    >
      <Accordion
        accordionData={[
          {
            accordionType: "default",
            buttonInteractionRef: accordionButtonRef,
            label: filter.name,
            panel: accordionPanel,
          },
        ]}
        id={`multi-select-accordion`}
        isAlwaysRendered
        userClickedOutside={userClickedOutside}
      />
    </Box>
  );
});

SelectFilter2Component.displayName = "SelectFilter2Component";

export const SelectFilter2: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<SelectFilter2Props> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<SelectFilter2Props>
> = chakra(SelectFilter2Component, { shouldForwardProp: () => true });

export default SelectFilter2;
