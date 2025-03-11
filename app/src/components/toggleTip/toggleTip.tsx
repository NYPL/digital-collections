import { useState, useRef, useEffect } from "react";
import { Text, Box, Icon } from "@nypl/design-system-react-components";
import { Button, Flex } from "@chakra-ui/react";

export const ToggleTip = ({
  text,
  toggleTipContent,
}: {
  text?: string;
  toggleTipContent: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const liveRegionRef = useRef<HTMLSpanElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const addLiveRegion = () => {
    if (liveRegionRef.current) {
      setTimeout(() => {
        liveRegionRef.current!.textContent = toggleTipContent;
      }, 200);
    }
  };

  const removeLiveRegion = () => {
    if (liveRegionRef.current) {
      setTimeout(() => {
        liveRegionRef.current!.textContent = "";
      }, 200);
    }
  };

  const handleClickOutside = (event: MouseEvent | KeyboardEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node) &&
      tooltipRef.current &&
      !tooltipRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
      removeLiveRegion();
    }
  };

  useEffect(() => {
    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isVisible) {
        setIsVisible(false);
        removeLiveRegion();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscPress);
    };
  }, [isVisible]);

  return (
    <Box as="span" display="inline-flex" alignItems="center">
      {text ? text : null}
      <Box position="relative" display="inline-block">
        <Button
          ref={buttonRef}
          aria-label="More info"
          lineHeight="1"
          background="unset"
          padding="0 !important"
          marginBottom="xxs"
          marginLeft="xxs"
          height="unset"
          minWidth="unset"
          _hover={{
            background: "unset",
            outline: "unset",
          }}
          _focus={{ outline: "2px solid var(--nypl-colors-ui-link-primary)" }}
          onClick={() => {
            setIsVisible((prev) => !prev);
            if (!isVisible) {
              addLiveRegion();
            } else {
              removeLiveRegion();
            }
          }}
          onMouseEnter={() => {
            if (!isVisible) {
              setIsVisible(true);
              addLiveRegion();
            }
          }}
        >
          <Icon size="medium" name="errorOutline" iconRotation="rotate180" />
        </Button>

        {/* tooltip */}
        {isVisible && (
          <Box
            ref={tooltipRef}
            sx={{
              position: "absolute",
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%) translateY(-8px)",
              background: "ui.gray.xx-dark",
              borderRadius: "md",
              zIndex: "10",
              padding: "xs",
              minWidth: "180px",
              maxWidth: "240px",
            }}
            _after={{
              content: '""',
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              borderWidth: "5px",
              borderStyle: "solid",
              borderColor:
                "var(--nypl-colors-ui-gray-xx-dark) transparent transparent transparent",
            }}
          >
            <Flex justifyContent="space-between" alignItems="flex-start">
              <Text
                marginBottom="0"
                fontSize="desktop.caption"
                fontWeight="medium"
                color="ui.typography.inverse.body"
              >
                {toggleTipContent}
              </Text>
              <Button
                aria-label="Close tooltip"
                onClick={() => {
                  setIsVisible(false);
                  removeLiveRegion();
                }}
                sx={{
                  background: "transparent",
                  border: "none",
                  color: "ui.typography.inverse.body",
                  padding: "xxs",
                  minWidth: "unset",
                  height: "unset",
                  _hover: { color: "ui.link.primary" },
                }}
              >
                <Icon
                  name="close"
                  size="small"
                  color="ui.typography.inverse.body"
                />
              </Button>
            </Flex>
          </Box>
        )}
      </Box>

      {/* live region */}
      <Box
        as="span"
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
        sx={{
          clip: "rect(1px, 1px, 1px, 1px)",
          height: "auto",
          overflow: "hidden",
          position: "absolute",
          width: "1px",
          wordWrap: "normal",
        }}
      />
    </Box>
  );
};
