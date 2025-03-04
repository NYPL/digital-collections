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
  const [isVisible, setIsVisible] = useState(false);
  const liveRegionRef = useRef<HTMLSpanElement | null>(null);

  const updateLiveRegion = () => {
    if (liveRegionRef.current) {
      setTimeout(() => {
        liveRegionRef.current!.textContent = toggleTipContent;
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
            setIsVisible(true);
            updateLiveRegion();
          }}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          onFocus={() => {
            setIsVisible(true);
            updateLiveRegion();
          }}
          onBlur={() => setIsVisible(false)}
        >
          <Icon size="medium" name="errorOutline" iconRotation="rotate180" />
        </Button>
        {isVisible && (
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
      {/* Live region hidden */}
      <Box
        as="span"
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
        visibility="hidden"
        //set offscreen
      />
    </Box>
  );
};
