import { dcNavLinks } from "@/data/dcNavLinks";
import {
  HStack,
  Text,
  Link,
  Icon,
  Button,
  useCloseDropDown,
} from "@nypl/design-system-react-components";
import React, { useEffect, useRef, useState } from "react";
import FocusLock from "@chakra-ui/focus-lock";
import { Box, chakra } from "@chakra-ui/react";

const listItems = dcNavLinks.map(({ href, text }) => (
  <Link isUnderlined={false} href={href} key={text}>
    <Text mb="0px" size="subtitle2" color="black">
      {text}
    </Text>
  </Link>
));

/**
 * This is the button that will render the navigational list of links
 * when it is clicked and keep focus trapped within the menu.
 */
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
        >
          <Icon name={isOpen ? "close" : "utilityHamburger"} size="large" />
        </Button>
        {isOpen && (
          <HStack
            id="mobile-menu"
            sx={{
              display: "block",
              position: "fixed",
              width: "100%",
              height: "auto",
              left: 0,
              paddingLeft: "10px",
              marginTop: "10px",
              zIndex: 999,
              backgroundColor: "ui.white",
              alignItems: "flex-start",
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
