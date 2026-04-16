"use client";
import React, { useEffect } from "react";
// import { Map } from "mapbox-gl"
import { Map } from "maplibre-gl";
import { WarpedMapLayer } from "@allmaps/maplibre";
import {
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
} from "@nypl/design-system-react-components";
import { ItemModel } from "@/src/models/item";

interface ItemProps {
  item: ItemModel;
}

const AllMapsViewer = ({ item }: ItemProps) => {
  useEffect(() => {
    const map = new Map({
      container: "map",
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [-73.931016, 40.79532],
      zoom: 10.7,
      maxPitch: 0,
      attributionControl: false,
      canvasContextAttributes: {
        preserveDrawingBuffer: true,
      },
    });
    console.log("item image ID in all maps viewer", item.imageIDs[0]);
    const iiif_url = `https://iiif.nypl.org/iiif/2/${item.imageIDs[0]}/info.json`;
    const annotationUrl = `https://annotations.allmaps.org/?url=${iiif_url}`;
    const warpedMapLayer = new WarpedMapLayer();
    map.on("load", () => {
      map.addLayer(warpedMapLayer);
      warpedMapLayer.addGeoreferenceAnnotationByUrl(annotationUrl);
    });
  }, []);

  return (
    <>
      {/* <Box> */}
      <Grid
        height="700px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap="grid.default"
      >
        <GridItem rowSpan={2} colSpan={5} marginBottom={"m"}>
          <div id="map" style={{ width: "700px", height: "700px" }} />
        </GridItem>
      </Grid>
    </>
  );
};

export default AllMapsViewer;
