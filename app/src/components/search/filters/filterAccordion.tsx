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
  accordionItem: AccordionDataProps;
  ariaLabel?: string;
  id?: string;
  isDefaultOpen?: boolean;
  userClickedOutside?: boolean;
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

const FilterAccordionComponent = forwardRef<
  HTMLDivElement,
  FilterAccordionProps
>((props, ref?) => {
  const {
    accordionItem,
    ariaLabel,
    id,
    onChange: parentOnChange,
    isDefaultOpen = false,
    userClickedOutside,
    ...rest
  } = props;

  const [isExpanded, setIsExpanded] = useState(isDefaultOpen);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && isExpanded) {
      setIsExpanded(false);
      setTimeout(() => {
        buttonRef.current?.focus();
      }, 0);
    }
  };

  useEffect(() => {
    if (userClickedOutside) {
      setIsExpanded(false);
    }
  }, [userClickedOutside]);

  const finalAriaLabel = accordionItem.ariaLabel || ariaLabel || "";

  return (
    <ChakraAccordion
      allowToggle
      index={isExpanded ? 0 : -1}
      onChange={(expandedIdx: number | number[]) => {
        const open = Array.isArray(expandedIdx)
          ? expandedIdx.length > 0
          : expandedIdx === 0;
        setIsExpanded(open);
        parentOnChange();
      }}
      onKeyDownCapture={handleKeyDown}
      id={id}
      ref={ref}
      {...rest}
    >
      <AccordionItem id={id} position="relative">
        {({ isExpanded }) => (
          <>
            <AccordionButton
              aria-label={finalAriaLabel}
              id={id}
              ref={buttonRef}
              borderColor="ui.gray.medium"
              padding="xs s"
              sx={{
                fontWeight: "light",
                fontSize: "desktop.body.body2",
                bg: "ui.white",
                _expanded: { bg: "ui.bg.active" },
                _hover: { borderColor: "ui.gray.dark" },
              }}
            >
              <Box as="span" flex="1" textAlign="start">
                {accordionItem.label}
              </Box>
              {getIcon(isExpanded)}
            </AccordionButton>
            {isExpanded && (
              <AccordionPanel
                id={`${id}-panel`}
                overflow="auto"
                sx={{
                  bg: "ui.white",
                  [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]:
                    {
                      position: "absolute",
                      zIndex: "1",
                      width: "100%",
                    },
                }}
              >
                {accordionItem.panel}
              </AccordionPanel>
            )}
          </>
        )}
      </AccordionItem>
    </ChakraAccordion>
  );
});

FilterAccordionComponent.displayName = "FilterAccordion";

const FilterAccordion: ChakraComponent<
  React.ForwardRefExoticComponent<
    FilterAccordionProps & React.RefAttributes<HTMLDivElement>
  >,
  FilterAccordionProps
> = chakra(FilterAccordionComponent);

export default FilterAccordion;
