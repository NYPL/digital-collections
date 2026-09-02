import React, { useEffect } from "react";
import {
  Box,
  HStack,
  VStack,
  HorizontalRule,
} from "@nypl/design-system-react-components";
import Search from "../search/search";
import DCLogo from "../logo/logo";
import NavMenu from "../navMenu/navMenu";
import MobileNavMenu from "../navMenu/mobileNavMenu";
import { headerBreakpoints } from "../../utils/breakpoints";
import useHeaderState from "@/src/hooks/useHeaderState";
import GTranslate from "../navMenu/gTranslate";
import {
  GTRANSLATE_CUSTOM_CSS,
  supportedLanguages,
} from "../../utils/translationUtils";

const Header = () => {
  const { headerRef, headerHeight, isScrollingUp, isFocused, setIsFocused } =
    useHeaderState();

  useEffect(() => {
    const handleGTranslateChange = (event: Event) => {
      const target = event.target;
      if (
        !(target instanceof HTMLSelectElement) ||
        !target.classList.contains("gt_selector")
      ) {
        return;
      }

      const selectedOption = target.selectedOptions?.[0];
      console.log("GTranslate change:", {
        value: target.value,
        label: selectedOption?.text,
      });

      const newLanguage = target.value.split("|").pop();
      if (!newLanguage) {
        return;
      }

      document
        .querySelectorAll<HTMLSelectElement>(".gt_selector")
        .forEach((select) => {
          select.value = `en|${newLanguage}`;
        });
    };

    document.addEventListener("change", handleGTranslateChange, true);

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
    if (document.querySelector(".gt_selector")) {
      console.log("GTranslate already initialized.");
      return;
    }

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

    return () => {
      document.removeEventListener("change", handleGTranslateChange, true);
    };
  }, []);

  return (
    <>
      {/* Placeholder to avoid layout shift when fixed */}
      {isFocused && <Box height={`${headerHeight}px`} />}
      <Box
        ref={headerRef}
        data-sticky-header
        data-sticky-offset="10"
        position={isFocused ? "fixed" : "sticky"}
        onFocusCapture={() => setIsFocused(true)}
        onBlurCapture={() => setIsFocused(false)}
        top="0px"
        left="0"
        right="0"
        zIndex={99999}
        bgColor="ui.white"
        sx={{
          [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]: {
            pt: "xs",
          },
          alignItems: "center",
        }}
      >
        <Box
          maxWidth="1280px"
          mx="auto"
          padding="0 16px !important"
          sx={{
            [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]:
              {
                display: "flex",
                justifyContent: "space-between",
              },
          }}
        >
          <HStack
            justify="space-between"
            sx={{
              display: "none",
              [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
                {
                  display: "flex",
                  pt: "2px",
                },
              pb: "xs",
            }}
          >
            <DCLogo isMobile={false} />
            <Box
              sx={{
                display: "block",
                [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]:
                  {
                    display: "none",
                  },
              }}
            >
              <NavMenu render={0} />
              <GTranslate key="gtranslate-tablet" />
            </Box>
          </HStack>
          <HStack
            sx={{
              display: isScrollingUp ? "flex" : "none",
              [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
                {
                  display: "none",
                },
              justifyContent: "space-between",
              paddingTop: "xs",
              paddingBottom: "xs",
            }}
          >
            <DCLogo isMobile={true} />
            <MobileNavMenu />
            <GTranslate key="gtranslate-mobile" />
          </HStack>
          <HorizontalRule
            height="1px"
            width="auto"
            sx={{
              borderColor: "var(--nypl-colors-ui-border-default)",
              margin: "0 -15px",
              [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
                {
                  display: "none",
                },
            }}
          />
          <VStack
            align="end"
            sx={{
              [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]:
                {
                  width: "36%",
                },
              paddingTop: "xs",
            }}
          >
            <HStack
              sx={{
                display: "none",
                [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]:
                  {
                    display: isScrollingUp ? "flex" : "none",
                  },
              }}
            >
              <NavMenu render={1} />
              <GTranslate key="gtranslate-desktop" />
            </HStack>
            <Search />
          </VStack>
        </Box>
        <HorizontalRule
          height="1px"
          width="auto"
          sx={{
            borderColor: "var(--nypl-colors-ui-border-default)",
            margin: "0px",
            display: "block",
          }}
        />
      </Box>
    </>
  );
};

export default Header;
