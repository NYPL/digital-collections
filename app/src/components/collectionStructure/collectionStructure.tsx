import { useState, forwardRef } from "react";
import { Box, Button, Collapse } from "@chakra-ui/react";
import {
  Flex,
  Icon,
  Text,
  Heading,
} from "@nypl/design-system-react-components";

export interface CollectionChildProps {
  title: string;
  itemCount: string;
  children?: CollectionChildProps[];
}

interface OpenStateItem {
  title: string;
  level: number;
  isOpen: boolean;
}

const fetchChildren = async (
  title: string
): Promise<CollectionChildProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { title: `${title} - Child 1`, itemCount: "5", children: [] },
        { title: `${title} - Child 2`, itemCount: "3", children: [] },
      ]);
    }, 1000);
  });
};

const prefetchNextLevel = async (children: CollectionChildProps[]) => {
  console.log(
    "now pre-fetching children of",
    children[0].title,
    children[1].title
  );
  for (const child of children) {
    if (!child.children || child.children.length === 0) {
      child.children = await fetchChildren(child.title);
    }
  }
};

const AccordionItem = ({
  title,
  itemCount,
  children = [],
  level = 0,
  headingRef,
  openState,
  setOpenState,
  fetchChildren,
}: CollectionChildProps & {
  level?: number;
  headingRef: any;
  openState: OpenStateItem[];
  setOpenState: React.Dispatch<React.SetStateAction<OpenStateItem[]>>;
  fetchChildren: (title: string) => Promise<CollectionChildProps[]>;
}) => {
  const isOpen = openState.some((item) => item.title === title && item.isOpen);

  const [fetchedChildren, setFetchedChildren] =
    useState<CollectionChildProps[]>(children);
  const hasChildren = fetchedChildren.length > 0;

  const toggleItem = async (title: string, level: number) => {
    let isCurrentlyOpen = false;
    setOpenState((prev) => {
      // Close all siblings at the same level
      let newState = prev.filter((item) => item.level !== level);

      isCurrentlyOpen = prev.some(
        (item) => item.title === title && item.isOpen
      );
      if (!isCurrentlyOpen) {
        // Close all children when the parent is closed
        newState = newState.filter((item) => item.level < level);

        // Open the clicked item
        newState.push({ title, level, isOpen: true });
        setTimeout(() => {
          headingRef.current?.focus();
        }, 200);
      }
      return newState;
    });

    if (hasChildren && fetchedChildren.length !== 0) {
      try {
        // Fetch children of the clicked item only when opening
        const nextChildren = await fetchChildren(title);
        setFetchedChildren(nextChildren);

        // Prefetch the next level of children in advance
        await prefetchNextLevel(nextChildren);
      } catch (error) {
        console.error("Failed to fetch children:", error);
      }
    }
  };

  return (
    <Box>
      <Button
        _focus={{
          outline: "none !important",
          boxShadow: "inset 0 0 0 2px var(--nypl-colors-ui-focus) !important",
        }}
        id={`${title}-btn`}
        w="100%"
        color="black"
        borderRadius="0"
        textAlign="left"
        fontWeight="semibold"
        border="1px solid var(--ui-gray-medium, #BDBDBD)"
        borderTop="unset"
        bg={isOpen ? "ui.gray.light-cool" : "ui.white"}
        _hover={{ bg: "ui.hover.default" }}
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
      {(hasChildren || fetchedChildren.length > 0) && (
        <Collapse in={isOpen}>
          {fetchedChildren.map((child, index) => (
            <AccordionItem
              key={index}
              {...child}
              level={level + 1}
              headingRef={headingRef}
              openState={openState}
              setOpenState={setOpenState}
              fetchChildren={fetchChildren}
            />
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
      <Heading size="heading6">Collection structure</Heading>
      <Box
        w="300px"
        maxH="750px"
        overflowY="auto"
        borderTop="1px solid var(--ui-gray-medium, #BDBDBD)"
      >
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            {...item}
            level={0}
            headingRef={headingRef}
            openState={openState}
            setOpenState={setOpenState}
            fetchChildren={fetchChildren}
          />
        ))}
      </Box>
    </Flex>
  );
});

CollectionStructure.displayName = "CollectionStructure";

export default CollectionStructure;
