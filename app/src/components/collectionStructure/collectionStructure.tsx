import { useState, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import {
  Flex,
  Heading,
  SkeletonLoader,
} from "@nypl/design-system-react-components";
import { SearchManager } from "@/src/utils/searchManager/searchManager";
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
  parentUuid?: string | null;
}

interface CollectionStructureProps {
  uuid: string;
  updateURL: (queryString: string) => Promise<void>;
  searchManager: SearchManager;
}

interface ToggleItemAndChildrenParams {
  uuid: string;
  tree: OpenStateItem[];
  setTree: React.Dispatch<React.SetStateAction<OpenStateItem[]>>;
  searchManager: SearchManager;
  updateURL: (query: string) => Promise<void>;
}

const fetchChildren = async (
  uuid: string,
  parentUuid?: string | null
): Promise<OpenStateItem[]> => {
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
      parentUuid: parentUuid ?? null,
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

const applyNodeFilter = async (
  node: OpenStateItem,
  parentNode: OpenStateItem | null,
  isOpening: boolean,
  searchManager: SearchManager,
  updateURL: (query: string) => Promise<void>
) => {
  const filter = {
    filter: "subcollection",
    value: node.uuid,
  };

  searchManager.handleKeywordChange("");
  searchManager.handleSearchSubmit();
  searchManager.setLastFilter(null);

  await updateURL(
    isOpening
      ? searchManager.handleAddFilter([filter])
      : parentNode
      ? searchManager.handleAddFilter([
          {
            filter: "subcollection",
            value: parentNode.uuid,
          },
        ])
      : searchManager.handleRemoveFilter([filter])
  );
};

const toggleItemAndChildren = async ({
  uuid,
  tree,
  setTree,
  searchManager,
  updateURL,
}: ToggleItemAndChildrenParams) => {
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
            children = await fetchChildren(uuid, node.uuid);
            children = children.map((c) => ({
              ...c,
              level: node.level + 1,
              isOpen: false,
              children: [],
              parentUuid: node.uuid,
            }));
          } catch (e) {
            console.error("Fetch error in toggleItemAndChildren:", e);
            children = [];
          }
        }

        updated.push({
          ...node,
          isOpen: isOpening,
          children: isOpening ? children : children?.map(closeAllChildren),
        });

        applyNodeFilter(node, parentNode, isOpening, searchManager, updateURL);
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
  searchManager.setLastFilter(`${uuid}`);
};

const CollectionStructure = ({
  uuid,
  searchManager,
  updateURL,
}: CollectionStructureProps) => {
  const [tree, setTree] = useState<OpenStateItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const subCollectionFilter = searchManager.filters.find(
    (filter) => filter.filter === "subcollection"
  );
  const [toggledUuid, setToggledUuid] = useState<string | null>(null);
  const targetUuid = subCollectionFilter?.value;

  const buildTreeWithPathToUuid = async (
    parentUuid: string,
    targetUuid: string,
    level: number
  ): Promise<OpenStateItem[] | null> => {
    const siblings = await fetchChildren(parentUuid, parentUuid);
    for (const sibling of siblings) {
      if (sibling.uuid === targetUuid) {
        const targetChildren = await fetchChildren(targetUuid, sibling.uuid);
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
                  parentUuid: s.uuid,
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
        const topLevelChildren = await fetchChildren(uuid, null);
        if (targetUuid) {
          for (const child of topLevelChildren) {
            if (child.uuid === targetUuid) {
              const children = await fetchChildren(child.uuid, child.uuid);
              setTree(
                topLevelChildren.map((node) =>
                  node.uuid === child.uuid
                    ? {
                        ...child,
                        level: 0,
                        isOpen: true,
                        children: children.map((childNode) => ({
                          ...childNode,
                          level: 1,
                          isOpen: false,
                          children: [],
                          parentUuid: child.uuid,
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

            if (child.hasSubContainers) {
              const subtree = await buildTreeWithPathToUuid(
                child.uuid,
                targetUuid,
                1
              );

              if (subtree) {
                setTree(
                  topLevelChildren.map((node) =>
                    node.uuid === child.uuid
                      ? {
                          ...child,
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
        } else {
          setTree(
            topLevelChildren.map((c) => ({
              ...c,
              level: 0,
              isOpen: false,
              children: [],
            }))
          );
        }
      } catch (error) {
        console.error("Error loading collection structure:", error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadTree();
  }, [searchManager.keywords, targetUuid]);

  if (!isLoaded) {
    return (
      <SkeletonLoader
        data-testid="loading-collection-structure"
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

  const handleToggle = async (uuid: string) => {
    setToggledUuid(uuid);
    try {
      await toggleItemAndChildren({
        uuid,
        tree,
        setTree,
        searchManager,
        updateURL,
      });
    } catch (error) {
      console.error("Toggle failed:", error);
    } finally {
      setTimeout(() => {
        setToggledUuid(null);
      }, 300);
    }
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
      <Heading size="heading6">Collection structure</Heading>
      <Box
        ref={scrollContainerRef}
        w="300px"
        maxH="750px"
        overflowY="auto"
        borderTop="1px solid var(--ui-gray-medium, #BDBDBD)"
      >
        <ul>
          <AccordionTree
            items={tree}
            toggle={handleToggle}
            targetUuid={targetUuid!}
            toggledUuid={toggledUuid!}
          />
        </ul>
      </Box>
    </Flex>
  );
};

CollectionStructure.displayName = "CollectionStructure";
export default CollectionStructure;
