"use client";

import { ItemModel } from "../../../models/item";
import React from "react";
import UniversalViewer from "../uv/universalViewer";
import "universalviewer/dist/esm/index.css";
import { PlyrPlayer } from "../plyr/dynamic";
import AllMapsViewer from "../maps/allMaps";
import { useCanvasContext } from "../../../context/CanvasProvider";
import { Grid, GridItem } from "@nypl/design-system-react-components";

interface ItemProps {
  item: ItemModel;
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

const ItemMediaViewer = ({ item }: ItemProps) => {
  let viewer;
  let contentType = item.contentType;
  const captureUuidToIdx = Object.fromEntries(
    item.captures.map((capture) => [capture.uuid, capture.orderInSequence - 1])
  );
  const { isMapView } = useCanvasContext();

  if (item.isImage) {
    viewer = (
      <>
        <Grid
          height="700px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(8, 1fr)"
          gap="grid.default"
        >
          {item.isInAllMaps && isMapView ? (
            <>
              <GridItem rowSpan={2} colSpan={4}>
                <UniversalViewer
                  manifestId={item.manifestURL}
                  captureUuidToIdx={captureUuidToIdx}
                  config={uvConfig}
                />
              </GridItem>
              <GridItem rowSpan={2} colSpan={4}>
                <AllMapsViewer item={item} />
              </GridItem>
            </>
          ) : (
            <>
              <GridItem rowSpan={2} colSpan={8}>
                <UniversalViewer
                  manifestId={item.manifestURL}
                  captureUuidToIdx={captureUuidToIdx}
                  config={uvConfig}
                />
              </GridItem>
            </>
          )}
        </Grid>
      </>
    );
  } else {
    viewer = (
      <>
        <PlyrPlayer
          title={item.title}
          sources={item.mediaFiles}
          captions={item.captions}
          type={item.contentType}
        />
      </>
    );
  }

  return viewer;
};

export default ItemMediaViewer;
