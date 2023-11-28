import { NavMenuProps } from "@/types/NavMenuProps";
import { HStack, Text, Link, Box } from "@nypl/design-system-react-components";
import appConfig from "appConfig";
import React from "react";

const NavMenu = ({ isMobile, isScrolled }: NavMenuProps) => {
  return (
    <HStack
      sx={{
        alignItems: "end",
        justifyContent: "flex-end",
        gap: "m",
        display: {
          sm: "none",
          md: isScrolled ? "flex" : "none",
        },
      }}
    >
      <Link
        isUnderlined={false}
        href={appConfig.DC_URL + ` /search/index?utf8=%E2%9C%93&keywords=`}
      >
        <Text mb="0px" size="subtitle2" color="black">
          Items
        </Text>
      </Link>
      <Link isUnderlined={false} href={appConfig.DC_URL + `/collections`}>
        <Text mb="0px" size="subtitle2" color="black">
          Collections
        </Text>
      </Link>
      <Link isUnderlined={false} href={appConfig.DC_URL + `/divisions`}>
        <Text mb="0px" size="subtitle2" color="black">
          Divisions
        </Text>
      </Link>
      <Link isUnderlined={false} href={appConfig.DC_URL + `/about`}>
        <Text mb="0px" size="subtitle2" color="black">
          About
        </Text>
      </Link>
    </HStack>
  );
};

export default NavMenu;
