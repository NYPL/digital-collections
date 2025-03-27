"use client";
import React from "react";

import AudioViewer from "../clover/audio/viewer";
import VideoViewer from "../clover/video/viewer";
import { ItemModel } from "../../../models/item";
import { UniversalViewer } from "../uv/universalViewerLazy";
import "universalviewer/dist/esm/index.css";
import allMapsData from "@/src/data/maps/allmaps";
import { Link } from "@nypl/design-system-react-components";

interface ItemProps {
  manifest?: any;
  item: ItemModel;
  type: string;
}

const isInAllMaps = (item) => {
  return (
    item.typeOfResource === "cartographic" &&
    allMapsData.find((obj) => obj.uuid === item.uuid)
  );
};

const contentTypes = {
  "still image": "image",
  "moving image": "video",
  "sound recording": "audio",
};

const ItemMediaViewer = ({ item, type }: ItemProps) => {
  console.log("Item metadata: ", item.metadata);
  console.log("item is: ", item);
  let viewer;
  switch (type) {
    case "image":
      viewer = (
        <>
          <h2> Single Image: {item.title} </h2>
          {/* {isInAllMaps(item) ? ( */}
          {item.isInAllMaps ? (
            <Link
              type="buttonSecondary"
              href={`/maps/${item.uuid}`}
              marginBottom="xs"
            >
              View in map warper
            </Link>
          ) : (
            <></>
          )}
          <UniversalViewer
            manifestId={item.manifestURL}
            // "http://localhost:8000/items/8e8dc6a0-c6eb-012f-7a58-58d385a7bc34"
            // "https://wellcomelibrary.org/iiif/b18035723/manifest"
            // manifestId={"https://wellcomelibrary.org/iiif/b18035723/manifest"} //{`http://localhost:8000/items/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
            canvasIndex={0}
            config={{}}
          />
        </>
      );
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
