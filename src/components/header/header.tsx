import { Box, HStack, VStack } from "@nypl/design-system-react-components";
import React from "react";
import DCLogo from "../logo/logo";
import { useScrolled } from "@/hooks/useScrolled";
import { useStickyMargin } from "@/hooks/useStickyMargin";
import Search from "../search/search";

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
      py={{ sm: "xs", md: "s" }}
      zIndex={999}
      bgColor="ui.white"
    >
      <HStack
        justify="center"
        align="center"
        sx={{
          display: "flex",
          alignSelf: "stretch",
        }}
      >
        <HStack
          justify="space-between"
          align="center"
          paddingLeft={{ sm: "16px", md: "9px" }}
          paddingRight="16px"
          sx={{
            display: "flex",
            width: "1280px",
          }}
        >
          <DCLogo />
          <VStack width="40%" py="s">
            <Box display={{ sm: "none", md: isScrolled ? "flex" : "none" }}>
              I am nav links
            </Box>
            <Box display={{ sm: "flex", md: "none" }}>I am hamburger menu</Box>
            <Box display={{ sm: "none", md: "inline" }} width="100%">
              <Search uniqueId={"desktop"} />
            </Box>
          </VStack>
        </HStack>
      </HStack>
      <Box
        display={{ sm: isScrolled ? "inline" : "none", md: "none" }}
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Search uniqueId={"mobile"} />
      </Box>
    </Box>
  );
};

export default Header;
