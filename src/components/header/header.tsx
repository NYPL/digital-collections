import { Box, HStack, VStack } from "@nypl/design-system-react-components";
import React from "react";
import DCLogo from "../logo/logo";
import { useScrolledHeader } from "@/utils/useScrolledHeader";

const Header = () => {
  const isScrolled = useScrolledHeader();
  return (
    <Box
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
          mx="s"
          sx={{
            display: "flex",
            width: "1280px",
          }}
        >
          <DCLogo />
          <VStack py="s">
            <Box display={{ sm: "none", md: isScrolled ? "flex" : "none" }}>
              I am nav links
            </Box>
            <Box display={{ sm: "flex", md: "none" }}>I am hamburger menu</Box>
            <Box display={{ sm: isScrolled ? "flex" : "none", md: "flex" }}>
              I am search/filter
            </Box>
          </VStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
