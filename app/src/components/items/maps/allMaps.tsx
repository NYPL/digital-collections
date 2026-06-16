"use client";
import React, { useEffect, useRef } from "react";
import { Map, NavigationControl, FullscreenControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { WarpedMapLayer } from "@allmaps/maplibre";
import { generateId } from "@allmaps/id";
import { Heading, Text, Link } from "@nypl/design-system-react-components";
import { ItemModel } from "@/src/models/item";

console.log("AllMapsViewer component loaded");

interface ItemProps {
  item: ItemModel;
}

const AllMapsViewer = ({ item }: ItemProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: Map | undefined;
    let resizeObserver: ResizeObserver | undefined;

    const initializeMap = async () => {
      if (!mapContainer.current) return;

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

      map.addControl(new NavigationControl(), "top-right");
      map.addControl(new FullscreenControl(), "top-right");

      const captureWithMapData = item.captures.find(
        (capture) => capture.hasAllMapsData
      );
      const imageId = captureWithMapData?.imageId;
      console.log("using this imageId for the allmaps viewer: ", imageId);

      const iiifUrl = imageId
        ? `https://iiif.nypl.org/iiif/2/${imageId}`
        : null;

      // generateId is async and returns a Promise
      const hashedIiifImageId = await generateId(iiifUrl);
      const annotationUrl = `https://annotations.allmaps.org/images/${hashedIiifImageId}`;
      const warpedMapLayer = new WarpedMapLayer();

      map.on("load", async () => {
        if (!map) return;
        map.addLayer(warpedMapLayer);

        try {
          // Wait for the annotation to be loaded so we can get its bounds
          await warpedMapLayer.addGeoreferenceAnnotationByUrl(annotationUrl);
          const bounds = warpedMapLayer.getBounds();

          if (bounds) {
            map.fitBounds(bounds, {
              padding: 50, // Add some space around the map
              animate: true,
              duration: 1000,
            });
          }
        } catch (error) {
          console.error("Error loading AllMaps annotation:", error);
        }
      });

      resizeObserver = new ResizeObserver(() => {
        map?.resize();
      });
      resizeObserver.observe(mapContainer.current);
    };

    initializeMap();

    return () => {
      resizeObserver?.disconnect();
      map?.remove();
    };
  }, [item.uuid]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default AllMapsViewer;
