import { useState, useEffect, forwardRef } from "react";
import { Box, Button, Collapse } from "@chakra-ui/react";
import {
  Flex,
  Icon,
  Text,
  Heading,
  Tooltip,
} from "@nypl/design-system-react-components";
import { useScrollIntoViewIfNeeded } from "@/src/hooks/useScrollIntoViewIfNeeded";
import { headerBreakpoints } from "@/src/utils/breakpoints";

export interface CollectionChildProps {
  title: string;
  itemCount: string;
  children?: CollectionChildProps[];
  hasSubContainers: boolean;
  uuid: string;
}

interface OpenStateItem {
  title: string;
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
  const res = await fetch(`/api/collectionchildren?uuid=${uuid}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch children for uuid: ${uuid}`);
  }
  return res.json();
};

const prefetchNextLevel = async (children: CollectionChildProps[]) => {
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
}: CollectionChildProps & {
  level?: number;
  headingRef: any;
  openState: OpenStateItem[];
  setOpenState: React.Dispatch<React.SetStateAction<OpenStateItem[]>>;
}) => {
  const { ref, scrollIntoViewIfNeeded } = useScrollIntoViewIfNeeded();
  const isOpen = openState.some((item) => item.title === title && item.isOpen);
  const deepestOpenItem =
    openState.length > 0 ? openState[openState.length - 1].title : null;
  const isCurrent = title === deepestOpenItem;

  const [fetchedChildren, setFetchedChildren] =
    useState<CollectionChildProps[]>(children);

  const toggleItem = async () => {
    setOpenState((prev) => {
      const isCurrentlyOpen = prev.some(
        (item) => item.title === title && item.isOpen
      );
      let newState = prev.filter((item) => item.level !== level);

      if (!isCurrentlyOpen) {
        newState = newState.filter((item) => item.level < level);
        newState.push({ title, level, isOpen: true });

        (async () => {
          try {
            const nextChildren = await fetchChildren(uuid);
            setFetchedChildren(nextChildren.children);
            await prefetchNextLevel(nextChildren);
          } catch (error) {
            console.error("Failed to fetch children:", error);
          }
        })();
      }

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

const CollectionStructure = forwardRef<HTMLHeadingElement, { uuid: string }>(
  ({ uuid }, headingRef) => {
    const [openState, setOpenState] = useState<OpenStateItem[]>([]);
    const [data, setData] = useState<CollectionChildProps[]>([]);

    useEffect(() => {
      const loadData = async () => {
        try {
          const topLevel = await fetchChildren(uuid);
          setData(topLevel?.children);
        } catch (err) {
          console.error("Error loading top-level collections:", err);
        }
      };
      loadData();
    }, []);

    return (
      <Flex
        flexDir="column"
        sx={{
          [`@media screen and (max-width: ${headerBreakpoints.smTablet}px)`]: {
            display: "none",
          },
        }}
      >
        <Heading ref={headingRef as any} size="heading6">
          Collection structure
        </Heading>
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
  }
);

CollectionStructure.displayName = "CollectionStructure";

export default CollectionStructure;
