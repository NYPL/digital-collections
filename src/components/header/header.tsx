import { Box, HStack, VStack } from "@nypl/design-system-react-components";
import React from "react";
import DCLogo from "../logo/logo";

const Header = () => {
  return (
    <Box position="sticky" top={0} zIndex={10} bgColor="white">
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
          px="16px"
          sx={{
            display: "flex",
            width: "1280px",
          }}
        >
          <DCLogo />
          <VStack py="16px">
            <p> I am the nav links! </p>
            <p> I am the search bar and filter! </p>
          </VStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
