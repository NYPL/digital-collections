"use client";

import AudioViewer from "../clover/audio/viewer";
import VideoViewer from "../clover/video/viewer";
import { ItemModel } from "../../../models/item";
import React from "react";
import { UniversalViewer } from "../uv/universalViewerLazy";
import "universalviewer/dist/esm/index.css";

interface ItemProps {
  item: ItemModel;
  type: string;
}

const contentTypes = {
  "still image": "image",
  "moving image": "video",
  "sound recording": "audio",
};

const ItemMediaViewer = ({ item, type }: ItemProps) => {
  console.log("Item metadata: ", item.metadata);
  let viewer;
  switch (type) {
    case "image":
      if (item.isSingleCapture) {
        viewer = (
          <>
            <UniversalViewer
              // "http://localhost:8000/items/8e8dc6a0-c6eb-012f-7a58-58d385a7bc34"
              // "https://wellcomelibrary.org/iiif/b18035723/manifest"
              manifestId={`http://localhost:8000/items/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
              canvasIndex={0}
              config={{}}
            />
          </>
        );
      } else {
        viewer = (
          <>
            <UniversalViewer
              manifestId={`http://localhost:8000/items/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"} //{`https://be73-100-37-199-113.ngrok-free.app/items/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
              canvasIndex={0}
              config={{}}
            />
          </>
        );
      }
      return viewer;
    case "video":
      viewer = (
        <>
          <VideoViewer />
        </>
      );
      return viewer;
    case "audio":
      viewer = (
        <>
          <AudioViewer />
        </>
      );
      return viewer;
    default:
      return <h2>No type of resource match</h2>;
  }
};

export default ItemMediaViewer;
