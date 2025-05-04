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
import { SearchManager, stringToFilter } from "@/src/utils/searchManager";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import AccordionTree from "./accordionTree";
import { CARDS_PER_PAGE } from "@/src/config/constants";

export interface OpenStateItem {
  title: string;
  uuid: string;
  level: number;
  itemCount: string | number;
  isOpen: boolean;
  hasSubContainers: boolean;
  children?: OpenStateItem[];
}

const fetchChildren = async (uuid: string): Promise<OpenStateItem[]> => {
  const allChildren: OpenStateItem[] = [];
  let page = 1;
  while (true) {
    const res = await fetch(`/api/collectionchildren/${uuid}?page=${page}`);
    if (!res.ok) throw new Error("Failed to fetch children");

    const data = await res.json();

    const mappedChildren = data.children.map((child) => ({
      title: child.title,
      uuid: child.uuid,
      itemCount: child.itemCount,
      hasSubContainers: child.hasSubContainers,
      level: 0,
      isOpen: false,
      children: [],
    }));
    allChildren.push(...mappedChildren);

    if (data.children.length < CARDS_PER_PAGE) break;
    page++;
  }

  return allChildren;
};

const closeAllChildren = (node: OpenStateItem): OpenStateItem => ({
  ...node,
  isOpen: false,
  children: node.children?.map(closeAllChildren) ?? [],
});

const toggleItem = async (
  uuid: string,
  tree: OpenStateItem[],
  setTree: React.Dispatch<React.SetStateAction<OpenStateItem[]>>,
  searchManager: SearchManager,
  updateURL: (query: string) => Promise<void>
) => {
  let toggledNodeLevel: number | undefined;
  let parentNode: OpenStateItem | null = null;

  const findNodeLevel = (
    nodes: OpenStateItem[],
    level = 0,
    parent: OpenStateItem | null = null
  ): void => {
    for (const node of nodes) {
      if (node.uuid === uuid) {
        toggledNodeLevel = node.level;
        parentNode = parent;
        return;
      }
      if (node.children) findNodeLevel(node.children, level + 1, node);
    }
  };
  findNodeLevel(tree);

  const recursiveUpdateTree = async (
    nodes: OpenStateItem[]
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
              children: [],
            }));
          } catch (e) {
            console.error("fetch error:", e);
            children = [];
          }
        }

        updated.push({
          ...node,
          isOpen: isOpening,
          children: isOpening ? children : children?.map(closeAllChildren),
        });

        const filter = {
          filter: "subcollection",
          value: `${node.title}||${uuid}`,
        };

        // Clear search query
        searchManager.handleKeywordChange("");
        searchManager.handleSearchSubmit();
        searchManager.setLastFilter(null);

        // If opening the item, add the subcollection filter.
        // If closing, remove the subcollection filter or replace it with its parent subcollection filter.
        await updateURL(
          isOpening
            ? searchManager.handleAddFilter([filter])
            : parentNode
            ? searchManager.handleAddFilter([
                {
                  filter: "subcollection",
                  value: `${parentNode.title}||${parentNode.uuid}`,
                },
              ])
            : searchManager.handleRemoveFilter([filter])
        );
      } else {
        const shouldClose = toggledNodeLevel === node.level;
        const updatedChildren = node.children
          ? await recursiveUpdateTree(node.children)
          : [];

        updated.push({
          ...node,
          isOpen: shouldClose ? false : node.isOpen,
          children: shouldClose
            ? node.children?.map(closeAllChildren)
            : updatedChildren,
        });
      }
    }

    return updated;
  };

  const newTree = await recursiveUpdateTree(tree);
  setTree(newTree);
};

const CollectionStructure2 = forwardRef<
  HTMLHeadingElement,
  {
    uuid: string;
    updateURL: (queryString: string) => Promise<void>;
    searchManager: SearchManager;
  }
