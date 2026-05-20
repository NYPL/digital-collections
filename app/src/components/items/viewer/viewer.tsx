"use client";

import { ItemModel } from "../../../models/item";
import React from "react";
import { UniversalViewerDynamic as UniversalViewer } from "../uv/dynamic";
import uvConfig from "../uv/uvConfig.json";
import { PlyrPlayer } from "../plyr/dynamic";

interface ItemProps {
  item: ItemModel;
}

const ItemMediaViewer = ({ item }: ItemProps) => {
  let viewer;
  let contentType = item.contentType;
  const captureUuidToIdx = Object.fromEntries(
    item.captures.map((capture) => [capture.uuid, capture.orderInSequence - 1])
  );

  if (item.isImage) {
    viewer = (
      <>
        <UniversalViewer
          manifestId={item.manifestURL}
          captureUuidToIdx={captureUuidToIdx}
          config={uvConfig}
        />
      </>
    );
  } else {
    viewer = (
      <>
        <PlyrPlayer
          title={item.title}
          sources={item.mediaFiles}
          captions={item.captions}
          type={item.contentType}
        />
      </>
    );
  }

  return viewer;
};

export default ItemMediaViewer;
