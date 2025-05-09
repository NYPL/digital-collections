import { Box, Button, Collapse } from "@chakra-ui/react";
import {
  Flex,
  Icon,
  Text,
  Tooltip,
} from "@nypl/design-system-react-components";
import { OpenStateItem } from "./collectionStructure";

const ButtonText = ({
  title,
  hasSubContainers,
  level,
}: {
  title: string;
  hasSubContainers: boolean;
  level: number;
}) => {
  const text = (
    <Text
      flex="1"
      marginBottom="0"
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
      paddingLeft={hasSubContainers ? "s" : "28px"}
      fontWeight="500"
    >
      {title}
    </Text>
  );

  const truncationLength = 30 - level * 7;
  return title.length > truncationLength ? (
    <Tooltip zIndex="1000" content={title}>
      {text}
    </Tooltip>
  ) : (
    text
  );
};

const AccordionTree = ({
  items,
  toggle,
}: {
  items: OpenStateItem[];
  toggle: (uuid: string) => void;
}) => {
  const deepestOpenItem =
    items.length > 0 ? items[items.length - 1].title : null;
  return (
    <>
      {items.map((item) => (
        <li key={item.uuid}>
          <Box>
            <Button
              _focus={{
                outline: "none !important",
                boxShadow:
                  "inset 0 0 0 2px var(--nypl-colors-ui-focus) !important",
              }}
              w="100%"
              color="black"
              borderRadius="0"
              textAlign="left"
              fontWeight="semibold"
              border="1px solid var(--ui-gray-medium, #BDBDBD)"
              borderTop="unset"
              bg={item.isOpen ? "ui.gray.light-cool" : "ui.white"}
              _hover={{ bg: "ui.hover.default" }}
              paddingLeft={
                item.level > 0
                  ? item.level < 12
                    ? item.level * 8
                    : "96px"
                  : "s"
              }
              paddingTop="m"
              paddingRight="s"
              paddingBottom="m"
              onClick={() => toggle(item.uuid)}
              aria-expanded={item.isOpen}
              sx={{ zIndex: "0 !important" }}
              id={item.uuid}
              aria-current={item.title === deepestOpenItem ? "true" : undefined}
            >
              <Flex alignItems="center" width="100%">
                {item.hasSubContainers && (
                  <Icon
                    size="small"
                    name={item.isOpen ? "minus" : "plus"}
                    visibility="visible"
                  />
                )}
                <ButtonText
                  title={item.title}
                  hasSubContainers={item.hasSubContainers}
                  level={item.level}
                />
                <Box as="span" marginLeft="s" fontWeight="400">
                  {item.itemCount}
                </Box>
              </Flex>
            </Button>
            {item.hasSubContainers && item.children && (
              <Collapse in={item.isOpen}>
                <ul style={{ margin: 0 }}>
                  <AccordionTree items={item.children} toggle={toggle} />
                </ul>
              </Collapse>
            )}
          </Box>
        </li>
      ))}
    </>
  );
};

export default AccordionTree;
