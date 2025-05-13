"use client";

import { ItemModel } from "../../models/item";
import React from "react";
import ItemMediaViewer from "./viewer/viewer";
import ItemOverview from "./overview/overview";
import {
  Heading,
  Banner,
  Box,
  Text,
  Link,
} from "@nypl/design-system-react-components";

interface ItemProps {
  manifest: any;
  item: ItemModel;
  type: string;
}

const Item = ({ item, type }: ItemProps) => {
  const itemType = type ? type : item.contentType; //TO DO: do we want to keep this?
  return (
    <>
      <Box marginTop="-3em">
        <Heading level="h2">{item.title}</Heading>
        {item.hasItems ? (
          <ItemMediaViewer item={item} type={itemType} />
        ) : (
          <></>
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
          type="informative"
        ></Banner>
        <ItemOverview item={item} />
      </Box>
    </>
  );
};

export default Item;
