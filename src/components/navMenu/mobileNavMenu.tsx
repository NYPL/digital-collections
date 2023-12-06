import { dcNavLinks } from "@/data/dcNavLinks";
import {
  HStack,
  Text,
  Link,
  Icon,
  Button,
  useCloseDropDown,
} from "@nypl/design-system-react-components";
import React, { useRef, useState } from "react";
import FocusLock from "@chakra-ui/focus-lock";
import { Box, chakra } from "@chakra-ui/react";
import { useScrolled } from "@/hooks/useScrolled";

const listItems = dcNavLinks.map(({ href, text }) => (
  <Link
    isUnderlined={false}
    href={href}
    key={text}
    sx={{
      display: "block",
      fontSize: "s",
      fontWeight: "510",
      lineHeight: "150%",
      paddingBottom: "m",
      marginInlineStart: "xs",
      width: "auto",
      color: "ui.black",
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

const MobileNavMenu = chakra(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useCloseDropDown(setIsOpen, ref);
  const isScrolled = useScrolled("header", false);

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
          <HStack
            id="mobile-menu"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              position: "fixed",
              width: "100%",
              paddingTop: "m",
              paddingLeft: "xs",
              marginTop: isScrolled ? "4px" : "-36px",
              left: 0,
              zIndex: 999,
              backgroundColor: "ui.white",
              borderTop: "1px solid var(--ui-border-default, #BDBDBD) ",
            }}
          >
            {listItems}
          </HStack>
        )}
      </FocusLock>
    </Box>
  );
});

export default MobileNavMenu;
