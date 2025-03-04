"use client";
import React, { useEffect } from "react";
import { Map } from "maplibre-gl";
import { WarpedMapLayer } from "@allmaps/maplibre";
import mapsByDecadeData from "../../data/maps/maps-by-decade.all";

const MapViewer = () => {
  useEffect(() => {
    const map = new Map({
      container: "map",
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [-73.931016, 40.79532],
      zoom: 10.7,
      maxPitch: 0,
      preserveDrawingBuffer: true,
    });

    const geoJSON = mapsByDecadeData;

    map.on("load", () => {
      const warpedMapLayer = new WarpedMapLayer();
      map.addLayer(warpedMapLayer);
      geoJSON.features.map((mapObj) => {
        const allMapsAnnotationUrl = `https://annotations.allmaps.org/?url=https://iiif.nypl.org/iiif/2/${mapObj.properties.imageId}/info.json`;
        warpedMapLayer.addGeoreferenceAnnotationByUrl(allMapsAnnotationUrl);
      });
    });
  }, []);

  return <div id="map" style={{ width: "700px", height: "700px" }} />;
};

export default MapViewer;
