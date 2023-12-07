import {
  Box,
  HStack,
  VStack,
  Text,
  Spacer,
} from "@nypl/design-system-react-components";
import React from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { useStickyMargin } from "@/hooks/useStickyMargin";
import Search from "../search/search";
import DCLogo from "../logo/logo";
import { headerBreakpoints } from "@/utils/breakpoints";
import NavMenu from "../navMenu/navMenu";
import MobileNavMenu from "../navMenu/mobileNavMenu";

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
          [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
            display: "block",
          },
          [`@media screen and (min-width: ${headerBreakpoints.lgTablet})`]: {
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
              [`@media screen and (min-width: ${headerBreakpoints.lgTablet})`]:
                {
                  display: "none",
                },
            }}
          >
            <NavMenu />
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
        <Divider
          sx={{
            borderTopWidth: "0px",
            borderBottom: "1px solid var(--ui-border-default, #BDBDBD)",
            margin: "0 -15px",
            width: "auto",
            [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
              display: "none",
            },
          }}
        />
        <VStack
          align="end"
          sx={{
            [`@media screen and (min-width: ${headerBreakpoints.lgTablet})`]: {
              width: "36%",
            },
          }}
        >
          <Box
            sx={{
              display: "none",
              [`@media screen and (min-width: ${headerBreakpoints.lgTablet})`]:
                {
                  display: isScrolled ? "block" : "none",
                },
            }}
          >
            <NavMenu />
          </Box>
        </VStack>
        <HStack justify="space-between">
          <DCLogo isMobile={false} />
          <VStack width={{ sm: "100%", md: "36%" }}>
            <NavMenu isMobile={false} isScrolled={isScrolled} />
            <Box
              width="100%"
              pt="xs"
              sx={{
                display: { sm: isScrolled ? "inline" : "none", md: "inline" },
              }}
            >
              <Search />
            </Box>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
