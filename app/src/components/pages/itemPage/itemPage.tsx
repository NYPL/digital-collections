"use client";
import React from "react";
import Item from "../../items/item";

import { ItemModel } from "@/src/models/item";

export function ItemPage({ manifest, data, type, uuid }) {
  const item = new ItemModel(data, uuid, manifest);
  return <Item manifest={manifest} item={item} type={type} />;
}
