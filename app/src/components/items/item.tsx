"use client";

import { ItemModel } from "../../models/item";
import React from "react";
import ItemMediaViewer from "./viewer/viewer";
import MetadataOverview from "./metadata/overview";

interface ItemProps {
  manifest: any;
  item: ItemModel;
  type: string;
}

const contentTypes = {
  text: "image",
  cartographic: "image",
  "notated music": "image",
  "still image": "image",
  "moving image": "video",
  "sound recording": "audio",
  "sound recording-nonmusical": "audio",
  "sound recording-musical": "audio",
  "three dimensional object": "image",
  "software, multimedia": "image",
};

const Item = ({ manifest, item, type }: ItemProps) => {
  console.log("uuid is: ", item.uuid);
  const itemType = type ? type : contentTypes[item.typeOfResource]; // for proof of concept only
  return (
    <>
      <ItemMediaViewer manifest={manifest} item={item} type={itemType} />
      <MetadataOverview manifest={manifest} item={item} />
    </>
  );
};

export default Item;
