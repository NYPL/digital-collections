import { dcNavLinks } from "@/data/dcNavLinks";
import { NavMenuProps } from "@/types/NavMenuProps";
import { HStack, Text, Link } from "@nypl/design-system-react-components";
import React from "react";

const NavMenu = ({ isScrolled }: NavMenuProps) => {
  const listItems = dcNavLinks.map(({ href, text }) => (
    <Link isUnderlined={false} href={href} key={text}>
      <Text mb="0px" size="subtitle2" color="black">
        {text}
      </Text>
    </Link>
  ));

  return (
    <HStack
      sx={{
        gap: "m",
      }}
    >
      {listItems}
    </HStack>
  );
};

export default NavMenu;
