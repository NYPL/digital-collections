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
      px="s"
      zIndex={999}
      bgColor="ui.white"
    >
      <Box alignItems="center" maxWidth="1250px" mx="auto">
        <HStack
          sx={{
            justifyContent: "space-between",
            alignContent: "center",
          }}
          pl="9px"
        >
          <DCLogo isMobile={true} />
          <Box
            sx={{
              display: { sm: "block", md: "none" },
            }}
          >
            <Text>I am hamburger</Text>
          </Box>
        </HStack>
        <HStack justify="space-between">
          <DCLogo isMobile={false} />
          <VStack width={{ sm: "100%", md: "40%" }}>
            <Box
              sx={{
                display: {
                  sm: "none",
                  md: isScrolled ? "block" : "none",
                },
              }}
            >
              <Text>I am desktop nav links</Text>
            </Box>
            <Box
              width="100%"
              pt="s"
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
