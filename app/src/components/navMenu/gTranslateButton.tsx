import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "@nypl/design-system-react-components";
import GTranslateIcon from "./gTranslateIcon";

const GTranslateButton = () => {
  const gtranslateRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={gtranslateRef}
      className="gtranslate_button_wrapper"
      sx={{
        display: "inline-flex",
        position: "relative",
      }}
    >
      <Button
        aria-label="Open language selector"
        variant="text"
        sx={{
          border: "none",
          color: "ui.black",
          ":hover": {
            color: "ui.black",
            bgColor: "ui.white",
          },
          "not:([disabled]):focus": {
            outline: "none",
          },
          minWidth: "auto",
          padding: "8px 16px 8px 16px",
        }}
      >
        <GTranslateIcon isVisible={true} isMobile={true} />
      </Button>
      <Box
        className="gtranslate_wrapper"
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
        }}
      />
    </Box>
  );
};

export default GTranslateButton;
