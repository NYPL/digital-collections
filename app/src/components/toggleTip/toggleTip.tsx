import { Button } from "@chakra-ui/react";
import { Text, Box, Icon } from "@nypl/design-system-react-components";
import { useState, useRef, useEffect } from "react";

export const ToggleTip = ({
  labelText,
  toggleTipContent,
}: {
  labelText?: string;
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
      if ((event.key === "Escape" || event.key === "Tab") && isVisible) {
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
    <Box
      as="span"
      display="inline-flex"
      alignItems="center"
      data-testid="toggleTip-wrapper"
    >
      <Box
        position="relative"
        display="inline-block"
        onMouseLeave={() => {
          if (isVisible) {
            setIsVisible(false);
            removeLiveRegion();
          }
        }}
      >
        <Button
          ref={buttonRef}
          aria-label={`More info about ${labelText}`}
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
              paddingTop: "xs",
              paddingBottom: "xs",
              paddingLeft: "s",
              paddingRight: "s",
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
            <Text
              marginBottom="0"
              fontSize="desktop.caption"
              fontWeight="medium"
              color="ui.typography.inverse.heading"
            >
              {toggleTipContent}
            </Text>
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
