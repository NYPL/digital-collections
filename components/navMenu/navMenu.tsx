import { dcNavLinks } from "../../data/dcNavLinks";
import { Link, List } from "@nypl/design-system-react-components";
import React from "react";

interface NavMenuProps {
  render: number;
}

const NavMenu = ({ render }: NavMenuProps) => {
  const listItems = dcNavLinks.map(({ href, text }) => (
    <Link
      isUnderlined={false}
      href={href}
      aria-label={text}
      key={text}
      sx={{
        marginBottom: "0px",
        fontWeight: "medium",
        color: "ui.black",
        marginLeft: "m",
        _visited: {
          color: "ui.black",
        },
        _hover: {
          textDecoration: "none !important",
          color: "unset",
        },
      }}
    >
      {text}
    </Link>
  ));

  return (
    <nav aria-label="Header links">
      <List
        id={`header-links-${render}`}
        listItems={listItems}
        inline={true}
        noStyling
        type="ul"
        sx={{
          marginBottom: "xs",
          "& li": {
            marginInlineEnd: "0px",
          },
        }}
      />
    </nav>
  );
};

export default NavMenu;
