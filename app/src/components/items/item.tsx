"use client";

import { ItemModel } from "../../models/item";
import React from "react";
import ItemMediaViewer from "./viewer/viewer";
import ItemMediaViewerFallback from "./viewer/fallback";
import ItemOverview from "./overview/overview";

import {
  Heading,
  Banner,
  Box,
  Link,
  Icon,
  Text,
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
    <>
      <Box marginTop="-3em">
        {renderViewer(item) ? (
          <>
            <Heading level="h2">{item.title}</Heading>
            <ItemMediaViewer item={item} canvasIndex={canvasIndex} />
          </>
        ) : (
          <>
            <ItemMediaViewerFallback item={item} />
            <Heading level="h2">{item.title}</Heading>
          </>
        )}
        <Text marginTop="m">
          <Icon name="errorOutline" size="medium" /> Our collections include
          some content that may be harmful or dificult to view.{" "}
          <Link href="https://digitalcollections.nypl.org/about#nypl_harmful_content_statement">
            Learn more.
          </Link>{" "}
        </Text>
        <ItemOverview item={item} canvasIndex={canvasIndex} />
      </Box>
    </>
  );
};

export default Item;
