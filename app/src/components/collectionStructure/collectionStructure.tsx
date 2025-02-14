import { Box, Button, Collapse } from "@chakra-ui/react";
import { Icon, Flex, Text } from "@nypl/design-system-react-components";
import React, { useState } from "react";

const CollectionStructure = ({ data }) => {
  type AccordionItemProps = {
    title: string;
    children?: React.ReactNode;
  };

  const AccordionItem = ({ title, children }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Box
        borderBottom="1px solid var(--ui-gray-medium, #BDBDBD)"
        borderTop="1px solid var(--ui-gray-medium, #BDBDBD)"
      >
        <Button
          w="100%"
          borderRadius="0"
          textAlign="left"
          fontWeight="semibold"
          bg={isOpen ? "ui.bg.default" : "ui.white"}
          _hover={{ bg: "ui.hover.default" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Flex
            width="100%"
            justifyContent="space-between"
            gap="s"
            alignItems="center"
          >
            <Icon size="xsmall" name={isOpen ? "minus" : "plus"} />
            <Text
              marginBottom="0"
              maxW="176px"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {title}
            </Text>

            <span>200</span>
          </Flex>
        </Button>
        <Collapse in={isOpen}>
          <Box bg="white" maxH="400px" overflowY="auto">
            {children}
          </Box>
        </Collapse>
      </Box>
    );
  };

  return (
    <Box
      w="300px"
      h="400px"
      mx="auto"
      mt="5"
      border="1px solid var(--ui-gray-medium, #BDBDBD)"
    >
      <AccordionItem title="Section 1">
        <AccordionItem title="Nested Section 1.1"></AccordionItem>
        <AccordionItem title="Nested Section 1.2"></AccordionItem>
      </AccordionItem>
      <AccordionItem title="Section 2">
        <AccordionItem title="Nested Section 1.1">
          <AccordionItem title="Nested Section 1.1.1 beep boop"></AccordionItem>
          <AccordionItem title="Nested Section 1.2.1"></AccordionItem>
        </AccordionItem>
        <AccordionItem title="Nested Section 1.2">
          <AccordionItem title="Nested Section 1.2"></AccordionItem>
        </AccordionItem>
        <AccordionItem title="Nested Section 1.2"></AccordionItem>
        <AccordionItem title="Nested Section 1.2"></AccordionItem>
        <AccordionItem title="Nested Section 1.2"></AccordionItem>
        <AccordionItem title="Nested Section 1.2"></AccordionItem>
        <AccordionItem title="Nested Section 1.2"></AccordionItem>
        <AccordionItem title="Nested Section 1.2"></AccordionItem>
        <AccordionItem title="Nested Section 1.2"></AccordionItem>
        <AccordionItem title="Nested Section 1.2"></AccordionItem>
        <AccordionItem title="Nested Section 1.2"></AccordionItem>
        <AccordionItem title="Nested Section 1.2"></AccordionItem>
      </AccordionItem>
    </Box>
  );
};

export default CollectionStructure;
