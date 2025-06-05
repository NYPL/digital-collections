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
} from "@nypl/design-system-react-components";

interface ItemProps {
  manifest: any;
  item: ItemModel;
  type: string;
}

const renderViewer = (item) => {
  return item.hasItems && !item.isRestricted;
};

const Item = ({ item, type }: ItemProps) => {
  return (
    <>
      <Box marginTop="-3em">
        <Heading level="h2">{item.title}</Heading>
        {renderViewer(item) ? (
          <ItemMediaViewer item={item} />
        ) : (
          <ItemMediaViewerFallback item={item} />
        )}
        <Banner
          marginTop="m"
          content={
            <>
              Our collections include some content that may be harmful or
              dificult to view.{" "}
              <Link href="https://digitalcollections.nypl.org/about#nypl_harmful_content_statement">
                Learn more.
              </Link>{" "}
            </>
          }
          type="neutral"
        ></Banner>
        <ItemOverview item={item} />
      </Box>
    </>
  );
};

export default Item;
