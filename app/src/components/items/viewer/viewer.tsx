"use client";

import { ItemModel } from "../../../models/item";
import React from "react";
import { UniversalViewer } from "../uv/universalViewerLazy";
import "universalviewer/dist/esm/index.css";

interface ItemProps {
  item: ItemModel;
  canvasIndex: number;
}

const uvConfig = {
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
  viewer = (
    <>
      <UniversalViewer
        manifestId={item.manifestURL}
        canvasIndex={canvasIndex || 0}
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
  return viewer;
};

export default ItemMediaViewer;
