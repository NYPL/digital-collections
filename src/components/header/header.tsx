import { HStack } from "@nypl/design-system-react-components";
import React from "react";
import DCLogo from "../logo/logo";

const Header = () => {
  return (
    <>
      <HStack ps="2" pe="2" justify="space-between">
        <DCLogo />
      </HStack>
    </>
  );
};

export default Header;
