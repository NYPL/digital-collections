import {
  Box,
  HStack,
  VStack,
  HorizontalRule,
} from "@nypl/design-system-react-components";
import React from "react";
import { useScrolled } from "../../hooks/useScrolled";
import { useStickyMargin } from "../../hooks/useStickyMargin";
import Search from "../search/search";
import DCLogo from "../logo/logo";
import NavMenu from "../navMenu/navMenu";
import MobileNavMenu from "../navMenu/mobileNavMenu";
import { headerBreakpoints } from "../../utils/breakpoints";
import useScrollDirection from "../../hooks/useScrollDirection";

const Header = () => {
  useStickyMargin();
  const isScrolled = useScrolled("header");
  const isScrollingUp = useScrollDirection();

  return (
    <Box
      data-sticky-header
      data-sticky-offset="10"
      position="sticky"
      id="header"
      top={0}
      zIndex={999}
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
          [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]: {
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
              display: "none",
              [`@media screen and (min-width: ${headerBreakpoints.smTablet}px)`]:
                {
                  display: isScrolled ? "block" : "none",
                },
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
                  display: isScrolled ? "block" : "none",
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
  );
};

export default Header;