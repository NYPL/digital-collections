"use client";

import ImageViewer from "./clover/image/image";
import CloverImageViewer from "./clover/image/viewer";
import AudioViewer from "./clover/audio/viewer";
import VideoViewer from "./clover/video/viewer";
import BookViewer from "./clover/book/viewer";
import { ItemModel } from "../../models/item";
import React from "react";
import { UniversalViewer } from "./uv/universalViewerLazy";
import { Link, Button } from "@nypl/design-system-react-components";
import allMapsData from "@/src/data/maps/allmaps";
import "universalviewer/dist/esm/index.css";

interface ItemProps {
  item: ItemModel;
  type: string;
}

// from mms
// <% typeofresource_options = [['','',:selected => 'selected'],
// ['text','text'],
// ['cartographic','cartographic'],
// ['notated music','notated music'],
// ['sound recording','sound recording'],
// ['sound recording-musical','sound recording-musical'],
// ['sound recording-nonmusical','sound recording-nonmusical'],
// ['still image','still image'],
// ['moving image','moving image'],
// ['three dimensional object','three dimensional object'],
// ['software, multimedia','software, multimedia']] %>
const contentTypes = {
  text: "image",
  cartographic: "image",
  "notated music": "image",
  "still image": "image",
  "moving image": "video",
  "sound recording": "audio",
  "sound recording-nonmusical": "audio",
  "sound recording-musical": "audio",
  "three dimensional object": "image",
  "software, multimedia": "image",
};

const isInAllMaps = (item) => {
  return (
    item.typeOfResource === "cartographic" &&
    allMapsData.find((obj) => obj.uuid === item.uuid)
  );
};

const Item = ({ item, type }: ItemProps) => {
  console.log("uuid is: ", item.uuid);
  let viewer;

  const itemType = type ? type : contentTypes[item.typeOfResource]; // for proof of concept only

  switch (itemType) {
    case "image":
      // if (item.isSingleCapture) {
      viewer = (
        <>
          <h2 marginBottom="xs"> Image: {item.title} </h2>

          {isInAllMaps(item) ? (
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
            // "https://wellcomelibrary.org/iiif/b18035723/manifest"
            manifestId={"https://wellcomelibrary.org/iiif/b18035723/manifest"}
            //{"https://api.dc.library.northwestern.edu/api/v2/collections/c373ecd2-2c45-45f2-9f9e-52dc244870bd?as=iiif"} //{`https://be73-100-37-199-113.ngrok-free.app//items/a9c43f00-c600-012f-59c3-58d385a7bc34`}//
            // manifestId={
            //   "http://localhost:8000/items/8e8dc6a0-c6eb-012f-7a58-58d385a7bc34"
            // }
            //{`https://be73-100-37-199-113.ngrok-free.app//items/${item.uuid}`} //a9c43f00-c600-012f-59c3-58d385a7bc34//{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
            canvasIndex={0}
            config={{}}
          />
          {/* <CloverImageViewer uuid={item.uuid} /> */}
          {/* openseadragon viewer */}
          {/* <ImageViewer imageID={item.capture.imageID.$} />  */}
        </>
      );
      // } else {
      //   viewer = (
      //     <>
      //       <h2> Image: {item.title} </h2>
      //       <UniversalViewer
      //         manifestId={"https://wellcomelibrary.org/iiif/b18035723/manifest"} //{`https://be73-100-37-199-113.ngrok-free.app/items/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
      //         canvasIndex={0}
      //         config={{}}
      //       />
      //       <CloverImageViewer uuid={item.uuid} />
      //     </>
      //   );
      // }
      return viewer;
    case "video":
      viewer = (
        <>
          <h2> Video: {item.title} </h2>
          {/* <UniversalViewer
            manifestId={
              "https://iiif.io/api/cookbook/recipe/0003-mvm-video/manifest.json"
            } //{`https://be73-100-37-199-113.ngrok-free.app/items/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
            canvasIndex={0}
            config={{}}
          /> */}
          <VideoViewer />
        </>
      );
      return viewer;
    case "audio":
      viewer = (
        <>
          <h2> Audio: {item.title} </h2>
          {/* <UniversalViewer
            manifestId={
              "https://iiif.io/api/cookbook/recipe/0002-mvm-audio/manifest.json"
            }
            canvasIndex={0}
            config={{}}
          /> */}
          <AudioViewer />
        </>
      );
      return viewer;
    default:
      return <h2>No type of resource match</h2>;
  }
};

export default Item;
