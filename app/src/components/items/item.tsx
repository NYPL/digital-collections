"use client";

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
  type: string;
}

const contenTypes = {
  "still image": "image",
  "moving image": "video",
  "sound recording": "audio",
  text: "book",
};

const Item = ({ item, type }: ItemProps) => {
  console.log("uuid is: ", item.uuid);
  let viewer;

  const itemType = type ? type : contenTypes[item.typeOfResource]; // for proof of concept only

  switch (itemType) {
    case "image":
      if (item.isSingleCapture) {
        viewer = (
          <>
            <h2> Image: {item.title} </h2>
            <UniversalViewer
              manifestId={"https://wellcomelibrary.org/iiif/b18035723/manifest"} //{`https://be73-100-37-199-113.ngrok-free.app//items/${item.uuid}`} //a9c43f00-c600-012f-59c3-58d385a7bc34//{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
              canvasIndex={0}
              config={{}}
            />
            <CloverImageViewer uuid={item.uuid} />
            {/* openseadragon viewer */}
            {/* <ImageViewer imageID={item.capture.imageID.$} />  */}
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
            <CloverImageViewer uuid={item.uuid} />
          </>
        );
      }
      return viewer;
    case "video":
      viewer = (
        <>
          <h2> Video: {item.title} </h2>
          <UniversalViewer
            manifestId={
              "https://iiif.io/api/cookbook/recipe/0003-mvm-video/manifest.json"
            } //{`https://be73-100-37-199-113.ngrok-free.app/items/${item.uuid}`} //{"https://wellcomelibrary.org/iiif/b18035723/manifest"}
            canvasIndex={0}
            config={{}}
          />
          <VideoViewer />
        </>
      );
      return viewer;
    case "audio":
      viewer = (
        <>
          <h2> Audio: {item.title} </h2>
          <UniversalViewer
            manifestId={
              "https://iiif.io/api/cookbook/recipe/0002-mvm-audio/manifest.json"
            }
            canvasIndex={0}
            config={{}}
          />
          <AudioViewer />
        </>
      );
      return viewer;
    case "book":
      //also PDF
      viewer = (
        <>
          <h2> Book: {item.title} </h2>
          <UniversalViewer
            manifestId={
              "https://iiif.io/api/cookbook/recipe/0011-book-3-behavior/manifest-continuous.json"
            }
            canvasIndex={0}
            config={{}}
          />
          <BookViewer />
        </>
      );
      return viewer;
    default:
      return <h2>No type of resource match</h2>;
  }
};

export default Item;
