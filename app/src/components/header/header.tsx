import React, { useLayoutEffect, useRef, useState } from "react";
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
import useScrollDirection from "../../hooks/useScrollDirection";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(150);
  const [isFocused, setIsFocused] = useState(false);
  const isScrollingUp = useScrollDirection();

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const newHeight = headerRef.current.offsetHeight;
        setHeaderHeight((prev) => (prev !== newHeight ? newHeight : prev));
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [isScrollingUp]);

  return (
    <>
      {/* Placeholder to avoid layout shift */}
      {isFocused && <Box height={`${headerHeight}px`} />}
      <Box
        ref={headerRef}
        data-sticky-header
        data-sticky-offset="10"
        position={isFocused ? "fixed" : "sticky"}
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
        onFocusCapture={() => setIsFocused(true)}
        onBlurCapture={() => setIsFocused(false)}
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
            <Box
              sx={{
                display: "none",
                [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]:
                  {
                    display: isScrollingUp ? "block" : "none",
                  },
              }}
            >
              <NavMenu render={1} />
            </Box>
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
