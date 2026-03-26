"use client";
import React from "react";
import Item from "../../items/item";

import { ItemModel } from "@/src/models/item";

export function ItemPage({ uuid, itemDetail, citationsData }) {
  const item = new ItemModel(uuid, itemDetail, citationsData);
  return <Item item={item} />;
}
