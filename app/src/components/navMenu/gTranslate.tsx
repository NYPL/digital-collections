import { useEffect, useRef } from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";
import {
  GTRANSLATE_CUSTOM_CSS,
  supportedLanguages,
} from "../../utils/translationUtils";

export interface GTranslateProps {}

const GTranslate = () => {
  const gtranslateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "en",
      languages: supportedLanguages,
      native_language_names: true,
      wrapper_selector: ".gtranslate_wrapper",
      custom_css: GTRANSLATE_CUSTOM_CSS,
    };

    const scriptUrl = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptUrl}"]`
    );

    // If GTranslate already initialized successfully, we're done.
    // if (document.querySelector(".gt_selector")) {
    //     console.log("GTranslate already initialized.");
    //     return;
    // }

    // Script was added but the widget didn't initialize — likely because
    // .gtranslate_wrapper wasn't in the DOM yet when the script ran. Remove and
    // re-add/run the script now that the wrapper exists.
    if (existingScript) {
      console.log("Removing existing GTranslate script.");
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;

    document.body.appendChild(script);
  }, []);

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
