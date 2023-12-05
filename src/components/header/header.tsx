import {
  Box,
  HStack,
  VStack,
  Text,
} from "@nypl/design-system-react-components";
import React from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { useStickyMargin } from "@/hooks/useStickyMargin";
import Search from "../search/search";
import DCLogo from "../logo/logo";
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
      pt="xs"
    >
      <Box
        maxWidth="1280px"
        mx="auto"
        padding="0 16px"
        sx={{
          "@media screen and (min-width: 1024px)": {
            display: "block",
          },
          "@media screen and (min-width: 1280px)": {
            display: "flex",
            justifyContent: "space-between",
          },
        }}
      >
        <HStack
          justify="space-between"
          sx={{
            "@media screen and (max-width: 768px)": {
              display: "none",
            },
          }}
        >
          <DCLogo isMobile={false} />
          <Box
            sx={{
              display: "none",
              "@media screen and (max-width: 1280px)": {
                display: isScrolled ? "block" : "none",
              },
            }}
          >
            <NavMenu />
          </Box>
        </HStack>
        <HStack
          sx={{
            "@media screen and (min-width: 768px)": {
              display: "none",
            },
            justifyContent: "space-between",
          }}
        >
          <DCLogo isMobile={true} />
          <MobileNavMenu />
        </HStack>
        <VStack
          align="end"
          sx={{
            "@media screen and (min-width: 1280px)": {
              width: "36%",
            },
          }}
        >
          <Box
            sx={{
              display: "none",
              "@media screen and (min-width: 1280px)": {
                display: isScrolled ? "block" : "none",
              },
            }}
          >
            <NavMenu />
          </Box>
          <Search />
        </VStack>
      </Box>
    </Box>
  );
};

export default Header;
