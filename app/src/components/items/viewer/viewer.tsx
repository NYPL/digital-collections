"use client";

import { ItemModel } from "../../../models/item";
import React from "react";
import { UniversalViewer } from "../uv/universalViewerLazy";
import "universalviewer/dist/esm/index.css";
// import ReactPlayer from 'react-player'
import ReactPlayer from "../react/player";

interface ItemProps {
  item: ItemModel;
  canvasIndex: number;
}

const uvConfig = {
  options: {
    footerPanelEnabled: true,
    clickToZoomEnabled: false,
  },
  modules: {
    headerPanel: {
      options: {
        centerOptionsEnabled: true,
        localeToggleEnabled: false,
        settingsButtonEnabled: true,
      },
    },
    openSeadragonCenterPanel: {
      options: {
        animationTime: 0.15,
        autoHideControls: true,
        requiredStatementEnabled: true,
        blendTime: 0,
        constrainDuringPan: false,
        controlsFadeAfterInactive: 10000,
        controlsFadeDelay: 20000,
        controlsFadeLength: 20000,
        defaultZoomLevel: 0,
        immediateRender: false,
        maxZoomPixelRatio: 1.25,
        navigatorPosition: "BOTTOM_RIGHT",
        pageGap: 50,
        showHomeControl: true,
        trimAttributionCount: 150,
        visibilityRatio: 0.5,
      },
      content: {
        attribution: "Attribution",
        goHome: "Go Home",
        imageUnavailable: "Image Unavailable",
        next: "Next",
        previous: "Previous",
        rotateRight: "Rotate Right",
        zoomIn: "Zoom In",
        zoomOut: "Zoom Out",
      },
    },
  },
};

const ItemMediaViewer = ({ item, canvasIndex }: ItemProps) => {
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
          canvasIndex={canvasIndex || 0}
          captureUuidToIdx={captureUuidToIdx}
          config={uvConfig}
          onChangeCanvas={(manifest, canvas) => {
            // why is this not printing in the console
            console.log("canvas index changed", manifest, canvas);
          }}
          onChangeManifest={(manifest) => {
            console.log("manfest changed", manifest);
          }}
        />
      </>
    );
  } else {
    viewer = (
      <>
        {/* TODO: multi-capture support. I only built support to view the first file since AV is typically only one file. there are Items with multiple audio files */}
        <ReactPlayer src={item.mediaFiles[0]} type={item.contentType} />
      </>
    );
  }

  return viewer;
};

export default ItemMediaViewer;
