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

const ItemViewer = ({ item, type }: ItemProps) => {
  let viewer;
  switch (type) {
    case "image":
      if (item.isSingleCapture) {
        viewer = (
          <>
            <h2> Image: {item.title} </h2>
            <UniversalViewer
              // "http://localhost:8000/items/8e8dc6a0-c6eb-012f-7a58-58d385a7bc34"
              // "https://wellcomelibrary.org/iiif/b18035723/manifest"
              manifestId={"https://wellcomelibrary.org/iiif/b18035723/manifest"}
              canvasIndex={0}
              config={{}}
            />
          </>
        );
      } else {
        viewer = (
          <>
            <h2> Image: {item.title} </h2>
            <UniversalViewer
              manifestId={"https://wellcomelibrary.org/iiif/b18035723/manifest"} //{`https://be73-100-37-199-113.ngrok-free.app/items/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
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
          <h2> Video: {item.title} </h2>
          <VideoViewer />
        </>
      );
      return viewer;
    case "audio":
      viewer = (
        <>
          <h2> Audio: {item.title} </h2>
          <AudioViewer />
        </>
      );
      return viewer;
    default:
      return <h2>No type of resource match</h2>;
  }
};

export default ItemViewer;
