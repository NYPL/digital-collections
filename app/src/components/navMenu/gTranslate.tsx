import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import {
  GTRANSLATE_CDN_URL,
  GTRANSLATE_CUSTOM_CSS,
  supportedLanguages,
} from "../../utils/translationUtils";

export interface GTranslateProps {}

let gtranslateInitQueue: Promise<void> = Promise.resolve();
let gtranslateInstanceCounter = 0;

const enqueueGTranslateInit = (task: () => Promise<void>) => {
  gtranslateInitQueue = gtranslateInitQueue.then(task).catch((error) => {
    console.error("GTranslate initialization failed:", error);
  });

  return gtranslateInitQueue;
};

const GTranslate = () => {
  const gtranslateRef = useRef<HTMLDivElement>(null);
  const wrapperIdRef = useRef("");

  if (!wrapperIdRef.current) {
    gtranslateInstanceCounter += 1;
    wrapperIdRef.current = `gtranslate-wrapper-${gtranslateInstanceCounter}`;
  }

  useEffect(() => {
    const wrapper = gtranslateRef.current;

    if (!wrapper) {
      return;
    }

    let isUnmounted = false;
    const wrapperSelector = `#${wrapperIdRef.current}`;
    wrapper.id = wrapperIdRef.current;

    enqueueGTranslateInit(async () => {
      if (isUnmounted || wrapper.querySelector(".gt_selector")) {
        return;
      }

      window.gtranslateSettings = {
        default_language: "en",
        languages: supportedLanguages,
        native_language_names: true,
        wrapper_selector: wrapperSelector,
        custom_css: GTRANSLATE_CUSTOM_CSS,
      };

      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[data-gtranslate-widget="true"]'
      );
      if (existingScript) {
        existingScript.remove();
      }

      await new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = GTRANSLATE_CDN_URL;
        script.async = true;
        script.dataset.gtranslateWidget = "true";
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error("Failed to load GTranslate script."));

        document.body.appendChild(script);
      });
    });

    return () => {
      isUnmounted = true;
    };
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
