import { useEffect, useRef } from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";
import {
  GTRANSLATE_CUSTOM_CSS,
  supportedLanguages,
} from "../../utils/translationUtils";

export interface GTranslateProps {}

const GTranslate = () => {
  const gtranslateRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        marginBottom: "xs",
        marginLeft: "m",
        color: "ui.black",
        fontWeight: "medium", // this isn't working
        outline: "none", // also doesn't work
      }}
      ref={gtranslateRef}
      className="gtranslate_wrapper"
    />
  );
};

export default GTranslate;
