"use client";
import React from "react";
import Item from "../../items/item";

import { ItemModel } from "@/src/models/item";

export function ItemPage({
  manifest,
  uuid,
  itemDetail,
  canvasIndex,
  citationsData,
}) {
  const item = new ItemModel(uuid, manifest, itemDetail, citationsData);
  return <Item manifest={manifest} item={item} canvasIndex={canvasIndex} />;
}
