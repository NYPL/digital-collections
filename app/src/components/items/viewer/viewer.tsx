"use client";

import { ItemModel } from "../../../models/item";
import React from "react";
import { UniversalViewer } from "../uv/universalViewerLazy";
import "universalviewer/dist/esm/index.css";

interface ItemProps {
  item: ItemModel;
  canvasIndex: number;
}

const ItemMediaViewer = ({ item, canvasIndex }: ItemProps) => {
  let viewer;
  viewer = (
    <>
      <UniversalViewer
        manifestId={item.manifestURL}
        canvasIndex={canvasIndex}
        config={{}}
        onChangeCanvas={(manifest, canvas) => {
          // why is this not printing in the console
          console.log("canvas index changed", manifest, canvas);
        }}
        onChangeManifest={(manifest) => {
          console.log("manfest changed", manifest);
        }}
        //TODO: Length is hardcoded as 20s, but should be extracted from the metadata
        analyticsMetadata={{
          fileType: item.contentType,
          media_name: item.title,
          length: 20,
        }}
      />
    </>
  );
  return viewer;
};

export default ItemMediaViewer;
