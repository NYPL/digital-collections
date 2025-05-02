import { useState, useEffect, forwardRef } from "react";
import { Box, Button, Collapse } from "@chakra-ui/react";
import {
  Flex,
  Icon,
  Text,
  Heading,
  Tooltip,
  SkeletonLoader,
} from "@nypl/design-system-react-components";
import { SearchManager } from "@/src/utils/searchManager";
import { headerBreakpoints } from "@/src/utils/breakpoints";

export interface OpenStateItem {
  title: string;
  uuid: string;
  level: number;
  itemCount: string;
  isOpen: boolean;
  hasSubcontainers: boolean;
  children?: OpenStateItem[];
}

const fetchChildren = async (uuid: string): Promise<OpenStateItem[]> => {
  const res = await fetch(`/api/collectionchildren/${uuid}`);
  if (!res.ok) throw new Error("Failed to fetch children");
  const data = await res.json();
  console.log("data children", data.children[0]);
  return data.children.map((child) => ({
    title: child.title,
    uuid: child.uuid,
    itemCount: child.itemCount,
    hasSubcontainers: child.hasSubcontainers,
    level: 0,
    isOpen: false,
    children: [],
  }));
};

const toggleItem = async (
  uuid: string,
  tree: OpenStateItem[],
  setTree: React.Dispatch<React.SetStateAction<OpenStateItem[]>>,
  searchManager: SearchManager,
  updateURL: (query: string) => Promise<void>
) => {
  const recursiveUpdate = async (
    nodes: OpenStateItem[],
    levelToUpdate?: number
  ): Promise<OpenStateItem[]> => {
    const updated: OpenStateItem[] = [];

    for (const node of nodes) {
      if (node.uuid === uuid) {
        const isOpening = !node.isOpen;

        let children = node.children;

        if (isOpening && (!children || children.length === 0)) {
          try {
            children = await fetchChildren(uuid);
            children = children.map((c) => ({
              ...c,
              level: node.level + 1,
              isOpen: false,
            }));
          } catch (e) {
            console.error("Fetch error:", e);
            children = [];
          }
        }

        updated.push({ ...node, isOpen: isOpening, children });

        const filter = {
          filter: "subcollection",
          value: `${node.title}||${uuid}`,
        };

        searchManager.handleKeywordChange("");
        searchManager.handleSearchSubmit();
        searchManager.setLastFilter(null);

        await updateURL(
          isOpening
            ? searchManager.handleAddFilter([filter])
            : searchManager.handleRemoveFilter([filter])
        );

        // Remember this level to close siblings later
        levelToUpdate = node.level;
      } else {
        const updatedChildren = node.children
          ? await recursiveUpdate(node.children, levelToUpdate)
          : [];

        // Close sibling if at same level as toggled item
        const shouldClose =
          levelToUpdate !== undefined && node.level === levelToUpdate;

        updated.push({
          ...node,
          isOpen: shouldClose ? false : node.isOpen,
          children: updatedChildren,
        });
      }
    }

    return updated;
  };

  const newTree = await recursiveUpdate(tree);
  console.log(newTree);
  setTree(newTree);
};

const AccordionTree = ({
  items,
  toggle,
}: {
  items: OpenStateItem[];
  toggle: (uuid: string) => void;
}) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.uuid}>
          <Box>
            <Button
              _focus={{
                outline: "none !important",
                boxShadow:
                  "inset 0 0 0 2px var(--nypl-colors-ui-focus) !important",
              }}
              id={`${item.uuid}-btn`}
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
              //aria-current={isCurrent ? "true" : undefined}
            >
              <Flex alignItems="center">
                {item.hasSubcontainers && (
                  <Icon
                    size="small"
                    name={item.isOpen ? "minus" : "plus"}
                    visibility="visible"
                  />
                )}
                <Text paddingLeft="s">
                  {item.title} {item.itemCount}
                </Text>
              </Flex>
            </Button>
            {item.isOpen && item.children && (
              <Collapse in={item.isOpen}>
                <AccordionTree items={item.children} toggle={toggle} />
              </Collapse>
            )}
          </Box>
        </li>
      ))}
    </ul>
  );
};

const CollectionStructure2 = forwardRef(
  (
    {
      uuid,
      updateURL,
      searchManager,
    }: {
      uuid: string;
      updateURL: (queryString: string) => Promise<void>;
      searchManager: SearchManager;
    },
    headingRef
  ) => {
    const [tree, setTree] = useState<OpenStateItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const loadTopLevel = async () => {
        try {
          const children = await fetchChildren(uuid);
          setTree(children.map((c) => ({ ...c, level: 0 })));
          setIsLoaded(true);
        } catch (e) {
          console.error("Top level fetch error:", e);
        }
      };
      loadTopLevel();
    }, [uuid]);

    if (!isLoaded) {
      return (
        <SkeletonLoader contentSize={12} headingSize={1} showImage={false} />
      );
    }

    const handleToggle = (uuid: string) => {
      toggleItem(uuid, tree, setTree, searchManager, updateURL);
    };

    return (
      <Flex
        flexDir="column"
        sx={{
          marginBottom: "xxl",
          [`@media screen and (max-width: ${headerBreakpoints.smTablet}px)`]: {
            display: "none",
          },
        }}
      >
        <Heading size="heading6">Collection structure</Heading>
        <Box
          w="300px"
          maxH="750px"
          overflowY="auto"
          borderTop="1px solid var(--ui-gray-medium, #BDBDBD)"
        >
          <AccordionTree items={tree} toggle={handleToggle} />
        </Box>
      </Flex>
    );
  }
);

CollectionStructure2.displayName = "CollectionStructure2";
export default CollectionStructure2;
