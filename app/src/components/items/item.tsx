"use client";

import { ItemModel } from "../../models/item";
import React from "react";
import ItemMediaViewer from "./viewer/viewer";
import ItemMediaViewerFallback from "./viewer/fallback";
import ItemOverview from "./overview/overview";
import { CanvasProvider } from "../../context/CanvasProvider";
import { MapViewProvider } from "../../context/MapViewProvider";
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
import AllMapsViewer from "./maps/allMaps";

interface ItemProps {
  item: ItemModel;
}

const renderViewer = (item) => {
  return item.hasItems && !item.isRestricted;
};

const Item = ({ item }: ItemProps) => {
  return (
    <CanvasProvider>
      <MapViewProvider>
        <Box marginTop="-3em">
          {renderViewer(item) ? (
            <>
              <Heading level="h1" paddingBottom="s">
                <span className="notranslate">{item.title}</span>
              </Heading>
              <ItemMediaViewer item={item} />
            </>
          ) : (
            <>
              <ItemMediaViewerFallback item={item} />
              <Heading level="h1">
                <span className="notranslate">{item.title}</span>
              </Heading>
            </>
          )}
          {/* TODO: horizontally align Icon with Text with breakpoints */}
          <HStack marginTop="xs" direction="row">
            <Icon name="actionInfo" size="large" />
            <Text marginTop="1em" paddingBottom="s">
              Our collections include some content that may be harmful or
              difficult to view.{" "}
              <Link href="https://digitalcollections.nypl.org/about#nypl_harmful_content_statement">
                Learn more.
              </Link>{" "}
            </Text>
          </HStack>
          <HorizontalRule marginTop="xs" marginBottom="m" />
          <ItemOverview item={item} />
        </Box>
      </MapViewProvider>
    </CanvasProvider>
  );
};

export default Item;
