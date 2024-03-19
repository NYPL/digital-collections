import { dcNavLinks } from "@/data/dcNavLinks";
import { Link, List } from "@nypl/design-system-react-components";
import React from "react";

const NavMenu = ({ render }) => {
  const listItems = dcNavLinks.map(({ href, text }) => (
    <Link
      isUnderlined={false}
      href={href}
      aria-label={text}
      key={text}
      sx={{
        mb: "0px",
        fontWeight: "510",
        color: "ui.black",
        marginLeft: "m",
        ":visited": {
          color: "ui.black",
        },
        ":hover": {
          textDecoration: "none !important",
          color: "ui.link.secondary",
        },
      }}
    >
      {text}
    </Link>
  ));

  return (
    <nav
      aria-label="Header links"
      style={{
        paddingBottom: "xs",
      }}
    >
      <List
        id={`header-links-${render}`}
        listItems={listItems}
        inline={true}
        noStyling
        type="ul"
        sx={{
          "& li": {
            marginInlineEnd: "0px",
          },
        }}
      />
    </nav>
  );
};

export default NavMenu;
