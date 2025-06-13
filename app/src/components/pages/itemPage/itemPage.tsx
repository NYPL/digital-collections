"use client";
import React from "react";
import Item from "../../items/item";

import { ItemModel } from "@/src/models/item";

export function ItemPage({ manifest, uuid, canvasIndex }) {
  const item = new ItemModel(uuid, manifest);
  return <Item manifest={manifest} item={item} canvasIndex={canvasIndex} />;
}
