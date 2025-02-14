import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  ChakraComponent,
} from "@chakra-ui/react";
import { Icon } from "@nypl/design-system-react-components";
import React, { forwardRef, useEffect, useState } from "react";

export type AccordionTypes = "default" | "warning" | "error";

export interface AccordionDataProps {
  accordionType?: AccordionTypes;
  ariaLabel: string;
  /** Ref to the DOM element of the AccordionButton. */
  buttonInteractionRef?: any;
  label: string | JSX.Element;
  panel: string | React.ReactNode;
}

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
 * Returns `AccordionItems` for every accordion object in the data
 * array. This automatically creates the `AccordionButton` and `AccordionPanel`
 * combination that is required for the Chakra `Accordion` component.
 */
const getElementsFromData = (
  data: AccordionDataProps[] = [],
  ariaLabel: string,
  id: string
) => {
  return data.map((content, index) => {
    const panel = (
      <AccordionPanel
        id={`${id}-panel-${index}`}
        key={index}
        overflow="auto"
        sx={{
          bg: "ui.white",
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
      <AccordionItem id={`${id}-item-${index}`} key={index}>
        {/* Get the current state to render the correct icon. */}
        {({ isExpanded }) => {
          return (
            <>
              <AccordionButton
                aria-label={finalAriaLabel}
                id={`${id}-button-${index}`}
                borderColor={"ui.gray.medium"}
                padding="xs s"
                ref={content.buttonInteractionRef}
                sx={{
                  fontWeight: "light",
                  fontSize: "desktop.body.body2",
                  bg: "ui.white",
                  _expanded: { bg: "ui.bg.active" },
                  _hover: {
                    borderColor: "ui.gray.dark",
                  },
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
    isDefaultOpen = false,
    userClickedOutside,
    ...rest
  } = props;

  // Pass `0` to open the first accordion in the 0-index based array.
  const [expandedPanels, setExpandedPanels] = useState<number[]>(
    isDefaultOpen ? [0] : []
  );

  // If the accordionData doesn't already contain refs for the panel
  // buttons, add them now.
  const updatedAccordionData = accordionData.map((item) => ({
    ...item,
    buttonInteractionRef: item.buttonInteractionRef || React.createRef(),
  }));

  const handleKeyDown = (e) => {
    // If the 'esc' key is pressed, find the panel the
    // user is focused on or within, and remove it as
    // an expanded panel. (Nothing will happen if the
    // panel is already collapsed.)
    if (e.code === "Escape") {
      let focusedPanelIndex;
      if (e.target.dataset.index) {
        // If the user is focused on an accordion button...
        focusedPanelIndex = Number(e.target.dataset.index);
      } else {
        // If the user is focused on an element within the panel...
        focusedPanelIndex = Number(
          e.target.closest("[role='region']").id.split("-").pop()
        );
      }

      setExpandedPanels(expandedPanels.filter((i) => i !== focusedPanelIndex));

      // If something *inside* the accordion was in focus and 'esc' was clicked,
      // return focus to the accordion panel
      if (updatedAccordionData[focusedPanelIndex].buttonInteractionRef) {
        updatedAccordionData[
          focusedPanelIndex
        ].buttonInteractionRef.current.focus();
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
      onChange={(expandedIdxs: number[]) => setExpandedPanels(expandedIdxs)}
      onKeyDown={handleKeyDown}
      id={id}
      ref={ref}
      {...rest}
    >
      {getElementsFromData(updatedAccordionData, ariaLabel || "", id || "")}
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
