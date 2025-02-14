import { Box, Button, Collapse } from "@chakra-ui/react";
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

const AccordionItem = ({
  title,
  itemCount,
  children = [],
  level = 0,
  headingRef,
}: CollectionChildProps & { level?: number; headingRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children.length > 0;

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
        onClick={() => {
          setIsOpen(!isOpen);
          // If the item is being opened, or it has no children
          if (!isOpen || !hasChildren) {
            setTimeout(() => {
              headingRef?.current?.focus();
            }, 100);
          }
        }}
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
  return (
    <Flex flexDir="column">
      <Heading size="heading5"> Collection structure </Heading>
      <Box
        w="300px"
        maxH="700px"
        overflowY="scroll"
        borderTop="1px solid var(--ui-gray-medium, #BDBDBD)"
      >
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            itemCount={item.itemCount}
            title={item.title}
            headingRef={headingRef}
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
