"use client";
import React from "react";
import Item from "../../items/item";
import { getItemData } from "@/src/utils/apiHelpers";
import { ItemModel } from "@/src/models/item";

export function ItemPage({ data, type, uuid }) {
  console.log("data in ItemPage is: ", data);
  const item = new ItemModel(data, uuid);
  return (
    <>
      <Item item={item} type={type} />
    </>
  );
}
