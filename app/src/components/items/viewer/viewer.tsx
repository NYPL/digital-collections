"use client";

import { ItemModel } from "../../../models/item";
import React from "react";
import { UniversalViewer } from "../uv/universalViewerLazy";
import "universalviewer/dist/esm/index.css";

interface ItemProps {
  item: ItemModel;
}

const ItemMediaViewer = ({ item }: ItemProps) => {
  let viewer;
  viewer = (
    <>
      <UniversalViewer
        manifestId={item.manifestURL}
        canvasIndex={0}
        config={{}}
        onChangeCanvas={(canvasIndex) => {
          // why is this not printing in the console
          console.log("canvas index changed", canvasIndex);
        }}
        onChangeManifest={(manifest) => {
          console.log("manfest changed", manifest);
        }}
      />
    </>
  );
  return viewer;
};

export default ItemMediaViewer;
