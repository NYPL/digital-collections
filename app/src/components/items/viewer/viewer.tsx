"use client";

import { ItemModel } from "../../../models/item";
import React from "react";
import UniversalViewer from "../uv/universalViewer";
import uvConfig from "../uv/uvConfig.json";
import "universalviewer/dist/esm/index.css";
import { PlyrPlayer } from "../plyr/dynamic";
import AllMapsViewer from "../maps/allMaps";
import { useCanvasContext } from "../../../context/CanvasProvider";
import { Grid, GridItem } from "@nypl/design-system-react-components";

interface ItemProps {
  item: ItemModel;
}

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
