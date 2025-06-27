"use client";

import { ItemModel } from "../../models/item";
import React from "react";
import ItemMediaViewer from "./viewer/viewer";
import ItemMediaViewerFallback from "./viewer/fallback";
import ItemOverview from "./overview/overview";
import { CanvasProvider } from "../../context/CanvasProvider";

import {
  Heading,
  Banner,
  Box,
  Link,
  Icon,
  Text,
  HorizontalRule,
  HStack,
} from "@nypl/design-system-react-components";

interface ItemProps {
  manifest: any;
  item: ItemModel;
  canvasIndex: number; //for when/if this is a query param
}

const renderViewer = (item) => {
  return item.hasItems && !item.isRestricted;
};

const Item = ({ manifest, item, canvasIndex }: ItemProps) => {
  return (
    <CanvasProvider>
      <Box marginTop="-3em">
        {renderViewer(item) ? (
          <>
            <Heading level="h1">{item.title}</Heading>
            <ItemMediaViewer item={item} canvasIndex={canvasIndex} />
          </>
        ) : (
          <>
            <ItemMediaViewerFallback item={item} />
            <Heading level="h1">{item.title}</Heading>
          </>
        )}
        {/* TODO: horizontally align Icon with Text with breakpoints */}
        <HStack marginTop="xs" direction="row">
          <Icon name="actionInfo" size="large" />
          <Text marginTop="1em">
            Our collections include some content that may be harmful or dificult
            to view.{" "}
            <Link href="https://digitalcollections.nypl.org/about#nypl_harmful_content_statement">
              Learn more.
            </Link>{" "}
          </Text>
        </HStack>
        <HorizontalRule marginTop="xs" marginBottom="m" />
        <ItemOverview item={item} />
      </Box>
    </CanvasProvider>
  );
};

export default Item;
