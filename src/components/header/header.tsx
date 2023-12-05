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
import { headerBreakpoints } from "@/utils/breakpoints";

const Header = () => {
  useStickyMargin();
  const isScrolled = useScrolled("header");
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
          [`@media screen and (min-width: ${headerBreakpoints.lgTablet})`]: {
            display: "block",
          },
          [`@media screen and (min-width: ${headerBreakpoints.desktop})`]: {
            display: "flex",
            justifyContent: "space-between",
          },
          alignItems: "center",
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
            <Text>I am desktop nav links</Text>
          </Box>
        </HStack>
        <HStack
          sx={{
            [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
              display: "none",
            },
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <DCLogo isMobile={true} />
          <Text>I am hamburger</Text>
        </HStack>
        <VStack
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
            <Text>I am desktop nav links</Text>
          </Box>
          <Search />
        </VStack>
      </Box>
    </Box>
  );
};

export default Header;
