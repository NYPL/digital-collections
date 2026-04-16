"use client";
import React, { useEffect, useRef } from "react";
import { Map } from "maplibre-gl";
import { WarpedMapLayer } from "@allmaps/maplibre";
import { Heading, Text, Link } from "@nypl/design-system-react-components";
import { ItemModel } from "@/src/models/item";

interface ItemProps {
  item: ItemModel;
}

const AllMapsViewer = ({ item }: ItemProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: Map | undefined;
    let resizeObserver: ResizeObserver | undefined;

    if (mapContainer.current) {
      map = new Map({
        container: mapContainer.current,
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
        map?.addLayer(warpedMapLayer);
        warpedMapLayer.addGeoreferenceAnnotationByUrl(annotationUrl);
      });

      resizeObserver = new ResizeObserver(() => {
        map?.resize();
      });
      resizeObserver.observe(mapContainer.current);
    }
    return () => {
      resizeObserver?.disconnect();
      map?.remove();
    };
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />;
};

export default AllMapsViewer;
