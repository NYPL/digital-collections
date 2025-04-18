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
  type: string;
}

const ItemMediaViewer = ({ item, type }: ItemProps) => {
  let viewer;
  viewer = (
    <>
      <UniversalViewer
        manifestId={item.manifestURL}
        // {`${process.env.COLLECTIONS_API_URL}/manifests/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"} //{`https://be73-100-37-199-113.ngrok-free.app/items/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
        canvasIndex={0}
        config={{}}
      />
    </>
  );
  return viewer;
  // switch (type) {
  //   case "image":
  //     viewer = (
  //       <>
  //         <UniversalViewer
  //           manifestId={item.manifestURL}
  //           // {`${process.env.COLLECTIONS_API_URL}/manifests/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"} //{`https://be73-100-37-199-113.ngrok-free.app/items/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
  //           canvasIndex={0}
  //           config={{}}
  //         />
  //       </>
  //     );
  //     return viewer;
  //   case "video":
  //     viewer = (
  //       <>
  //         <VideoViewer manifestId={item.manifestURL} />
  //       </>
  //     );
  //     return viewer;
  //   case "audio":
  //     viewer = (
  //       <>
  //         <AudioViewer manifestId={item.manifestURL} />
  //       </>
  //     );
  //     return viewer;
  //   default:
  //     return <h2>No type of resource match</h2>;
  // }
};

export default ItemMediaViewer;
