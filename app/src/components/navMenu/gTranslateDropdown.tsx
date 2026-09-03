import { useRef } from "react";
import { Box } from "@chakra-ui/react";

export interface GTranslateProps {}

const GTranslateDropdown = () => {
  const gtranslateRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        marginBottom: "xs",
        marginLeft: "m",
        color: "ui.black",
      }}
      ref={gtranslateRef}
      className="gtranslate_wrapper"
    />
  );
};

export default GTranslateDropdown;
