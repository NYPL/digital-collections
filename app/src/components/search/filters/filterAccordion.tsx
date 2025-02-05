import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  useColorMode,
} from "@chakra-ui/react";
import { Icon, IconColors } from "@nypl/design-system-react-components";
import React, { forwardRef, useEffect, useState } from "react";

export interface AccordionDataProps {
  accordionType?: "default";
  ariaLabel?: string;
  buttonInteractionRef?: React.RefObject<HTMLButtonElement>;
  label: string | JSX.Element;
  panel: string | React.ReactNode;
}

export interface AccordionProps {
  accordionData: AccordionDataProps[];
  ariaLabel?: string;
  id: string;
  isDefaultOpen?: boolean;
  isAlwaysRendered?: boolean;
  panelMaxHeight?: string;
  userClickedOutside?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}

/**
 * Get the arrow up or down icon depending on whether the accordion is open or closed.
 */
const getIcon = (
  isExpanded = false,
  index: number,
  id: string,
  iconColor: IconColors
) => {
  const iconRotation = isExpanded ? "rotate180" : "rotate0";
  return (
    <Icon
      id={`accordion-${id}-icon-${index}`}
      name="arrow"
      size="small"
      color={iconColor}
      iconRotation={iconRotation}
    />
  );
};

/**
 * Accordion component that shows content on toggle.
 */
const AccordionComponent = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      accordionData,
      ariaLabel,
      id,
      isOpen,
      onToggle,
      isAlwaysRendered = false,
      panelMaxHeight,
      userClickedOutside,
      ...rest
    },
    ref
  ) => {
    const isDarkMode = useColorMode().colorMode === "dark";

    useEffect(() => {
      if (userClickedOutside) onToggle?.(null);
    }, [userClickedOutside, onToggle]);

    return (
      <ChakraAccordion
        allowToggle
        index={isOpen ? 0 : -1} // Controls open/close state
        onChange={() => onToggle?.()} // Ensure `onToggle` is correctly called
        id={id}
        ref={ref}
        sx={{
          bg: "ui.white",
          button: {
            fontWeight: "400",
            bg: "ui.white",
            _expanded: {
              bg: "ui.bg.active",
            },
          },
        }}
        {...rest}
      >
        {accordionData.map((content, index) => (
          <AccordionItem key={index}>
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  id={`${id}-button-${index}`}
                  onClick={() => onToggle?.(content.label)} // Pass label for identification
                >
                  <Box as="span" flex="1" textAlign="start">
                    {content.label}
                  </Box>
                  {getIcon(
                    isExpanded,
                    index,
                    id,
                    isDarkMode ? "dark.ui.typography.heading" : "ui.black"
                  )}
                </AccordionButton>
                {(isAlwaysRendered || isExpanded) && (
                  <AccordionPanel
                    id={`${id}-panel-${index}`}
                    maxHeight={panelMaxHeight}
                    overflow="auto"
                  >
                    {content.panel}
                  </AccordionPanel>
                )}
              </>
            )}
          </AccordionItem>
        ))}
      </ChakraAccordion>
    );
  }
);

AccordionComponent.displayName = "AccordionComponent";

export const FilterAccordion = chakra(AccordionComponent);

export default FilterAccordion;
