"use client";

import AudioViewer from "../clover/audio/viewer";
import VideoViewer from "../clover/video/viewer";
import { ItemModel } from "../../../models/item";
import React from "react";
import { UniversalViewer } from "../uv/universalViewerLazy";
import "universalviewer/dist/esm/index.css";
import {
  IMAGE_CONTENT_TYPE_NAMES,
  AUDIO_CONTENT_TYPE_NAMES,
  VIDEO_CONTENT_TYPE_NAMES,
} from "../../../config/constants";

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
