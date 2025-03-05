import { useState, useRef } from "react";
import { Text, Box, Icon } from "@nypl/design-system-react-components";
import { Button } from "@chakra-ui/react";

export const ToggleTip = ({
  text,
  toggleTipContent,
}: {
  text: string;
  toggleTipContent: string;
}) => {
  const [isClickVisible, setIsClickVisible] = useState(false);
  const [isHoverFocusVisible, setIsHoverFocusVisible] = useState(false);
  const liveRegionRef = useRef<HTMLSpanElement | null>(null);

  const addLiveRegion = () => {
    if (liveRegionRef.current) {
      setTimeout(() => {
        liveRegionRef.current!.textContent = toggleTipContent;
      }, 100);
    }
  };

  const removeLiveRegion = () => {
    if (liveRegionRef.current) {
      setTimeout(() => {
        liveRegionRef.current!.textContent = "";
      }, 100);
    }
  };

  return (
    <Box as="span" display="inline-flex" alignItems="center">
      {text}
      <Box position="relative" display="inline-block">
        <Button
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
            outline: "2px solid var(--nypl-colors-ui-link-primary)",
          }}
          onClick={() => {
            setIsClickVisible((prev) => !prev);
            setIsHoverFocusVisible(false);
            if (!isClickVisible) {
              addLiveRegion();
            } else {
              removeLiveRegion();
            }
          }}
          onMouseEnter={() => {
            if (!isClickVisible) {
              setIsHoverFocusVisible(true);
              addLiveRegion();
            }
          }}
          onMouseLeave={() => {
            if (!isClickVisible) {
              setIsHoverFocusVisible(false);
              removeLiveRegion();
            }
          }}
          onFocus={() => {
            if (!isClickVisible) {
              setIsHoverFocusVisible(true);
              addLiveRegion();
            }
          }}
          onBlur={() => {
            if (!isClickVisible) {
              setIsHoverFocusVisible(false);
              removeLiveRegion();
            }
          }}
        >
          <Icon size="medium" name="errorOutline" iconRotation="rotate180" />
        </Button>

        {/* visible if clicked OR hovered/focused */}
        {(isClickVisible || isHoverFocusVisible) && (
          <Box
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
            <Text
              marginBottom="0"
              fontSize="desktop.caption"
              fontWeight="medium"
              color="ui.typography.inverse.body"
            >
              {toggleTipContent}
            </Text>
          </Box>
        )}
      </Box>

      {/* hidden, populated if clicked/hovered/focused */}
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
