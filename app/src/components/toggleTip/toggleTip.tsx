import { useState, useRef } from "react";
import { Text, Box, Icon } from "@nypl/design-system-react-components";
import { Button } from "@chakra-ui/react";

export const ToggleTip = ({ text }: { text: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const liveRegionRef = useRef<HTMLSpanElement | null>(null);

  const updateLiveRegion = () => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = "";
      setTimeout(() => {
        liveRegionRef.current!.textContent = text;
      }, 100);
    }
  };

  return (
    <Box
      as="span"
      position="relative"
      display="inline-flex"
      alignItems="center"
    >
      hello
      <Button
        aria-label="More info"
        lineHeight="1"
        background="unset"
        padding="0 !important"
        marginLeft="xs"
        height="unset"
        minWidth="unset"
        _hover={{ background: "unset" }}
        onClick={() => {
          setIsVisible((prev) => !prev);
          updateLiveRegion();
        }}
        onMouseEnter={() => setIsVisible((prev) => !prev)}
        onMouseLeave={() => setIsVisible((prev) => !prev)}
        onFocus={() => {
          setIsVisible((prev) => !prev);
          updateLiveRegion();
        }}
        onBlur={() => setIsVisible(false)}
      >
        <Icon size="medium" name="errorOutline" iconRotation="rotate180" />
      </Button>
      {isVisible && (
        // Tooltip
        <Box
          sx={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            //transform: "translateY(-2px)",
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
            {text}
          </Text>
        </Box>
      )}
      {/* live region hidden */}
      <Box
        as="span"
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
        visibility="hidden"
        display="none"
      />
    </Box>
  );
};
