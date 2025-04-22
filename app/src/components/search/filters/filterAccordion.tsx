import { headerBreakpoints } from "@/src/utils/breakpoints";
import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  ChakraComponent,
} from "@chakra-ui/react";
import { Icon, AccordionDataProps } from "@nypl/design-system-react-components";
import React, { forwardRef, useEffect, useRef, useState } from "react";

export interface FilterAccordionProps {
  /** Array of data to display, and an optional accordionType */
  accordionData: AccordionDataProps[];
  /** Global aria-label value that is applied to all accordions if individual
   * ariaLabel props are not included with accordionData entries. */
  ariaLabel?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Whether the accordion is open by default only on its initial rendering */
  isDefaultOpen?: boolean;
  /** For internal use only. This value toggles the accordion closed if the user clicks
   * outside the component. */
  userClickedOutside?: boolean;
  /** For updating the state of the current filter selection when accordion is opened or closed. */
  onChange: () => void;
}

/**
 * Get the arrow icon rotated up or down depending on whether the accordion
 * is open or closed.
 */
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

/**
 * Returns AccordionItems for every accordion object in the data
 * array. This creates the AccordionButton and AccordionPanel combination
 * expected by the Chakra Accordion component.
 *
 */
const getElementsFromData = (
  data: AccordionDataProps[] = [],
  ariaLabel: string,
  id: string,
  buttonRefs: React.MutableRefObject<(HTMLElement | null)[]>
) => {
  return data.map((content, index) => {
    const panel = (
      <AccordionPanel
        id={`${id}-panel-${index}`}
        key={index}
        data-index={index}
        overflow="auto"
        sx={{
          bg: "ui.white",
          [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]: {
            position: "absolute",
            zIndex: "1",
            width: "100%",
          },
        }}
      >
        {content.panel}
      </AccordionPanel>
    );
    const finalAriaLabel = content.ariaLabel ? content.ariaLabel : ariaLabel;
    if (content.ariaLabel && ariaLabel) {
      console.warn(
        "NYPL Reservoir Accordion: An ariaLabel value has been passed for the " +
          "overall component and as part of the accordionData prop. Both can not " +
          "be used, so the value in the accordionData prop will be used."
      );
    }

    return (
      <AccordionItem id={id} key={index} position="relative">
        {({ isExpanded }) => {
          return (
            <>
              <AccordionButton
                aria-label={finalAriaLabel}
                id={id}
                data-index={index}
                borderColor={"ui.gray.medium"}
                padding="xs s"
                ref={(node: HTMLElement | null) => {
                  buttonRefs.current[index] = node;
                }}
                sx={{
                  fontWeight: "light",
                  fontSize: "desktop.body.body2",
                  bg: "ui.white",
                  _expanded: { bg: "ui.bg.active" },
                  _hover: { borderColor: "ui.gray.dark" },
                }}
              >
                <Box as="span" flex="1" textAlign="start">
                  {content.label}
                </Box>
                {getIcon(isExpanded)}
              </AccordionButton>
              {isExpanded && panel}
            </>
          );
        }}
      </AccordionItem>
    );
  });
};

/**
 * Accordion component that shows content on toggle. Can be used to display
 * multiple accordion items together.
 */
const FilterAccordionComponent = forwardRef<
  HTMLDivElement,
  FilterAccordionProps
>((props, ref?) => {
  const {
    accordionData,
    ariaLabel,
    id,
    onChange: parentOnChange,
    isDefaultOpen = false,
    userClickedOutside,
    ...rest
  } = props;

  // Pass `0` to open the first accordion in the 0-index based array.
  const [expandedPanels, setExpandedPanels] = useState<number[]>(
    isDefaultOpen ? [0] : []
  );

  // Mutable ref array to store the AccordionButton DOM nodes.
  const buttonRefs = useRef<(HTMLElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      // Try to find the closest element with a data-index attribute.
      const targetElement = e.target as HTMLElement;
      const panelElement = targetElement.closest("[data-index]");
      if (!panelElement) return;
      const indexAttr = panelElement.getAttribute("data-index");
      if (!indexAttr) return;
      const idx = Number(indexAttr);
      if (isNaN(idx)) return;

      // Collapse this panel.
      setExpandedPanels((prev) => prev.filter((i) => i !== idx));

      // Return focus to the corresponding button.
      const button = buttonRefs.current[idx];
      if (button) {
        setTimeout(() => {
          button.focus();
        }, 0);
      }
    }
  };

  useEffect(() => {
    if (userClickedOutside) {
      setExpandedPanels([]);
    }
  }, [userClickedOutside]);

  return (
    <ChakraAccordion
      allowMultiple
      index={expandedPanels}
      onChange={(expandedIdxs: number[]) => {
        setExpandedPanels(expandedIdxs);
        parentOnChange();
      }}
      onKeyDownCapture={handleKeyDown}
      id={id}
      ref={ref}
      {...rest}
    >
      {getElementsFromData(
        accordionData,
        ariaLabel || "",
        id || "",
        buttonRefs
      )}
    </ChakraAccordion>
  );
});

FilterAccordionComponent.displayName = "FilterAccordionComponent";

const FilterAccordion: ChakraComponent<
  React.ForwardRefExoticComponent<
    FilterAccordionProps & React.RefAttributes<HTMLDivElement>
  >,
  FilterAccordionProps
> = chakra(FilterAccordionComponent);

export default FilterAccordion;
