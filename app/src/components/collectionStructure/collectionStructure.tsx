import { Box, Button, Collapse } from "@chakra-ui/react";
import {
  Icon,
  Flex,
  Text,
  Heading,
} from "@nypl/design-system-react-components";
import React, { useState } from "react";

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
}: CollectionChildProps & { level?: number }) => {
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
        paddingTop="s"
        paddingRight="s"
        paddingBottom="s"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flex
          width="100%"
          justifyContent="space-between"
          gap="s"
          alignItems="center"
        >
          {hasChildren && (
            <Icon size="small" name={isOpen ? "minus" : "plus"} />
          )}
          <Text
            marginBottom="0"
            maxW="176px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            fontWeight="500"
          >
            {title}
          </Text>
          <span>{itemCount}</span>
        </Flex>
      </Button>
      {hasChildren && (
        <Collapse in={isOpen}>
          <Box bg="white">
            {children.map((child, index) => (
              <AccordionItem
                key={index}
                itemCount={child.itemCount}
                title={child.title}
                level={level + 1}
              >
                {child.children}
              </AccordionItem>
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  );
};

const CollectionStructure = ({ data }: { data: CollectionChildProps[] }) => {
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
          >
            {item.children}
          </AccordionItem>
        ))}
      </Box>
    </Flex>
  );
};

export default CollectionStructure;
