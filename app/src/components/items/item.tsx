"use client";

import { ItemModel } from "../../models/item";
import React from "react";
import ItemViewer from "./viewer/viewer";
import MetadataOverview from "./metadata/overview";

interface ItemProps {
  item: ItemModel;
  type: string;
}

// const contentTypes = {
//   "still image": "image",
//   "moving image": "video",
//   "sound recording": "audio",
// };

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

const Item = ({ item, type }: ItemProps) => {
  console.log("uuid is: ", item.uuid);
  const itemType = type ? type : contentTypes[item.typeOfResource]; // for proof of concept only
  return (
    <>
      <ItemViewer item={item} type={itemType} />
      <MetadataOverview item={item} />
    </>
  );
};

export default Item;
