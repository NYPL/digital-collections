"use client";

import React, { useEffect } from "react";
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

const AllMapsViewer = ({ data, item, uuid }) => {
  const itemModel = new ItemModel(item, uuid);
  useEffect(() => {
    const map = new Map({
      container: "map",
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [-73.931016, 40.79532],
      zoom: 10.7,
      maxPitch: 0,
      preserveDrawingBuffer: true,
    });

    const annotationUrl = `https://annotations.allmaps.org/?url=${data.iiif_url}`;
    // "https://annotations.allmaps.org/images/d180902cb93d5bf2";
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
        <GridItem rowSpan={2} colSpan={5}>
          <div id="map" style={{ width: "700px", height: "700px" }} />
        </GridItem>
        <GridItem colSpan={3}>
          <Heading size="heading6" marginBottom="xs">
            Title
          </Heading>
          <Link href={`/items/${itemModel.uuid}`} marginBottom="xs">
            {itemModel.title}
          </Link>
          <Heading size="heading6" marginBottom="xs">
            UUID
          </Heading>
          <Link marginBottom="sm" href={`/items/${itemModel.uuid}`}>
            {itemModel.uuid}
          </Link>
          <Heading size="heading6" marginBottom="xs">
            Type of Resource
          </Heading>
          <Text> {itemModel.typeOfResource} </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default AllMapsViewer;
