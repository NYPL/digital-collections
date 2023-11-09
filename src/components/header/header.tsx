import { Box, HStack, VStack } from "@nypl/design-system-react-components";
import React, { useEffect, useState } from "react";
import DCLogo from "../logo/logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      position="sticky"
      top={0}
      zIndex={10}
      bgColor="var(--nypl-colors-ui-white)"
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
          mx="16px"
          sx={{
            display: "flex",
            width: "1280px",
          }}
        >
          <DCLogo />
          <VStack py="16px">
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
