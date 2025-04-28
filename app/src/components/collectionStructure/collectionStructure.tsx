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
import { useScrollIntoViewIfNeeded } from "@/src/hooks/useScrollIntoViewIfNeeded";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { SearchManager } from "@/src/utils/searchManager";

export interface CollectionChildProps {
  title: string;
  itemCount: string;
  children?: CollectionChildProps[];
  hasSubContainers: boolean;
  uuid: string;
}

export interface OpenStateItem {
  title: string;
  uuid: string;
  level: number;
  isOpen: boolean;
}

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

const fetchChildren = async (uuid: string) => {
  const res = await fetch(`/api/collectionchildren/${uuid}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch children for uuid: ${uuid}`);
  }
  return res.json();
};

const prefetchNextLevel = async (children: CollectionChildProps[]) => {
  if (children.length > 0) {
    for (const child of children) {
      if (
        child.hasSubContainers &&
        (!child.children || child.children.length === 0)
      ) {
        try {
          child.children = await fetchChildren(child.uuid);
        } catch (err) {
          console.error("Prefetch failed for", child.uuid, err);
        }
      }
    }
  }
};

const AccordionItem = ({
  title,
  itemCount,
  uuid,
  hasSubContainers,
  children = [],
  level = 0,
  headingRef,
  openState,
  setOpenState,
  searchManager,
  updateURL,
}: CollectionChildProps & {
  level?: number;
  headingRef: any;
  openState: OpenStateItem[];
  setOpenState: React.Dispatch<React.SetStateAction<OpenStateItem[]>>;
  updateURL: (queryString: string) => Promise<void>;
  searchManager: SearchManager;
}) => {
  const { ref, scrollIntoViewIfNeeded } = useScrollIntoViewIfNeeded();
  const isOpen = openState.some((item) => item.uuid === uuid && item.isOpen);
  const deepestOpenItem =
    openState.length > 0 ? openState[openState.length - 1].uuid : null;
  const isCurrent = uuid === deepestOpenItem;

  const [fetchedChildren, setFetchedChildren] =
    useState<CollectionChildProps[]>(children);

  const toggleItem = async () => {
    let isCurrentlyOpen = false;
    let newState: OpenStateItem[] = [];

    setOpenState((prev) => {
      isCurrentlyOpen = prev.some((item) => item.uuid === uuid && item.isOpen);

      newState = prev.filter((item) => item.level !== level);

      if (!isCurrentlyOpen) {
        newState = newState.filter((item) => item.level < level);
        newState.push({ title, uuid, level, isOpen: true });
      }

      return newState;
    });

    if (!isCurrentlyOpen) {
      // Opening subcollection filter
      searchManager.handleKeywordChange("");
      searchManager.handleSearchSubmit();
      searchManager.setLastFilter(null);
      updateURL(
        searchManager.handleAddFilter([
          { filter: "subcollection", value: `${title}||${uuid}` },
        ])
      );

      try {
        const nextChildren = await fetchChildren(uuid);
        setFetchedChildren(nextChildren.children);
        await prefetchNextLevel(nextChildren);
      } catch (error) {
        console.error("Failed to fetch children:", error);
      }
    } else {
      // Closing subcollection filter– if there's a parent, return to that filter
      const parent = openState.find((item) => item.level === level - 1);
      if (parent) {
        searchManager.handleKeywordChange("");
        searchManager.handleSearchSubmit();
        searchManager.setLastFilter(null);
        updateURL(
          searchManager.handleAddFilter([
            {
              filter: "subcollection",
              value: `${parent.title}||${parent.uuid}`,
            },
          ])
        );
      } else {
        updateURL(
          searchManager.handleRemoveFilter([
            { filter: "subcollection", value: `${title}||${uuid}` },
          ])
        );
      }
    }
  };

  return (
    <li>
      <Box>
        <Button
          _focus={{
            outline: "none !important",
            boxShadow: "inset 0 0 0 2px var(--nypl-colors-ui-focus) !important",
          }}
          ref={ref}
          id={`${uuid}-btn`}
          w="100%"
          color="black"
          borderRadius="0"
          textAlign="left"
          fontWeight="semibold"
          border="1px solid var(--ui-gray-medium, #BDBDBD)"
          borderTop="unset"
          bg={isOpen ? "ui.gray.light-cool" : "ui.white"}
          _hover={{ bg: "ui.hover.default" }}
          paddingLeft={level > 0 ? (level < 12 ? level * 8 : "96px") : "s"}
          paddingTop="m"
          paddingRight="s"
          paddingBottom="m"
          onClick={() => {
            toggleItem();
            scrollIntoViewIfNeeded();
          }}
          sx={{ zIndex: "0 !important" }}
          aria-expanded={hasSubContainers ? isOpen : undefined}
          aria-current={isCurrent ? "true" : undefined}
        >
          <Flex width="100%" alignItems="center">
            {hasSubContainers && (
              <Icon
                size="small"
                name={isOpen ? "minus" : "plus"}
                visibility="visible"
              />
            )}
            <ButtonText
              title={title}
              hasSubContainers={hasSubContainers}
              level={level}
            />
            <Box as="span" marginLeft="s" fontWeight="400">
              {itemCount}
            </Box>
          </Flex>
        </Button>
        {hasSubContainers && (
          <Collapse in={isOpen}>
            <ul style={{ margin: 0 }}>
              {fetchedChildren.map((child, index) => (
                <AccordionItem
                  key={child.uuid}
                  {...child}
                  level={level + 1}
                  headingRef={headingRef}
                  openState={openState}
                  setOpenState={setOpenState}
                  searchManager={searchManager}
                  updateURL={updateURL}
                />
              ))}
            </ul>
          </Collapse>
        )}
      </Box>
    </li>
  );
};

const CollectionStructure = forwardRef<
  HTMLHeadingElement,
  {
    uuid: string;
    updateURL: (queryString: string) => Promise<void>;
    searchManager: SearchManager;
    setOpenState: React.Dispatch<React.SetStateAction<OpenStateItem[]>>;
    openState: OpenStateItem[];
  }
>(({ uuid, searchManager, updateURL, setOpenState, openState }, headingRef) => {
  const [data, setData] = useState<CollectionChildProps[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const topLevel = await fetchChildren(uuid);
        const filteredChildren = topLevel?.children?.filter(
          (child: any) => child.itemCount > 1
        );
        setData(filteredChildren || []);
        setIsLoaded(true);
      } catch (err) {
        console.error("Error loading top-level collections:", err);
      }
    };
    loadData();
  }, []);

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

  if (data.length === 0) {
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
      <Heading ref={headingRef} size="heading6">
        Collection structure
      </Heading>
      <Box
        w="300px"
        maxH="750px"
        overflowY="auto"
        borderTop="1px solid var(--ui-gray-medium, #BDBDBD)"
      >
        <ul>
          {data.map((item) => (
            <AccordionItem
              key={item.uuid}
              {...item}
              level={0}
              headingRef={headingRef}
              openState={openState}
              setOpenState={setOpenState}
              searchManager={searchManager}
              updateURL={updateURL}
            />
          ))}
        </ul>
      </Box>
    </Flex>
  );
});

CollectionStructure.displayName = "CollectionStructure";

export default CollectionStructure;
