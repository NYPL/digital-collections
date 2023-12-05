import {
  Box,
  HStack,
  VStack,
  HorizontalRule,
} from "@nypl/design-system-react-components";
import React from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { useStickyMargin } from "@/hooks/useStickyMargin";
import Search from "../search/search";
import DCLogo from "../logo/logo";
import NavMenu from "../navMenu/navMenu";
import MobileNavMenu from "../navMenu/mobileNavMenu";
import { headerBreakpoints } from "@/utils/breakpoints";

const Header = () => {
  useStickyMargin();
  const isScrolled = useScrolled("header", false);
  return (
    <Box
      data-sticky-header
      data-sticky-offset="10"
      position="sticky"
      id="header"
      top={0}
      zIndex={999}
      bgColor="ui.white"
      pt="s"
    >
      <Box
        maxWidth="1280px"
        mx="auto"
        padding="0 16px"
        sx={{
          [`@media screen and (min-width: ${headerBreakpoints.lgTablet})`]: {
            display: "block",
          },
          [`@media screen and (min-width: ${headerBreakpoints.desktop})`]: {
            display: "flex",
            justifyContent: "space-between",
          },
        }}
      >
        <HStack
          justify="space-between"
          sx={{
            display: "none",
            [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
              display: "flex",
            },
          }}
        >
          <DCLogo isMobile={false} />
          <Box
            sx={{
              display: "none",
              [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]:
                {
                  display: isScrolled ? "block" : "none",
                },
              [`@media screen and (min-width: ${headerBreakpoints.desktop})`]: {
                display: "none",
              },
            }}
          >
            <NavMenu render={0} />
          </Box>
        </HStack>
        <HStack
          sx={{
            [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
              display: "none",
            },
            justifyContent: "space-between",
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
            [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
              display: "none",
            },
          }}
        />
        <VStack
          align="end"
          sx={{
            [`@media screen and (min-width: ${headerBreakpoints.desktop})`]: {
              width: "36%",
            },
          }}
        >
          <Box
            sx={{
              display: "none",
              [`@media screen and (min-width: ${headerBreakpoints.desktop})`]: {
                display: isScrolled ? "block" : "none",
              },
            }}
          >
            <NavMenu render={1} />
          </Box>
          <Search />
        </VStack>
      </Box>
    </Box>
  );
};

export default Header;
