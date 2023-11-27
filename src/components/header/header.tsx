import {
  Box,
  HStack,
  VStack,
  Text,
  Logo,
} from "@nypl/design-system-react-components";
import React from "react";
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
        >
          <Logo
            name="nyplLionBlack"
            sizeBasedOn="height"
            height="40px"
            sx={{
              display: { sm: "block", md: "none" },
            }}
          />
          <Box
            sx={{
              display: { sm: "block", md: "none" },
              mb: 0,
            }}
          >
            <Text>I am hamburger</Text>
          </Box>
        </HStack>
        <HStack justify="space-between">
          <Logo
            name="digitalCollectionsBlack"
            sizeBasedOn="height"
            height="50px"
            sx={{
              display: { sm: "none", md: "inline" },
            }}
          />
          <VStack width={{ sm: "100%", md: "40%" }}>
            <Box
              sx={{
                display: {
                  sm: "none",
                  md: isScrolled ? "inline" : "none",
                },
              }}
            >
              <Text>I am desktop nav links</Text>
            </Box>
            <Box
              justifyContent="center"
              alignItems="center"
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
