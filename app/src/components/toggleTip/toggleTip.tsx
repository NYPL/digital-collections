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
      <Button
        aria-label="More info"
        lineHeight="1"
        background="unset"
        borderRadius="full"
        padding="0"
        _hover={{ background: "unset" }}
        _focus={{ outline: "2px solid blue" }}
        onClick={updateLiveRegion}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => {
          setIsVisible(true);
          updateLiveRegion();
        }}
        onBlur={() => setIsVisible(false)}
      >
        {" "}
        <Icon
          padding="0"
          margin="0"
          size="medium"
          name="errorOutline"
          iconRotation="rotate180"
        />
      </Button>
      {isVisible && (
        <Box
          sx={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%) translateY(-2px)",
            background: "ui.gray.xx-dark",
            borderRadius: "md",
            zIndex: "10",
            padding: "xs",
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
      <Box
        as="span"
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
        visibility="hidden"
      />
    </Box>
  );
};
