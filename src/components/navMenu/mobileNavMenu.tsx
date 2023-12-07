import { dcNavLinks } from "@/data/dcNavLinks";
import {
  Text,
  Link,
  Icon,
  Button,
  useCloseDropDown,
  List,
} from "@nypl/design-system-react-components";
import React, { useRef, useState } from "react";
import FocusLock from "@chakra-ui/focus-lock";
import { Box, chakra } from "@chakra-ui/react";
import { useScrolled } from "@/hooks/useScrolled";

const listItems = dcNavLinks.map(({ href, text }) => (
  <Link
    isUnderlined={false}
    href={href}
    aria-label={text}
    key={text}
    sx={{
      display: "block",
      paddingBottom: "m",
      paddingLeft: "16px",
      width: "100%",
      ":hover": {
        textDecoration: "none",
      },
      ":visited": {
        color: "ui.black",
      },
    }}
  >
    <Text size="subtitle2" sx={{ marginBottom: "unset" }}>
      {text}
    </Text>
  </Link>
));

const MobileNavMenu = chakra(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useCloseDropDown(setIsOpen, ref);

  return (
    <Box ref={ref}>
      <FocusLock isDisabled={!isOpen}>
        <Button
          aria-haspopup="true"
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
              id="header-mobile-nav"
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
});

export default MobileNavMenu;
