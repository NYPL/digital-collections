import { Collapse, Button } from "@chakra-ui/react";
import {
  Icon,
  Flex,
  Text,
  Heading,
  Box,
} from "@nypl/design-system-react-components";
import React, { forwardRef, useState } from "react";

export type CollectionChildProps = {
  title: string;
  itemCount: string;
  children?: CollectionChildProps[];
};

type OpenStateItem = {
  title: string;
  level: number;
  isOpen: boolean;
};

const AccordionItem = ({
  title,
  itemCount,
  children = [],
  level = 0,
  headingRef,
  openState,
  setOpenState,
}: CollectionChildProps & {
  level?: number;
  headingRef;
  openState: OpenStateItem[];
  setOpenState: React.Dispatch<React.SetStateAction<OpenStateItem[]>>;
}) => {
  const isOpen = openState.some((item) => item.title === title && item.isOpen);
  const hasChildren = children.length > 0;

  const toggleItem = (title: string, level: number) => {
    setOpenState((prev) => {
      let newState = [...prev];
      const isCurrentlyOpen = newState.some(
        (item) => item.title === title && item.isOpen
      );

      // close siblings
      newState = newState.filter((item) => item.level !== level);

      // close children
      newState = newState.filter((item) => item.level <= level);

      // if it was closed, open it
      if (!isCurrentlyOpen) {
        newState.push({ title, level, isOpen: true });
        setTimeout(() => {
          headingRef.current?.focus();
        }, 200);
      }

      return newState;
    });
  };

  return (
    <Box
      borderRight={
        level === 0 ? "1px solid var(--ui-gray-medium, #BDBDBD)" : ""
      }
      borderLeft={level === 0 ? "1px solid var(--ui-gray-medium, #BDBDBD)" : ""}
      style={{ overflow: "visible" }}
    >
      <Button
        id={`${title}-btn`}
        w="100%"
        color="black"
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
        onClick={() => toggleItem(title, level)}
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
            paddingLeft="s"
            fontWeight="500"
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
  const [openState, setOpenState] = useState<OpenStateItem[]>([]);

  return (
    <Flex flexDir="column">
      <Heading size="heading5">Collection structure</Heading>
      <Box
        w="300px"
        maxH="750px"
        overflowY="auto"
        borderTop="1px solid var(--ui-gray-medium, #BDBDBD)"
      >
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            itemCount={item.itemCount}
            title={item.title}
            level={0}
            headingRef={headingRef}
            openState={openState}
            setOpenState={setOpenState}
          >
            {item.children}
          </AccordionItem>
        ))}
      </Box>
    </Flex>
  );
});

CollectionStructure.displayName = "CollectionStructure";

export default CollectionStructure;
