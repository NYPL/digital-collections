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
              // manifestId={"https://api.dc.library.northwestern.edu/api/v2/collections/c373ecd2-2c45-45f2-9f9e-52dc244870bd?as=iiif"} //{`https://be73-100-37-199-113.ngrok-free.app//items/a9c43f00-c600-012f-59c3-58d385a7bc34`}//
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
            config={{
              avCenterPanel: {
                options: {
                  /** Determines if the poster image is expanded */
                  posterImageExpanded: true,
                  /** Determines if media errors are hidden */
                  hideMediaError: true,
                  /** Determines if parent is included in title */
                  includeParentInTitleEnabled: true,
                  /** Field for subtitle metadata */
                  subtitleMetadataField: true,
                  /** Determines if auto play is enabled */
                  autoPlay: true,
                  /** Determines if fast forward is enabled */
                  enableFastForward: true,
                  /** Determines if fast rewind is enabled */
                  enableFastRewind: true,
                  /** Ratio of the poster image */
                  posterImageRatio: true,
                  /** Determines if limit is set to range */
                  limitToRange: true,
                  /** Determines if ranges auto advance */
                  autoAdvanceRanges: true,
                },
              },
            }}
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
