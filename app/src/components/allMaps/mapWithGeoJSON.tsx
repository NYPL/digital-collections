"use client";
import React, { useEffect } from "react";
import { Map } from "maplibre-gl";
import { WarpedMapLayer } from "@allmaps/maplibre";
import mapsByDecadeData from "../../data/maps/maps-by-decade.all";

const MapViewerWithGeoJSON = ({ slug, data }) => {
  useEffect(() => {
    const map = new Map({
      container: "map",
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [-73.931016, 40.79532],
      zoom: 10.7,
      maxPitch: 0,
      canvasContextAttributes: {
        preserveDrawingBuffer: true,
      },
    });

    const geoJSON = mapsByDecadeData;
    // const data = geoJSON.features[0]
    // const iiif_url = `https://iiif.nypl.org/iiif/2/${data.properties.imageId}/info.json`;
    // const annotationUrl = `https://annotations.allmaps.org/?url=${iiif_url}`;
    const annotationUrl = `https://annotations.allmaps.org/?url=${data.iiif_url}`;
    // "https://annotations.allmaps.org/images/d180902cb93d5bf2";
    const warpedMapLayer = new WarpedMapLayer();

    map.on("load", () => {
      map.addSource(slug, data);
      // map.addLayer(warpedMapLayer);
      // warpedMapLayer.addGeoreferenceAnnotationByUrl(annotationUrl);
      map.addLayer({
        id: `${slug}-boundary`,
        type: "fill",
        source: slug,
        paint: {
          "fill-color": "#888888",
          "fill-opacity": 0.4,
        },
        filter: ["==", "$type", "Polygon"],
      });
    });
  }, []);

  return <div id="map" style={{ width: "700px", height: "700px" }} />;
};

export default MapViewerWithGeoJSON;
