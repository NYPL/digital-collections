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

/**
 * Recursively renders a collapsible accordion, where each node is a <li> element
 * (so component must be rendered inside a <ol> or <ul>). Each node in the tree can be expanded or collapsed.
 * If the node has children, it nests another `AccordionTree` component within a `Collapse`.
 *
 * @param {OpenStateItem[]} items - List of tree nodes to render
 * @param {(uuid: string) => void} toggle - Callback to toggle a node's open/closed state
 * @param {string} targetUuid - Uuid of deepest open item
 * @returns {JSX.Element} The rendered accordion tree
 */
const AccordionTree = ({
  items,
  toggle,
  targetUuid,
}: {
  items: OpenStateItem[];
  toggle: (uuid: string) => void;
  targetUuid: string;
}) => {
  return (
    <>
      {items.map((item) => {
        return (
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
                {...(item.hasSubContainers
                  ? { "aria-expanded": item.isOpen }
                  : {})}
                sx={{ zIndex: "0 !important" }}
                id={item.uuid}
                aria-current={item.uuid === targetUuid ? "true" : undefined}
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
                    <AccordionTree
                      targetUuid={targetUuid}
                      items={item.children}
                      toggle={toggle}
                    />
                  </ul>
                </Collapse>
              )}
            </Box>
          </li>
        );
      })}
    </>
  );
};

export default AccordionTree;