>(({ uuid, searchManager, updateURL }, headingRef) => {
  const [tree, setTree] = useState<OpenStateItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log("searchmanager filters", searchManager.filters);

  const subCollectionFilter = searchManager.filters.find(
    (filter) => filter.filter === "subcollection"
  );
  console.log(subCollectionFilter?.value);

  const targetUuid = subCollectionFilter?.value?.split("||")[1];
  console.log(targetUuid);

  const buildTreeWithPathToUuid = async (
    parentUuid: string,
    targetUuid: string,
    level: number
  ): Promise<OpenStateItem[] | null> => {
    const siblings = await fetchChildren(parentUuid);
    for (const sibling of siblings) {
      if (sibling.uuid === targetUuid) {
        const targetChildren = await fetchChildren(targetUuid);
        return siblings.map((s) =>
          s.uuid === targetUuid
            ? {
                ...s,
                level,
                isOpen: true,
                children: targetChildren.map((c) => ({
                  ...c,
                  level: level + 1,
                  isOpen: false,
                  children: [],
                })),
              }
            : {
                ...s,
                level,
                isOpen: false,
                children: [],
              }
        );
      }
      if (sibling.hasSubContainers) {
        const childSubtree = await buildTreeWithPathToUuid(
          sibling.uuid,
          targetUuid,
          level + 1
        );

        if (childSubtree) {
          return siblings.map((s) =>
            s.uuid === sibling.uuid
              ? {
                  ...s,
                  level,
                  isOpen: true,
                  children: childSubtree,
                }
              : {
                  ...s,
                  level,
                  isOpen: false,
                  children: [],
                }
          );
        }
      }
    }
    return null;
  };

  useEffect(() => {
    const loadTree = async () => {
      try {
        const topLevelChildren = await fetchChildren(uuid);
        // If already filtering on a subcollection, build tree to that uuid
        if (targetUuid) {
          for (const top of topLevelChildren) {
            if (top.uuid === targetUuid) {
              const children = await fetchChildren(top.uuid);
              setTree(
                topLevelChildren.map((node) =>
                  node.uuid === top.uuid
                    ? {
                        ...top,
                        level: 0,
                        isOpen: true,
                        children: children.map((child) => ({
                          ...child,
                          level: 1,
                          isOpen: false,
                          children: [],
                        })),
                      }
                    : {
                        ...node,
                        level: 0,
                        isOpen: false,
                        children: [],
                      }
                )
              );
              setIsLoaded(true);
              return;
            }

            if (top.hasSubContainers) {
              const subtree = await buildTreeWithPathToUuid(
                top.uuid,
                targetUuid,
                1
              );

              if (subtree) {
                setTree(
                  topLevelChildren.map((node) =>
                    node.uuid === top.uuid
                      ? {
                          ...top,
                          level: 0,
                          isOpen: true,
                          children: subtree,
                        }
                      : {
                          ...node,
                          level: 0,
                          isOpen: false,
                          children: [],
                        }
                  )
                );
                setIsLoaded(true);
                return;
              }
            }
          }
        }
        // Otherwise, just show the first level of children
        setTree(
          topLevelChildren.map((c) => ({
            ...c,
            level: 0,
            isOpen: false,
            children: [],
          }))
        );
      } catch (error) {
        console.error("Error loading collection structure:", error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadTree();
  }, [searchManager]);

  if (!isLoaded) {
    return (
      <SkeletonLoader
        contentSize={12}
        headingSize={1}
        imageAspectRatio="square"
        layout="column"
        showHeading
        showImage={false}
        width="425px"
        marginY="0"
      />
    );
  }

  const handleToggle = (uuid: string) => {
    toggleItem(uuid, tree, setTree, searchManager, updateURL);
  };

  if (tree.length === 0) {
    return null;
  }

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
      <Heading size="heading6" ref={headingRef}>
        Collection structure
      </Heading>
      <Box
        w="300px"
        maxH="750px"
        overflowY="auto"
        borderTop="1px solid var(--ui-gray-medium, #BDBDBD)"
      >
        <ul>
          <AccordionTree items={tree} toggle={handleToggle} />
        </ul>
      </Box>
    </Flex>
  );
});

CollectionStructure2.displayName = "CollectionStructure2";
export default CollectionStructure2;
