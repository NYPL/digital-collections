"use client";
import React from "react";
import Item from "../../items/item";

export function ItemPage({ item, type }) {
  console.log("item is: ", item);
  return (
    <>
      <Item item={item} type={type} />
    </>
  );
}
