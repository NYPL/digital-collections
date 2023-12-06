import { dcNavLinks } from "@/data/dcNavLinks";
import {
  Link,
  Icon,
  Button,
  useCloseDropDown,
  List,
  Box,
} from "@nypl/design-system-react-components";
import React, { useRef, useState } from "react";
import FocusLock from "@chakra-ui/focus-lock";

const listItems = dcNavLinks.map(({ href, text }) => (
  <Link
    isUnderlined={false}
    href={href}
    aria-label={text}
    key={text}
    aria-label={text}
    sx={{
      display: "block",
      paddingBottom: "m",
      paddingLeft: "16px",
      width: "100%",
      marginBottom: "unset",
      fontWeight: "510",
      ":hover": {
        textDecoration: "none",
      },
      ":visited": {
        color: "ui.black",
      },
    }}
  >
    {text}
  </Link>
));

const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useCloseDropDown(setIsOpen, ref);

  return (
    <Box ref={ref}>
      <FocusLock isDisabled={!isOpen}>
        <Button
          aria-label={isOpen ? "Close Navigation" : "Open Navigation"}
          aria-expanded={isOpen ? true : null}
          buttonType="text"
          id="mobileNav-btn"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          sx={{
            border: "none",
            color: "ui.black",
            ":hover": {
              color: "ui.black",
              bgColor: "ui.white",
            },
            "not:([disabled]):focus": {
              outline: "none",
            },
          }}
        >
          <Icon name={isOpen ? "close" : "utilityHamburger"} size="large" />
        </Button>
        {isOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile header links"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              position: "absolute",
              width: "100%",
              marginTop: "4px",
              paddingTop: "m",
              left: 0,
              zIndex: 999,
            }}
          >
            <List
              id="header-mobile-links"
              listItems={listItems}
              noStyling
              type="ul"
              sx={{ backgroundColor: "ui.white", paddingTop: "m" }}
            />
          </nav>
        )}
      </FocusLock>
    </Box>
  );
};

export default MobileNavMenu;
