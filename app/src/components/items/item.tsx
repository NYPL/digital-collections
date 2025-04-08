"use client";

import { ItemModel } from "../../models/item";
import React from "react";
import ItemMediaViewer from "./viewer/viewer";
import ItemOverview from "./overview/overview";
import { Heading, Banner } from "@nypl/design-system-react-components";

interface ItemProps {
  manifest: any;
  item: ItemModel;
  type: string;
}

const Item = ({ item, type }: ItemProps) => {
  const itemType = type ? type : item.contentType; //TO DO: do we want to keep this?
  return (
    <>
      <Heading level="h2">{item.title}</Heading>
      <ItemMediaViewer item={item} type={itemType} />
      {/* TO DO: Add link */}
      <Banner
        marginTop="m"
        content={`Our collections include some content that may be harmful or dificult to view. Learn more.`}
        type="informative"
      />
      <ItemOverview item={item} />
    </>
  );
};

export default Item;
