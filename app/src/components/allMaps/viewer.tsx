"use client";

import React, { useEffect } from "react";
import { Map } from "maplibre-gl";
import { WarpedMapLayer } from "@allmaps/maplibre";

const AllMapsViewer = () => {
  useEffect(() => {
    const map = new Map({
      container: "map",
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [-73.931016, 40.79532],
      zoom: 10.7,
      maxPitch: 0,
      preserveDrawingBuffer: true,
    });

    const annotationUrl =
      "https://annotations.allmaps.org/images/d180902cb93d5bf2";
    const warpedMapLayer = new WarpedMapLayer();
    map.on("load", () => {
      map.addLayer(warpedMapLayer);
      warpedMapLayer.addGeoreferenceAnnotationByUrl(annotationUrl);
    });
  }, []);
  return <div id="map" style={{ width: "800px", height: "700px" }} />;
};

export default allMapsViewer;
