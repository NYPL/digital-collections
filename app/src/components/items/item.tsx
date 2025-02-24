// "use client"

import ImageViewer from "./clover/image/image";
import CloverImageViewer from "./clover/image/viewer";
import AudioViewer from "./clover/audio/viewer";
import VideoViewer from "./clover/video/viewer";
import BookViewer from "./clover/book/viewer";
import { ItemModel } from "../../models/item";
import React from "react";
import { UniversalViewer } from "./uv/universalViewerLazy";
import "universalviewer/dist/esm/index.css";

interface ItemProps {
  item: ItemModel;
}

const Item = ({ item }: ItemProps) => {
  console.log("uuid is: ", item.uuid);
  let viewer;
  switch (item.typeOfResource) {
    case "still image":
      if (item.isSingleCapture) {
        viewer = (
          <>
            <h2> Image: {item.title} </h2>
            <UniversalViewer
              manifestId={`https://1e23-74-71-128-30.ngrok-free.app/items/${item.uuid}`} //a9c43f00-c600-012f-59c3-58d385a7bc34//{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
              canvasIndex={0}
              // onChangeCanvas={(canvasIndex) => {
              //   console.log("canvas index changed", canvasIndex);
              // }}
              // onChangeManifest={(manifest) => {
              //   console.log("manfest changed", manifest);
              // }}
              config={{}}
            />
            <CloverImageViewer uuid={item.uuid} />
            {/* <ImageViewer imageID={item.capture.imageID.$} /> */}
          </>
        );
      } else {
        viewer = (
          <>
            <h2> Image: {item.title} </h2>
            <UniversalViewer
              manifestId={`https://1e23-74-71-128-30.ngrok-free.app/items/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
              canvasIndex={0}
              // onChangeCanvas={(canvasIndex) => {
              //   console.log("canvas index changed", canvasIndex);
              // }}
              // onChangeManifest={(manifest) => {
              //   console.log("manfest changed", manifest);
              // }}
              config={{}}
            />
            <CloverImageViewer uuid={item.uuid} />
          </>
        );
      }
      return viewer;
    case "moving image":
      viewer = (
        <>
          <h2> Video: {item.title} </h2>
          <VideoViewer />
        </>
      );
      return viewer;
    case "sound recording":
      viewer = (
        <>
          <h2> Audio: {item.title} </h2>
          <AudioViewer />
        </>
      );
      return viewer;
    case "text":
      //also PDF
      viewer = (
        <>
          <h2> Book: {item.title} </h2>
          <BookViewer />
        </>
      );
      return viewer;
    default:
      return <h2>No type of resource match</h2>;
  }
};

export default Item;
