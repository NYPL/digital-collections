import { useState, forwardRef } from "react";
import { Box, Button, Collapse } from "@chakra-ui/react";
import {
  Flex,
  Icon,
  Text,
  Heading,
} from "@nypl/design-system-react-components";
import { sampleStructure } from "__tests__/__mocks__/data/mockCollectionStructure";

export interface CollectionChildProps {
  title: string;
  itemCount: string;
  children?: CollectionChildProps[];
  hasChildren: boolean;
  uuid: string;
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
      // simulating fetching real data but actually just filtering the mock
      const findChildren = (data: CollectionChildProps[], title: string) => {
        for (const item of data) {
          if (item.title === title) {
            return item.children || [];
          } else if (item.children) {
            const result = findChildren(item.children, title);
            if (result.length > 0) return result;
          }
        }
        return [];
      };

      resolve(findChildren(sampleStructure, title));
    }, 1000);
  });
};

const prefetchNextLevel = async (children: CollectionChildProps[]) => {
  for (const child of children) {
    if (child.children && child.children.length > 0) {
      console.log("now pre-fetching children of", child.title);
      // only fetch and add children if they aren't already there
      child.children = await fetchChildren(child.title);
    }
  }
};

const AccordionItem = ({
  title,
  itemCount,
  uuid,
  hasChildren,
  children = [],
  level = 0,
  headingRef,
  openState,
  setOpenState,
}: CollectionChildProps & {
  level?: number;
  headingRef: any;
  openState: OpenStateItem[];
  setOpenState: React.Dispatch<React.SetStateAction<OpenStateItem[]>>;
}) => {
  const isOpen = openState.some((item) => item.title === title && item.isOpen);
  const deepestOpenItem =
    openState.length > 0 ? openState[openState.length - 1].title : null;
  const isCurrent = title === deepestOpenItem;

  const [fetchedChildren, setFetchedChildren] =
    useState<CollectionChildProps[]>(children);

  const toggleItem = async (title: string, level: number) => {
    const updateStateAndFetch = async (newState: any) => {
      const isCurrentlyOpen = newState.some(
        (item) => item.title === title && item.isOpen
      );

      if (isCurrentlyOpen && hasChildren) {
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

    setOpenState((prev) => {
      // Close all siblings at the same level
      let newState = prev.filter((item) => item.level !== level);

      const isCurrentlyOpen = prev.some(
        (item) => item.title === title && item.isOpen
      );

      // Close all children when the parent is closed
      if (!isCurrentlyOpen) {
        newState = newState.filter((item) => item.level < level);
        newState.push({ title, level, isOpen: true });
      }

      updateStateAndFetch(newState);
      return newState;
    });
  };

  return (
    <li>
      <Box>
        <Button
          _focus={{
            outline: "none !important",
            boxShadow: "inset 0 0 0 2px var(--nypl-colors-ui-focus) !important",
          }}
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
          paddingLeft={level > 0 ? level * 8 : "s"}
          paddingTop="m"
          paddingRight="s"
          paddingBottom="m"
          onClick={() => toggleItem(title, level)}
          {...(hasChildren ? { "aria-expanded": isOpen } : {})}
          aria-current={isCurrent ? "true" : undefined}
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
            <Box as="span" marginLeft="s">
              {itemCount}
            </Box>
          </Flex>
        </Button>
        {(hasChildren || fetchedChildren.length > 0) && (
          <Collapse in={isOpen}>
            <ul style={{ margin: "0" }}>
              {fetchedChildren.map((child, index) => (
                <AccordionItem
                  key={index}
                  {...child}
                  level={level + 1}
                  headingRef={headingRef}
                  openState={openState}
                  setOpenState={setOpenState}
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
        <ul>
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              {...item}
              level={0}
              headingRef={headingRef}
              openState={openState}
              setOpenState={setOpenState}
            />
          ))}
        </ul>
      </Box>
    </Flex>
  );
});

CollectionStructure.displayName = "CollectionStructure";

export default CollectionStructure;
