import { Accordion, Box, Button, Collapse } from "@chakra-ui/react";
import {
  Icon,
  Flex,
  Text,
  Heading,
} from "@nypl/design-system-react-components";
import React, { forwardRef, useState } from "react";

export type CollectionChildProps = {
  title: string;
  itemCount: string;
  children?: CollectionChildProps[];
};

type OpenState = { [key: string]: boolean };

const AccordionItem = ({
  title,
  itemCount,
  children = [],
  level,
  headingRef,
  openState,
  setOpenState,
}: CollectionChildProps & {
  level: number;
  headingRef;
  openState: OpenState;
  setOpenState: React.Dispatch<React.SetStateAction<OpenState>>;
}) => {
  const isOpen = openState[title] || false;
  const hasChildren = children.length > 0;

  const toggleItem = () => {
    // if closed:
    // open, fetch self
    // close siblings
    // if open:
    // close self
    // close children
  };

  return (
    <Box
      borderRight={
        level === 0 ? "1px solid var(--ui-gray-medium, #BDBDBD)" : ""
      }
      borderLeft={level === 0 ? "1px solid var(--ui-gray-medium, #BDBDBD)" : ""}
    >
      <Button
        w="100%"
        borderRadius="0"
        textAlign="left"
        fontWeight="semibold"
        bg={isOpen && hasChildren ? "ui.gray.light-cool" : "ui.white"}
        _hover={{ bg: "ui.hover.default" }}
        borderBottom="1px solid var(--ui-gray-medium, #BDBDBD)"
        paddingLeft={level > 0 ? level * 8 : "s"}
        paddingTop="m"
        paddingRight="s"
        paddingBottom="m"
        onClick={toggleItem}
      >
        <Flex width="100%" alignItems="center">
          {hasChildren && (
            <Icon
              size="small"
              name={isOpen ? "minus" : "plus"}
              visibility={hasChildren ? "visible" : "hidden"}
            />
          )}
          <Text
            flex="1"
            marginBottom="0"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            fontWeight="500"
            paddingLeft="s"
          >
            {title}
          </Text>
          <Box as="span" marginLeft="16px">
            {itemCount}
          </Box>
        </Flex>
      </Button>
      {hasChildren && (
        <Collapse in={isOpen} style={{ overflow: "visible !important" }}>
          {children.map((child, index) => (
            <AccordionItem
              key={index}
              itemCount={child.itemCount}
              title={child.title}
              level={level + 1}
              headingRef={headingRef}
              openState={openState}
              setOpenState={setOpenState}
            >
              {child.children}
            </AccordionItem>
          ))}
        </Collapse>
      )}
    </Box>
  );
};

const CollectionStructure = forwardRef<
  HTMLHeadingElement,
  { data: CollectionChildProps[] }
>(({ data }, headingRef) => {
  const [openState, setOpenState] = useState<OpenState>({});

  //setOpenState((prev) => {
  //   const newState = { ...prev };

  //   if (isOpen) {
  //     // Close this item and all its children
  //     const removeChildren = (items: CollectionChildProps[]) => {
  //       items.forEach((item) => {
  //         delete newState[item.title];
  //         if (item.children) {
  //           removeChildren(item.children);
  //         }
  //       });
  //     };
  //     removeChildren(children);
  //     newState[title] = false;
  //   } else {
  //     // Close only siblings at the same level
  //     Object.keys(newState).forEach((key) => {
  //       if (newState[key] && key !== title) {
  //         newState[key] = false;
  //       }
  //     });

  //     newState[title] = true;
  //   }

  //   return newState;
  // });

  return (
    <Flex flexDir="column">
      <Heading size="heading5">Collection structure</Heading>
      <Accordion
        w="300px"
        maxH="750px"
        overflowY="scroll"
        borderTop="1px solid var(--ui-gray-medium, #BDBDBD)"
      >
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            itemCount={item.itemCount}
            title={item.title}
            headingRef={headingRef}
            openState={openState}
            setOpenState={setOpenState}
            level={0}
          >
            {item.children}
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
});

CollectionStructure.displayName = "CollectionStructure";

export default CollectionStructure;
